import { Component, OnInit } from '@angular/core';
import { ReactiveFormModel } from './reactiveform.model';
import {ReactiveFormService }  from './reactiveform.service';
@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
users : ReactiveFormModel[];
  constructor(private reactiveFormService : ReactiveFormService) { }

  ngOnInit() {
    this.users = this.reactiveFormService.getReativeUsers();
  }
  onEditItem(index:number){
    this.reactiveFormService.startedEdit.next(index);
  }

}
