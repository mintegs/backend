import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Device } from 'core/common/interfaces/device.interface';

/**
 * This decorator extracts and parses the 'User-Agent' header from the HTTP request,
 * allowing the identification of the client's device type and version.
 * It is created using NestJS's createParamDecorator function.
 */
export const UserAgent = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): Device => {
    // Retrieve the HTTP request object from the execution context
    const request = ctx.switchToHttp().getRequest();

    // Obtain the 'User-Agent' header from the request headers
    const userAgent = request.headers['user-agent'];

    // Initialize the device object with a default name of 'unknown'
    let device: Device = {
      name: 'unknown'
    };

    // If a User-Agent string is present, start pattern matching to identify the device
    if (userAgent) {
      // Check if the User-Agent indicates an iOS device
      if (/like Mac OS X/.test(userAgent)) {
        device = {
          name: 'iOS',
          // Extract the version number using a regex pattern and replace underscores with dots
          version: /CPU( iPhone)? OS ([0-9\._]+) like Mac OS X/
            .exec(userAgent)?.[2]
            .replace(/_/g, '.')
        };
        // Check if the User-Agent indicates an Android device
      } else if (/Android/.test(userAgent)) {
        device = {
          name: 'Android',
          // Extract the version number of Android from the User-Agent string
          version: /Android ([0-9\.]+)[\);]/.exec(userAgent)?.[1]
        };
        // Check if the User-Agent indicates a macOS device
      } else if (/(Intel|PPC) Mac OS X/.test(userAgent)) {
        device = {
          name: 'macOS',
          // Extract the version number of macOS from the User-Agent string, replacing underscores with dots
          version: /(Intel|PPC) Mac OS X ?([0-9\._]*)[\)\;]/
            .exec(userAgent)?.[2]
            .replace(/_/g, '.')
        };
        // Check if the User-Agent indicates a Windows device
      } else if (/Windows NT/.test(userAgent)) {
        device = {
          name: 'Windows',
          // Extract the version number of Windows from the User-Agent string
          version: /Windows NT ([0-9\._]+)[\);]/.exec(userAgent)?.[1]
        };
        // Check if the User-Agent indicates a Linux operating system
      } else if (/Linux/i.test(userAgent) && /X11/i.test(userAgent)) {
        device = {
          name: 'Linux'
          // Version detection can be added here if needed
        };
      }
    }

    // Return the parsed device information
    return device;
  }
);
