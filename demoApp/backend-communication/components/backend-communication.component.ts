import { Component } from '@angular/core';
import { CommunicationService } from '../services/communication.service'

@Component({
  selector: 'http-test',
  template: `
    <button (click)="onTestGet()">GET Request</button>
    <p>GET Output: {{getData}}</p>
    <button>POST Request</button>
    <p>POST Output: {{postData}}</p>
  `,
  providers: [CommunicationService]
})

export class BackendCommunicationComponent {
  getData: string;
  postData: string;

  constructor(private _communicationService: CommunicationService){}

  onTestGet() {
    this._communicationService.getCurrentTime().subscribe(
      data => this.getData = JSON.stringify(data),
      error => alert(error),
      () => console.log("GET Request Success")
    )
  }
}
