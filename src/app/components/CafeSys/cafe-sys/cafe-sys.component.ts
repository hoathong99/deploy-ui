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
import { Table, ItemServing } from '../Dto/Dtos';
import { CategoryScreenComponent } from '../category-screen/category-screen.component';
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
  ],
  templateUrl: './cafe-sys.component.html',
  styleUrl: './cafe-sys.component.css',
})
export class CafeSysComponent {
  searchKeyword: string = '';
  tabOption: string = '';
  tableInput: Table = new Table();
  selectedCategory: string = '';
  displayItemServing: ItemServing[] = [];
  step: number = 1;
  min: number = 0;
  tempCount: number = 0;
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
  ngOnInit() {}
  setTabOption(num: number) {
    this.tabOption = num.toString();
    console.log('Change tab to' + this.tabOption);
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
    if (item.count > 0 && this.tableInput.bill.id!='') {
      this.tableInput.bill.listArray.push(new ItemServing(item.id, item.name, item.price, item.image, item.descrip, item.count, item.category_id, item.category_name ));
      console.log(this.tableInput);
    }
  }
}
