import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsWithEmailComponent } from '../components/details-with-email/details-with-email.component';
import { UserDetailsComponent } from '../components/user-details/user-details.component';
import { UserHomeComponent } from '../components/user-home/user-home.component';
import { UserComponent } from '../components/user/user.component';

const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  {
    path: 'users',
    component: UserHomeComponent,
    children: [
      { path: ':id', component: UserComponent },
      { path: ':id/:name', component: UserDetailsComponent },
      { path: ':id/:email', component: DetailsWithEmailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataDetailRoutingModule {}
