import {Routes, RouterModule} from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProtfolioComponent } from './protfolio/protfolio.component';
import { ServicesComponent } from './services/services.component';
import { UsertableComponent } from './usertable/usertable.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuardLogin } from './auth-guard-login.service';
import { UserDeatilsComponent } from './usertable/user-deatils/user-deatils.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';



const routes:Routes=[
		{path:"", redirectTo: '/login', pathMatch: 'full' },
		{path:"home", component: HomeComponent, canActivate: [AuthGuardLogin]},
		{path:"about", component: AboutComponent},
		{path:"protfolio", component: ProtfolioComponent},
		{path:"services", component: ServicesComponent},
		{path:"users", component: UsertableComponent, children: [
			{path:':id', component: UserDeatilsComponent}
		]},
		{path:"reactive", component: ReactiveFormsComponent},
		{path:"contact", component: ContactComponent},
		{path:"login", component: LoginComponent},
		{path:"logout", component: LogoutComponent}
];

export const routing = RouterModule.forRoot(routes);