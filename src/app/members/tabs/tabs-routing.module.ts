/* Made by:
Martijn van de Kamer
1803202 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

// Adds logic to the routing between tabs

const routes: Routes = [
  {
    // sets default page after logging in
    path: '',
    redirectTo: '/members/about',
    pathMatch: 'full'
  },
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'about',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../about/about.module').then(m => m.AboutPageModule)
          }
        ]
      },
      {
        path: 'resume',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../technical-skills/technical-skills.module').then(m => m.TechnicalSkillsPageModule)
          },
          {
            path: 'soft-skills',
            children: [
              {
                path: '',
                loadChildren: () =>
                  import('../soft-skills/soft-skills.module').then(m => m.SoftSkillsPageModule)
              }
            ]
          }
        ]
      },
      {
        path: 'projects',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../personal-projects/personal-projects.module').then(m => m.PersonalProjectsPageModule)
          },
          {
            path: 'team-projects',
            children: [
              {
                path: '',
                loadChildren: () =>
                  import('../team-projects/team-projects.module').then(m => m.TeamProjectsPageModule)
              }
            ]
          }
        ]
      },
      {
        path: 'contact',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../contact/contact.module').then(m => m.ContactPageModule)
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
