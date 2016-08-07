import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(items: Array<any>, attr: string, reverse?: boolean): Array<any> {
    items = items
      .sort((a, b) => {
        if (a[attr] < b[attr]) {
          return -1;
        }
        if (a[attr] > b[attr]) {
          return 1;
        }
        return 0;
      });

    if (reverse) {
      items = items.reverse();
    }

    return items;
  }

}
