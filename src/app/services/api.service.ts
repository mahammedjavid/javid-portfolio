import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private limit = 1
  private apiKey = 'LBe9kbygipMe1P7gx3DrJFrohyI1bMfA3DP4F77z';
  private apiUrl = `https://quizapi.io/api/v1/questions?apiKey=${this.apiKey}&limit=${this.limit}`;

  constructor(private http: HttpClient) {}
  getQuestion(category:any) {
    if(category){
      this.apiUrl = this.apiUrl+`&category=${category}`
    }
    return this.http.get<any>(this.apiUrl);
  }
}
