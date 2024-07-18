import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

  public stringInterpolation = "Olá, mundo!";

  public isDisabled = false;

  public myBindingProperty: string = '';

  public processClick(input: string) {
    alert(`This button was clicked!  ${input}`);
  }

  public disableButton(){
    if(this.isDisabled) this.isDisabled = false;
    else this.isDisabled = true;
  }

}
