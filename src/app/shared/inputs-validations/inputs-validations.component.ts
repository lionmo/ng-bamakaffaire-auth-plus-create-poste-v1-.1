import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-inputs-validations',
  templateUrl: './inputs-validations.component.html',
  styleUrls: ['./inputs-validations.component.scss']
})
export class InputsValidationsComponent implements OnInit {

  @Input() type = 'text'
  @Input() placeholder = ''
  @Input() control: FormControl = new FormControl()
  @Input() blank = ''
  @Input() format = ''
  constructor() { }

  ngOnInit(): void {
  }

}
