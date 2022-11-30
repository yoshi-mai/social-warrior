import { Component } from '@angular/core';

export interface Organization {
  name: string;
  contact: string;
  city: string;
  country: string;
}

const ORG_DATA: Organization[] = [
  {name: 'NGO 1', contact: 'Max Mustermann', city: 'Hamburg', country: 'Germany'},
  {name: 'NGO 2', contact: 'Heidi Herjemine', city: 'Nürnberg', country: 'Germany'},
  {name: 'NGO 3', contact: 'Anton Zucker', city: 'München', country: 'Germany'},
  {name: 'NGO 4', contact: 'Anne Salz', city: 'Stuttgart', country: 'Germany'}
];

@Component({
  selector: 'app-orgs',
  templateUrl: './orgs.component.html',
  styleUrls: ['./orgs.component.scss']
})
export class OrgsComponent {


  displayedColumns: string[] = ['name', 'contact', 'city', 'country'];
  dataSource = ORG_DATA;

}
