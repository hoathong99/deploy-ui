import { Component, Input } from '@angular/core';
import { Bill, ItemServing, Table } from '../Dto/Dtos';

@Component({
  selector: 'app-bill-screen',
  imports: [],
  templateUrl: './bill-screen.component.html',
  styleUrl: './bill-screen.component.css'
})
export class BillScreenComponent {
  @Input() currentTable : Table = new Table();
  itemList: ItemServing[] = [];
}
