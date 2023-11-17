import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OpenaiService {

private apiUrl = 'https://api.openai.com/v1/assistant';
  private apiKey = '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'; // Replace with your actual API key

  constructor(private http: HttpClient) {}

  getOpenaiData(data: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`,
    });

    return this.http.post<any>(this.apiUrl, data, { headers });
  }
}
