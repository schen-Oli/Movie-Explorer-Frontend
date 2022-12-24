import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { URLs } from './url';
@Injectable({
  providedIn: 'root'
})
export class SearchMultiService {

  constructor(private httpClient: HttpClient) { }

  getSearchRes(multiTitle:string){
    let url = URLs.baseUrl + "/search/" + multiTitle;
    return this.httpClient.get<any>(url);
  }
}
