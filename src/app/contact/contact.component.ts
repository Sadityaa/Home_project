import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
loginchecker : boolean = true;

  registerForm : FormGroup;
  reactive_register = {
    r_name : '',
    r_email : '',
    r_password: '',
    r_gender :'',
  }
  genders = ['Male', 'Female'];
// Register End
//Login Start
  login_Form: FormGroup;
  reactive_login = {
    lo_email : '',
    lo_pass : '',
    
  }

  constructor(private activateRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required,  Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]),
      'gender': new FormControl(null)
    });
    //Login Start
    this.login_Form = new FormGroup({
      'l_email': new FormControl(null, [Validators.required, Validators.email]),
      'l_password': new FormControl('', [Validators.required])
    });
        
    //console.log( ' Before Submit ' +  localStorage.getItem(this.reactive_register.r_name));
  }
  onRegister(){
    this.reactive_register.r_name = this.registerForm.value.name;
    this.reactive_register.r_email = this.registerForm.value.email;
    this.reactive_register.r_password = this.registerForm.value.password;

    //Set Enter Value to Local Storage in login Form i have get that values
    localStorage.setItem('key_name', this.reactive_register.r_name);
    localStorage.setItem('key_email', this.reactive_register.r_email);
    localStorage.setItem('key_password', this.reactive_register.r_password);


    // console.log( ' After Submit ' + localStorage.getItem('key_name'));
    // console.log( ' After Submit ' + localStorage.getItem('key_email'));
    // console.log( ' After Submit ' + localStorage.getItem('key_password'));
  }
  
  onLogin(){
    this.reactive_login.lo_email = this.login_Form.value.l_email;
    this.reactive_login.lo_pass = this.login_Form.value.l_password;

    if(this.reactive_login.lo_email === localStorage.getItem('key_email') && this.reactive_login.lo_pass === localStorage.getItem('key_password')){
      this.router.navigate(['/about'], {relativeTo: this.activateRoute})

    }else{
      //alert('Incorrect username or password.');
      this.loginchecker = false;
      console.log(this.loginchecker)
    }

    console.log(this.reactive_login.lo_email);
    console.log(this.reactive_login.lo_pass);

    console.log(' GetValue '+ localStorage.getItem('key_email'))

  }
}
