import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataDetailRoutingModule } from './data-detail-routing.module';
import { UserDetailsComponent } from '../components/user-details/user-details.component';
import { UserComponent } from '../components/user/user.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DetailsWithEmailComponent } from '../components/details-with-email/details-with-email.component';
import { UserHomeComponent } from '../components/user-home/user-home.component';
@NgModule({
  declarations: [
    UserComponent,
    UserDetailsComponent,
    DetailsWithEmailComponent,
    UserHomeComponent,
  ],
  imports: [CommonModule, DataDetailRoutingModule, MatSidenavModule],
})
export class DataDetailModule {}
