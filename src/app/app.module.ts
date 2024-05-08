import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpenseFormComponent } from './expense-form/expense-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExpenseFormTdComponent } from './expense-form-td/expense-form-td.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpenseFormComponent,
    ExpenseFormTdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
