import { Component, OnInit } from '@angular/core';
import { AuthservicesService } from '../authservices.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  user: any = [];

  constructor(private http: HttpClient,
    public authser: AuthservicesService) { }

  ngOnInit(): void {
    this.loadUser()
  }

  loadUser() {

    this.authser.getUser().subscribe((data: {}) => {
      //console.log(data)
      let res: any = data;
      //console.log(res['data']);
      var arrdata = res['data']
      //console.log(arrdata)
      for (var i = 0; i < arrdata.length; i++) {
        // console.log(arrdata[i][0]);
        // console.log(arrdata[i][1]);
        // console.log(arrdata[i][2]);
        // console.log(arrdata[i][3]);
        var obj = {
          "id": arrdata[i][0],
          "first_name": arrdata[i][1],
          "last_name": arrdata[i][2],
          "designation": arrdata[i][3],
          "email": arrdata[i][4],
          "password": arrdata[i][5],
          "salary": arrdata[i][6]
        };
        //console.log(obj);
        this.user.push(obj);
      }

    })
  }
  deleteUser(id) {
    if (window.confirm('Are you sure, you want to delete?')) {
      this.authser.deleteUser(id).subscribe((data: {}) => {

        this.loadUser()
      })
    }
  }
}
