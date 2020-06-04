import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthservicesService } from '../authservices.service'

@Component({
  selector: 'app-leave-component',
  templateUrl: './leave-component.component.html',
  styleUrls: ['./leave-component.component.css']
})
export class LeaveComponentComponent implements OnInit {

  constructor(public authser: AuthservicesService) { }
@Input () leaves ={ emp_id :'',from_date :'',to_date:''}
  ngOnInit(): void {
    
  }
  addLeave(){
   
    this.authser.addLeave(this.leaves.emp_id,this.leaves.from_date,this.leaves.to_date).subscribe(data =>{
     console.log(data);
     this.reset();
    })
  }
  reset(){
    this.leaves.emp_id = '',
    this.leaves.from_date = '',
    this.leaves.to_date = ''
  }
}
