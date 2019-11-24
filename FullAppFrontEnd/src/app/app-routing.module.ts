import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {ListTodoComponent} from './list-todo/list-todo.component';
import {LogoutComponent} from './logout/logout.component';
import {RouteGuardService} from './services/route-guard.service';
import {TodoComponent} from "./todo/todo.component";


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard/:name', component: DashboardComponent, canActivate: [RouteGuardService]},
  {path: 'todos', component: ListTodoComponent, canActivate: [RouteGuardService]},
  {path: 'todo/:id', component: TodoComponent},
  {path: 'logout', component: LogoutComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
