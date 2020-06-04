import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthservicesService } from '../authservices.service'
@Component({
  selector: 'app-gruop',
  templateUrl: './gruop.component.html',
  styleUrls: ['./gruop.component.css']
})
export class GruopComponent implements OnInit {

  constructor(private http: HttpClient,
    public authser: AuthservicesService) { }

  ngOnInit(): void {
  }



  // private URL = 'http://localhost:9090/webapi/v1/group';
  public result;

  @Input() grupdata = {
    group_name: '',
    id: '',


  };

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }),
  };

  onSubmitCreate() {
    this.authser.createGroup(this.grupdata.group_name,this.grupdata.id).subscribe((data: {}) => {

      console.log(data)
    })
  }
  reset(){
    this.grupdata.group_name ='',
    this.grupdata.id = ''
  }
}
