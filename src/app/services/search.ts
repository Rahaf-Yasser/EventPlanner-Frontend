
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  apiUrl = "http://localhost:3000/search";

  constructor(private http: HttpClient) {}

  search(params: any) {
    return this.http.get(this.apiUrl, {
      params,
      withCredentials: true
    });
  }
}
