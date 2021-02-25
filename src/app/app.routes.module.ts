import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from './auth/guards/auth.service';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes = [
    {
      path: "auth",
      loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule)
    },
    {
      path: "heroes",
      loadChildren: () => import("./heroes/heroes.module").then(m => m.HeroesModule),
      // canActivate: [AuthService]
    },
    {
      path: "404",
      component: ErrorPageComponent
    },
    {
      path: "**",
      redirectTo: "404"
    }
  ];

@NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [
      RouterModule
    ]
})
export class AppRoutesModule { }