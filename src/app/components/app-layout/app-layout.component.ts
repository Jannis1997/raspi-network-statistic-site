import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { WebsiteHeader } from "../header/header.component";
import { SideNav } from "../navbar/navbar.component";

@Component({
    selector: 'app-layout',
    imports: [
        RouterOutlet, 
        WebsiteHeader, 
        SideNav],
    templateUrl: './app-layout.component.html',
})

export class AppLayout implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}