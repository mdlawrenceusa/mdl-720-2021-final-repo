import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ResumeComponent } from './resume/resume.component';
import { PhotoComponent } from './photo/photo.component';
import { ParallaxComponent } from './parallax/parallax.component';
import { ArtComponent } from './art/art.component';

const routes: Routes = [
  
  { path: '', component: WelcomeComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'photo', component: PhotoComponent },
  { path: 'parallax', component: ParallaxComponent },
  { path: 'art', component: ArtComponent }
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
