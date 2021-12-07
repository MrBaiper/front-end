import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FromService {

  constructor(private readonly http: HttpClient) { }

  savePerson(Name: any, fecha:Date): Observable<any> {
    const endpoint = 'http://localhost:3000/save'
    const data: any = {
      nombre: Name,
      fecha: fecha
    };
    return this.http.post<any>(endpoint, data)
      .pipe(
        map(response => {
          return response;
        }), catchError(() => {
          return throwError({
            status: '0-001',
            statusText: 'Save Person Error'
          })
        }));
  }

  getPerson(): Observable<any> {
    const endpoint = 'http://localhost:3000'

    return this.http.get<any>(endpoint)
      .pipe(
        map(response => {
          return response;
        }), catchError(() => {
          return throwError({
            status: '0-002',
            statusText: 'Get Person error'
          })
        }));
  }
  
}
