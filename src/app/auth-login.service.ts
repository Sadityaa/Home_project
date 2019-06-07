export class AuthLogin{
	loggedIn = false;
	isUserLoggedIn= false;

	isAuthuried(){
		debugger
		const promise = new Promise(
			(resolve, reject)=>{
				setTimeout(()=>{
				debugger
					resolve(this.loggedIn);
					
				},200)
				
			}
		);
		return promise;
	}
	login(){
		this.loggedIn = true;
		this.isUserLoggedIn = true
	}
	logout(){
		this.loggedIn = false;
		this.isUserLoggedIn = false
	}
}