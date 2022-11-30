import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';

import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogConfig} from '@angular/material/dialog';

import { DialogComponent } from '../dialog/dialog.component';


var credentials = require('../../../assets/credentials.json');

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;

  ngOnInit() {
    console.log('Map is working!');
  }

  center = {
    lat: 52.521992, lng: 13.413244
  }

  markers: any[] = [];
  markerPositions: google.maps.LatLngLiteral[] = [];

  /* contentString = 
  '<form>' +
  '<mat-form-field>' +
  '<mat-label> Beschreibung </mat-label>' +
  '<input matInput>' +
  '</mat-form-field>' + 
  '</form>'; */

  apiLoaded: Observable<boolean>;

  constructor(httpClient: HttpClient, private dialog: MatDialog) {
    this.apiLoaded = httpClient.jsonp(credentials.apikey, 'callback')
        .pipe(
          map(() => true),
          catchError(() => of(false)),
        );
  }

  addMarker(event: google.maps.MapMouseEvent) {
    this.markers.splice(0);
    this.markers.push({
      position: event.latLng,
      title: 'Help Location',
      info: 'Help info',
      options: {
        animation: google.maps.Animation.DROP
      }
    })
    this.openDialog();
  }

  openInfoWindow(marker: MapMarker) {
    console.log("infoWindow: ", this.infoWindow);
    if(this.infoWindow != undefined) {
      this.infoWindow.open(marker);
    }
  }

  openDialog() {

    console.log("test");

    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      title: 'Request help'
    };

    this.dialog.open(DialogComponent, dialogConfig);

    const dialogRef = this.dialog.open(DialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => console.log("Dialog output:", data)
  );    

  }
}
