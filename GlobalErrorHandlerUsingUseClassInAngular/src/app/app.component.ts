import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GlobalErrorHandlerUsingUseClassInAngular';
  count:any;

  test():void {

    this.count = undefined;
    this.count.sort();
  }
}
