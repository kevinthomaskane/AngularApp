import { Component, OnInit } from '@angular/core';

@Component({
  //you can also select an element by an attribute using square brackets.  then in the app.component.html file instead of using an app-servers tag, just use a div and give it an attribute of app-servers <div app-servers></div>.  you could also just say ".app-servers" and give that div a class of app-servers
  //selector: '[app-servers]'
  selector: 'app-servers',
  //must have a template
  template: `
  <app-server></app-server>
  <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
