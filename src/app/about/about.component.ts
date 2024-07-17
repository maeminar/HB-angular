import { Component } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RegistrationFormComponent } from '../registration-form-component/registration-form-component.component';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink, RegistrationFormComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  statuUser: string = 'connecte';
  roleUser: string = 'client'; // Ou admin ou emplye

  hello: string = 'Bonjour Villeurbanne';
  isVisible = false;

  bonjour() {
    this.isVisible = true;
  }

  imgUrl: string = "";

  afficher(categorie: string) {
    switch (categorie) {
      case 'glaces':
        this.imgUrl = 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
        break;
      case 'smoothie':
        this.imgUrl = 'https://images.unsplash.com/photo-1506458961255-571f40df5aad?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
        break;
      case 'fruits':
        this.imgUrl = 'https://images.unsplash.com/photo-1517282009859-f000ec3b26fe?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
        break;
      default:
        this.imgUrl = '';
    }
  }
  

}
