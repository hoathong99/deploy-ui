import { Component } from '@angular/core';
import { ResumeComponent } from '../components/resume/resume.component';

@Component({
  selector: 'app-home',
  imports: [ResumeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  IsBouncerPersuaded : boolean = false;
  Persuade (){
    console.log("Persuade clicked");
    this.IsBouncerPersuaded = !this.IsBouncerPersuaded;
  }
}
