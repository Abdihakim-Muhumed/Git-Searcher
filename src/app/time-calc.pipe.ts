import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeCalc'
})
export class TimeCalcPipe implements PipeTransform {

  transform(value: any,): Number {
    let lastUpdtate:Number = Date.now();
    
    if (lastUpdtate){
      return lastUpdtate;
    }else{
      return 0;
    }
  }

}
