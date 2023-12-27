import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component';
import { TechStacks } from '../tech-stacks';


@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  public showHideProperty:boolean=true;
  logo:TechStacks={
      stackName: 'logo',
      stackUrl: '../../assets/images/favicon.svg'
    }
  

  constructor(){}

  showHide(showHideProperty:boolean){
    this.showHideProperty = showHideProperty
    // console.log(this.showHideProperty)
  }
}
