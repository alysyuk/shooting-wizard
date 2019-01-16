import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public fileText: string = '';

  private selectedText: string = '';

  public fileUpload(event: any) {
    const me: any = this;
    const reader: FileReader = new FileReader();

    reader.readAsText(event.srcElement.files[0]);
    reader.onload = () => me.fileText = reader.result;
  }

  public selectionChange(event: any) {
    this.selectedText = event.target.value;
  }
}
