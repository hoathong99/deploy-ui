import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-app-header',
  imports: [],
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.css'
})
export class AppHeaderComponent {
  searchKeyword : string ="";
  @Output() tabOption = new EventEmitter<number>();

  clickOnTab(option:number){
    this.tabOption.emit(option);
    console.log("clickon tab"+option);
  }
}
