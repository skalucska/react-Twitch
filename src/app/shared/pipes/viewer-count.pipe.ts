import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'viewerCount'
})
export class ViewerCountPipe implements PipeTransform {

  transform(count: number): string {
    return this.formatNumbers(count, 2);
  }

  private formatNumbers(num: number, digits: number): string {
    const letters = [
      {value: 1, symbol: ''},
      {value: 1E3, symbol: 'k'},
      {value: 1E6, symbol: 'M'},
      {value: 1E9, symbol: 'G'},
      {value: 1E12, symbol: 'T'},
      {value: 1E15, symbol: 'P'},
      {value: 1E18, symbol: 'E'}
    ];
    const regExp = /\.0+$|(\.[0-9]*[1-9])0+$/;

    let i;
    for (i = letters.length - 1; i > 0; i--) {
      if (num >= letters[i].value) {
        break;
      }
    }
    return (num / letters[i].value).toFixed(digits).replace(regExp, '$1') + letters[i].symbol;
  }

}
