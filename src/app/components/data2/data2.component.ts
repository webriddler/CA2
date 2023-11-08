import { Component } from '@angular/core';

@Component({
  selector: 'app-data2',
  templateUrl: './data2.component.html',
  styleUrls: ['./data2.component.css']
})
export class Data2Component {
  datasheet = [
    {'Course': 'CSE217', 'Date': '02 Nov'},
    {'Course': 'CSE116', 'Date': '03 Nov'},
    {'Course': 'CSE512', 'Date': '06 Nov'},
    {'Course': 'CSE310', 'Date': '08 Dec'}
  ]
}
