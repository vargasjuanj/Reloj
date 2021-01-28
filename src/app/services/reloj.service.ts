import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DateTime } from '../model/dateTime';

@Injectable({
  providedIn: 'root'
})
export class RelojService {

  private source = new BehaviorSubject<any>(0);
  dateTimeObservable = this.source.asObservable()
  dateTime: DateTime = {} //Si no se inicializa, larga errores con las propiedades

  constructor() { }

  runClock() {
    setInterval(() => {
      const date = new Date();
      this.updateDateTime(date);


    }, 1000);


  }

  private updateDateTime(date: Date) {

    this.dateTime.fullDate = date.toLocaleDateString();

    this.dateTime.hour = date.getHours();

    const minuteAux = date.getMinutes();

    this.dateTime.minute = minuteAux < 10 ? '0' + minuteAux : minuteAux.toString();

    const secondAux = date.getSeconds();

    this.dateTime.second = secondAux < 10 ? '0' + secondAux : secondAux.toString();

    this.source.next(this.dateTime) 

  }
}
