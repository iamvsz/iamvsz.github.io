import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { LongUrl } from '../models/long-url.model';

@Injectable({
  providedIn: 'root'
})
export class BitlyService {

  constructor(private http: HttpClient) { }
  
  shortenUrl(long_url: LongUrl): Observable<{ link: string, long_url: string}> {
    const body = JSON.stringify(long_url);
    return this.http.post<{ link: string, long_url: string}>(`${environment.api}/v4/shorten`,  body, {
      headers: {
        Authorization: `Bearer ${environment.token}`,
        "Content-type": "application/json"
      }
    })
  }
}
