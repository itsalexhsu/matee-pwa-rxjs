import { Directive } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { map, take } from 'rxjs/operators';
import { Observable, timer, interval } from 'rxjs';

@Directive({
  selector: '[appTimer]'
})
export class TimerDirective {

  steepTime: number
  counting: boolean = false

  counter$: Observable<any> = null

  constructor() { }

  playAlarm() {

  }
  
  toggleCounter() {

    if (!this.counting) {
      let currentCount = this.steepTime
      this.counter$ = timer(0, 1000).pipe(
        take(currentCount),
        map(() => {
          if (currentCount === 0) {
            this.counting = false
            return 0
          } else {
            return currentCount -= 1000
          }
        })
      )
    }

    this.counting = !this.counting
  }

}
