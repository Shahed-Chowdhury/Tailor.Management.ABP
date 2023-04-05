import { Component, OnInit } from '@angular/core';
import { FormTableService } from '@proxy/form-tables';
import { ToasterService } from '@abp/ng.theme.shared';

@Component({
  selector: 'app-all-forms',
  templateUrl: './all-forms.component.html',
  styleUrls: ['./all-forms.component.scss']
})
export class AllFormsComponent implements OnInit {

  tableList: any;
  isModalOpen = false;
  sharedFormModalTitle: string = "";
  sharedFormModalLink: string = "";
  copyClipboardBtnMsg: string = "Copy to clipboard"
  disableCopyBtn: boolean = false;

  constructor(private formTableService: FormTableService, private toaster: ToasterService) { }

  ngOnInit(): void {
    this.formTableService.getAllTables().subscribe(res => {
      this.tableList = res
    })
  }

  ShareForm(table){
    let tableId = table.id
    this.sharedFormModalTitle = table.title
    this.sharedFormModalLink = window.location.protocol + "//" + location.host +"/view-form/"+tableId
    this.isModalOpen = true
    navigator['clipboard'].readText().then((data)=>{
      if(this.sharedFormModalLink === data){
        this.copyClipboardBtnMsg = "Copied to clipboard"
        this.disableCopyBtn = true
      }else{
        this.copyClipboardBtnMsg = "Copy to clipboard"
        this.disableCopyBtn = false
      }
    });
    // alert(window.location.protocol + "//" + location.host +"/view-form/"+tableId)
  }

  copyClipboard(){
    navigator.clipboard.writeText(this.sharedFormModalLink)
    this.toaster.success("Copied to clipboard", "Success");
    this.copyClipboardBtnMsg = "Copied to clipboard"
    this.disableCopyBtn = true
  }

}
