import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'toDo_Angular';
  list: any[] = [];
  addTask(item: any) {
    this.list.push({ id: this.list.length, name: item });
  }
  removeTask(id: number) {
    this.list = this.list.filter(item => item.id !== id)
  }
}
