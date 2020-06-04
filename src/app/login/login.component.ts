import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginserviceService } from '../loginservice.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public result;
  @Input() userInfo = { id: '', password: '' };


  public constructor(private http: HttpClient, public loginauthser: LoginserviceService, public router: Router) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/son'
    })
  }



  ngOnInit() {

  }
  signUpuser() {
    if (this.userInfo.id == "root" && this.userInfo.password == "admin") {
      this.router.navigate(['/homepage']);
    }
    else {
      this.loginauthser.loginInfo(this.userInfo.id, this.userInfo.password).subscribe(data => {
        console.log(data);
        let res: any = data;
        if (res.status == 200) {


          alert("login")

         
          this.router.navigate(['/userForm']);

        }
        else {

          alert("Password incorrect")


        }

      })
    

    }
  }
}
