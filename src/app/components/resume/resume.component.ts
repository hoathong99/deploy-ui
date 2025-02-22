import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  imports: [],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css',
})
export class ResumeComponent {
  Localize: string = 'EN';
  switchLanguage(input: string) {
    console.log("trigger switch language");
    switch (input) {
      case 'EN': {
        this.Localize = 'EN';
        break;
      }
      case 'VN': {
        this.Localize = 'VN';
        break;
      }
      default: {
        this.Localize = 'EN';
        break;
      }
    }
  }
}
