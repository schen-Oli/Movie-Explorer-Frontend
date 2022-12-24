import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URLs } from './url';

@Injectable({
  providedIn: 'root'
})
export class GetCastService {
  constructor(private httpClient: HttpClient) { }
  

  getCast(mediaType:String , id:any){
    let url = URLs.baseUrl + "/cast/" + mediaType + "/" + id;
    return this.httpClient.get<any>(url);
  }
}
