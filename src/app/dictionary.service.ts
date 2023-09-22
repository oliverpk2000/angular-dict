import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {Definition, Information, Information} from "../objects/information";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  baseUrl: string = "https://api.dictionaryapi.dev/api/v2/entries/en/"

  constructor(private httpClient: HttpClient) { }

  getWordInformation(word:string): Observable<Information[]>{
    return this.httpClient.get<Information[]>(this.baseUrl + word);
  }

}
