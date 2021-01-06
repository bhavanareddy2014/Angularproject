import { LoginComponent } from './login/login.component';
import { HelpComponent } from './help/help.component';
import { ReportsComponent } from './reports/reports.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { FeaturesComponent } from './features/features.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'features',component:FeaturesComponent},
  {path:'documentation',component:DocumentationComponent},
  {path:'about',component:AboutComponent},
  {path:'services',component:ServicesComponent},
  {path:'reports',component:ReportsComponent},
  {path:'help',component:HelpComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent,FeaturesComponent,DocumentationComponent,AboutComponent,ServicesComponent,ReportsComponent,HelpComponent,LoginComponent]