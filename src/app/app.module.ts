import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from '@shared/material.module';

import { AppComponent } from './app.component';
import { SceneSelectModule } from './scene-select/scene-select.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule, BrowserAnimationsModule, MaterialModule, SceneSelectModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
