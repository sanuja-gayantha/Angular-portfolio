import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from '../image/image.component';
import { ImgUrl } from '../img-url';


@Component({
  selector: 'app-project-item',
  standalone: true,
  imports: [CommonModule, ImageComponent],
  templateUrl: './project-item.component.html',
  styleUrl: './project-item.component.css'
})
export class ProjectItemComponent {
  imgUrl: ImgUrl = {
    url_link: '../../assets/images/car-rental.png',
    alt_text: 'me.webp',
    text:'# Sanuja  # Developer'
  }
}
