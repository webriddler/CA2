import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Data1Component } from './components/data1/data1.component';
import { Data2Component } from './components/data2/data2.component';

const routes: Routes = [
  {
    path: 'data1',
    component: Data1Component
  },
  {
    path: 'data2',
    component: Data2Component
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
