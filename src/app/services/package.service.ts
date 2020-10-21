import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@Angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Package } from '../model/package-model';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PackageService {

  private REST_API_SERVER = "http://localhost:3000/package";

  constructor(private httpClient: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  public sendGetRequest( i:number ) : Observable<Package>{
    return this.httpClient.get<Package>(this.REST_API_SERVER + '/get/' + i).pipe(
      catchError(this.errorHandler)
    );
  }

  public sendDeleteRequest( i:number ) : Observable<Package>{
    return this.httpClient.delete<Package>(this.REST_API_SERVER + '/delete/' + i).pipe(
      catchError(this.errorHandler)
    );
  }

  public sendPostRequest( pack:Package ) : Observable<Package>{
    return this.httpClient.post<Package>(this.REST_API_SERVER + '/new', JSON.stringify(pack), this.httpOptions).pipe(
      catchError(this.errorHandler)
    );
  }

  public sendUpdateRequest( i:number, pack:Package ) : Observable<Package>{
    return this.httpClient.post<Package>(this.REST_API_SERVER + '/update/' + i, JSON.stringify(pack), this.httpOptions).pipe(
      catchError(this.errorHandler)
    );
  }

  public sendGetAllRequest( ) : Observable<Package>{
    return this.httpClient.get<Package>(this.REST_API_SERVER + '/getall/').pipe(
      catchError(this.errorHandler)
    );
  }


  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }


}
