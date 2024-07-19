import { Injectable } from '@angular/core';
import { mockFormations } from './mockFormations';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor() { }

  fetchAll() {
    return mockFormations; // Retourne les données mockées
  }
}
