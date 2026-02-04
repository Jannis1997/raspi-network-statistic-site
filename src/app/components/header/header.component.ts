import { Component } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";


@Component({
    selector: 'website-header',
    templateUrl: 'header.component.html',
    styleUrl: 'header.component.css',
    imports: [MatToolbarModule, MatButtonModule, MatIconModule]
})

export class WebsiteHeader {}