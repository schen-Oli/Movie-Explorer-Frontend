import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URLs } from './url';

@Injectable({
  providedIn: 'root'
})
export class GetDetailService {

  constructor(private httpClient: HttpClient) { }
  
  getMediaData(mediaType:String , id:any){
    let url = URLs.baseUrl + "/detail/" + mediaType + "/" + id;
    return this.httpClient.get<any>(url);
  }

  getYoutube(mediaType:String , id:any){
    let url = URLs.baseUrl + "/video/" + mediaType + "/" + id;
    return this.httpClient.get<any>(url);
  }

}
