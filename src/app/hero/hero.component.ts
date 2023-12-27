import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechStacks } from '../tech-stacks';
import { IconComponent } from '../icon/icon.component';


@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements AfterViewInit{

  // @ViewChild('dataText') dataText!:ElementRef;
  text:string='FRONT-END DEVELOPER';

  socialList:TechStacks[]=[
    {
      stackName: 'linkedin',
      stackUrl: '../../assets/images/linkedin-black.svg',
      link:'https://www.linkedin.com/in/sanuja-gayantha-630115201/'
    },
    {
      stackName: 'github',
      stackUrl: './../assets/images/github.svg',
      link:'https://github.com/sanuja-gayantha'
    }
  ]

  ngAfterViewInit(): void {
    // this.dataText.nativeElement.attributes[1].nodeValue = 'FRONT-END DEVELOPER';
    // console.log(this.dataText.nativeElement.attributes('dataText', 'dataText'))
  }

  
}
