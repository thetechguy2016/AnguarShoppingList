import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class header {

  @Output() url = new EventEmitter<String>();

  /*  Get the mouse Event and EmitEvent in different Component
   *  There is one Problem i am facing , actually when ever i click on a second link, it will give
   *  the hash tag of last link clicked @IMPORTANT PLEASE RESPOND
   *  Let me show after this code completion
   */
  navigateUrl(event) {

      this.url.emit(event);
    /*switch (event) {
          case 'recipe': {
              this.url.emit('recipe');
              console.log('recipe-in');
              break;
          }
          case 'shopping-list': {
              this.url.emit('shopping-list');
              console.log('shopping-list');
              break;
          }
      }*/
  }
}
