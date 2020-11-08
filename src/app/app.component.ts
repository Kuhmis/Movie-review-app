import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './full-login/_services/authetication.service';
import { User } from './full-login/_models/user';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
    currentUser: User;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}
