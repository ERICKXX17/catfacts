import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CatfactsComponent } from './pages/catfacts/catfacts.component';
import { ContactoComponent } from './pages/contact/contact.component';


export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'contact',
        component: ContactoComponent
    },
    {
        path: 'catfacts',
        component: CatfactsComponent
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
