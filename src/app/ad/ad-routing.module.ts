import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAdComponent } from './create-ad/create-ad.component';
import { GetAdsComponent } from './get-ads/get-ads.component';
import { GetSingleAdComponent } from './get-single-ad/get-single-ad.component';

const routes: Routes = [
  {
    path: 'poster',
    component: CreateAdComponent
  },
  {
    path: 'accueil',
    component: GetAdsComponent
  },
  {
    path: 'categories/:id',
    component: GetAdsComponent
  },
  {
    path:'annonce/:id',
    component: GetSingleAdComponent
  },
  {
    path: '',
    component: GetAdsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdRoutingModule { }
