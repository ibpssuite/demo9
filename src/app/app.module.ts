import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataTableComponent } from './data-table/data-table.component';
import {MatTableModule,MatPaginatorModule} from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {FormsModule} from '@angular/forms';
import { TestComponent } from './test/test.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    TestComponent,
    TestComponentComponent
    
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    MatPaginatorModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatListModule,
    MatIconModule,
    MatSliderModule,
    MatSlideToggleModule,
    FormsModule,
    HttpClientModule,
   RouterModule.forRoot([
     {path:'ram/:id' , component: TestComponentComponent}
  ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
