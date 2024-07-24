import { Injectable } from '@angular/core';
import { mockFormations } from './mockFormations';
import { Iformations } from './iformations';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor() { }

  fetchAll() {
    return mockFormations; // Retourne les données mockées
  }

  addFormation(formation: Iformations) {
    mockFormations.push(formation);
  } 
}
