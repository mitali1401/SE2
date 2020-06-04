import { Component, OnInit, Input } from '@angular/core';
import { AuthservicesService } from '../authservices.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  myGroup = new FormGroup({
    first_name: new FormControl,
    last_name: new FormControl,
    username: new FormControl,
    password: new FormControl,
  });
  constructor(private http: HttpClient,
    public authser: AuthservicesService, public router: Router) { }

  ngOnInit(): void {
  }
  @Input() users = {
    id: '',
    first_name: '',
    last_name: '',
    designation: '',
    email: '',
    password: '',
    salary: ''


  };
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }),
  };

  onSubmitCreateUser() {
    if (this.users.id == '' && this.users.first_name == '' && this.users.last_name == '' && this.users.designation == '' && this.users.email == '' && this.users.password == '' && this.users.salary == '') {
      alert("Please fillout all user info..!!")
    }
    else {
      this.authser.createUser(this.users.id, this.users.first_name, this.users.last_name, this.users.designation, this.users.email, this.users.password, this.users.salary).subscribe((data: {}) => {

        console.log(data)
        //this.router.navigate(['/login']);
        this.resetUser();
      })
    }
  }
  resetUser() {
    this.users.id = '',
      this.users.first_name = '',
      this.users.last_name = '',
      this.users.designation = '',
      this.users.email = '',
      this.users.password = '',
      this.users.salary = ''
  }
}
