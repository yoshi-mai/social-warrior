import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

var credentials = require('../../../assets/credentials.json');

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  ngOnInit() {
    console.log('Map is working!');
  }

  apiLoaded: Observable<boolean>;

  constructor(httpClient: HttpClient) {
    this.apiLoaded = httpClient.jsonp(credentials.apikey, 'callback')
        .pipe(
          map(() => true),
          catchError(() => of(false)),
        );
  }
}
