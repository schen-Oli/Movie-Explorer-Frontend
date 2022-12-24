import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URLs } from './url';

@Injectable({
  providedIn: 'root'
})
export class GetCastDetailService {
  constructor(private httpClient: HttpClient) { }

  getCastDetail(id:any){
    let url = URLs.baseUrl + "/person/" + id;
    return this.httpClient.get<any>(url);
  }
}
