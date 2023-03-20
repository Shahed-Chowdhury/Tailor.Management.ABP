import { AuthService } from '@abp/ng.core';
import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  get hasLoggedIn(): boolean {
    return this.oAuthService.hasValidAccessToken();
  }

  ngOnInit(): void {
  }

  constructor(private oAuthService: OAuthService, private authService: AuthService) {
    if(!this.hasLoggedIn){this.login()}
  }

  login() {
    this.authService.navigateToLogin();
  }
}
