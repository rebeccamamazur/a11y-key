import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-step-3',
  standalone: true,
  imports: [],
  templateUrl: './step-3.component.html',
  styleUrl: './step-3.component.scss'
})
export class Step3Component {

  @ViewChild('header')
  public header!: ElementRef;
  @Input() public key: number[] = [];
    
  ngAfterViewInit() {
    setTimeout(() => this.header.nativeElement.focus());
  }

}
