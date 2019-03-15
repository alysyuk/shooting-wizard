import { Component, OnInit } from '@angular/core';
import { KeyValue } from '@angular/common';

import { from, Observable } from 'rxjs';
import { groupBy, mergeMap, toArray } from 'rxjs/operators';

import { BaseSceneModel } from '../shared/models/base-scene.model';
import * as mocks from '../shared/models/mocks.json';

interface IScenesGroupedByLocation {
  location: string;
  data: BaseSceneModel[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // Temp mock
  // public scenes: BaseSceneModel[] = mocks.scenes;
  public scenesGroupedByLocation: IScenesGroupedByLocation[] = [];
  public sceneSelected: string = '';
  public isSceneEditMode: boolean = false;

  private fieldsToShowValue: string[] = ['id', 'date_time', 'location'];

  public ngOnInit(): void {
    from(mocks.scenes)
      .pipe(
        groupBy((scene: BaseSceneModel) => scene.location),
        mergeMap((scene) => scene.pipe(toArray())),
      )
      .subscribe((scenes: BaseSceneModel[]) => {
        this.scenesGroupedByLocation.push({
          location: scenes[0].location,
          data: scenes,
        });
      });

    console.log(this.scenesGroupedByLocation);
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
