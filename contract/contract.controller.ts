import { Controller, Get } from '@nestjs/common';
import { ContractService } from './contract.service';

@Controller('contract')
export class ContractController {
    constructor(private readonly contractService: ContractService) {}

    @Get('value')
    async getDecimalValue() {
        const value = await this.contractService.getDecimalValue();
        return { decimalValue: value };
    }
}