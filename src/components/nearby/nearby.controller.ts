import { Controller, Get, Query, Param, UseGuards } from '@nestjs/common';
import { NearbyService } from './nearby.service';
import { AuthGuard } from '@nestjs/passport';

// @UseGuards(AuthGuard())
@Controller('places')
export class NearbyController {
    constructor(private readonly nearbyService:NearbyService ){}

    @Get('/nearby')
    async getNearPlaces(@Query() query):Promise<any>{
        return await this.nearbyService.findNearbyPlaces(query);
    }
    @Get('photo/:pr')
    async getPhotoPlace(@Param ('pr') pr): Promise<any> {
        return await this.nearbyService.findPlacePhoto(pr);
    }
    @Get('/search/:pi')
    async getPlaceDetail(@Param ('pi') pi):Promise<any>{
       return await this.nearbyService.getGooglePlaceDetail(pi)
    }
}
