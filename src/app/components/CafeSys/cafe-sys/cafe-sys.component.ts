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
import { SettingComponent, setting } from '../setting/setting.component';
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
  setting: setting = new setting();
  sanitizedSvgs: SafeHtml[] = [];
  paymentMethods: string[] = [];

  constructor(private sanitizer: DomSanitizer) {}
  //-----Dummy----------------------------------------------------------------
  itemServings: ItemServing[] = [
    new ItemServing(
      'I001',
      'Burger',
      5.99,
      'burger.png',
      'Delicious beef burger',
      0,
      'C001',
      'Fast Food'
    ),
    new ItemServing(
      'I002',
      'French Fries',
      3.49,
      'fries.png',
      'Crispy golden fries',
      0,
      'C001',
      'Fast Food'
    ),
    new ItemServing(
      'I003',
      'Hot Dog',
      4.99,
      'hotdog.png',
      'Classic hot dog with mustard',
      0,
      'C001',
      'Fast Food'
    ),

    new ItemServing(
      'I004',
      'Pasta',
      8.99,
      'pasta.png',
      'Creamy Alfredo pasta',
      0,
      'C002',
      'Italian'
    ),
    new ItemServing(
      'I005',
      'Pizza',
      12.99,
      'pizza.png',
      'Cheesy pepperoni pizza',
      0,
      'C002',
      'Italian'
    ),
    new ItemServing(
      'I006',
      'Lasagna',
      10.99,
      'lasagna.png',
      'Layers of pasta, cheese, and sauce',
      0,
      'C002',
      'Italian'
    ),

    new ItemServing(
      'I007',
      'Salad',
      6.99,
      'salad.png',
      'Fresh garden salad',
      0,
      'C003',
      'Healthy'
    ),
    new ItemServing(
      'I008',
      'Smoothie',
      5.49,
      'smoothie.png',
      'Refreshing fruit smoothie',
      0,
      'C003',
      'Healthy'
    ),
    new ItemServing(
      'I009',
      'Vegan Wrap',
      7.99,
      'vegan_wrap.png',
      'Nutritious vegan wrap',
      0,
      'C003',
      'Healthy'
    ),

    new ItemServing(
      'I010',
      'Steak',
      19.99,
      'steak.png',
      'Juicy grilled steak',
      0,
      'C004',
      'Grill'
    ),
    new ItemServing(
      'I011',
      'Grilled Chicken',
      10.99,
      'grilled_chicken.png',
      'Perfectly grilled chicken',
      0,
      'C004',
      'Grill'
    ),

    new ItemServing(
      'I012',
      'Wine',
      15.99,
      'wine.png',
      'Premium red wine',
      0,
      'C005',
      'Beverages'
    ),
  ];
  //---------------------------------------------------------------------------
  ngOnInit() {
    this.getSetting();
    this.CalculateBill();
    // Sanitize the SVG string
    this.setting.PaymentMethods.forEach((element) => {
      this.sanitizedSvgs.push(this.sanitizer.bypassSecurityTrustHtml(element));
    });
  }

  getSetting() {
    var tempPaymentmethodlist = [
      '<svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#F8F5E9"><path d="M80-707v-173h173v60H140v113H80Zm0 627v-173h60v113h113v60H80Zm627 0v-60h113v-113h60v173H707Zm113-627v-113H707v-60h173v173h-60ZM708-251h63v63h-63v-63Zm0-126h63v63h-63v-63Zm-63 63h63v63h-63v-63Zm-63 63h63v63h-63v-63Zm-63-63h63v63h-63v-63Zm126-126h63v63h-63v-63Zm-63 63h63v63h-63v-63Zm-63-63h63v63h-63v-63Zm252-332v252H519v-252h252ZM440-440v252H188v-252h252Zm0-332v252H188v-252h252Zm-50 534v-152H238v152h152Zm0-332v-152H238v152h152Zm331 0v-152H569v152h152Z"/></svg>',
      '<svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#F8F5E9"><path d="M540-420q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM220-280q-24.75 0-42.37-17.63Q160-315.25 160-340v-400q0-24.75 17.63-42.38Q195.25-800 220-800h640q24.75 0 42.38 17.62Q920-764.75 920-740v400q0 24.75-17.62 42.37Q884.75-280 860-280H220Zm100-60h440q0-42 29-71t71-29v-200q-42 0-71-29t-29-71H320q0 42-29 71t-71 29v200q42 0 71 29t29 71Zm480 180H100q-24.75 0-42.37-17.63Q40-195.25 40-220v-460h60v460h700v60ZM220-340v-400 400Z"/></svg>',
    ];
    this.setting = new setting(0.1, tempPaymentmethodlist); // tempo fixed setting . should call backend for saved setting if I actually make a backend
  }
  setTabOption(num: number) {
    this.tabOption = num.toString();
    console.log('Change tab to' + this.tabOption);
  }

  setSettingOption(num: number) {
    this.SettingOption = num.toString();
    console.log('Change setting tab to' + this.tabOption);
  }

  setTable(table: Table) {
    this.tableInput = table;
    console.log('Change tab to' + this.tableInput);
  }

  setTableAndOpenMenu(bool: boolean) {
    if (bool == true) {
      this.tabOption = '3';
      console.log('taboption ' + this.tabOption);
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
      console.log(this.tableInput);
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
