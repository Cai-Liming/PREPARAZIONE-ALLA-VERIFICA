import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { TVComponent } from './tv/tv.component';

const routes: Routes = [ //commit 2 
  {path : 'search', component : SearchComponent},
  {path : 'tv/:id', component : TVComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
