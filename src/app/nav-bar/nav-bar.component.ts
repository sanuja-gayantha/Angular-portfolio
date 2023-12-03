import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  public showHideProperty:boolean=true;

  constructor(){}

  showHide(showHideProperty:boolean){
    this.showHideProperty = showHideProperty
    // console.log(this.showHideProperty)
  }
}
