import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitTo'
})
export class LimitToPipe implements PipeTransform {

  transform(passedString: string, limit: number): string
  {
    var limitedString: string;

    if(passedString.length > limit)
    {
      limitedString = passedString.substr(0, limit);
      return `${limitedString} ...`;
    }
    return passedString;
  }

}
