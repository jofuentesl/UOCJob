import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule } from '../../shared/shared.module';
import { OffersRoutingModule } from './offers-routing.module';
import { OffersComponent } from './offers.component';
import { OffersDetailComponent } from './offers-detail/offers-detail.component';
import { OffersListComponent } from './offers-list/offers-list.component';
import { OffersProfileComponent } from './offers-profile/offers-profile.component';
import { OffersDetailWrapperComponent } from './offers-detail/offers-detail.component-wrapper';

@NgModule({
  declarations: [
    OffersComponent,
    OffersProfileComponent,
    OffersListComponent,
    OffersDetailComponent,
    OffersDetailWrapperComponent
  ],
  imports: [CommonModule, OffersRoutingModule, SharedModule]
})
export class OffersModule {}
