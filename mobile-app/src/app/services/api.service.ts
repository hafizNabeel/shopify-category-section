import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface ProcessResponse {
  url: string;
}

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private http: HttpClient) {}

  processPhoto(endpoint: string, payload: FormData): Observable<ProcessResponse> {
    return this.http.post<ProcessResponse>(`${environment.apiBaseUrl}${endpoint}/`, payload);
  }
}
