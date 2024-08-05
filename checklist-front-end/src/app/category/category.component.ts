import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableDataSource} from '@angular/material/table';
import { Category } from '../_models/category';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule} from '@angular/router';



export const CATEGORY_DATA: Category[] = [
  { id: 1, name: 'Educação', guid: 'aa-bbb-ccc-dddd' },
  { id: 2, name: 'Saúde', guid: 'aa-bbb-ccc-dddd' },
  { id: 3, name: 'Trabalho', guid: 'aa-bbb-ccc-dddd' },
  { id: 4, name: 'Outros', guid: 'aa-bbb-ccc-dddd' },
];

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, MatInputModule,RouterModule, MatTableModule, MatButtonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent implements OnInit{

  public displayedColumns: string[] = ['id', 'name', 'actions'];
  public dataSource = new MatTableDataSource(CATEGORY_DATA);

  constructor() { }

  public editCategory(category: Category){

  }

  public deletCategory(category: Category){

  }

  public createNewCategory() {

  }

  ngOnInit(): void {

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
