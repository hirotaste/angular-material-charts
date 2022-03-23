import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ErrorTailorModule } from '@ngneat/error-tailor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ListComponent } from './list.component';
import { InputModule } from 'src/app/forms/input/input.module';
import { PostModule } from '../post/post.module';

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
    data: { topbarTitle: 'Posts' }
  }
];

@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    PostModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    InputModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    ErrorTailorModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ListModule { }
