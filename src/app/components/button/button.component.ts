import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  // Fixing variable initializing problem by declaring it in constructor or by adding ! after the varibale
  @Input() color: string;
  @Input() text!: string;
  @Output() btnClick = new EventEmitter();
  showForm: boolean = false;
  constructor() {
    this.color = '';
  }

  ngOnInit(): void {}

  onClick() {
    this.btnClick.emit();
  }
}
