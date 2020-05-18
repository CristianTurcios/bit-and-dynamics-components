import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  @Input() hello: string;
  @Input() isBoolean: boolean;
  @Output() onSomething = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    console.log('isBoolean', typeof this.isBoolean);
  }

  emitOutput(): void {
    this.onSomething.emit('a beautiful output');
  }

  getMessage(message): string {
    return `${message} working well`;
  }
}
