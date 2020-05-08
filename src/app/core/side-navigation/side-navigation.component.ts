import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss'],
})
export class SideNavigationComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigate(page: string) {
    switch (page) {
      case 'account-settings':
        this.router.navigate(['./account-settings']);
        break;
      case 'entry-list-view':
        this.router.navigate(['./entry-list-view']);
        break;
      case 'graph-view':
        this.router.navigate(['./graph-view']);
        break;
      case 'app-settings':
        this.router.navigate(['./entry-list-view']);
        break;
      case 'app-help':
        this.router.navigate(['./entry-list-view']);
        break;
    }
  }
}
