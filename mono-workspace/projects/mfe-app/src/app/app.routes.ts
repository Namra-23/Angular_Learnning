import { Routes } from '@angular/router';
import { TodolistComponent } from './todolist/todolist.component';

export const routes: Routes = [
    {path:'',redirectTo:'/todolist',pathMatch:'full'},
    {path:'todolist',component:TodolistComponent}
];
