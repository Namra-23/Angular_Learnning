import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdInr',
  standalone: true
})
export class UsdInrPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    const [x] = args;
    return value*x;
  }

}
