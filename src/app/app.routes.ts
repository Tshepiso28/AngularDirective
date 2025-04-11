import { Routes } from '@angular/router';
import { FormsComponent } from './components/forms/forms.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileComponent } from './components/profile/profile.component';

export const routes: Routes = [
    {path: 'form', component: FormsComponent},
    {path: 'head', component: HeaderComponent},
    {path: 'profile', component: ProfileComponent}
];
