import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { $ } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(private router: Router, private activateRoute: ActivatedRoute) { }
  logoutSubscription: Subscription;
  num:any = '';
  ngOnInit() {
  

    // onmousemove = (function() {
    //   let onmousestop = function() {
    //     console.log('stoped');
    //     this.router.navigate(['/login'], {relativeTo: this.activateRoute});
    //     console.log('working');
    //   }, thread;
    
    //   return function() {
    //     clearTimeout(thread);
    //     thread = setTimeout(onmousestop, 2000);
    //   };
    // })();

    // var timeout;
    // document.onmousemove = function(){
    //   console.log("movbiing")
    //     clearTimeout(timeout);
    //     timeout = setTimeout(function(){
    //       console.log("stopped");
          
    //       window.location.assign="http://localhost:4200/login";
    //     },1000);
    // }
    //Working
    const mynumber = Observable.interval(1000)
      this.logoutSubscription = mynumber.subscribe(
        (number:number)=>{
          console.log(number);
          if(number === 10000){
            alert('Given Timen Complted')
            this.router.navigate(['/login'], {relativeTo: this.activateRoute});
          }
        }
      )

      
    // setTimeout(
    //   ()=>{
    //     alert('Given Time Completed');
    //     this.router.navigate(['/login']);
    //   },5000
    // );
  }
  ngOnDestroy(){
    this.logoutSubscription.unsubscribe();
  }

}
