import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'square'
})
export class SquarePipe implements PipeTransform {

  transform(value: number, squareOf: number): unknown {
    if (value) {
      return value ** squareOf;
    }
    return null;
  }

}
