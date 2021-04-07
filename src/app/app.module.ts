import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterFormComponent } from './login/register-form/register-form.component';
import { ForgotPwFormComponent } from './login/forgot-pw-form/forgot-pw-form.component';
import { AngularMaterialModule } from './angular-material.module';
import { HomePage } from './home/home.page';
import { ViewListingsComponent } from './view-listings/view-listings.component';
import { PricingComponent } from './pricing/pricing.component';
import { CreateListingComponent } from './create-listing/create-listing.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginFormComponent,
    RegisterFormComponent,
    ForgotPwFormComponent,
    HomePage,
    ViewListingsComponent,
    PricingComponent,
    CreateListingComponent,
    ContactUsComponent

  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot({animated:false}),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
