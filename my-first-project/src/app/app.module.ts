import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { TableComponent } from './table/table.component';
import { ListComponent } from './list/list.component';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,HeaderComponent,MenuComponent, TableComponent, ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
