import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Setup swagger and configuration
  const config = new DocumentBuilder()
    .setTitle('The Mintegs API description - BackEnd')
    .setDescription('Use the base API URL at http://localhost:3002')
    .setTermsOfService('Connect with email: mohamadresaaa@gmail.com')
    .setLicense('MIT License', 'https://mit-license.org/')
    .addServer('http://localhost:3002')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3002);
}
bootstrap();
