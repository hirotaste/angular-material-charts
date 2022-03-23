import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MetismenuAngularModule } from '@metismenu/angular';
import { NgbCollapseModule, NgbDropdownModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    LayoutComponent,
    SidebarComponent
  ],
  exports: [
    SidebarComponent
  ],
  imports: [CommonModule, RouterModule, NgbDropdownModule, NgbTooltipModule, MetismenuAngularModule, NgbCollapseModule]
})
export class LayoutsModule {}
