import { Component } from '@angular/core';

@Component({
    selector: 'app',
    template: `
      <verdantis-header></verdantis-header>
      <p>Client Server Communication Demo</p>
      <http-test></http-test>
      <verdantis-footer></verdantis-footer>
    `
})

export class AppComponent {}
