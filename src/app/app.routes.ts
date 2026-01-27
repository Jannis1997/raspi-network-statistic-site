import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './pages/home/home.component';

// define all routes
const routes: Routes = [
    { path: 'home', component: HomePage },
];

// @NgModule --> Decorator needs to stand above the function
// Decorator changes/extends the class behind
@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
})

export class AppRoutingModule {}



