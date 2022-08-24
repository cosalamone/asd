import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';





@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatListModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule
  ],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatListModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule
  ]
})
export class MaterialModule { }
