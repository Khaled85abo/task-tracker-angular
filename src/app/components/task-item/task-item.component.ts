import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Output() removeTask: EventEmitter<number> = new EventEmitter();
  @Input() task!: Task;
  // svgColor: string = this.task.done ? 'red' : 'lightgray';
  // disableButton!: boolean;
  constructor() {
    // this.task = { id: 1, text: 'kkj', day: 'kj', reminder: true, done: false };
    // this.disableButton = this.task.done;
    // this.svgColor = this.task.done ? 'red' : 'lightgray';
  }

  ngOnInit(): void {}
  remove(task: Task) {
    task.done && this.removeTask.emit(task.id);
  }
  svgColor(done: boolean): string {
    return done ? 'var(--bin)' : 'var(--inactive-svg)';
  }

  toggleDone(): void {
    this.task.done = !this.task.done;
  }
}
