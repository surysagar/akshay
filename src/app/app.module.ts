import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // add
import { MDBBootstrapModule, WavesModule, DropdownModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { TableService } from './table/table.service';
import { routing } from './app.routing';
import { FileRetriggerComponent } from './file-retrigger/file-retrigger.component';

@NgModule({
  declarations: [ AppComponent, TableComponent, FileRetriggerComponent],
  imports: [
    routing,
    BrowserModule, BrowserAnimationsModule,
    WavesModule, DropdownModule,
    MDBBootstrapModule.forRoot(),
    Ng2SmartTableModule,
    HttpClientModule // add
  ],
  providers: [TableService],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule {}
