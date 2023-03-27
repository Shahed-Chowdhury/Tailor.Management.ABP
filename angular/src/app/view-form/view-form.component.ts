import { FormTableService } from './../proxy/form-tables/form-table.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-view-form',
  templateUrl: './view-form.component.html',
  styleUrls: ['./view-form.component.scss']
})
export class ViewFormComponent implements OnInit {

  constructor(private route: ActivatedRoute, private apiservice: FormTableService, private fb: FormBuilder) { }

  formDescription: string = ""
  formTitle: string = ""
  formFields: Array<Object> = []
  dynamicFields: FormGroup

  ngOnInit(): void {

    this.createDynamicForm();
    this.getFormWithLabels(this.route.snapshot.params['id'])
  }

  createDynamicForm(){
    this.dynamicFields = this.fb.group({
      fields: this.fb.array([])
    })
  }

  getFormWithLabels(tableId){
    this.apiservice.getTableWithFieldsById(tableId).subscribe(res => {
      // console.log(res);
      this.formTitle = res.title
      this.formDescription = res.description
      this.formFields = res.formFields
      // ---------------------------------------------------
      // ---------------------------------------------------
      this.formFields.forEach(field => {
        this.Fields.push(this.fb.control(field))
      })
      // console.log(this.Fields.value);
    })
  }

  get Fields(): FormArray{
    return this.dynamicFields.get('fields') as FormArray;
  }

  onSubmit(){
    console.log(this.dynamicFields.get('fields'));
  }

}
