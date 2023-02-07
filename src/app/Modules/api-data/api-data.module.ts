import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiDataRoutingModule } from './api-data-routing.module';
import { ErrorHandlerService } from '../shared/services/error-handler.service';
import { ApiDataComponent } from '../apiData/components/api-data/api-data.component';

@NgModule({
  declarations: [ApiDataComponent],
  imports: [CommonModule, ApiDataRoutingModule],
  providers: [ErrorHandlerService],
})
export class ApiDataModule {}
