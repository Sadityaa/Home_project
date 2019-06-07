
//https://stackblitz.com/edit/angular-7-registration-login-example login and register demos
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthGuardLogin } from '../auth-guard-login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm : FormGroup;
user = 'test@gmail.com';
pass = 'ggk';

  constructor(private authGuardLogin: AuthGuardLogin, private router: Router ) { }

  ngOnInit() {
  	this.loginForm  = new FormGroup({
  		'username' : new FormControl(null, [Validators.required, Validators.email, this.userforbidden.bind(this)]),
  		'password' : new FormControl(null, [Validators.required, this.passwordforbidden.bind(this)]),
  	});


  }
 

  //UserName

  userforbidden(control: FormControl):{[s: string]: boolean} {
  	if(this.user.indexOf(control.value) == -1){
  		return {'login': true}
  	}else{
  		return null
  	}
  }
  //Password
passwordforbidden(control: FormControl):{[s: string]: boolean}{
		if(this.pass.indexOf(control.value) == -1){
		return {'Password': true}
	}
	else{
		return null
	}
}
 onSubmit(){
  
    console.log(this.loginForm);
  }
onSub(){
  debugger
    this.authGuardLogin.rlogin();
   // this.router.navigate(['/home']);
}

}
