import { Component, OnInit } from "@angular/core";
import { SideNav } from "../navbar/navbar.component";

@Component({
    selector: 'app-layout',
    imports: [
        SideNav],
    templateUrl: './app-layout.component.html',
})

export class AppLayout implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}