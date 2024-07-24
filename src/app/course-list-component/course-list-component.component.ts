import { Component, OnInit } from '@angular/core';
import { CommonModule} from '@angular/common';
import { RouterLink } from '@angular/router';
import { RegistrationFormComponent } from '../registration-form-component/registration-form-component.component';
import { SearchCourseComponent } from '../search-course/search-course.component';
import { Iformations } from '../../shared/iformations';
import { FormationService } from '../../shared/formation.service';
import { CardComponent } from '../card/card.component';
import { CreateFormationComponent } from '../create-formation/create-formation.component';

@Component({
  selector: 'app-course-list-component',
  standalone: true,
  imports: [CommonModule, RouterLink, RegistrationFormComponent, SearchCourseComponent, CardComponent, CreateFormationComponent],
  templateUrl: './course-list-component.component.html',
  styleUrl: './course-list-component.component.css',
})
export class CourseListComponent implements OnInit{

  formations:Iformations [] = [];
  argentParent:number = 50;
  resultat:number = 0;

  constructor (private service: FormationService) {}

  ngOnInit(): void {
    this.formations = this.service.fetchAll();
  }

 
  afficher(formation: Iformations): void {
    alert(`Formation à ${formation.villes}, Adresse : ${formation.adresse}`);
  }

  multiplier(montant:number) {
    this.resultat = montant*2;
  }

}

