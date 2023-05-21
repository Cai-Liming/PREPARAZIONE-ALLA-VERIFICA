import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { FoodComponent } from './food/food.component';
import { FormsModule } from '@angular/forms';
import { GenericComponent } from './generic/generic.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    FoodComponent,
    GenericComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
