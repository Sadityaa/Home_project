import { Component, OnInit } from '@angular/core';
import { UserTableService } from '../usertable.service';
import { ActivatedRoute, Params } from '@angular/router';
import { UserTableModel } from '../usertable.model';
@Component({
  selector: 'app-user-deatils',
  templateUrl: './user-deatils.component.html',
  styleUrls: ['./user-deatils.component.css']
})
export class UserDeatilsComponent implements OnInit {

  constructor(private userTableService: UserTableService, private activatedRoute: ActivatedRoute) { }
  users : UserTableModel;
  id: number;
  
  ngOnInit() {
    this.activatedRoute.params
    .subscribe(
      (params: Params)=>{
        this.id = +params['id'];
        this.users = this.userTableService.getuser(this.id);
      }
    );


  }

}
