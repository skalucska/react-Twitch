import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sizedImage'
})
export class SizedImagePipe implements PipeTransform {
  transform(imageUrl: string, ...args: string[]): string {
    return imageUrl
      .replace('%{width}', args[0])
      .replace('{width}', args[0])
      .replace('%{height}', args[1])
      .replace('{height}', args[1]);
  }
}
