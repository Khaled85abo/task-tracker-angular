import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from 'src/app/Task';
@Injectable({
  providedIn: 'root',
})
export class ToggleTaskService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  private apiUrl: string = 'http://localhost:43432/tasks';
  constructor(private http: HttpClient) {}

  updateDone(task: Task): Observable<Task> {
    return this.http.put<Task>(
      `${this.apiUrl}/${task.id}`,
      task,
      this.httpOptions
    );
  }
}
