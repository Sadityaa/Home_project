import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { UserTableModel } from './usertable.model';
import { UserTableService } from './usertable.service';

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit, OnDestroy {
users : UserTableModel[];
id: number;
viewDetail= false;
editIndexItem: number;
private subscription : Subscription;
// If we not give table list wont display when search it will display
searchFilter = '';

  constructor(private userTableService: UserTableService) { }

  ngOnInit() {
  	
  	// It will Recive All Users Defalut Added
  	this.users = this.userTableService.getAllusers();

  	// It will Recive Newly added Users
  	this.subscription =  this.userTableService.userChanged
   .subscribe(
    (ingredientsany : UserTableModel[]) => {
      debugger
      this.users = ingredientsany;
     });

  };

 /*--
    This page
    usertable.component
    userTable.service.ts
  -*/
  // Edit Method
  onEditItem(index:number){
    this.userTableService.startedEdit.next(index);
  }


    onDelete(index: number){
      debugger
      //this.users.splice(id, 1);
      //UserTableModel[].splice(id,1);
      this.userTableService.deleteUser(index);
    
        
   }
  ngOnDestroy(){
  	this.subscription.unsubscribe();
  }
  viewDetails(){
    alert(this.viewDetail = true);
    this.viewDetail = true;

  }

}
