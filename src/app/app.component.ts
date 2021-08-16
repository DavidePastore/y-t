import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Sign In', url: '/sign-in', icon: 'person', disabled: false },
    { title: 'Dashboard', url: '/master-list', icon: 'star', disabled: false },
    { title: 'Photos', url: '#', icon: 'camera', disabled: true },
    { title: 'Available Missions', url: '#', icon: 'rocket', disabled: true },
    { title: 'My Missions', url: '#', icon: 'eyedrop', disabled: true },
    { title: 'Chat', url: '#', icon: 'chatbox', disabled: true },
  ];
  constructor() {}
}
