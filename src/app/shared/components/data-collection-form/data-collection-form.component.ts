import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { DynamicFormFields } from 'src/app/types/types';
@Component({
  selector: 'app-data-collection-form',
  templateUrl: './data-collection-form.component.html',
  styleUrls: ['./data-collection-form.component.scss']
})
export class DataCollectionFormComponent {
  datatCollectionForm !:  FormGroup
  formRequirementData: any;
  checkBoxItems:any = []
  constructor(private modalService: BsModalService,private fb: FormBuilder){}
  public OnClose = new Subject()
  ngOnInit(): void {
    this.getTheInitialData()
  }
  getTheInitialData(){
    const config = this.modalService.config.initialState
    if(!config) return
    this.formRequirementData = config
    console.log(this.formRequirementData)
    if(!this.formRequirementData){
      return
    }
    this.datatCollectionForm = this.createDynamicForm(this.formRequirementData.fields);
    console.log(this.datatCollectionForm)
  }
  createDynamicForm(requirement: any): FormGroup {
    const formGroupConfig: any = {};

    requirement.forEach((field:DynamicFormFields) => {
      formGroupConfig[field.slag] = [null, field.isRequired ? Validators.required : []];
    });

    return this.fb.group(formGroupConfig);
  }
  close(){
    this.OnClose.next(false)
    this.modalService.hide()
  }
  submit(){
    if(this.datatCollectionForm.valid){
      this.OnClose.next({form :this.datatCollectionForm , checkbox_result : this.checkBoxItems})
      this.modalService.hide()
      return
    }
    alert("Please fill the required fields")
  }
  oninputHChange(ev:any){
    if(ev.target.checked){
      this.checkBoxItems.push(ev.target.value)
    }else{
      this.checkBoxItems.splice(this.checkBoxItems.indexOf(ev.target.value),1)
    }
  }
}

