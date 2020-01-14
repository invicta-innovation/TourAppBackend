import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { NearplaceDto } from './nearplace.dto';
@Injectable()
export class NearbyService {
    async findNearbyPlaces(obj):Promise<NearplaceDto[]>{
        let placeDtoList=[];
        let result=await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${obj.lat},${obj.lng}&radius=${obj.radius}&type=${obj.type}&key=AIzaSyDUqBfawG19eYuhCDntWQKosKy_Xxvlnzk`)
       const results =result.data
      await await results.results.map(place=>{
          const placeDto={
                location:place.geometry.location,
                placeName:place.name,
                photoReference:place.photos[0].photo_reference,
                type:place.types
            }
            placeDtoList.push(placeDto);
         });
         return placeDtoList;
    }
}
