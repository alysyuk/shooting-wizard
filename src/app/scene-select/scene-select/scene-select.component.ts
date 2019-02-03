import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scene-select',
  templateUrl: './scene-select.component.html',
  styleUrls: ['./scene-select.component.scss']
})
export class SceneSelectComponent implements OnInit {
  @Output() textSelected = new EventEmitter<string>();

  public textFile: string | ArrayBuffer | null = null;

  constructor() { }

  ngOnInit() {
  }

  public fileUpload(event: any): void {
    const reader: FileReader = new FileReader();

    reader.readAsText(event.srcElement.files[0]);
    reader.onload = () => this.textFile = reader.result;
  }

  public selectionChange(): void {
    this.textSelected.emit(window.getSelection().toString());
  }

  public isTextSelected(): boolean {
    return !!window.getSelection().toString();
  }

}

