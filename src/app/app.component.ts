import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  baseUrl: string = 'recipe';

  getUrl(url: string) {
    this.baseUrl = url;
    console.log('APP-Component:' + url);
  }

}
