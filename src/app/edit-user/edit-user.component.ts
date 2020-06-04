import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthservicesService } from '../authservices.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{FormBuilder,FormGroup,FormControl} from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];
  users: any={};
constructor(private http: HttpClient, public actRoute: ActivatedRoute,
  public authser: AuthservicesService, public router: Router) { }

ngOnInit(): void {
}
updateUser() {
  if (window.confirm('Are you sure, you want to update?')) {
    this.authser.updateUser(this.id, this.users).subscribe(data => {
      console.log(data);
      // this.router.navigate(['/employees-list'])
    })
  }
}

}
