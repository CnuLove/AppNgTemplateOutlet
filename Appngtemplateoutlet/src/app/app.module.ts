import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgTemplateOutlet } from '@angular/common';
import { ApptemplateComponent } from './apptemplate/apptemplate.component';

@NgModule({
  declarations: [
    AppComponent,
    ApptemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgTemplateOutlet
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
