import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about';
import { ProjectsComponent } from './projects';
import { WorkComponent } from './work';
import { LinksComponent } from './links';

const routes: Routes = [
    { path: 'about', component: AboutComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'work', component: WorkComponent },
    { path: 'links', component: LinksComponent },
    { path: '**', redirectTo: 'about' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
