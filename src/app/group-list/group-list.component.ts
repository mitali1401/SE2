import { Component, OnInit, Input } from '@angular/core';
import { AuthservicesService } from '../authservices.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {
  group :any =[];
  // keyword = 'group_name';
  // data = [
  //   { id: 0, group_name: '' }];

  constructor(private http: HttpClient,
    public authser: AuthservicesService) { }

  ngOnInit() {
    this.loadGroups();

  }
  // selectEvent(item) {
  //   // do something with selected item
  // }

  // onChangeSearch(val: string) {
  //   return this.authser.getGroup().subscribe((data: {}) => {
  //     console.log(data);
  //     this.group = data['data'];
  //     // this.Employee = data['data'];
  //   })
  //   // fetch remote data from here
  //   // And reassign the 'data' which is binded to 'data' property.
  // }

  // onFocused(e) {
  //   // do something when input is focused
  // }

  loadGroups() {

    return this.authser.getGroup().subscribe((data: {}) => {
      console.log(data);
      // this.group = data['data'];

      // this.Employee = data['data'];
      let res :any  = data;
      
      var arrayData = res['data'];
      console.log("arrayData[0][0]",arrayData[0][0]);
      for(var i=0 ;i < arrayData.length ;i++){
        console.log("arrayData[i][1]",arrayData[i][1]);
        var obj={
          "id":arrayData[i][0],
          "group_name":arrayData[i][1],
          "group_info":arrayData[i][2],
        };
        console.log("obj",obj)
        this.group.push(obj);
      }
    })
  }

}
