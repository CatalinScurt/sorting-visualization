import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DataForm } from 'src/app/Interfaces/DataForm';
import { typeButtons } from 'src/app/Interfaces/TypeButtons';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  dataForm = new FormGroup({
    arrayLength: new FormControl(''),
    speed: new FormControl(''),
  });

  arrayType: string = 'Random'

  typeButtons: typeButtons[] = [{
    'type': 'Random',
    'backgroundColor': '#e94922',
    'selected': true
  }, {
    'type': 'Ascending',
    'backgroundColor': '#ee6c4d',
    'selected': false
  }, {
    'type': 'Descending',
    'backgroundColor': '#ee6c4d',
    'selected': false
  }
  ]

  constructor() { }

  @Input() maxLength: any
  @Input() error: any
  @Output() updateDataEvent = new EventEmitter<{ inputsValue: any, arrayType: string }>();

  ngOnInit(): void { }

  handleOnSubmitForm = () => {
    this.updateDataEvent.emit({ inputsValue: this.dataForm.value, arrayType: this.arrayType })
  }

  handleSelectArrayType = (index: number) => {
    this.typeButtons.forEach((button, idx) => {
      if (idx === index) {
        this.arrayType = button.type
        button.selected = true
        button.backgroundColor = '#e94922'
      }
      else {
        button.selected = false
        button.backgroundColor = '#ee6c4d'
      }
    })
  }
}
