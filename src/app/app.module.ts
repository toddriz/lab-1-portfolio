import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AboutComponent } from './about';
import { ProjectsComponent } from './projects';
import { WorkComponent } from './work/work.component';
import { LinksComponent } from './links/links.component';

import { TitlecasePipe } from './pipes';

@NgModule({
  declarations: [AppComponent, AboutComponent, ProjectsComponent, TitlecasePipe, WorkComponent, LinksComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
