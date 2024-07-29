import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ttc',
  standalone: true
})
export class TtcPipe implements PipeTransform {

  transform(value: number,): number {
      return value + (value * (0.2));
    }
  }

