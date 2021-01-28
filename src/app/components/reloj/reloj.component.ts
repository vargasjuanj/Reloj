import { Component, OnInit } from '@angular/core';
import { DateTime } from 'src/app/model/dateTime';
import { RelojService } from 'src/app/services/reloj.service';

@Component({
  selector: 'app-reloj',
  templateUrl: './reloj.component.html',
  styleUrls: ['./reloj.component.css']
})
export class RelojComponent implements OnInit {

  dateTime: DateTime = {}
  
  constructor(private reloj: RelojService) {

  }
  ngOnInit(): void {
    this.runClock()

  }

  runClock() {
    this.reloj.runClock();
    this.reloj.dateTimeObservable.subscribe(data => {
      this.dateTime = data
    })

  }



}
