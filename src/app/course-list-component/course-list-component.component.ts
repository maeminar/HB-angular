import { Component, OnInit } from '@angular/core';
import { CommonModule} from '@angular/common';
import { RouterLink } from '@angular/router';
import { RegistrationFormComponent } from '../registration-form-component/registration-form-component.component';
import { SearchCourseComponent } from '../search-course/search-course.component';
import { Iformations } from '../../shared/iformations';
import { FormationService } from '../../shared/formation.service';

@Component({
  selector: 'app-course-list-component',
  standalone: true,
  imports: [CommonModule, RouterLink, RegistrationFormComponent, SearchCourseComponent],
  templateUrl: './course-list-component.component.html',
  styleUrl: './course-list-component.component.css',
})
export class CourseListComponent implements OnInit{

  formations:Iformations [] = [];

  constructor (private service: FormationService) {}

  ngOnInit(): void {
    this.formations = this.service.fetchAll();
  }

 
  afficher(formation: Iformations): void {
    alert(`Formation à ${formation.villes}, Adresse : ${formation.adresse}`);
  }
}

