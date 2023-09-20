import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  baseUrl: string = "https://api.dictionaryapi.dev/api/v2/entries/en/"

  constructor(httpClient: HttpClient) { }


}
