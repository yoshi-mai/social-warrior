import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  windowWidth: string = '';
  showSplash = true;
  firstLoad = true;

  ngOnInit(): void {
      setTimeout(() => {
        this.showSplash = !this.showSplash;
      }, 2310);

      setTimeout(() => {
        this.firstLoad = !this.firstLoad;
      }, 5001);
  }

}
