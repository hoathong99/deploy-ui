import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { HeaderComponent } from './components/header/header.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'deploy-ui';
  IsBouncerPersuaded : boolean = false;
  IsWelcomed : boolean = false;
  Persuade (){
    console.log("Persuade clicked");
    this.IsBouncerPersuaded = !this.IsBouncerPersuaded;
    this.IsWelcomed = true;
  }
}
