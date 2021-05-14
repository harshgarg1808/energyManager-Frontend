import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DatepickerPopupComponent} from './datepicker-popup.component'
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [DatepickerPopupComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    DatepickerPopupComponent
  ]
})
export class DatepickerPopupModule { }
