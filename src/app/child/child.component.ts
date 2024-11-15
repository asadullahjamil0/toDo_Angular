import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() item = 0;
  @Input() item_1: { name: string, email: string } = { name: '', email: '' };

}
