import { HttpClientModule } from '@angular/common/http';
import { NgModule,  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
// import {} from '@angular/common'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { AboutComponent } from './pages/about/about.component';
import { TodosComponent } from './pages/todos/todos.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { TodoDescComponent } from './pages/todo-desc/todo-desc.component';
import { CommentsComponent } from './pages/todo/comments/comments.component';
import { RelatedComponent } from './pages/todo/related/related.component';


@NgModule({
  declarations: [AppComponent, TodoListComponent, TodoFormComponent, AboutComponent, TodosComponent, HomeComponent, NotFoundComponent, TodoDescComponent, CommentsComponent, RelatedComponent, ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
