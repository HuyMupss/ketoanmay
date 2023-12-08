import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const corsOptions: CorsOptions = {
    origin: '*', // Allow requests from all origins, replace with specific origin in production
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Specify allowed methods
    allowedHeaders: 'Content-Type,Authorization', // Specify allowed headers
  };

  // Enable CORS with the defined options
  app.enableCors(corsOptions);
  await app.listen(3001);
  
}
bootstrap();
