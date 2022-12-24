import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrentPlay } from '../interface/current-play'
import { URLs } from './url';
@Injectable({
  providedIn: 'root'
})
export class SlidePicsService {

  constructor(private httpClient: HttpClient) { }
  
  getAllSlides(){
    let url = URLs.baseUrl + "/playing";
    return this.httpClient.get<CurrentPlay[]>(url);
  }
}
 