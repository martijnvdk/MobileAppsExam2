  /* Made by:
  Martijn van de Kamer
  1803202 */

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'members', loadChildren: () => import('./members/tabs/tabs.module').then(m => m.TabsPageModule), canActivate: [AuthGuard] },
  { path: '', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) },
  { path: 'resume', loadChildren: () => import('./members/technical-skills/technical-skills.module').then(m => m.TechnicalSkillsPageModule), canActivate: [AuthGuard] },
  { path: 'soft-skills', loadChildren: () => import('./members/soft-skills/soft-skills.module').then(m => m.SoftSkillsPageModule), canActivate: [AuthGuard] },
  { path: 'projects', loadChildren: () => import('./members/personal-projects/personal-projects.module').then(m => m.PersonalProjectsPageModule), canActivate: [AuthGuard] },
  { path: 'team-projects', loadChildren: () => import('./members/team-projects/team-projects.module').then(m => m.TeamProjectsPageModule), canActivate: [AuthGuard] },
  { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule) },
  { path: 'help', loadChildren: () => import('./help/help.module').then(m => m.HelpPageModule) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
