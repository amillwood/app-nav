import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CreateListingComponent } from './create-listing/create-listing.component';
import { HomePage } from './home/home.page';
import { LoginComponent } from './login/login.component';
import { PricingComponent } from './pricing/pricing.component';
import { ViewListingsComponent } from './view-listings/view-listings.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,

  },
  { path:'Login', component: LoginComponent, },
  { path:'Pricing', component: PricingComponent, },
  { path:'CreateListing', component: CreateListingComponent, },
  { path:'ContactUs', component: ContactUsComponent, },
  { path:'ViewListings', component: ViewListingsComponent, },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
