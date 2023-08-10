import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ImageDetailsComponent } from './image-details/image-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'image/:id',
    component: ImageDetailsComponent
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
