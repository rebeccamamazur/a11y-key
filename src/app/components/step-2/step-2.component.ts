import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-step-2',
  standalone: true,
  imports: [],
  templateUrl: './step-2.component.html',
  styleUrl: './step-2.component.scss'
})
export class Step2Component {

  @ViewChild('header')
  public header!: ElementRef;
  @Input() public key: number[] = [];
    
  ngAfterViewInit() {
    setTimeout(() => this.header.nativeElement.focus());
  }

}
