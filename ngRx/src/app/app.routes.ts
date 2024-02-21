import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter/counter.component';
import { NgModule } from '@angular/core';
import { PostsListComponent } from './posts/posts-list/posts-list.component';

export const routes: Routes = [
    {
        path: '', component: HomeComponent,
    },
    {
        path: 'counter', component: CounterComponent
    },
    {
        path: 'posts',component: PostsListComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }