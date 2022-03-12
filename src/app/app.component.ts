import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showForm: boolean = false;
  toggleForm(showForm: boolean) {
    this.showForm = showForm;
  }
}
