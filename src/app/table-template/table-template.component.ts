import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-template',
  templateUrl: './table-template.component.html',
  styleUrls: ['./table-template.component.css']
})
export class TableTemplateComponent implements OnInit {

  @Input() templateRows: Array<object>;
  @Input() templateColumns: Array<string>;
  @Input() templateClass: string;
  @Input() templateColumnWidth: Array<number>;
  @Input() tempateRowLegend: Array<string>;
  @Input() templateMode: string;

  columns = [];

  constructor() {
  }

  ngOnInit(): void {
    this.templateRows = this.checkRowLegend(this.templateRows, this.tempateRowLegend);
    this.columns = this.fromInputToPatternColumn(this.templateRows, this.templateColumns, this.tempateRowLegend);
    this.templateClass = this.checkStyleProperty(this.templateClass);
    this.templateColumnWidth = this.checkColumnWidthProperty(this.templateColumnWidth);
    this.templateMode = this.checkMode(this.templateMode);
  }

  checkMode(templateMode){
    if(!templateMode){
      return 'forceMode';
    }
    return templateMode;
  }

  checkRowLegend(rows, legend){
    if(!legend) {
      return rows;
    }
    let rowsWithLegend: Array<object> = [];
    rows.map(function (row) {
      rowsWithLegend.push(Object.assign({legend:  legend[rows.indexOf(row)]}, row));
    });
    return rowsWithLegend;
  }

  checkStyleProperty(customStyle: string): string {
    if(!customStyle) {
      return 'bootstrap ngx-datatable';
    }
      return customStyle + ' ngx-datatable';
  }

  checkColumnWidthProperty( customColumnWidth: Array<number>): Array<number>{
    if(customColumnWidth) {
      return customColumnWidth;
    }
     customColumnWidth =  [];
     this.templateColumns.map(function () {
       customColumnWidth.push(100);
     });
     return customColumnWidth;
  }

  fromInputToPatternColumn(inputRows: Array<object>, inputColumns: Array<string>, inputRowLegend: Array<string>): Array<object>{
    let returnPattern: Array<object> = [];
    if(inputRows && inputColumns) {
      {
        if(inputRowLegend){
          inputColumns.unshift(' ');
        }
        for (let i = 0; i < inputColumns.length; i++) {
          returnPattern.push({name: inputColumns[i], prop: Object.keys(inputRows[i])[i]});
        }
      }
      return returnPattern;
    }else {
       return;
    }
  }

}

