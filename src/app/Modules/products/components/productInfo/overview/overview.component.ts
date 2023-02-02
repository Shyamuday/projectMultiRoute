import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent implements OnInit {
  navRoute: any;
  productOverview = [
    {
      id: '1',
      overview: 'overview Laptop',
    },
    {
      id: '2',
      overview: 'overview mobile',
    },
    {
      id: '3',
      overview: 'overview shoes',
    },
    {
      id: '4',
      overview: 'overview books',
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.navRoute = this.route.snapshot.params['id'];
    console.log(this.navRoute);
  }
}
