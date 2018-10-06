import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'datetime'})
export class DatetimePipe implements PipeTransform {
    transform(src: any) {
      let datetime = src.split(' ')
      let date = datetime[0].split(':')
      let time = datetime[1].split(':')

      return new Date(date[0], ( date[1] - 1 ), date[2], time[0], time[1], time[2]).getTime()
    }
}