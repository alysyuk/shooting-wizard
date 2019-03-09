import { Component} from '@angular/core';

import { BaseSceneModel } from '../shared/models/base-scene.model';
import * as mocks from './mocks.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Temp mock
  public readonly scenes: BaseSceneModel[] = mocks.scenes;
  public sceneSelected: string = '';
  public isSceneEditMode: boolean = false;

  public onTextSelected(textSelected: string) {
    this.sceneSelected = textSelected;
  }

  public toggleSceneEditMode(): void {
    this.isSceneEditMode = !this.isSceneEditMode;
  }

  public sortById(a: BaseSceneModel, b: BaseSceneModel): number {
    return a.id > b.id ? -1 : (b.id > a.id ? 1 : 0);
  };

  public test(data: any) {
    debugger;
  }


}
