import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements AfterViewInit{

  // @ViewChild('dataText') dataText!:ElementRef;
  text:string='FRONT-END DEVELOPER';

  ngAfterViewInit(): void {
    // this.dataText.nativeElement.attributes[1].nodeValue = 'FRONT-END DEVELOPER';
    // console.log(this.dataText.nativeElement.attributes('dataText', 'dataText'))
  }

  
}
