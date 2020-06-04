import { Component, OnInit } from '@angular/core';
import { AuthservicesService } from '../authservices.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-user-group-info',
  templateUrl: './user-group-info.component.html',
  styleUrls: ['./user-group-info.component.css']
})
export class UserGroupInfoComponent implements OnInit {
  userGroupInfo:any = []
  userName: any;
  unm: any;
  dummy_data = []
  constructor(private http: HttpClient,
    public authser: AuthservicesService) { }

  ngOnInit(): void {
    // this.loadUserGroupsInfo();
  }
  loadUserGroupsInfo(group_id) {
    this.dummy_data = [];
    this.authser.getUserGroupInfo(group_id).subscribe((data: {}) => {
     console.log(data);
     let res =data['data'];
     console.log("res",res)
    for(var i=0 ;i< res.length ;i++){
      var usr_id =res[i];
      var obj ={
        "username":res[i],
      };
      this.userGroupInfo.push(obj);
      
      this.authser.getUserById(usr_id).subscribe((data: {}) => {
        this.userName = data["data"]
        this.unm = this.userName["first_name"]
        this.dummy_data.push(this.unm)
        //console.log("userName",this.userName)
        //console.log("unm", this.unm)
      })
      
    }
   // console.log("dummy_data",this.dummy_data)
    
      
    })
  }

}
