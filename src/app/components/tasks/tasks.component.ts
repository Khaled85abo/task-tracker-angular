import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { TaskService } from 'src/app/services/task.service';
import { GetAllTasksService } from 'src/app/services/get-all-tasks.service';
import { ToggleTaskService } from '../../services/toggleTask/toggle-task.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  // array: (number | string| boolean)[] = [1, 2, 3, 4, 5, 6, 'hej', true]

  constructor(
    private taskService: TaskService,
    private getAllTasksService: GetAllTasksService,
    private toggleTaskService: ToggleTaskService
  ) {}

  ngOnInit(): void {
    this.getAllTasksService
      .getAllTasks()
      .subscribe((tasks) => (this.tasks = tasks));
  }

  remove(id: number) {
    this.taskService
      .deleteTask(id)
      .subscribe(
        () => (this.tasks = this.tasks.filter((task) => task.id !== id))
      );
  }

  toggleDone(task: Task) {
    this.toggleTaskService
      .updateDone({ ...task, done: !task.done })
      .subscribe(() => (task.done = !task.done));
  }

  addNewTask(task: Task) {
    this.taskService
      .addTask(task)
      .subscribe((task) => (this.tasks = [...this.tasks, task]));
  }
}
