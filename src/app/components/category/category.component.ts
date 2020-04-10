import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../services/category.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categoryList: any;
  constructor(public categoryService: CategoryService) { }
ngOnInit(): void {
  this.getAllCategory();
   }

  getAllCategory(){
this.categoryService.getAll()
// tslint:disable-next-line: no-shadowed-variable
.subscribe(( category: any) =>
    {
      this.categoryList = category;
      console.log(this.categoryList);
    },
    err => console.log(err)
            );
        }

}
