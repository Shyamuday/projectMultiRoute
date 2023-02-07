import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-api-demo',
  templateUrl: './api-demo.component.html',
  styleUrls: ['./api-demo.component.css'],
})
export class ApiDemoComponent {
  data = '';
  constructor(private api: ApiService) {}
  getData() {
    this.api.getData().subscribe((res) => {
      this.data = JSON.stringify(res);
    });
  }
}
