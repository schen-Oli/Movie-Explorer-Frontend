import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PosterCard } from '../interface/poster-card';
import { URLs } from './url';

@Injectable({
  providedIn: 'root'
})
export class GetMediaDataService {

  constructor(private httpClient: HttpClient) { }

  getMediaData(mediaType:String , operationType:String){
    let url = URLs.baseUrl + "/media/" + mediaType + "/" + operationType;
    return this.httpClient.get<PosterCard[]>(url);
  }
}
