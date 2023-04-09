import { Injectable } from '@angular/core';
import { NewsPreview } from '../models/NewsPreview';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HeadlineStroyServiceService {

  headlineStories!: NewsPreview[];
  apiUrl: string = 'http://localhost:8080/api/home/hlstories';

  constructor(private http: HttpClient) { }

  fetchHeadlineStories(): Observable<NewsPreview[]>{
    return this.http.get<NewsPreview[]>(this.apiUrl)
      .pipe(catchError(this.handleError))
  }

  private handleError(error: HttpErrorResponse){
    if(error.status === 0){
      console.error('An error occurred', error.error);
    }else{
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    }

    return throwError(() => new Error('Something bad happened; please try again later.'))
  }
}
