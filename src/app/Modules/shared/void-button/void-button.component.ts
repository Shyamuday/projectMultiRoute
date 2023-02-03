import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-void-button',
  templateUrl: './void-button.component.html',
  styleUrls: ['./void-button.component.css'],
})
export class VoidButtonComponent {
  @Input() text!: string;
  @Input() color!: string;
}
