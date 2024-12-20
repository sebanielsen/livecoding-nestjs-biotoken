import { Controller, Get } from '@nestjs/common';
import { PriceService } from './price.service';

@Controller('price')
export class PriceController {
    constructor(private readonly priceService: PriceService) {}

    @Get('matic')
    async getMaticPrice() {
        const price = await this.priceService.getMaticPrice();
        return price;
    }
}