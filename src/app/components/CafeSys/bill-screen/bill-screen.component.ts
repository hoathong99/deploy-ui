import { Component, Input } from '@angular/core';
import { Table } from '../Dto/Dtos';
import { setting } from '../../setting/setting.component';
@Component({
  selector: 'app-bill-screen',
  imports: [],
  templateUrl: './bill-screen.component.html',
  styleUrl: './bill-screen.component.css'
})
export class BillScreenComponent {
  @Input() currentTable : Table = new Table();
  @Input() currentSetting: setting = new setting();

  RemoveItem(index: number){
    this.currentTable.bill.listArray.splice(index,1);
    this.CalculateBill();
  }
  CalculateBill(){
    this.currentTable.bill.VAT = this.currentSetting.VAT_current;
    this.currentTable.bill.subTotal = 0;
    this.currentTable.bill.listArray.forEach(element => {
      this.currentTable.bill.subTotal += element.price;
    });
    this.currentTable.bill.total = this.currentTable.bill.subTotal*(1+this.currentTable.bill.VAT);
    this.currentTable.bill.total = Number(this.currentTable.bill.total.toFixed(2));
  }
}
