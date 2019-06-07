import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormService } from '../reactiveform.service';
import { ReactiveFormModel } from '../reactiveform.model';

@Component({
  selector: 'app-reactive-list',
  templateUrl: './reactive-list.component.html',
  styleUrls: ['./reactive-list.component.css']
})
export class ReactiveListComponent implements OnInit {
  recipeForm : FormGroup;
  editMode = false;
  editIndexItem: number;
  editItem: ReactiveFormModel;
  constructor(private reactiveFormService: ReactiveFormService) { }

  ngOnInit() {
    this.recipeForm = new FormGroup({
      'id': new FormControl(null),
      'name': new FormControl(null),
    });


    this.reactiveFormService.startedEdit
    .subscribe(
      (index: number)=>{
        this.editMode = true;
        this.editIndexItem = index;
       this.editItem =  this.reactiveFormService.getReativeUser(index);
       this.recipeForm.setValue({
        'id': '0',
  			'name': 'Aditya'
       })
      }
    )
  }

}
