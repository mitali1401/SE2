import { Component, OnInit } from '@angular/core';
import { AuthservicesService } from '../authservices.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-user-form-component',
  templateUrl: './user-form-component.component.html',
  styleUrls: ['./user-form-component.component.css']
})
export class UserFormComponentComponent implements OnInit {
  userDetails: any = [];
  groupName: any;
  gnm: any;
  dummy_data = []
  constructor(
    private http: HttpClient,
    public authser: AuthservicesService) { }

  ngOnInit(): void {
  }
getName(id){
  this.authser.getUserById(id).subscribe((data:{}) =>{
    console.log("user name",data)

  })
}
  loadUserGroups(user_id) {
    this.dummy_data = [];
    



    this.authser.getGroupByUserid(user_id).subscribe((data :{})=> {
     // console.log(data);
      let res = data["data"];

      //console.log("res", res);
     
      for(var i =0 ;i < res.length ;i++){
        var g_id =res[i]
      // console.log("g_id",g_id);
        
       this.authser. getGroupById(g_id).subscribe((data :{}) =>{
        this.groupName = data["data"]
       // console.log("groupName", this.groupName);
        this.gnm = this.groupName["group_name"]
       // console.log("this.gnm",this.gnm)
        this.dummy_data.push(this.gnm)
       })
      
      }
      console.log("dummy_data",this.dummy_data)
    })
  }
}




