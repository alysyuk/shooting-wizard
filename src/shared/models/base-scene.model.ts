export interface BaseSceneModel {
  id: number | string;
  date_time: number | string;
  location: string;
  int: boolean; // interior - exterior
  fd: any; // fixed date
  ft: any; // fixed time
  characters: any; // textarea
  sound_eq: any; // textarea
  'lightning eq': any; // textarea
  props: any; // textarea (реквизит)
  scene_props: any; // textarea (реквизит интерьера)
  makeup: any; // add picture to column
  dresses: any;
  prod_design: any;
  extras: any;
  vfx: any;
}
