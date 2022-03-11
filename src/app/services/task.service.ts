import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GetAllTasksService } from './get-all-tasks.service';
import { Task } from '../Task';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl: string = 'http://localhost:43432/tasks';
  constructor(
    private http: HttpClient,
    private getAllTasks: GetAllTasksService
  ) {}

  deleteTask(id: number): Observable<any> {
    console.log(id);
    return this.http.delete<number>(`${this.apiUrl}/${id}`);
    // return this.getAllTasks.getAllTasks();
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task, httpOptions);
  }
}
