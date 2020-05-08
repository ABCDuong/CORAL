import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EntriesService {
  baseUrl = 'https://us-central1-coral-e2534.cloudfunctions.net/webApi/api/v2';

  constructor(private http: HttpClient) { }

  getEntries() {
    const url = `${this.baseUrl}/entries`;
    return this.http.get(url).pipe(map((data) => {
      return data;
    }));
  }

  setEntry(entry?: any) {
    const url = `${this.baseUrl}/entries`;
    const body = {
      id: 'testSetEntryId002yyy',
      isAList: false,
      entryTitle: 'Meals',
      correlations: [
        'Activities completed in dayyyy',
        'How I feel throughout the day'
      ]
    };

    return this.http.post(url, body).pipe(map((data) => {
      return JSON.stringify(data);
    }));
  }
}
