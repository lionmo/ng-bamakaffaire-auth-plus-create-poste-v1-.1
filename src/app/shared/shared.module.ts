import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { InputsValidationsComponent } from './inputs-validations/inputs-validations.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './alert/alert.component';
import { InputLabelComponent } from './input-label/input-label.component';
import { NgxMaskModule } from 'ngx-mask';



@NgModule({
  declarations: [
    ModalComponent,
    InputsValidationsComponent,
    AlertComponent,
    InputLabelComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ],
  exports: [
    ModalComponent,
    InputsValidationsComponent,
    InputLabelComponent,
    AlertComponent
  ]
})
export class SharedModule { }
