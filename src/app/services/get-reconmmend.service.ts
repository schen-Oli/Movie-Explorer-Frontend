import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { URLs } from './url';
@Injectable({
  providedIn: 'root'
})
export class GetReconmmendService {

  constructor(private httpClient:HttpClient) { }

  getRec(type:string, id:number){
    let url = URLs.baseUrl +  "/recommendation/" + type + "/" + id;
    return this.httpClient.get<any>(url);
  }

  getSim(type:string, id:number){
    let url = URLs.baseUrl + "/similar/" + type + "/" + id;
    return this.httpClient.get<any>(url);
  }
}
