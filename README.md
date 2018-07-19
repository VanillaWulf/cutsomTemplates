# Table-template

## Input attributes

 -  TemplateRows: Array<object> : must have.
  An array with objects. Structure of object: {nameOfColumn1:'value of column1', nameOfColumn2:'value of column2'}
  
 - TemplateColumns: Array<string> : must have.
  An array of strings. Structure: {'nameOfColumn1' , 'nameOfColumn2'}
  
 - TemplateClass: string : must have.
  Class of table. Use attribute without binding cause of string input. Default class - bootstrap.
  
 - TemplateColumnWidth: Array<number> : optional.
  Custom width of column. Work in standartMode in templateMode. Default width 100px.
  
 - TempateRowLegend: Array<string> - optional.
  Adding left row for legend. 
  
 - TemplateMode: string - optional.
   - standartMode - flexible configuration of column width. 
   - forceMode (default) - the simpliest of using. Width of columns is calculated according parent container.
   - subHeader - apply to use subHeader by grouping rows. Add group object to row {customGroup: 'This is a group'}   
    {nameOfColumn1:'value of column1', nameOfColumn2:'value of column2', customGroup: 'This is a group 1'},
    {nameOfColumn1:'another value of column1', nameOfColumn2:'another of column2', customGroup: 'This is a group 2'}
