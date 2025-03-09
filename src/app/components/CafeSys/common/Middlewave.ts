import * as dto from '../common/Dtos';
import { Express } from 'express';
import { Area, Bill, Category, ItemServing, Table } from '../common/Dtos';
import { Setting } from '../setting/setting.component';

export class CommonMiddleWave {
  //------------------------DUMMY DATA--------------------------------------//
  categories: Category[] = [
    new Category('C001', 'Fast Food', 'fast_food.png', 0, 'red'),
    new Category('C002', 'Italian', 'italian.png', 0, 'green'),
    new Category('C003', 'Healthy', 'healthy.png', 0, 'blue'),
    new Category('C004', 'Grill', 'grill.png', 0, 'orange'),
    new Category('C005', 'Beverages', 'beverages.png', 0, 'purple'),
  ];
  itemServings: dto.ItemServing[] = [
    new dto.ItemServing(
      'I001',
      'Burger',
      5.99,
      'burger.png',
      'Delicious beef burger',
      0,
      'C001',
      'Fast Food'
    ),
    new dto.ItemServing(
      'I002',
      'French Fries',
      3.49,
      'fries.png',
      'Crispy golden fries',
      0,
      'C001',
      'Fast Food'
    ),
    new dto.ItemServing(
      'I003',
      'Hot Dog',
      4.99,
      'hotdog.png',
      'Classic hot dog with mustard',
      0,
      'C001',
      'Fast Food'
    ),

    new dto.ItemServing(
      'I004',
      'Pasta',
      8.99,
      'pasta.png',
      'Creamy Alfredo pasta',
      0,
      'C002',
      'Italian'
    ),
    new dto.ItemServing(
      'I005',
      'Pizza',
      12.99,
      'pizza.png',
      'Cheesy pepperoni pizza',
      0,
      'C002',
      'Italian'
    ),
    new dto.ItemServing(
      'I006',
      'Lasagna',
      10.99,
      'lasagna.png',
      'Layers of pasta, cheese, and sauce',
      0,
      'C002',
      'Italian'
    ),

    new dto.ItemServing(
      'I007',
      'Salad',
      6.99,
      'salad.png',
      'Fresh garden salad',
      0,
      'C003',
      'Healthy'
    ),
    new dto.ItemServing(
      'I008',
      'Smoothie',
      5.49,
      'smoothie.png',
      'Refreshing fruit smoothie',
      0,
      'C003',
      'Healthy'
    ),
    new dto.ItemServing(
      'I009',
      'Vegan Wrap',
      7.99,
      'vegan_wrap.png',
      'Nutritious vegan wrap',
      0,
      'C003',
      'Healthy'
    ),

    new dto.ItemServing(
      'I010',
      'Steak',
      19.99,
      'steak.png',
      'Juicy grilled steak',
      0,
      'C004',
      'Grill'
    ),
    new dto.ItemServing(
      'I011',
      'Grilled Chicken',
      10.99,
      'grilled_chicken.png',
      'Perfectly grilled chicken',
      0,
      'C004',
      'Grill'
    ),

    new dto.ItemServing(
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
  areas: Area[] = [
    {
      id: 'A001',
      name: 'indoor',
    },
    {
      id: 'A002',
      name: 'Outdoor',
    },
    {
      id: 'A003',
      name: 'Rooftop',
    },
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

  FetchItemServing() {
    return this.itemServings;
  }

  FetchBills() {
    return this.dummyBills;
  }

  FetchTables() {
    return this.tables;
  }

  FetchAreas() {
    return this.areas;
  }

  FetchCategory() {
    return this.categories;
  }

  FetchSetting() {
    var tempPaymentmethodlist = [
        '<svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#F8F5E9"><path d="M80-707v-173h173v60H140v113H80Zm0 627v-173h60v113h113v60H80Zm627 0v-60h113v-113h60v173H707Zm113-627v-113H707v-60h173v173h-60ZM708-251h63v63h-63v-63Zm0-126h63v63h-63v-63Zm-63 63h63v63h-63v-63Zm-63 63h63v63h-63v-63Zm-63-63h63v63h-63v-63Zm126-126h63v63h-63v-63Zm-63 63h63v63h-63v-63Zm-63-63h63v63h-63v-63Zm252-332v252H519v-252h252ZM440-440v252H188v-252h252Zm0-332v252H188v-252h252Zm-50 534v-152H238v152h152Zm0-332v-152H238v152h152Zm331 0v-152H569v152h152Z"/></svg>',
        '<svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#F8F5E9"><path d="M540-420q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM220-280q-24.75 0-42.37-17.63Q160-315.25 160-340v-400q0-24.75 17.63-42.38Q195.25-800 220-800h640q24.75 0 42.38 17.62Q920-764.75 920-740v400q0 24.75-17.62 42.37Q884.75-280 860-280H220Zm100-60h440q0-42 29-71t71-29v-200q-42 0-71-29t-29-71H320q0 42-29 71t-71 29v200q42 0 71 29t29 71Zm480 180H100q-24.75 0-42.37-17.63Q40-195.25 40-220v-460h60v460h700v60ZM220-340v-400 400Z"/></svg>',
      ];
      // tempo fixed setting . should call backend for saved setting if I actually make a backend
      // VAT 10%, no ID
    return new Setting(undefined, 0.1, tempPaymentmethodlist, 'default_name', '+830123891', '1 hoang quoc viet, Ha Noi');       
  }

  CreateNewBill() {
    return new Bill
  }

  DeleteBill() {}

  UpdateBill() {}

  CreateNewCategory() {}

  DeleteCategory() {}

  UpdateCategory() {}

  CreateNewServingItem() {}

  DeleteServingItem() {}

  UpdateServingItem() {}
}
