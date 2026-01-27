import { Component, signal } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class HomePage {
  protected readonly title = signal('raspberry-network-page');
}
