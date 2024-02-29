import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

const MFE_APP_URL = "http://localhost:4300/remoteEntry.js"

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    {
        path: 'todolist',
        loadChildren: async () => {
            try {
                const m = await loadRemoteModule({
                    remoteEntry: MFE_APP_URL,
                    remoteName: "mfeApp",
                    exposedModule: "./TodolistComponent"
                });
                return m.TodolistComponent;
            } catch (error) {
                return console.log(error);
            }
        }
    },
];
