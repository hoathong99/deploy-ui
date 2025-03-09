import { Component, Input } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { CommonMiddleWave } from '../common/Middlewave';
import { TextareaModule } from 'primeng/textarea';
@Component({
  selector: 'app-setting',
  imports: [InputTextModule, FormsModule, FloatLabel, ToggleSwitchModule, TextareaModule],
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.css',
})
export class SettingComponent {
  @Input() SettingTab = '';
  Setting : Setting = new Setting();
  commonMiddleWave = new CommonMiddleWave();
  //----------------Enable input field bool-----------------------------
  businessBoolean: boolean = true;
  contactBoolean: boolean = true;
  addressBoolean: boolean = true;

  ngOnInit(){
    this.Setting = this.commonMiddleWave.FetchSetting();
  }
}

export class Setting {
  id: string;
  VAT_current: number;
  paymentMethods: string[];
  businessName: string;
  contact: string;
  address: string;
  currentUser: string;

  constructor(
    id?: string,
    vat?: number,
    methods?: string[],
    name?: string,
    contact?: string,
    address?: string,
    user?: string
  ) {
    this.VAT_current = vat ?? 0;
    this.paymentMethods = methods ?? [];
    this.id = id ?? '';
    this.businessName = name ?? '';
    this.contact = contact ?? '';
    this.address = address ?? '';
    this.currentUser = user ?? '';
  }
}
