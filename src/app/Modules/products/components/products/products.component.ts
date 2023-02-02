import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products = [
    {
      id: 1,
      name: 'Laptop',
    },
    {
      id: 2,
      name: 'Mouse',
    },

    {
      id: 3,
      name: 'Keyboard',
    },
  ];
  lotsOfTabs = ['d', 'e', 'f', 'g'];
  //  new Array(30).fill(0).map((_, index) => `Tab ${index}`);

  constructor(private _activateRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this._activateRoute.params.subscribe(() => {});
  }

  laptopRedirectOverview() {
    // this._activateRoute.navigate(['/laptop-overview']);
  }
}
