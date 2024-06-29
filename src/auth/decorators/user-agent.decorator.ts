import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Device } from 'common/interfaces/device.interface';

export const UserAgent = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): Device => {
    const request = ctx.switchToHttp().getRequest();

    const userAgent = request.headers['user-agent'];

    // Set default
    let device: Device = {
      name: 'unknown'
    };

    if (userAgent) {
      if (/like Mac OS X/.test(userAgent)) {
        device = {
          name: 'iOS',
          version: /CPU( iPhone)? OS ([0-9\._]+) like Mac OS X/
            .exec(userAgent)?.[2]
            .replace(/_/g, '.')
        };
      } else if (/Android/.test(userAgent)) {
        device = {
          name: 'Android',
          version: /Android ([0-9\.]+)[\);]/.exec(userAgent)?.[1]
        };
      } else if (/(Intel|PPC) Mac OS X/.test(userAgent)) {
        device = {
          name: 'macOS',
          version: /(Intel|PPC) Mac OS X ?([0-9\._]*)[\)\;]/
            .exec(userAgent)?.[2]
            .replace(/_/g, '.')
        };
      } else if (/Windows NT/.test(userAgent)) {
        device = {
          name: 'Windows',
          version: /Windows NT ([0-9\._]+)[\);]/.exec(userAgent)?.[1]
        };
      } else if (/Linux/i.test(userAgent) && /X11/i.test(userAgent)) {
        device = {
          name: 'Linux'
        };
      }
    }

    return device;
  }
);
