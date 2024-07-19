import { Component, OnInit } from '@angular/core';
import { PresentationComponent } from '../presentation/presentation.component';
import { RouterLink } from '@angular/router';
import { BonjourService } from '../../shared/bonjour.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PresentationComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  resultat: number = 0;
  constructor(private service : BonjourService) {}

ngOnInit(): void {
  this.resultat = this.service.additioner(25,5)
}
}
