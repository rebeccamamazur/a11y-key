import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StartComponent } from './components/start/start.component';
import { Step1Component } from './components/step-1/step-1.component';
import { Step2Component } from "./components/step-2/step-2.component";
import { Step3Component } from "./components/step-3/step-3.component";
import { Step4Component } from "./components/step-4/step-4.component";
import { EndComponent } from "./components/end/end.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, StartComponent, Step1Component, EndComponent, Step2Component, Step3Component, Step4Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public step:number = 0;
  public key: number[] = [3,6,2,7];
  public stepForward(step: any) {
    this.step = step;
  }
}
