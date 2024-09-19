import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-step-3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './step-3.component.html',
  styleUrl: './step-3.component.scss'
})
export class Step3Component {

  @ViewChild('header')
  public header!: ElementRef;
  @Input() public key: number[] = [];

  public revealKey: boolean = false;
  public revealRandom: boolean = false;
  public randomDigit: number = 0;
  ngAfterViewInit() {
    setTimeout(() => this.header.nativeElement.focus());
  }

  public toggleRevealKey() {
    this.revealKey = true;
    this.revealRandom = false;
  }

  public toggleRevealRandom() {
    const randomDigit = Math.floor(Math.random() * 10);
    this.randomDigit = randomDigit === this.key[3] ? this.key[3] + 1 : randomDigit; // Don't allow random to be the correct digit
    this.revealRandom = true;
    this.revealKey = false;
  }

}
