import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  loadState = 'loading';
  onClickMe() {
    this.loadState = 'finished';
    console.log('button clicked');
  }
}
