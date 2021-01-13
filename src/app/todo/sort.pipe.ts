import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Observable<any> , ...args: unknown[]): unknown {
    let FirstValues = value.pipe(take(5))
    return FirstValues;
  }

}
