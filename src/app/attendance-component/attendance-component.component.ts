import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthservicesService } from '../authservices.service'

@Component({
  selector: 'app-attendance-component',
  templateUrl: './attendance-component.component.html',
  styleUrls: ['./attendance-component.component.css']
})
export class AttendanceComponentComponent implements OnInit {
  @Input () attendance ={ emp_id :'',attend_date :''}

  constructor(public authser: AuthservicesService) { }
  ngOnInit(): void {
  }

  addAttendance(){
    this.authser.addAttendance(this.attendance.emp_id,this.attendance.attend_date).subscribe(data =>{
      console.log(data)
      this.reset()
    })
  }
  reset(){
    this.attendance.emp_id = '',
    this.attendance.attend_date = ''
  }
}
