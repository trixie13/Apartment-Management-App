import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule }   from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent } from './app.component';
import { AptsComponent } from './apts.component';
import { AptDetailsComponent } from './apt-details.component';
import { DashboardComponent } from './dashboard.component';
import { EditFormComponent } from './edit-form.component';

import { AptService } from './apt.service';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    AptDetailsComponent,
    AptsComponent,
    DashboardComponent,
    EditFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    [MaterialModule],
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
