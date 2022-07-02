import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "home", component: FirstPageComponent },
  { path: "register", component: RegisterPageComponent },
  // { path: "home", component: HomeComponent, canActivate: [LoginGuard] },
  // { path: "login", component: LoginComponent, canActivate: [UsersGuard] },
  // {
  //   path: "employees",
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
