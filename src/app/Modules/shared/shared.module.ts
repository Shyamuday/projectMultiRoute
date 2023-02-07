import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoidButtonComponent } from './void-button/void-button.component';
import { ApiService } from './services/api.service';
import { ErrorHandlerService } from './services/error-handler.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [VoidButtonComponent],
  imports: [CommonModule, HttpClientModule],
  providers: [ApiService, ErrorHandlerService],
  exports: [VoidButtonComponent],
})
export class SharedModule {}
