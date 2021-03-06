import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Task } from '../Task';
@Injectable({
  providedIn: 'root',
})
export class GetAllTasksService {
  private apiUrl: string = 'http://localhost:43432/tasks';
  constructor(private http: HttpClient) {}

  getAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }
}
