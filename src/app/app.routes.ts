import { Routes } from '@angular/router';
import { CourseListComponent } from './course-list-component/course-list-component.component';
import { RegistrationFormComponent } from './registration-form-component/registration-form-component.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [  
    {path: '', component: HomeComponent},
    {path: 'programme', component: CourseListComponent},
    {path: 'formulaire', component: RegistrationFormComponent},];
