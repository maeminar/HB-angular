import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BonjourService {

  constructor() { }
    saluer(): string{
      return"bonjour"
    }

    additioner(a: number, b:number): number{
      return a + b
    }
  
}
