import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-step-4',
  standalone: true,
  imports: [],
  templateUrl: './step-4.component.html',
  styleUrl: './step-4.component.scss'
})
export class Step4Component {

  @ViewChild('header')
  public header!: ElementRef;
  @Input() public key: number[] = [];
    
  ngAfterViewInit() {
    setTimeout(() => this.header.nativeElement.focus());
  }

}
