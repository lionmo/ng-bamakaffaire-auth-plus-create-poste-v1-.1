import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdRoutingModule } from './ad-routing.module';
import { CreateAdComponent } from './create-ad/create-ad.component';
import { GetAdsComponent } from './get-ads/get-ads.component';
import { GetSingleAdComponent } from './get-single-ad/get-single-ad.component';
import { DeleteAdComponent } from './delete-ad/delete-ad.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  declarations: [
    CreateAdComponent,
    GetAdsComponent,
    GetSingleAdComponent,
    DeleteAdComponent
  ],
  imports: [
    CommonModule,
    AdRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ]
})
export class AdModule { }
