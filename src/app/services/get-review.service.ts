import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URLs } from './url';
@Injectable({
  providedIn: 'root'
})
export class GetReviewService {

  constructor(private httpClient: HttpClient) { }

  getReview(type:string, id:number){
    let url = URLs.baseUrl + "/review/" + type + "/" + id;
    return this.httpClient.get<any>(url);
  }
}