import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ProductsModule } from './products/products.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  const productsConfig = new DocumentBuilder()
    .setTitle('Products API')
    .setDescription('API for managing products')
    .setVersion('1.0')
    .addTag('products')
    .build();

  const productsDocument = SwaggerModule.createDocument(app, productsConfig, {
    include: [ProductsModule],
  });

  SwaggerModule.setup('apidocs/products', app, productsDocument);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
