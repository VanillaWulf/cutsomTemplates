import {Component, Injectable} from '@angular/core';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public rootTemplateRows = [];
  public rootTemplateColumns = [];
  public rootColumnWidth = [];
  public rootRowLegend = [];

  constructor() {
    this.rootTemplateRows = [
      {name: 5000, company: 10000, status: 400, customGroup: 'Группа a'},
      {name: 4000, company: 400000, status: 30000, customGroup: 'Группа a'},
      {name: 5000, company: 10000, status: 400, customGroup: 'Группа b'},
      {name: 4000, company: 400000, status: 30000, customGroup: 'Группа b'}
     ];

    this.rootTemplateColumns = ['Имя', 'Компания', 'Статус'];

    this.rootColumnWidth = [100, 300, 150, 200];

    this.rootRowLegend = ['про остина',
      'про дани',
      'ряд 3',
      'ряд 4'];

    /*todo: clean hardcode declaration*/
  }
}
