import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css'],
})
export class ProductInfoComponent implements OnInit {
  constructor(private route: Router) {}
  ngOnInit(): void {
    // this.route.
  }

  redirectSomeWhere(route: string) {
    this.route.navigateByUrl(route);
  }
}
