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
  {
    path: 'apiData',
    loadChildren: () =>
      import('./Modules/api-data/api-data.module').then((m) => m.ApiDataModule),
  },
  {
    path: 'dataTalk',
    loadChildren: () =>
      import('./Modules/data-talk/data-talk.module').then(
        (m) => m.DataTalkModule
      ),
  },

  // { path: '', redirectTo: 'dataTalk', pathMatch: 'full' },
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
