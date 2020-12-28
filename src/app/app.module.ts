import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { AttributionsComponent } from './components/attributions/attributions.component';
import { ProjectEntryComponent } from './components/project-entry/project-entry.component';
import { ProjectService } from './services/project.service';
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import { ContactService } from './services/contact.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    AboutmeComponent,
    AttributionsComponent,
    ProjectEntryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    AmplifyUIAngularModule,
  ],
  providers: [ProjectService, ContactService],
  bootstrap: [AppComponent],
})
export class AppModule {}
