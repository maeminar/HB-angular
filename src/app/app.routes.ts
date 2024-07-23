import { Routes } from '@angular/router';
import { CourseListComponent } from './course-list-component/course-list-component.component';
import { RegistrationFormComponent } from './registration-form-component/registration-form-component.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { Error404Component } from './error404/error404.component';

export const routes: Routes = [  
    {path: '', component: HomeComponent},
    {path: 'programme', component: CourseListComponent},
    {path: 'formulaire', component: RegistrationFormComponent},
    {path: 'about', component: AboutComponent},
    {path: 'pokemon', component: PokemonsComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'blog/:id', component: BlogDetailComponent},
    {path: "**", component: Error404Component}
];
