import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EventsComponent } from './components/events/events.component';
import { EventDetailComponent } from './components/event-detail/event-detail.component';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { SearchComponent } from './components/search/search.component';
import { TasksComponent } from './components/tasks/tasks.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'events', component: EventsComponent },
  { path: 'events/:id', component: EventDetailComponent },
  { path: 'create-event', component: CreateEventComponent },
  { path: 'search', component: SearchComponent },
  // Tasks routes
  { path: 'tasks/:eventId', component: TasksComponent } // single route for both view & create
];
