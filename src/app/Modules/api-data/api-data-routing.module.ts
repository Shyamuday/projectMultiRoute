import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiDataComponent } from '../apiData/components/api-data/api-data.component';

const routes: Routes = [{ path: '', component: ApiDataComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApiDataRoutingModule {}
