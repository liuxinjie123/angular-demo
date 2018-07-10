import { Injectable } from '@angular/core';
import { AppConfig } from "../../config/app.config";
import { Observable, of, throwError as observableThrowError} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IndexService {
  private initDataUrl: string;

  constructor(private http: HttpClient) {
    this.initDataUrl = AppConfig.index.initData;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getIndexDataById(id: string): Observable<String> {
    console.log(' ---------------------------------------------');
    const url = `${this.initDataUrl}/${id}`;
    console.log(' ------------------------------ ');
    return this.http.get<string>(url).pipe(
      tap(() => console.log(`fetched test id=${id}`)),
      catchError(this.handleError<String>(`test id=${id}`))
    );
  }

}
