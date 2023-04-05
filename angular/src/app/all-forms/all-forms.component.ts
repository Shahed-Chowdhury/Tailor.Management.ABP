import { Router } from '@angular/router';
import { FormTableService } from './../proxy/form-tables/form-table.service';
import { FormFieldService } from './../proxy/form-fields/form-field.service';
import { Component, OnInit } from '@angular/core';
// import {ClipboardModule} from '@angular/cdk/clipboard';
import { ToasterService } from '@abp/ng.theme.shared';


@Component({
  selector: 'app-all-forms',
  templateUrl: './all-forms.component.html',
  styleUrls: ['./all-forms.component.scss'],
  providers: []
})
export class AllFormsComponent implements OnInit {

  constructor(private apiservice: FormTableService, private router: Router, private toaster: ToasterService) { }

  tableList: any
  isModalOpen: boolean = false
  sharedFormModalTitle: string = ""
  sharedFormModalLink: string = ""
  copyClipboardBtnMsg: string = "Copy to clipboard"
  disableCopyBtn: boolean = false;

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
    navigator['clipboard'].readText().then((data)=>{
      if(this.sharedFormModalLink === data){
        this.copyClipboardBtnMsg = "Copied to clipboard"
        this.disableCopyBtn = true
      }else{
        this.copyClipboardBtnMsg = "Copy to clipboard"
        this.disableCopyBtn = false
      }
    });
  }

  copyClipboard(){
    navigator.clipboard.writeText(this.sharedFormModalLink)
    this.toaster.success("Copied to clipboard", "Success");
    this.copyClipboardBtnMsg = "Copied to clipboard"
    this.disableCopyBtn = true
  }

  ViewResponse(table){
    console.log(table);
    this.router.navigate(['/form-responses', table.title, table.id])
  }


}
