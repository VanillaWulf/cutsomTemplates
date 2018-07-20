import {Component, Injectable} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  rootTemplateRows = [
    { name: 'Austin'company: 'Swimlane', status: 'a', customGroup: 'Группа a' },
    { name: 'Dany', company: 'KFC', status: 'b', customGroup: 'Группа a'  },
    { name: 'Dany', company: 'KFC', status: 'b', customGroup: 'Группа в'  },
    { name: 'Dany', company: 'KFC', status: 'b', customGroup: 'Группа в'  },
  ];

  rootTemplateColumns = ['Имя', 'Пол', 'Компания', 'Статус'];

  rootColumnWidth = [100, 300, 150, 200];

  rootRowLegend = ['про остина',
    'про дани',
    'про бургер кинг',
    'про бургер кинг',
    'про бургер кинг'];

  /*todo: clean hardcode declaration*/
}
