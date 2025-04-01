import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css'],
  standalone: false,
})
export class MenuBarComponent {
  socialLinks = [
    { 
      name: 'Site Oficial', 
      url: 'https://www.palmeiras.com.br/', 
      icon: 'fa-globe' 
    },
    { 
      name: 'Instagram', 
      url: 'https://www.instagram.com/palmeiras/', 
      icon: 'fa-instagram' 
    },
    { 
      name: 'Twitter', 
      url: 'https://twitter.com/Palmeiras', 
      icon: 'fa-twitter' 
    },
    { 
      name: 'YouTube', 
      url: 'https://www.youtube.com/palmeiras', 
      icon: 'fa-youtube' 
    }
  ];
}
