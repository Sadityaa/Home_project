import { CanActivate, ActivatedRoute, Params, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthLogin } from './auth-login.service';

@Injectable()

export class AuthGuardLogin implements CanActivate{
	
	constructor(private authLogin: AuthLogin, private router: Router, private activatedRoute: ActivatedRoute){}
	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
		
				debugger
		return this.authLogin.isAuthuried()
		.then((au:boolean)=>{
				if(au){
					return true;
				}
				else{
					this.router.navigate(['/login']);
				}
			}
		);
	}

	canActivateChild(route : ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
		return this.canActivate(route, state);
	}

	rlogin(){
		this.authLogin.login();
		this.router.navigate(['/home']);
		
		return;
	}
	
	
	
	
}