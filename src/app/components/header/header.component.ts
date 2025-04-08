import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  a: number = 0;
  b: number = 0;

  items = [
    {id: 1, name: 'Banana'},
    {id: 2, name: 'Apple'},
    {id: 3, name: 'Orange'},
    {id: 4, name: 'Peach'}
  ]

  isActive: boolean = false;

  toggleActive(){
    this.isActive = !this.isActive;
  }
  fSize = "50px";
  tAlign = " "
  bgColor = "red";

  isUpdated = false;

  updateStyle(){
    this.fSize = "120px";
    this.bgColor = "blue";
    this.tAlign = "center"

  }

}
