import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  rootTemplateRows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane', status: 'a' },
    { name: 'Dany', gender: 'Male', company: 'KFC', status: 'b' },
    { name: 'Molly', gender: 'Female', company: 'Burger King', status: 'c' },
    { name: 'Molly', gender: 'Male', company: 'Burger King', status: 'd' },
    { name: 'fff', gender: 'Male', company: 'Burger King', status: 'f' },
  ];

  rootTemplateColumns = ['Имя', 'Пол', 'Компания', 'Статус' ];

  rootColumnWidth = [100, 300, 150, 200];

  rootRowLegend = ['про остина',
    'про дани',
    'про бургер кинг',
    'про бургер кинг',
    'про бургер кинг'];

  /*todo: clean hardcode declaration*/
}
