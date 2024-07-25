import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';
import { RouterLink } from '@angular/router';
import { RegistrationFormComponent } from '../registration-form-component/registration-form-component.component';
import { BonjourService } from '../../shared/bonjour.service';
import { OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

export const motsInterdits = (control:AbstractControl): ValidationErrors | null=> {
  const mots = ["lol", "mdr"];
  return mots.includes(control.value) ? {interdit:"Mot interdit"}:null
}

export const alphaNumericValidator = (control: AbstractControl): ValidationErrors | null=> {
  const specialChar = /[\!\@\#\$\%\^\&\*\(\)\-\_\+\=\{\}\[\]\|;:'",<.>/?]/g;
  return !specialChar.test(control.value) ? {requis: "Le mot de passe doit contenir au moins un caractère spécial" } : null;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink, RegistrationFormComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
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
  

  imgSport: string = "";
  selectImage(event:any) {
    let value = event.target.value;
    if(value==="Foot"){
      this.imgSport = "https://images.unsplash.com/photo-1624880357913-a8539238245b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
    if(value==="Natation"){
      this.imgSport = "https://images.unsplash.com/photo-1438029071396-1e831a7fa6d8?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
    if(value==="Course"){
      this.imgSport = "https://images.unsplash.com/photo-1500468756762-a401b6f17b46?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  }

isActive = true;
isDisabled = false;
isLight:boolean = true;
fontSize: number = 20;
salut : string = "";
resultat: number = 0;

constructor(private service : BonjourService) {}
ngOnInit(): void {
  this.salut = this.service.saluer();
  this.resultat = this.service.additioner(15,5)
}

//   Mon 1er formulaire
//   username:string = "";
//   password:string = "";
// onSubmit(form: NgForm) {
//   console.log(form.value);
// }

//   // Mon 2eme formulaire
public form: FormGroup = new FormGroup({
  name: new FormControl('', {validators:[Validators.required, Validators.minLength(5), Validators.maxLength(10), motsInterdits]}),
  email: new FormControl('', {validators:[Validators.email, motsInterdits]}),
  password: new FormControl('', {validators: [Validators.required, alphaNumericValidator]})
});
submit() {
  if(this.form.valid){
  console.log(this.form.get('name')?.value);
  console.log(this.form.get('email')?.value);
  console.log(this.form.get('password')?.value);
  this.form.reset(); // Remettre le formulaire à 0
}}

}
