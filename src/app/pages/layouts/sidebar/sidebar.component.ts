import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { INavItem } from './nav-item';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  navItens: INavItem[] = [
    {
      icon: 'fas fa-chart-pie',
      name: 'Gráficos',
      url: '/pizza',
      iconImg: '',
      iconImgHover: '',
    },
    {
      icon: 'fas fa-hashtag',
      name: 'Postagens',
      url: '/list',
      iconImg: '',
      iconImgHover: '',
    }
  ];

  constructor(private router: Router) {}
}
