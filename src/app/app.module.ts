import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { routing } from './app.routing';

import { AppHeader } from './header/app.header';
import { AppFooter } from './footer/app.footer';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProtfolioComponent } from './protfolio/protfolio.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';


import { AuthLogin } from './auth-login.service';
import { AuthGuardLogin } from './auth-guard-login.service';
import { UsertableComponent } from './usertable/usertable.component';
import { UserlistComponent } from './usertable/userlist/userlist.component';

/*--Tables---*/
import { UserTableService } from './usertable/usertable.service';
import { UserDeatilsComponent } from './usertable/user-deatils/user-deatils.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ReactiveDetailComponent } from './reactive-forms/reactive-detail/reactive-detail.component';
import { ReactiveListComponent } from './reactive-forms/reactive-list/reactive-list.component';
import {ReactiveFormService }  from './reactive-forms/reactiveform.service';
import { SearchFilter } from './usertable/search-filter.pipe';
import { ServicesService } from './services/services.service';


@NgModule({
  declarations: [
    AppComponent,
    AppHeader,
    AppFooter,
    HomeComponent,
    AboutComponent,
    ProtfolioComponent,
    ServicesComponent,
    ContactComponent,
    LoginComponent,
    LogoutComponent,
    UsertableComponent,
    UserlistComponent,
    UserDeatilsComponent,
    ReactiveFormsComponent,
    ReactiveDetailComponent,
    ReactiveListComponent,
    SearchFilter
    
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    routing
  ],
  providers: [AuthGuardLogin, AuthLogin, UserTableService, ReactiveFormService, ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
