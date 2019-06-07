import { Component, OnInit, Input } from '@angular/core';
import { AuthGuardLogin } from '../auth-guard-login.service';
import { AuthLogin } from '../auth-login.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'header-root',
  templateUrl: './app.header.html',
  styleUrls: ['./app.header.css']
})
export class AppHeader implements OnInit {
  isLoggedIn :  boolean;

  constructor(private authGuardLogin: AuthGuardLogin, private authLogin: AuthLogin){}
  ngOnInit(){
  	console.log(this.authLogin.isUserLoggedIn);

  }
  onLogin(){
  		// this.authLogin.login();
  		console.log('Thank You Login');
  		// this.isLoggedIn = false;
  		// this.isLoggedout = true;
  }
  onLogout(){
  	this.authLogin.logout();
  	console.log('Thank You logout');
  	// this.isLoggedIn = true;
  	// this.isLoggedout = false;
  }
}
