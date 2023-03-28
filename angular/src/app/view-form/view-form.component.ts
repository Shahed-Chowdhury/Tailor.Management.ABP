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
  dynamicFields: FormGroup = this.fb.group({})

  ngOnInit(): void {
    this.getFormWithLabels(this.route.snapshot.params['id'])
  }

  getFormWithLabels(tableId){

    this.apiservice.getTableWithFieldsById(tableId).subscribe(res => {
      this.formTitle = res.title
      this.formDescription = res.description
      this.formFields = res.formFields
      // ---------------------------------------------------
      // ---------------------------------------------------
      this.formFields.forEach(field => {
        if(field["isRequired"]){
          this.dynamicFields.addControl(field["labelName"], this.fb.control("", [Validators.required]))
        }
        else{
          this.dynamicFields.addControl(field["labelName"], this.fb.control(""))
        }
      })
    })
  }

  get Fields(): FormArray{
    return this.dynamicFields.get('fields') as FormArray;
  }

  onSubmit(){
    console.log(this.dynamicFields);
    console.log(this.dynamicFields.value);
  }

  resetForm(){
    this.dynamicFields.reset()
  }

}
