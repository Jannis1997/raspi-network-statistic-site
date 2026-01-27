import { bootstrapApplication } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { appConfig } from './app/app.config';
import { HomePage } from './app/pages/home/home.component';
import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { AppLayout } from './app/components/app-layout/app-layout.component';

// define all routes
// if the url is empty --> redirect to the HomePage
export const routes: Routes = [
    
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: HomePage },
];


// angular starts here
// app-component is the root-component
// app-component is the wrapper / layout
bootstrapApplication(AppLayout, {
    providers: [provideRouter(routes)]
});




