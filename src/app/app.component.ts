import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Temp mock
  public sceneFields: string[] = [
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

  public onTextSelected(textSelected: string) {
    debugger;
  }
}
