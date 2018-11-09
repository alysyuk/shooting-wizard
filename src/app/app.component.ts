import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'shooting-wizard';

  public fileUpload(event) {
    const me: any = this;
    const reader = new FileReader();

    reader.readAsText(event.srcElement.files[0]);
    reader.onload = function () {
      me.fileText = reader.result;
    }
  }
}
