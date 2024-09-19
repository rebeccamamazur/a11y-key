import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-step-4',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './step-4.component.html',
  styleUrl: './step-4.component.scss'
})
export class Step4Component {

  @ViewChild('header')
  public header!: ElementRef;
  @Input() public key: number[] = [];
  @Output() public focusNextStepButton: EventEmitter<any> = new EventEmitter<any>();

  public reveal: boolean = false;
    
  ngAfterViewInit() {
    setTimeout(() => this.header.nativeElement.focus());
  }
  public showDigit() {
    this.reveal = true;
    this.focusNextStepButton.emit();
  }

}
