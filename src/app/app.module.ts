import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableTemplateComponent } from './table-template/table-template.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TableTemplateCustomComponent } from './table-template-custom/table-template-custom.component';

@NgModule({
  declarations: [
    AppComponent,
    TableTemplateComponent,
    TableTemplateCustomComponent
  ],
  imports: [
    BrowserModule,
    NgxDatatableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
