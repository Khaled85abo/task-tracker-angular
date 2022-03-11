import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  text: string = '';
  day: string = '';
  reminder: boolean = false;
  done: boolean = false;

  constructor() {}

  ngOnInit(): void {}
  checkBtn(): boolean {
    if (!this.text || !this.day) {
      return true;
    }
    return false;
  }
  onSubmit() {
    const task = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
      done: this.done,
    };
    this.onAddTask.emit(task);
    this.text = '';
    this.day = '';
    this.done = false;
  }
}
