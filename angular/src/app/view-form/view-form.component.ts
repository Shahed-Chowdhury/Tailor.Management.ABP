import { FormTableService } from './../proxy/form-tables/form-table.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-form',
  templateUrl: './view-form.component.html',
  styleUrls: ['./view-form.component.scss']
})
export class ViewFormComponent implements OnInit {

  constructor(private route: ActivatedRoute, private apiservice: FormTableService) { }

  form: any

  // Form fields
  formTitle: string = ""
  formDesc: string = ""

  ngOnInit(): void {
    this.getFormWithLabels(this.route.snapshot.params['id'])
  }

  getFormWithLabels(tableId){
    console.log(tableId);
    this.apiservice.getTableWithFieldsById(tableId).subscribe(res => {
      this.form = res
      this.formTitle = this.form.title;
      this.formDesc = this.form.description
      console.log(res);
    })
  }

}
