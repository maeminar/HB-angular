import { Component } from '@angular/core';

@Component({
  selector: 'app-search-course',
  standalone: true,
  imports: [],
  templateUrl: './search-course.component.html',
  styleUrl: './search-course.component.css'
})
export class SearchCourseComponent {
selectDomain(event:any) {
    let value = event.target.value;
    if(domaine.value === "IT"){
      formation.domaine 
    }
    if(domaine.value === "Dev"){
      formation.domaine
    }
    if(domaine.value === "Design"){
      formation.domaine
    }
  }
}
