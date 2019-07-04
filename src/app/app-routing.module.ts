import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

// secciones
// import { HomeComponent } from './components/home/home.component';
// import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
// import { AboutComponent } from './components/about/about.component';

const appRoutes: Routes = [
//  { path: 'home', component: HomeComponent },
//  { path: 'about', component: AboutComponent },
//  { path: 'pageNotFound', component: PageNotFoundComponent },
/*  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },  */
//  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
    // other imports here
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
