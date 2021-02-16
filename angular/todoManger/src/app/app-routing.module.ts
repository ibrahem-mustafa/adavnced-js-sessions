import { RelatedComponent } from './pages/todo/related/related.component';
import { CommentsComponent } from './pages/todo/comments/comments.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodosComponent } from './pages/todos/todos.component';
import { AboutComponent } from './pages/about/about.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { TodoDescComponent } from './pages/todo-desc/todo-desc.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'todos',
    component: TodosComponent,
  },

  // /todo/:id/related
  // /todo/:id/comments
  {
    path: 'todos/:id',
    component: TodoDescComponent,
    children: [
      {
        path: 'related',
        component: RelatedComponent,
      },
      {
        path: 'comments',
        component: CommentsComponent,
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
