import { Component, OnInit } from '@angular/core';
import { CommonModule} from '@angular/common';
import { RouterLink } from '@angular/router';
import { RegistrationFormComponent } from '../registration-form-component/registration-form-component.component';
import { SearchCourseComponent } from '../search-course/search-course.component';
import { Iformations } from '../../shared/iformations';
import { FormationService } from '../../shared/formation.service';
import { CardComponent } from '../card/card.component';
import { CreateFormationComponent } from '../create-formation/create-formation.component';
import { ToDollarsPipe } from '../../shared/to-dollars.pipe';
import { CbPipe } from '../../shared/cb.pipe';
import { TtcPipe } from '../../shared/ttc.pipe';
import { RecherchePipe } from '../../shared/recherche.pipe';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-course-list-component',
  standalone: true,
  imports: [CommonModule, RouterLink, RegistrationFormComponent, SearchCourseComponent, CardComponent, CreateFormationComponent, ToDollarsPipe, CbPipe, TtcPipe, RecherchePipe, FormsModule],
  templateUrl: './course-list-component.component.html',
  styleUrl: './course-list-component.component.css',
})
export class CourseListComponent implements OnInit{
  today = new Date(); // Pour afficher la date dans mon HTML
  formations:Iformations [] = [];
  argentParent:number = 50;
  resultat:number = 0;

  searchText: string = '';  // Varaible pour la recherche par nom de la formation

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

