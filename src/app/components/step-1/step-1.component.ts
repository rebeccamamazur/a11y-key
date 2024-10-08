import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-step-1',
  standalone: true,
  imports: [],
  templateUrl: './step-1.component.html',
  styleUrl: './step-1.component.scss'
})
export class Step1Component {

  @ViewChild('header')
  public header!: ElementRef;
  @Input() public key: number[] = [];
    
  ngAfterViewInit() {
    setTimeout(() => this.header.nativeElement.focus());
  }

}
