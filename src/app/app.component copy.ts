import {
  Component,
  OnInit
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectItemComponent } from './project-item/project-item.component';

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
    ProjectItemComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  // title = 'angular-portfolio';

  content: any;
  prev: any;
  next: any;
  idlePeriod = 100;
  animationDuration = 1000;
  lastAnimation = 0;
  index = 0;

  toggleText = (index: number, state: string) => {
    if (state === 'show') {
      this.content[index].querySelector('.text').classList.add('show');
    } else {
      this.content[index].querySelector('.text').classList.remove('show');
    }
  };

  ngOnInit() {
    this.content = document.querySelectorAll('.section');
    this.prev = document.querySelector('.prev');
    this.next = document.querySelector('.next');

    this.toggleText(0, 'show');

    this.prev.addEventListener('click', () => {
      if (this.index < 1) return;
      this.toggleText(this.index, 'hide');
      this.index--;
      this.content.forEach((section: any, i: any) => {
        if (i === this.index) {
          this.toggleText(i, 'show');
          section.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    this.next.addEventListener('click', () => {
      if (this.index > 3) return;
      this.toggleText(this.index, 'hide');
      this.index++;
      this.content.forEach((section: any, i: any) => {
        if (i === this.index) {
          this.toggleText(i, 'show');
          section.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });


    document.addEventListener('wheel', (event: WheelEvent) => {
      var delta = 0;
      if (event['deltaY']) {
        delta = event.deltaY;
      }
      var timeNow = new Date().getTime();
      // Cancel scroll if currently animating or within quiet period
      if (timeNow - this.lastAnimation < this.idlePeriod + this.animationDuration) {
        event.preventDefault();
        return;
      }

      if (delta < 0) {
        var event_temp = new Event('click');
        this.next.dispatchEvent(event_temp);
      } else {
        var event_temp = new Event('click');
        this.prev.dispatchEvent(event_temp);
      }

      this.lastAnimation = timeNow;
    });
  }
}
