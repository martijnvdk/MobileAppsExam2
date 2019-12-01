import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TechnicalSkillsPage } from './technical-skills.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: TechnicalSkillsPage }])
  ],
  declarations: [TechnicalSkillsPage]
})
export class TechnicalSkillsPageModule {}
