import { Component } from '@angular/core';

@Component({
  selector: 'app-data1',
  templateUrl: './data1.component.html',
  styleUrls: ['./data1.component.css']
})
export class Data1Component {
  datasheet = [
    {'Course': 'CAP917', 'Date': '12 Nov'},
    {'Course': 'CAP916', 'Date': '20 Nov'},
    {'Course': 'CAP912', 'Date': '26 Nov'},
    {'Course': 'CAP910', 'Date': '10 Dec'}
  ]
}
