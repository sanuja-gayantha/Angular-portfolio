import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from '../image/image.component';
import { Projects } from '../projects';
import { IconComponent } from '../icon/icon.component';


@Component({
  selector: 'app-project-item',
  standalone: true,
  imports: [CommonModule, ImageComponent, IconComponent],
  templateUrl: './project-item.component.html',
  styleUrl: './project-item.component.css'
})
export class ProjectItemComponent {

  @Input()projectItem!:Projects; 
}
