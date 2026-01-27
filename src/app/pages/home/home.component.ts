import { Component, signal } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
})
export class HomePage {
  protected readonly title = signal('raspberry-network-page');
}
