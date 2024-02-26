import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';

export const routes: Routes = [
    {path: '',redirectTo: '/home',pathMatch:'full' },
    {path: 'home', component:HomeComponent},
    {path: 'todo-list',component:TodoComponent},
];
