import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';
// import { userInfo } from 'os';
@Injectable({
  providedIn: 'root'
})
export class AuthservicesService {



  private apiURL: string = 'webapi/v1/';
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    })

  }
  // user opearations
  createUser(id,first_name,last_name,designation,email,password ,salary) {
    let user ={"id":parseInt(id),"first_name":first_name,"last_name" :last_name,"designation":designation,"email":email,"password":password,"salary":parseInt(salary)}
    return this.http.post(this.apiURL + 'emp', JSON.stringify(user), this.httpOptions)

  }
  updateUser(id: string, user: any) {

    return this.http.put(this.apiURL + '/emp/' + id, JSON.stringify(user), this.httpOptions)


  }
  getUser() {
    return this.http.get(this.apiURL + 'emp', this.httpOptions)
  }
  getUserById(uid) {
    return this.http.get(this.apiURL + 'emp/' + uid, this.httpOptions)


  }
  deleteUser(id) {
    return this.http.delete(this.apiURL + 'emp/' + id, this.httpOptions)
  }

  //group opeartions
  createGroup(id,group_name) {
let grupdata = {"id":parseInt(id),"group_name":group_name}
    // return this.http.post(`${this.apiURL}group`,grupdata)
    return this.http.post(this.apiURL + 'groups', JSON.stringify(grupdata), this.httpOptions)

  }
  getGroup() {
    return this.http.get(this.apiURL + 'groups', this.httpOptions)
  }
  getGroupById(gid){
    return this.http.get(this.apiURL + 'groups/' + gid, this.httpOptions)
  }

  public addUserGroup(group_id, user_id) {
    let userGroup = { "group_id": parseInt(group_id), "user_id": parseInt(user_id) }
    return this.http.post(this.apiURL + 'emp_group', JSON.stringify(userGroup), this.httpOptions)
  }
  getUserGroupDetails() {
    return this.http.get(this.apiURL + 'emp_group', this.httpOptions)

  }
  getUserGroupInfo(groupid) {
    return this.http.get(this.apiURL + 'emp_group/' + groupid, this.httpOptions)

  }
  getGroupByUserid(user_id){
    
    return this.http.get(this.apiURL + 'emp_group/' + user_id, this.httpOptions)

  }

 askQuery(emp_id,comment){
   let data = {"emp_id":parseInt(emp_id),"comment":Comment}
  return this.http.post(this.apiURL + 'query',JSON.stringify(data),this.httpOptions)

 }

 addLeave(emp_id,from_date,to_date){
   let data ={"emp_id":parseInt(emp_id),"from_date":from_date,"to_date":to_date}
   return this.http.post(this.apiURL +'leaves',JSON.stringify(data),this.httpOptions)
 }
 addAttendance(emp_id,attend_date){
  let data ={"emp_id":parseInt(emp_id),"attend_date":attend_date}
  return this.http.post(this.apiURL +'attendance',JSON.stringify(data),this.httpOptions)
 }

}
