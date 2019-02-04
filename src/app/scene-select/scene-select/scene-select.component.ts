import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scene-select',
  templateUrl: './scene-select.component.html',
  styleUrls: ['./scene-select.component.scss']
})
export class SceneSelectComponent implements OnInit {

  @Output() textSelected = new EventEmitter<string>();

  public textFile: string | ArrayBuffer | null = null;

  private _textSelected: string = '';

  constructor() { }

  ngOnInit() { }

  public fileUpload(event: any): void {
    const reader: FileReader = new FileReader();

    reader.readAsText(event.srcElement.files[0]);
    reader.onload = () => this.textFile = reader.result;
  }

  public selectionChange(): void {
    this._textSelected = window.getSelection().toString();
  }

  public sendTextSelected(): void {
    this.textSelected.emit(this._textSelected);
  }

  public isTextSelected(): boolean {
    return !!window.getSelection().toString();
  }

}

