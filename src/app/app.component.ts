import { Component } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})
export class AppComponent {
  constructor(private location: Location, private router: Router) {}

  title = 'Angular REST Client for BookStore app';

  isRoot = true;

  ngOnInit() {
    this.router.events.subscribe((event) => {
        if (this.location.path() !== '') {
          this.isRoot = false;
        } else {
          this.isRoot = true;
        }
      });
  }
}
