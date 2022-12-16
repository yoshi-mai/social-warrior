import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SettingsComponent {
  disabled = false;
  max = 100;
  min = 1;
  showTicks = false;
  step = 0.5;
  thumbLabel = false;
  value = 0;

  public options: string[] = ['Medical Aid', 'Shelter', 'Food', 'Drink', 'Police', 'Shelter'];
}
