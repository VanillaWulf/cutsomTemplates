# Table-template

## Input attributes

 -  TemplateRows: Array<object> : must have.
  An array with objects. Structure of row: {nameOfColumn1:'value of column1', nameOfColumn2:'value of column2'}
  
 - TemplateColumns: Array<string> : must have.
  An array of strings. Structure: {'nameOfColumn1' , 'nameOfColumn2'}
  
 - TemplateClass: string : optional.
  Class of table. Use attribute without binding cause of string input. Default class - bootstrap.
  
 - TemplateColumnWidth: Array<number> : optional.
  Custom width of column. Default width 100px. It works in templateMode='standartMode'.
  
 - TempateRowLegend: Array<string> - optional.
  Adding left row for legend. 
  
 - TemplateMode: string - optional.
   - standartMode - flexible configuration of column width. 
   - forceMode (default) - the simplest way of using. Width of columns is calculated according to parent container.
   - subHeader - apply to use subHeader by grouping rows. Add group prop to row {customGroup: 'This is a group'}   
    {nameOfColumn1:'value of column1', nameOfColumn2:'value of column2', customGroup: 'This is a group 1'},
    {nameOfColumn1:'another value of column1', nameOfColumn2:'another of column2', customGroup: 'This is a group 2'}
