import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'agecal'
})
export class AgecalPipe implements PipeTransform {

  transform(value: any, args?: any): any {
      let currentYear:any = new Date().getFullYear();
      let userBirthYear:any = new Date(value).getFullYear();
      let ageCal = currentYear - userBirthYear;
      return ageCal;
  }

}
