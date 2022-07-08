import { PageNotFountComponent } from './page-not-fount/page-not-fount.component';
import { LastPageComponent } from './last-page/last-page.component';
import { ChessExperienceComponent } from './chess-experience/chess-experience.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: FirstPageComponent },
  {
    path: 'register',
    component: RegisterPageComponent,
  },
  {
    path: 'chess-experience',
    component: ChessExperienceComponent,
  },
  { path: 'last-page', component: LastPageComponent },
  { path: '**', component: PageNotFountComponent }, // Wildcard route for a 404 page

  // { path: "login", component: LoginComponent, canActivate: [UsersGuard] },
  // {
  //   path: "user",
  //   canActivate: [LoginGuard],
  //   children: [
  //     { path: "", component: EmployeesListComponent },
  //     { path: "delete/:id", component: DeleteComponent },
  //     { path: "edit/:id", component: EditComponent },
  //     { path: "view/:id", component: ViewComponent },
  //   ],
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
