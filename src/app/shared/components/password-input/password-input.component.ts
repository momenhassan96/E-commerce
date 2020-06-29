import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss']
})
export class PasswordInputComponent implements OnInit{
  @Input()showPassword:boolean;
  @Input() isInvalid:boolean;
  @Output() model = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  getModel(element){
    this.model.emit(element.value)
  }

}
