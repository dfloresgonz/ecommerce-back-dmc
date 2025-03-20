import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import {
  ApiOperation,
  ApiParam,
  ApiBody,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Products api controller')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @ApiOperation({ summary: 'Crea productos' })
  @ApiResponse({
    status: 200,
    description: 'Producto nuevo',
    type: [CreateProductDto],
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    console.log('creating product...');
    return this.productsService.create(createProductDto);
  }

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }

  @Delete('sales/:id')
  deleteProductIfNoSales() {
    return 1;
  }
}
