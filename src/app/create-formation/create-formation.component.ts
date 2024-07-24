import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NgForm, FormsModule, ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { Iformations } from '../../shared/iformations';
import { FormationService } from '../../shared/formation.service';

@Component({
  selector: 'app-create-formation',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './create-formation.component.html',
  styleUrl: './create-formation.component.css'
})
export class CreateFormationComponent {

  service = inject(FormationService)

  public form: FormGroup = new FormGroup({
    image: new FormControl(''),
    nom: new FormControl(''),
    stack: new FormControl(''),
    dates: new FormControl(''),
    titre: new FormControl(''),
    places: new FormControl(''),
    tarif: new FormControl(''),
    domaine: new FormControl(''),
    villes: new FormControl(''),
    adresse: new FormControl('')
  });
  Submit() {
    console.log(this.form.value);
    this.service.addFormation(this.form.value);
  }
}