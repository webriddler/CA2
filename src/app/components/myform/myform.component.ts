import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css']
})
export class MyformComponent {
  Addrs = {City: 'ABC', State: 'SD'};
  display(V:any){
    console.log(V.value);
  }

  submit(frm: NgForm){
    console.log(frm.value);
  }

  job_location = [
    {City: 'Pune', Location: 'Northway East Pune 144021'},
    {City: 'Jaipur', Location: 'Eastern Wood Shyam Hotel 144120'},
    {City: 'Delhi', Location: 'Gandhi Park Near Skylark Hotel 174752'},
  ]
  
}
