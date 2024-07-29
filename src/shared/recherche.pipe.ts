import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recherche',
  standalone: true
})
export class RecherchePipe implements PipeTransform {

  transform(items: any[], searchText: string, fieldName: string): any[] {

    searchText = searchText.toLowerCase();

    return items.filter(it => {
      return it[fieldName].toLowerCase().includes(searchText);
    });
  }


}
