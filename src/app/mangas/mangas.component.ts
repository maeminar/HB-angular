import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MangaService } from '../../shared/manga.service';
import { Imanga } from "../../shared/imanga";

@Component({
  selector: 'app-mangas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mangas.component.html',
  styleUrl: './mangas.component.css'
})
export class MangasComponent implements OnInit {

  mangas:Imanga [] = [];

  constructor (private service: MangaService) {}

  ngOnInit(): void {
    this.mangas = this.service.fetchAll();
  }
}
