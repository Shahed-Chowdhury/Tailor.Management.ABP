import { FormTableService } from './../proxy/form-tables/form-table.service';
import { FormFieldService } from './../proxy/form-fields/form-field.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-forms',
  templateUrl: './all-forms.component.html',
  styleUrls: ['./all-forms.component.scss'],
  providers: []
})
export class AllFormsComponent implements OnInit {

  constructor(private apiservice: FormTableService) { }

  tableList: any

  ngOnInit(): void {
    this.getAllTables()
  }

  getAllTables(){
    this.apiservice.getAllTables().subscribe(res => {
      this.tableList = res
      console.log(this.tableList);
    })
  }

  DeleteForm(table){
    let tableId = table.id;
    console.log(tableId);
    this.apiservice.delete(tableId).subscribe(res => {
      console.log(res);
      this.getAllTables();
    })
    // alert("works")
  }

}
