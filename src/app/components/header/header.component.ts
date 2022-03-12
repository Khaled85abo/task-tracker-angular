import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() toggleForm: EventEmitter<boolean> = new EventEmitter();
  title: string = 'Task tracker';
  showForm: boolean = true;
  subscription!: Subscription;
  constructor(private uiService: UiService) {}

  // Life cycle methods onLoad
  ngOnInit(): void {}
  toggleAddTask() {
    this.uiService.toggleShowForm();
  }
}
