import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { SplitterModule } from 'primeng/splitter';
import { AppHeaderComponent } from '../app-header/app-header.component';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { DividerModule } from 'primeng/divider';
import { TabsModule } from 'primeng/tabs';
import { TableScreenComponent } from '../table-screen/table-screen.component';
import { BillScreenComponent } from '../bill-screen/bill-screen.component';
import { Table, ItemServing } from '../common/Dtos';
import { CategoryScreenComponent } from '../category-screen/category-screen.component';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { TakeAwayComponent } from "../take-away/take-away.component";
import { SettingComponent, Setting } from '../setting/setting.component';
import { CommonMiddleWave } from '../common/Middlewave';
@Component({
  selector: 'app-cafe-sys',
  imports: [
    MatCardModule,
    SplitterModule,
    AppHeaderComponent,
    InputIconModule,
    IconFieldModule,
    InputTextModule,
    FloatLabelModule,
    FormsModule,
    DividerModule,
    TabsModule,
    TableScreenComponent,
    BillScreenComponent,
    CategoryScreenComponent,
    SelectButtonModule,
    TakeAwayComponent,
    SettingComponent
],
  templateUrl: './cafe-sys.component.html',
  styleUrl: './cafe-sys.component.css',
})
export class CafeSysComponent {
  searchKeyword: string = '';
  tabOption: string = '';
  SettingOption: string = '';
  tableInput: Table = new Table();
  selectedCategory: string = '';
  displayItemServing: ItemServing[] = [];
  step: number = 1;
  min: number = 0;
  tempCount: number = 0;
  setting: Setting = new Setting();
  sanitizedSvgs: SafeHtml[] = [];
  paymentMethods: string[] = [];
  commonMiddleWave = new CommonMiddleWave();
  constructor(private sanitizer: DomSanitizer) {}
  itemServings: ItemServing[] = [];

  ngOnInit() {
    this.itemServings = this.commonMiddleWave.FetchItemServing();
    this.getSetting();
    this.CalculateBill();
    // Sanitize the SVG string
    this.setting.paymentMethods.forEach((element) => {
      this.sanitizedSvgs.push(this.sanitizer.bypassSecurityTrustHtml(element));
    });
  }

  getSetting() {
    this.setting = this.commonMiddleWave.FetchSetting();
  }
  setTabOption(num: number) {
    this.tabOption = num.toString();
    // console.log('Change tab to' + this.tabOption);
  }

  setSettingOption(num: number) {
    this.SettingOption = num.toString();
    // console.log('Change setting tab to' + this.tabOption);
  }

  setTable(table: Table) {
    this.tableInput = table;
    // console.log('Change tab to' + this.tableInput);
  }

  setTableAndOpenMenu(bool: boolean) {
    if (bool == true) {
      this.tabOption = '3';
      // console.log('taboption ' + this.tabOption);
    }
  }

  setCategory(s: string) {
    this.selectedCategory = s;
    this.displayItemServing = this.itemServings
      .filter((item) => item.category_id === s) // Keep only items of the given category
      .map((item) => ({ ...item })); // Create a new array with copies of items
    console.log(this.selectedCategory);
  }

  increase(index: number) {
    this.displayItemServing[index].count += this.step;
  }

  decrease(index: number) {
    if (this.displayItemServing[index].count > 0) {
      this.displayItemServing[index].count -= this.step;
    }
  }

  onInputChange(index: number, event: any) {
    let newValue = Number(event.target.value);
    if (newValue >= 0) {
      this.displayItemServing[index].count = newValue;
    } else {
      this.displayItemServing[index].count = 0;
    }
  }

  sendItemToBill(item: ItemServing) {
    if (item.count > 0 && this.tableInput.bill.id != '') {
      this.tableInput.bill.listArray.push(
        new ItemServing(
          item.id,
          item.name,
          item.price,
          item.image,
          item.descrip,
          item.count,
          item.category_id,
          item.category_name
        )
      );
      // console.log(this.tableInput);
      this.CalculateBill();
    }
  }

  CalculateBill() {
    this.tableInput.bill.VAT = this.setting.VAT_current;
    this.tableInput.bill.subTotal = 0;
    this.tableInput.bill.listArray.forEach((element) => {
      this.tableInput.bill.subTotal += element.price;
    });
    this.tableInput.bill.total =
      this.tableInput.bill.subTotal * (1 + this.tableInput.bill.VAT);
    this.tableInput.bill.total =
      this.tableInput.bill.subTotal * (1 + this.tableInput.bill.VAT);
    this.tableInput.bill.total = Number(this.tableInput.bill.total.toFixed(2));
  }
}
