import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import {ErrorPageComponent} from "./shared/error-page/error-page.component";

import {AppRoutingModule} from "./app-routing.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {PipesModule} from "./pipes/pipes.module";
@NgModule({
    declarations: [
        AppComponent,
        ErrorPageComponent,

    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        PipesModule,
        HttpClientModule,
    ],
    providers: [],
    exports: [
      PipesModule
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
