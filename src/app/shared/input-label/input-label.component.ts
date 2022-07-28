import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-label',
  templateUrl: './input-label.component.html',
  styleUrls: ['./input-label.component.scss']
})
export class InputLabelComponent implements OnInit {

  @Input() labelName = ''
  constructor() { }

  ngOnInit(): void {
  }

}
