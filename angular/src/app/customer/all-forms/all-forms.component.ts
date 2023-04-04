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
    // alert(window.location.protocol + "//" + location.host +"/view-form/"+tableId)
  }

  copyClipboard(){
    navigator.clipboard.writeText(this.sharedFormModalLink)
    this.toaster.success("Copied to clipboard", "Success");
  }

}
