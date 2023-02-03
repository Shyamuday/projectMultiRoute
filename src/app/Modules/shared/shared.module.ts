import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoidButtonComponent } from './void-button/void-button.component';

@NgModule({
  declarations: [VoidButtonComponent],
  imports: [CommonModule],
  exports: [VoidButtonComponent],
})
export class SharedModule {}
