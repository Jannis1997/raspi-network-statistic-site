import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
    selector: 'app-layout',
    imports: [RouterOutlet],
    templateUrl: './app-layout.component.html',
})

export class AppLayout implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}