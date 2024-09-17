import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as compression from 'compression';

/**
 * The bootstrap function is an asynchronous function that initializes and starts the application.
 */
async function bootstrap() {
  // Create an instance of the Nest application using the specified AppModule.
  const app = await NestFactory.create(AppModule);

  // Apply global compression middleware
  app.use(
    compression({
      level: 6, // Compression level (0-9)
      filter: (req) => req.headers['accept-encoding']?.includes('gzip'), // Only compress certain content types or based on other criteria
      threshold: 1024 // Compress responses larger than 1KB
    })
  );

  // Setup swagger for API documentation and configuration
  const config = new DocumentBuilder()
    // Set the title of the API documentation
    .setTitle('The Mintegs API description - BackEnd')
    // Provide a short description for the API
    .setDescription('Use the base API URL at http://localhost:3002')
    // Define the terms of service for the API
    .setTermsOfService('Connect with email: mohamadresaaa@gmail.com')
    // Specify the license information, including the type and a link
    .setLicense('MIT License', 'https://mit-license.org/')
    // Add the server URL where the API is hosted
    .addServer('http://localhost:3002')
    // Set the version of the API
    .setVersion('1.0')
    // Add a tag for grouping API endpoints in the documentation
    .addTag('api')
    // Build the documentation configuration
    .build();

  // Create a Swagger document based on the app instance and the configuration
  const document = SwaggerModule.createDocument(app, config);
  // Set up the Swagger module with the specified path ('api') and the created document
  SwaggerModule.setup('api', app, document);

  // Start listening for incoming requests on port 3002
  await app.listen(3002);
}

// Call the bootstrap function to initialize the application
bootstrap();
