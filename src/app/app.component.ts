import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public fileText: string | ArrayBuffer | null = null;
  public panelOpenState = false;
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

  private selectedText: string = '';

  public fileUpload(event: any): void {
    const reader: FileReader = new FileReader();

    reader.readAsText(event.srcElement.files[0]);
    reader.onload = () => this.fileText = reader.result;
  }

  public selectionChange(event: any): void {
    this.selectedText = event.target.value;
  }

  public isTextSelected(): boolean {
    return !!window.getSelection().toString();
  }
}
