import { Router } from '@angular/router';
import { FormTableService } from './../proxy/form-tables/form-table.service';
import { FormFieldService } from './../proxy/form-fields/form-field.service';
import { Component, OnInit } from '@angular/core';
// import {ClipboardModule} from '@angular/cdk/clipboard';


@Component({
  selector: 'app-all-forms',
  templateUrl: './all-forms.component.html',
  styleUrls: ['./all-forms.component.scss'],
  providers: []
})
export class AllFormsComponent implements OnInit {

  constructor(private apiservice: FormTableService, private router: Router) { }

  tableList: any
  isModalOpen: boolean = false
  sharedFormModalTitle: string = ""
  sharedFormModalLink: string = ""

  ngOnInit(): void {
    this.getAllTables()
  }

  getAllTables(){
    this.apiservice.getAllTables().subscribe(res => {
      this.tableList = res
    })
  }

  DeleteForm(table){
    let tableId = table.id;
    this.apiservice.delete(tableId).subscribe(res => {
      this.getAllTables();
    })
  }

  ShareForm(table){
    let tableId = table.id
    this.sharedFormModalTitle = table.title
    this.sharedFormModalLink = window.location.protocol + "//" + location.host +"/view-form/"+tableId
    this.isModalOpen = true
    // alert(window.location.protocol + "//" + location.host +"/view-form/"+tableId)
  }

  copyClipboard(){
    navigator.clipboard.writeText(this.sharedFormModalLink)
  }

  ViewResponse(table){
    console.log(table);
    this.router.navigate(['/form-responses', table.title, table.id])
  }


}
