import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';

@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.scss']
})
export class CustomFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  customForm!: FormGroup
  formTitle: string = "Untitled form"
  registerForm: any
  fields = []
  

  // Form fields
  FieldLabel: string = null;
  FieldPlace: string = null;
  FieldDefaultVal: string = null;
  FieldCheckBox: boolean = false;
  FieldInputType: string = "";

  ngOnInit(): void {
    this.customFormBuilder()
  }

  // getFormControlFields(){
  //   const formGroupFields = {}
  //   for (const field of Object.keys(this.model)) {
  //     formGroupFields[field] = new FormControl("");
  //     this.fields.push(field);
  //   }
  //   return formGroupFields;
  // }

  // buildForm(){
  //   const formGroupFields = this.getFormControlFields();
  //   this.registerForm = new FormGroup(formGroupFields);
  // }

  customFormBuilder() {
    this.customForm = this.fb.group({
      Formtitle: ["Untitled form", [Validators.required, Validators.maxLength(100)]],
      FormDescription: [null, [Validators.maxLength(100)]]
    })
  }

  onSubmit(){
    console.log(this.customForm);
  }

  AddToForm(event){

    // Sample data: {labelName: 'e', placeholder: 'f', isRequired: true, fieldType: '1', defaultValue: 'g'}

    const model = {
      labelName: '',
      placeholder: '',
      isRequired: false,
      fieldType: '',
      defaultValue: ''
    };

    model.labelName = this.FieldLabel;
    model.placeholder = this.FieldPlace;
    model.defaultValue = this.FieldDefaultVal;
    model.isRequired = this.FieldCheckBox;
    model.fieldType = this.FieldInputType;

    this.fields.push(model)

    this.FieldLabel = "";
    this.FieldPlace = "";
    this.FieldDefaultVal = "";
    this.FieldCheckBox = false;
    this.FieldInputType = "";

    console.log(this.fields);
  }

}
