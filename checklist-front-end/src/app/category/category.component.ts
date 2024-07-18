import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [NgIf, NgFor, NgClass, NgStyle],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

  public items = [
    {description: 'Gabriel', id: 1},
    {description: 'Isabella', id: 2},
    {description: 'Rafael', id: 3},
    {description: 'Davi', id: 4},
  ];

  public showTitle = true;

  public changeTitleDisplayStatus() {
    if (this.showTitle) this.showTitle = false;
    else this.showTitle = true;
  }
}
