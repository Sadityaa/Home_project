import { Component, OnInit, ViewChild } from '@angular/core';
import { UserTableService } from '../usertable.service';
import { UserTableModel } from '../usertable.model';
import { NgForm } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  //emptyUsers : UserTableModel;
  @ViewChild('f') user_table: NgForm
  users: UserTableModel[];
  any_id: number;
  pops = false;
  editMode= false; // To Change Button Text Add or Update
  editIndexItem: number;
  editItem: UserTableModel;

  constructor(private userTableService: UserTableService, private router: Router, private activatedRoute: ActivatedRoute) { }


  ngOnInit() {
    this.users = this.userTableService.getAllusers();
    console.log(this.users);


  // For Edit
  /*--
    This page
    usertable.component
    userTable.service.ts
  -*/
    this.userTableService.startedEdit
    .subscribe(
      (index: number)=>{
        this.editMode = true;
        this.editIndexItem = index;
       this.editItem =  this.userTableService.getuser(index);
       this.user_table.setValue({
          userid: this.editItem.userid,
          name: this.editItem.name
       })
      }
    )
  }

  /*--
	If we using main function like boolean or any then use return true or return false function:boolean(){}
	or
	not use any function(){}

  --*/

  onAddUser(form: NgForm) {
    //debugger
    const value = form.value;
    const newIngrient = new UserTableModel(value.userid, value.name);
    var existing = false;
    if(this.editMode){
      this.userTableService.updateUser(this.editIndexItem, newIngrient)
    }
    else{
      this.userTableService.addUsers(newIngrient);
    }
    this.editMode = false;
    debugger
    
    // Id Match Not Add
  /*Small Issue not Fixed
      if(newIngrient['userid'] === this.users['id']){
        debugger
        alert('Already There');
        //this.userTableService.setUser(this.users);
        //console.log(this.userTableService.setUser(this.users));
        
        
      }
      else{
        //this.userTableService.addUsers(newIngrient);
      }
    
    */

    console.log(newIngrient);
    form.reset();
// Small Issue not Fixed
/*
    for (let i = 0; i < this.users.length; i++) {
      console.log(this.users[i], this.any_id);


      if (this.users[i].userid === this.any_id) {
        this.pops = true;
        existing = true;
        break;
      }
     
    }
    if (existing) {
      existing = true;
     
    }
    if (!existing) {
      this.userTableService.addUsers(newIngrient);
      this.pops = false;
    }

    
    debugger
    */
  }


// Clear Item
  onClearItem(){
    this.user_table.reset();
    this.editMode = false;
  }

  //Delete
  onDeleteItem(){
    this.userTableService.deleteUser(this.editIndexItem);
    
  }
}