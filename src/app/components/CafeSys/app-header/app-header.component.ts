import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-app-header',
  imports: [DrawerModule, ButtonModule],
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.css'
})
export class AppHeaderComponent {
  searchKeyword : string ="";
  @Output() tabOption = new EventEmitter<number>();
  @Output() SettingOption = new EventEmitter<number>();
  visible: boolean = false;

  clickOnTab(option:number){
    this.tabOption.emit(option);
    console.log("clickon tab"+option);
    if (option == 5) {
      this.visible = false;
    }
  }

  OpensettingTab(option:number){
    this.SettingOption.emit(option);
    console.log("clickon setting option"+option);
  }
}
