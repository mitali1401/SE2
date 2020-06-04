import { Component, OnInit } from '@angular/core';
import { AuthservicesService } from '../authservices.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-user-group-list',
  templateUrl: './user-group-list.component.html',
  styleUrls: ['./user-group-list.component.css']
})
export class UserGroupListComponent implements OnInit {
  UserGroupDetails: any = [];
  userName: any[];
  unm: any;
  gnm: any;
  groupName: any[];
  constructor(private http: HttpClient,
    public authser: AuthservicesService) { }

  ngOnInit(): void {
    this.loadUserGroups();
  }
  loadUserGroups() {

    this.authser.getUserGroupDetails().subscribe((data: {}) => {
      console.log("usergroup", data);
      let res: any = data;

      var arrdata = res['data']

      for (var i = 0; i < arrdata.length; i++) {
        // console.log("arrdata[i][1]",arrdata[i][1])
        var uid = arrdata[i][1];
        var gid = arrdata[i][2];
        this.authser.getUserById(uid).subscribe((data: {}) => {
          this.userName = data["data"]
          this.unm = this.userName["first_name"]
          //  console.log("userName",this.userName)
          console.log("unm", this.unm)
        })
        this.authser.getGroupById(gid).subscribe((data: {}) => {
          this.groupName = data["data"]
          this.gnm = this.groupName["group_name"]
          //  console.log("userName",this.userName)
          console.log("gnm", this.gnm)
        })

        var obj = {
          // "id": arrdata[i][0],
          // "user_id": arrdata[i][1],
          // "group_id": arrdata[i][2],
          "id": arrdata[i][0],
          "user_name": this.unm,
          "group_name": this.gnm,
        };
        // this.UserGroupDetails = obj['data']
        console.log("obj", obj)
        this.UserGroupDetails.push(obj);
      }

      // this.UserGroupDetails = data['data'];
      // this.Employee = data['data'];
    })
  }

}
