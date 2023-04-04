import { ExcelService } from './../services/excel.service';
import { FormFieldService } from './../proxy/form-fields/form-field.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-responses',
  templateUrl: './form-responses.component.html',
  styleUrls: ['./form-responses.component.scss']
})
export class FormResponsesComponent implements OnInit {

  formId: string = ""
  formTitle: string = ""
  formColumns: Array<Object> = []
  formResponses: Array<Object> = []

  constructor(private excelService: ExcelService, private router: Router, private activatedRoute: ActivatedRoute, private formService: FormFieldService) { }

  ngOnInit(): void {
    this.formId = this.activatedRoute.snapshot.params["id"]
    this.formTitle = this.activatedRoute.snapshot.params["title"]
    this.getFormColumns()
  }

  getFormColumns(){
    this.formService.getAllFormFieldsByFormId(this.formId).subscribe(res => {
      this.formColumns = res
      this.getFormResponses()
    })
  }

  getFormResponses(){
    this.formService.getAllResponsesByIdByFormId(this.formId).subscribe(res => {
      // console.log(this.formColumns);
      this.formResponses = res
      var temp = []
      this.formResponses.map(data => {
        temp.push(JSON.parse(data["response"]))
      })
      this.formResponses = temp
      // console.log(this.formResponses);
    })
  }

  downloadResponse(){
    this.excelService.exportAsExcelFile(this.formResponses, this.formTitle + " responses");
  }

}
