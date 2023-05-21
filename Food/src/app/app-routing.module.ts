import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { FoodComponent } from './food/food.component'; 

const routes: Routes = [
  {path : 'search', component : SearchComponent},
  {path : 'food/:id', component : FoodComponent} ///: passi id del componente 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
