import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChildren,
  QueryList,
  ElementRef,
  HostListener,
  ViewChild

} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectItemComponent } from './project-item/project-item.component';
import { BackgroundAnimeComponent } from './background-anime/background-anime.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavBarComponent,
    HeroComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    ProjectItemComponent,
    BackgroundAnimeComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit ,AfterViewInit {
  // title = 'angular-portfolio';
  @ViewChildren('page') pages!: QueryList<ElementRef>;
  @ViewChild('prev') prev!: ElementRef;
  @ViewChild('next') next!: ElementRef;

  index: number = 0;
  idlePeriod = 100;
  animationDuration = 500;
  lastAnimation = 0;

  constructor(){}

  ngOnInit(){}

  togglePageContent(index: number, state: string) {
    if (state === 'show') {
      this.pages.toArray()[index].nativeElement.querySelector('.section-container').classList.add('show');
    } else {
      this.pages.toArray()[index].nativeElement.querySelector('.section-container').classList.remove('show');
    }
  }

  ngAfterViewInit(): void {
    // console.log(this.pages);
    this.togglePageContent(0, 'show');

  }

  clickPrev() {
    if (this.index < 1) return;
    this.togglePageContent(this.index, 'hide');
    this.index-=1;
    this.pages.forEach((page, i) => {
      if (i === this.index) {
        this.togglePageContent(i, 'show');
        page.nativeElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  clickNext() {
    // console.log(this.index)
    if (this.index > 4) return;
    this.togglePageContent(this.index, 'hide');
    this.index+=1;
    this.pages.forEach((page, i) => {
      if (i === this.index) {
        this.togglePageContent(i, 'show');
        page.nativeElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  @HostListener('wheel', ['$event'])
  onMouseWheel(event: WheelEvent) {
    let delta = 0;
    if (event['deltaY']) {
      delta = event.deltaY;
    }
    const timeNow = new Date().getTime();

    if (timeNow - this.lastAnimation < this.idlePeriod + this.animationDuration) {
      event.preventDefault();
      return;
    }

    if (delta < 0) {
      this.next.nativeElement.click();
      // console.log(delta)
    } else {
      this.prev.nativeElement.click();
      // console.log(delta)
      // console.log(this.prev)
    }

    this.lastAnimation = timeNow;
  }


}
