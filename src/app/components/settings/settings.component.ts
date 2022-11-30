import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

  public options: string[] = ['Medical Aid', 'Shelter', 'Food', 'Drink', 'Police'];

  range: string = '';

  valueChange(event: any) {
    this.range = event.target.value + ' km'
  }

}
