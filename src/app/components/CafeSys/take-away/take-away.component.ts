import { Component, EventEmitter, Output } from '@angular/core';
import { Bill, ItemServing, Table } from '../common/Dtos';

@Component({
  selector: 'app-take-away',
  imports: [],
  templateUrl: './take-away.component.html',
  styleUrl: './take-away.component.css'
})
export class TakeAwayComponent {
  billList : Bill[] = [];
  @Output() table = new EventEmitter<Table>();

  //-------DUMMY DATA--------------------//
  dummyBills: Bill[] = [
    new Bill("1", [
      new ItemServing("101", "Burger", 5.99, "burger.png", "Delicious beef burger", 2, "1", "Fast Food"),
      new ItemServing("102", "Fries", 2.99, "fries.png", "Crispy fries", 1, "1", "Fast Food")
    ], 14.97, 16.47, 1.50, 1, 1, new Date("2024-03-01")),
  
    new Bill("2", [
      new ItemServing("103", "Pizza", 12.99, "pizza.png", "Cheese pizza", 1, "2", "Italian"),
      new ItemServing("104", "Pasta", 9.99, "pasta.png", "Creamy pasta", 1, "2", "Italian")
    ], 22.98, 25.28, 2.30, 1, 2, new Date("2024-03-02")),
  
    new Bill("3", [
      new ItemServing("105", "Sushi", 15.99, "sushi.png", "Fresh sushi rolls", 2, "3", "Japanese")
    ], 31.98, 34.78, 2.80, 2, 1, new Date("2024-03-03")),
  
    new Bill("4", [
      new ItemServing("106", "Steak", 25.99, "steak.png", "Grilled steak", 1, "4", "Steakhouse"),
      new ItemServing("107", "Wine", 19.99, "wine.png", "Red wine", 1, "4", "Beverage")
    ], 45.98, 50.58, 4.60, 2, 3, new Date("2024-03-04")),
  
    new Bill("5", [
      new ItemServing("108", "Salad", 7.99, "salad.png", "Healthy salad", 1, "5", "Vegan"),
      new ItemServing("109", "Smoothie", 5.99, "smoothie.png", "Fruit smoothie", 1, "5", "Beverage")
    ], 13.98, 15.38, 1.40, 1, 2, new Date("2024-03-05"))
  ];
  //

  ngOnInit(){
    this.FetchBills();
  }

  FetchBills(){
    this.billList = this.dummyBills;
  }

  ClickOnBill(b : Bill){
      let temp = new Table();
      temp.bill = b;
      temp.name = "Takeaway";
      this.table.emit(temp);
  }

  CreateBill(){
    console.log("NEW BILL");
    this.billList.push(new Bill);
  }
}
