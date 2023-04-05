import { RoutesService } from '@abp/ng.core';
import { CreateUpdateFormFieldDTO } from './../proxy/form-fields/models';
import { FormTableDTO, CreateUpdateFormTableDTO } from './../proxy/form-tables/models';
import { FormTableService } from './../proxy/form-tables/form-table.service';
import { FormFieldService } from './../proxy/form-fields/form-field.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.scss'],
})
export class CustomFormComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private formTableService: FormTableService,
    private formFieldService: FormFieldService,
    private router: Router
  ) {}

  customForm!: FormGroup;
  formTitle: string = 'Untitled form';
  registerForm: any;
  fields = [];
  // FormTable{items: [], totalCount: 0} as PagedResultDto<AuthorDTO>
  // FormField: CreateUpdateFormFieldDTO = {}

  // Form fields
  FieldLabel: string = '';
  FieldPlace: string = '';
  FieldDefaultVal: string = '';
  FieldCheckBox: boolean = false;
  FieldInputType: string = '1';
  CreateForm: boolean = false;

  ngOnInit(): void {
    this.customFormBuilder();
  }

  customFormBuilder() {
    this.customForm = this.fb.group({
      Formtitle: ['Untitled form', [Validators.required, Validators.maxLength(100)]],
      FormDescription: [null, [Validators.maxLength(100)]],
    });
  }

  onSubmit() {
    let saveToTable: CreateUpdateFormTableDTO = { title: '', description: '' };
    saveToTable.title =
      this.customForm.value.Formtitle.length > 0
        ? this.customForm.value.Formtitle
        : 'Untitled form';
    saveToTable.description =
      this.customForm.value.FormDescription !== null ? this.customForm.value.FormDescription : '';
    this.formTableService.create(saveToTable).subscribe(res => {
      var slno = 1
      this.fields.forEach(field => {
        let saveToField: CreateUpdateFormFieldDTO = {
          labelName: '',
          placeholder: '',
          isRequired: false,
          fieldType: '1',
          defaultValue: '',
          formId: '',
          slNo: 0
        };
        saveToField.labelName = field.labelName;
        saveToField.placeholder = field.placeholder;
        saveToField.isRequired = field.isRequired;
        saveToField.fieldType = field.fieldType;
        saveToField.defaultValue = field.defaultValue;
        saveToField.formId = res.id;
        saveToField.slNo = slno;
        //console.log(saveToField, slno); // added for test
        slno++;
        this.formFieldService.saveFieldValueByField(saveToField).subscribe(res => {});
      });
      this.router.navigate(['/all-custom-forms'])
    });
  }

  EnableFieldInput() {
    event.preventDefault();
    this.CreateForm = true;
  }

  AddToForm(event) {
    // Sample data: {labelName: 'e', placeholder: 'f', isRequired: true, fieldType: '1', defaultValue: 'g'}

    const model = {
      labelName: '',
      placeholder: '',
      isRequired: false,
      fieldType: '',
      defaultValue: '',
    };

    model.labelName = this.FieldLabel;
    model.placeholder = this.FieldPlace;
    model.defaultValue = this.FieldDefaultVal;
    model.isRequired = this.FieldCheckBox;
    model.fieldType = this.FieldInputType;

    this.fields.push(model);

    this.FieldLabel = '';
    this.FieldPlace = '';
    this.FieldDefaultVal = '';
    this.FieldCheckBox = false;
    this.FieldInputType = '1';
  }

  DeleteInputField(index){
    this.fields.splice(index, 1) // slice method doesn't alter the array, whereas splice alter the array
  }
}
