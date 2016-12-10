import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponents, AppRoutes } from "./app.routing";
import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';

import { PageAComponent } from './page-a/page-a.component';
import { PageBComponent } from './page-b/page-b.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
     ...AppComponents,
    PageAComponent,
    PageBComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
