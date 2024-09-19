import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-end',
  standalone: true,
  imports: [],
  templateUrl: './end.component.html',
  styleUrl: './end.component.scss'
})
export class EndComponent {

  @ViewChild('header')
  public header!: ElementRef;
  @Input() public key: number[] = [];
    
  ngAfterViewInit() {
    setTimeout(() => this.header.nativeElement.focus());
  }

}
