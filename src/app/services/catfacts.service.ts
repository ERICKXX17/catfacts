import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatsService {
  private apiUrl = 'https://catfact.ninja/fact'; // API correcta

  constructor(private http: HttpClient) { }

  getPosts(): Observable<{ fact: string; length: number }> {
    return this.http.get<{ fact: string; length: number }>(this.apiUrl);
  }
}
