import { Component } from '@angular/core';

import * as mocks from './mocks.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Temp mock
  public readonly scenes: any[] = mocks.scenes;

  public readonly sceneFields: string[] = [
    '#123123',
    '29/0917 - 07:00-14:00',
    'Kitchen',
    'Int.',
    'FD',
    'FT',
    'Characters',
    'Sound eq.',
    'Lightning eq.',
    'Props',
    'Scene props',
    'Makeup',
    'Dresses',
    'Prod design',
    'Extras',
    'VFX'
  ];

  public sceneSelected: string = '';

  public onTextSelected(textSelected: string) {
    this.sceneSelected = textSelected;
  }

  public isEditMode: boolean = false;

  public test(data: any) {
    debugger;
  }


}
