import { Component } from "@angular/core";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";
import { RouterOutlet } from "@angular/router";

/** basic drawer as foundation for sidenav and main content separation */
@Component({

    selector: 'side-navbar-drawer',
    templateUrl: 'navbar.component.html',
    styleUrl: 'navbar.component.css',
    imports: [
        MatSidenavModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatToolbarModule,
        RouterOutlet],
})

export class SideNav {
    showFiller = false;
}