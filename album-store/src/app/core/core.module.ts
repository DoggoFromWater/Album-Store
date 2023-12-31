import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';
import { UnauthorisedComponent } from './unathorised/unathorised.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'unauthorised', component: UnauthorisedComponent },
  { path: 'error', component: ErrorComponent },
];

@NgModule({
  declarations: [
    NavigationComponent,
    HomeComponent,
    FooterComponent,
    NotFoundComponent,
    ErrorComponent,
    UnauthorisedComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FormsModule,
  ],
  exports: [
    NavigationComponent,
    FooterComponent,
    HomeComponent,
    NotFoundComponent,
  ],
})
export class CoreModule {}
