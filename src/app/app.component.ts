import {Component, Injectable} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  rootTemplateRows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane', status: 'a', customGroup: 'Группа a' },
    { name: 'Dany', gender: 'Male', company: 'KFC', status: 'b', customGroup: 'Группа a'  },
    { name: 'Molly', gender: 'Female', company: 'Burger King', status: 'b', customGroup: 'Группа б'  },
    { name: 'Molly', gender: 'Male', company: 'Burger King', status: 'f', customGroup: 'Группа б'  },
    { name: 'fff', gender: 'Male', company: 'Burger King', status: 'f', customGroup: 'Группа с'  },
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
