import { Component, OnInit } from '@angular/core';
import { KeyValue } from '@angular/common';

import { from } from 'rxjs';
import { groupBy, mergeMap, toArray } from 'rxjs/operators';

import { BaseSceneModel } from '@shared/models/base-scene.model';
import * as mocks from '@shared/models/mocks.json';
import { GroupByFields } from '@shared/enums';

interface IScenesGroupedBy {
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
  public scenesGroupedBy: IScenesGroupedBy[] = [];
  public sceneSelected: string = '';
  public isSceneEditMode: boolean = false;
  public searchValue: string = '';
  public groupByFields: typeof GroupByFields = GroupByFields;
  public groupByFieldsNames: string[] = [GroupByFields.NUMBER, GroupByFields.LOCATION];
  public activeSortingField: GroupByFields = null;

  private fieldsToShowValue: string[] = ['id', 'date_time', 'location'];

  public ngOnInit(): void {
    this.sortScenesBy(GroupByFields.LOCATION);
  }

  public onTextSelected(textSelected: string): void {
    this.sceneSelected = textSelected;
  }

  public sortScenesBy(sortBy: GroupByFields): void {
    this.scenesGroupedBy = [];
    this.activeSortingField = sortBy;

    from(mocks.scenes)
      .pipe(
        groupBy((scene: BaseSceneModel) => scene[sortBy]),
        mergeMap((scene) => scene.pipe(toArray())),
      )
      .subscribe((scenes: BaseSceneModel[]) => {
        this.scenesGroupedBy.push({
          location: scenes[0][sortBy],
          data: scenes,
        });
      });

    this.scenesGroupedBy.sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : b[sortBy] > a[sortBy] ? -1 : 0));
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
