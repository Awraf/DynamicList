import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'textFormat'
})
export class TextFormatPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string, format: string) {
    switch (format) {
      case 'bolt':
        return this.sanitizer.bypassSecurityTrustHtml(`<b>${value}</b>`);
      case 'italic':
        return this.sanitizer.bypassSecurityTrustHtml(`<i>${value}</i>`);
      case 'underlined':
        return this.sanitizer.bypassSecurityTrustHtml(`<u>${value}</u>`);
      default:
        return value;
    }
  }

}
