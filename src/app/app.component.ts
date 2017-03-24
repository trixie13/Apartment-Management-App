import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Apartment Management App';

  tabLinks = [
	  {label: 'Dashboard', link:'/dashboard'},
	  {label: 'Apts list', link:'/apts'}
  ];
  activeLinkIndex = 0;
}