import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class PriceService {
    async getMaticPrice(): Promise<any> {
        const response = await axios.get('https://api.coingecko.com/api/v3/simple/price', {
            params: {
                ids: 'matic-network',
                vs_currencies: 'usd',
            },
        });
        return response.data;
    }
}