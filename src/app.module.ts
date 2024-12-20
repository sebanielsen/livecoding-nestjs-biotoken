import { Module } from '@nestjs/common';
import { PriceModule } from '../price/price.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContractModule } from 'contract/contract.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [PriceModule, ContractModule,ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}