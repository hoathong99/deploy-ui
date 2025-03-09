import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { Category } from '../common/Dtos';
import { CommonMiddleWave } from '../common/Middlewave';
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
  commonMiddleWave = new CommonMiddleWave();
  categories: Category[] = [];
  
  ngOnInit(){
    this.categories = this.commonMiddleWave.FetchCategory();
  }
  clickOnCategory(cate: string){
    this.selectedCategory.emit(cate);
    console.log("emite category "+cate);
  }
}
