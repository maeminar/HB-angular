import { Injectable } from '@angular/core';
import { mockMangas } from "./mockMangas";

@Injectable({
  providedIn: 'root'
})
export class MangaService {

  constructor() { }

  fetchAll() {
    return mockMangas;
  }
}
