import {Observable, throwError} from 'rxjs';
import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, map} from "rxjs/operators";
import {environment} from "../../environments/environment";

const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'X-Skip-XSRF-TOKEN': 'true',
});

@Injectable({
    providedIn: 'root',
})

export class ContactApiService {
    Url = environment.contactAPI;

    constructor(public http: HttpClient) {}

    /*========================================
      CRUD Methods for consuming RESTful API
    =========================================*/
    postContact(body: any): Observable<any> {
      return this.http.post<any>(this.Url + '/contact', body, { headers }).pipe(
        catchError(this.handleError)
      );
    }

    postNewsletter(email: any): Observable<any> {
      return this.http.post<any>(this.Url + '/newsletter', `{"email":"` + email + '"}"', { headers }).pipe(
        catchError(this.handleError)
      );
    }

    /*========================================
      HELPERS
    =========================================*/
    private handleError (error: HttpErrorResponse) {
        // In a real world app, we might send the error to remote logging infrastructure
        // and reformat for user consumption
        console.error(error); // log to console instead
        return throwError(error);
    }
}
