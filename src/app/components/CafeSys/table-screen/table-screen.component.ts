import { Component } from '@angular/core';
import { TabsModule } from 'primeng/tabs';
import { CommonModule } from '@angular/common';
import { Output, EventEmitter } from '@angular/core';
import { Area, Table, Bill, ItemServing } from '../common/Dtos';
@Component({
  selector: 'app-table-screen',
  imports: [TabsModule, CommonModule],
  templateUrl: './table-screen.component.html',
  styleUrl: './table-screen.component.css'
})
export class TableScreenComponent {
  tabs: { title: string; value: number; content: string }[] = [];
  @Output() outputTable = new EventEmitter<Table>();
  @Output() outputDbcFlag = new EventEmitter<boolean>();
  tableList: Table[] = [];
  displayAreaTab: { title: string; value: number; content: Table[]}[] = [];

  //dummy data//-------------------------------------------------------------------------------------------------
  area: Area[] = [
    {
      id: 'A001',
      name: 'indoor'
    },
    {
      id: 'A002',
      name: 'Outdoor'
    },
    {
      id: 'A003',
      name: 'Rooftop'
    }
  ];

  tables: Table[] = [
    {
      id: 'T001',
      name: 'Table 1',
      area: 'A001', // Refers to "Indoor"
      icon: 'table_icon_1.png',
      bill: new Bill('B001', [
        new ItemServing('I001', 'Burger', 5.99, 'burger.png'),
        new ItemServing('I002', 'Pasta', 8.99, 'pasta.png'),
      ]),
      color: 'red',
      isAvaiable: false,
    },
    {
      id: 'T002',
      name: 'Table 2',
      area: 'A002', // Refers to "Outdoor"
      icon: 'table_icon_2.png',
      bill: new Bill('B002', [
        new ItemServing('I003', 'Pizza', 12.99, 'pizza.png'),
        new ItemServing('I004', 'Salad', 6.99, 'salad.png'),
      ]),
      color: 'blue',
      isAvaiable: true,
    },
    {
      id: 'T003',
      name: 'Table 3',
      area: 'A003', // Refers to "Rooftop"
      icon: 'table_icon_3.png',
      bill: new Bill('B003', [
        new ItemServing('I005', 'Steak', 19.99, 'steak.png'),
        new ItemServing('I006', 'Wine', 15.99, 'wine.png'),
      ]),
      color: 'green',
      isAvaiable: false,
    },
    {
      id: 'T004',
      name: 'Table 4',
      area: 'A001', // Indoor
      icon: 'table_icon_4.png',
      bill: new Bill('B004', [
        new ItemServing('I007', 'Sushi', 22.99, 'sushi.png'),
        new ItemServing('I008', 'Miso Soup', 4.99, 'miso_soup.png'),
      ]),
      color: 'yellow',
      isAvaiable: true,
    },
    {
      id: 'T005',
      name: 'Table 5',
      area: 'A002', // Outdoor
      icon: 'table_icon_5.png',
      bill: new Bill('B005', [
        new ItemServing('I009', 'Tacos', 9.99, 'tacos.png'),
        new ItemServing('I010', 'Guacamole', 3.99, 'guacamole.png'),
      ]),
      color: 'orange',
      isAvaiable: false,
    },
    {
      id: 'T006',
      name: 'Table 6',
      area: 'A001', // Indoor
      icon: 'table_icon_6.png',
      bill: new Bill('B006', [
        new ItemServing('I011', 'Pancakes', 7.99, 'pancakes.png'),
        new ItemServing('I012', 'Coffee', 2.99, 'coffee.png'),
      ]),
      color: 'purple',
      isAvaiable: true,
    },
    {
      id: 'T007',
      name: 'Table 7',
      area: 'A003', // Rooftop
      icon: 'table_icon_7.png',
      bill: new Bill('B007', [
        new ItemServing('I013', 'Lobster', 29.99, 'lobster.png'),
        new ItemServing('I014', 'Champagne', 49.99, 'champagne.png'),
      ]),
      color: 'brown',
      isAvaiable: false,
    },
    {
      id: 'T008',
      name: 'Table 8',
      area: 'A002', // Outdoor
      icon: 'table_icon_8.png',
      bill: new Bill('B008', [
        new ItemServing('I015', 'Ice Cream', 5.49, 'ice_cream.png'),
        new ItemServing('I016', 'Milkshake', 4.49, 'milkshake.png'),
      ]),
      color: 'pink',
      isAvaiable: true,
    },
  ];
  //----------------------------------------------------------------------------------------------------------//

  ngOnInit() {
    this.displayAreaTab = this.area.map((area, index) => ({
      title: area.name,                                              // Use area name as title
      value: index,                                                 // Incrementing value from 0 onwards
      content: this.tables.filter(table => table.area === area.id) // Get tables belonging to this area
    }));

  }

  ClickOnTable(table: Table): void {
    console.log('Selected Bill:', table);
    this.outputTable.emit(table);
  }

  doubleClickOnTable(){
    this.outputDbcFlag.emit(true);
    console.log('Dbc Selected Bill:');
  }

  loadingComponentData(){
    //TODO
    //Loading all table info from API call
  }

}


