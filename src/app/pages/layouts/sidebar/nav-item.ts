import { Params } from '@angular/router';

export interface INavItem {
  icon: string;
  name: string;
  url: string;
  iconImg: string;
  iconImgHover: string;
  queryParams?: Params;

  children?: {
    name: string;
    url: string;
    queryParams?: Params;
  }[];
}
