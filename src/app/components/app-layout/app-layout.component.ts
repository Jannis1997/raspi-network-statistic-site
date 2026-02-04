import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { WebsiteHeader } from "../header/header.component";

@Component({
    selector: 'app-layout',
    imports: [RouterOutlet, WebsiteHeader],
    templateUrl: './app-layout.component.html',
})

export class AppLayout implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}