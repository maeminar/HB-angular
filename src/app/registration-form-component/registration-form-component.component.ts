import { Component } from '@angular/core';
import { SearchCourseComponent } from "../search-course/search-course.component";

@Component({
  selector: 'app-registration-form-component',
  standalone: true,
  imports: [SearchCourseComponent],
  templateUrl: './registration-form-component.component.html',
  styleUrl: './registration-form-component.component.css'
})
export class RegistrationFormComponent {
  alertInsription():void {
    alert("Vous êtes inscrit");
  }
}
