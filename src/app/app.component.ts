import { AuthenticationService } from './_services/auth.service';
import { User } from './models/user.model';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-gallery';
  currentUser: User;
  currDate = new Date()

  constructor(
    private router: Router,
    private as: AuthenticationService
  ) {
    this.as.currentUser.subscribe(user => this.currentUser = user);
  }

  logout() {
    this.as.logout();
    this.router.navigate(['/']);
  }
}
