import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  nombre:number = 0;
  @Input() argentdePoche:number|undefined= 0;
  @Output() numberEnfant = new EventEmitter<number>();

  calcul() {
    this.nombre++;
    this.numberEnfant.emit(this.nombre)
  }

}
