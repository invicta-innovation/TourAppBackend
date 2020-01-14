import { Controller, Get, Query } from '@nestjs/common';
import { NearbyService } from './nearby.service';

@Controller('nearby')
export class NearbyController {
    constructor(private readonly nearbyService:NearbyService ){}

    @Get('/')
    async getNearPlaces(@Query() query):Promise<any>{
        return this.nearbyService.findNearbyPlaces(query);
    }
}
