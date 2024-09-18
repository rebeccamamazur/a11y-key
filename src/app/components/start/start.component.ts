import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [],
  templateUrl: './start.component.html',
  styleUrl: './start.component.scss'
})
export class StartComponent {
  @Output() public step = new EventEmitter<any>();

  public stepForward() {
    this.step.emit(1);
  }
}
