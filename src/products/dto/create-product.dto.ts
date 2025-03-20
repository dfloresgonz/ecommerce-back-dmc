import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({
    description: 'Nombre del producto',
    type: String,
    minLength: 3,
    example: 'Cocina',
  })
  nameProduct: string;
  @ApiProperty({
    description: 'Descripcion del producto',
    type: String,
    example: 'La cocina mas grande y moderna',
    maxLength: 100,
  })
  description: string;
  @ApiProperty({
    description: 'Precio del producto',
    type: Number,
    example: 1000.34,
    minimum: 0.1,
  })
  price: number;
}
