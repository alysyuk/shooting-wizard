import { Component, OnInit } from '@angular/core';
import { KeyValue } from '@angular/common';

import { from, Observable } from 'rxjs';
import { groupBy, mergeMap, toArray } from 'rxjs/operators';

import { BaseSceneModel } from '../shared/models/base-scene.model';
import * as mocks from '../shared/models/mocks.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // Temp mock
  public readonly scenes: BaseSceneModel[] = mocks.scenes;
  public sceneSelected: string = '';
  public isSceneEditMode: boolean = false;

  private fieldsToShowValue: string[] = ['id', 'date_time', 'location'];

  public ngOnInit(): void {
    // this.scenes.filter();
    let test: any = null;
    // test.location: any = null;

    from(mocks.scenes)
      .pipe(
        groupBy((scene: BaseSceneModel) => scene.location),
        mergeMap((scene) => scene.pipe(toArray())),
      )
      .subscribe((scenes: BaseSceneModel[]) => {
        console.log(scenes);
        // test[scenes[0].location] = scenes;
      });

    console.log(test);
  }

  public onTextSelected(textSelected: string): void {
    this.sceneSelected = textSelected;
  }

  public toggleSceneEditMode(): void {
    this.isSceneEditMode = !this.isSceneEditMode;
  }

  public sortById(a: KeyValue<string, any>, b: KeyValue<string, any>): number {
    if (a.key === 'id') {
      return a.key > b.key ? -1 : b.key > a.key ? 1 : 0;
    }
  }

  public isNeededToShowValue(field: string): boolean {
    return this.fieldsToShowValue.includes(field);
  }
}
