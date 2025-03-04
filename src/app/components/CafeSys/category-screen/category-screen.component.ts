import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { Category } from '../common/Dtos';
@Component({
  selector: 'app-category-screen',
  imports: [
    InputIconModule,
    IconFieldModule,
    InputTextModule,
    FormsModule,
    FloatLabelModule,
  ],
  templateUrl: './category-screen.component.html',
  styleUrl: './category-screen.component.css',
  encapsulation: ViewEncapsulation.None
})
export class CategoryScreenComponent {
  searchKeyword: string = '';
  @Output() selectedCategory = new EventEmitter<string>();
  

  //dummy--------//------------------------------------------------------------------------------
  categories: Category[] = [
    new Category('C001', 'Fast Food', 'fast_food.png', 0, 'red'),
    new Category('C002', 'Italian', 'italian.png', 0, 'green'),
    new Category('C003', 'Healthy', 'healthy.png', 0, 'blue'),
    new Category('C004', 'Grill', 'grill.png', 0, 'orange'),
    new Category('C005', 'Beverages', 'beverages.png', 0, 'purple')
  ];
  //----------------------------------------------------------------------------------------------

  clickOnCategory(cate: string){
    this.selectedCategory.emit(cate);
    console.log("emite category "+cate);
  }
}
