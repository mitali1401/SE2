import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthservicesService } from '../authservices.service'

@Component({
  selector: 'app-querycomponent',
  templateUrl: './querycomponent.component.html',
  styleUrls: ['./querycomponent.component.css']
})
export class QuerycomponentComponent implements OnInit {

  constructor(public authser: AuthservicesService) { }
  @Input() query = {
    emp_id: '',
    comment: '',


  };

  ngOnInit(): void {
  }
  askQuery() {
    this.authser.askQuery(this.query.emp_id,this.query.comment).subscribe((data: {}) => {

      console.log(data)
      this.reset();
    })
  }
  reset(){
    this.query.emp_id ='',
    this.query.comment =''
  }
}

