import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard.component';
import { AptsComponent }      from './apts.component';
import { AptDetailsComponent }  from './apt-details.component';
import { EditFormComponent } from './edit-form.component';

const routes: Routes = [
      {
        path: 'apts',
        component: AptsComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'apt-details/:id',
        component: AptDetailsComponent,
        children: [
          {
          path: 'edit-form',
          component: EditFormComponent
          }
        ]
      }
    ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}