import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MylistComponent } from './components/mylist/mylist.component';
import { DetailpageComponent } from './components/detailpage/detailpage.component';

const routes: Routes = [
  {path:'', component:HomepageComponent},
  {path:'mylist', component:MylistComponent},
  {path:'watch/:type/:id', component:DetailpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
