import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public fileText: string | ArrayBuffer | null = null;

  private selectedText: string = '';

  public fileUpload(event: any) {
    const reader: FileReader = new FileReader();

    reader.readAsText(event.srcElement.files[0]);
    reader.onload = () => this.fileText = reader.result;
  }

  public selectionChange(event: any) {
    debugger;
    this.selectedText = event.target.value;
  }
}
