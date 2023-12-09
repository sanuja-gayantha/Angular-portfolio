import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageComponent } from '../image/image.component';
import { ImgUrl } from '../img-url';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ImageComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  imgUrl: ImgUrl = {
    url_link: '../../assets/images/me.webp',
    alt_text: 'me.webp',
    text:'# Sanuja  # Developer'
  }
}
