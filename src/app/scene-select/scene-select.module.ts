import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../../shared/material.module';

import { SceneSelectComponent } from './scene-select/scene-select.component';

@NgModule({
  declarations: [SceneSelectComponent],
  exports: [
    SceneSelectComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class SceneSelectModule { }
