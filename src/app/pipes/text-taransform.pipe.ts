import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'appTextTransform',
  pure: true
})
export class TextTransformationPipe implements PipeTransform {
  transform(value: string, prefix: string, operator: 'uppercase' | 'lowercase' = 'uppercase'): string {
    console.log('TextTransformation', value);
    value = !value ? prefix : prefix + ' ' + value;

    switch (operator) {
      case 'uppercase':
        return value.toUpperCase();
      default:
        return value.toLowerCase();
    }
  }

}
