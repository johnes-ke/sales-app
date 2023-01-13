import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showFiller = false;

  menuItems: Array<{path: string, label: string}> = [
      {
        path: '/',
        label: 'Home'
      },
      {
        path: '/categories',
        label: 'Categories'
      },
      {
        path: '/suppliers',
        label: 'Suppliers'
      },
    ]
}
