import { Component } from '@angular/core';

@Component({
  selector: 'app-setting',
  imports: [],
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.css',
})
export class SettingComponent {}

export class setting {
  VAT_current: number;
  PaymentMethods: string[];

  constructor(vat?: number, methods?: string[]) {
    this.VAT_current = vat ?? 0;
    this.PaymentMethods = methods ?? [];
  }
}
