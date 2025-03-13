import { Component, EventEmitter, Output } from '@angular/core';
import { Bill, ItemServing, Table } from '../common/Dtos';
import { CommonMiddleWave } from '../common/Middlewave';
@Component({
  selector: 'app-take-away',
  imports: [],
  templateUrl: './take-away.component.html',
  styleUrl: './take-away.component.css'
})
export class TakeAwayComponent {
  billList : Bill[] = [];
  @Output() table = new EventEmitter<Table>();
  @Output() outputDbcFlag = new EventEmitter<boolean>();
  common = new CommonMiddleWave();

  ngOnInit(){
    this.billList = this.common.FetchBills();
  }

  ClickOnBill(b : Bill){
      let temp = new Table();
      temp.bill = b;
      temp.name = "Takeaway";
      this.table.emit(temp);
  }

  CreateBill(){
    
    this.billList.push(this.common.CreateNewBill());
  }

  doubleClickOnTable(){
    this.outputDbcFlag.emit(true);
  }
}
