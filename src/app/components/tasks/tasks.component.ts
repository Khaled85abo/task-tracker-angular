import { Component, OnInit } from '@angular/core';
import {} from 'rxjs';
import { Task } from '../../Task';
import { TaskService } from 'src/app/services/task.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  // array: (number | string| boolean)[] = [1, 2, 3, 4, 5, 6, 'hej', true]

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  remove(id: number) {
    console.log(id);
  }
}
