import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'products',
    loadChildren: () =>
      import('./Modules/products/products.module').then(
        (m) => m.ProductsModule
      ),
  },
  {
    path: 'dataDetails',
    loadChildren: () =>
      import('./Modules/dataDetails/data-detail/data-detail.module').then(
        (m) => m.DataDetailModule
      ),
  },
  { path: '', redirectTo: 'dataDetails', pathMatch: 'full' },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
