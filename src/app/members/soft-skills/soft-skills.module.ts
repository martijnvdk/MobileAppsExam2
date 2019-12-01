import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SoftSkillsPage } from './soft-skills.page';

const routes: Routes = [
  {
    path: '',
    component: SoftSkillsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SoftSkillsPage]
})
export class SoftSkillsPageModule {}
