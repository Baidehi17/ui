import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

import { PanelModule } from 'primeng/panel';
import { MenubarModule } from 'primeng/menubar';
import { MegaMenuModule } from 'primeng/megamenu';
import { DigitalExperienceComponent } from './digital-experience/digital-experience.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { CardModule } from 'primeng/card';
import { CustomerLoveUsComponent } from './customer-love-us/customer-love-us.component';
import { ArticlesComponent } from './articles/articles.component';
@NgModule({
  declarations: [
    MainComponent,
    FooterComponent,
    HeaderComponent,
    DigitalExperienceComponent,
    WhatWeDoComponent,
    CustomerLoveUsComponent,
    ArticlesComponent
  ],
  imports: [
    CommonModule,

    PanelModule,
    MenubarModule,
    MegaMenuModule,
    CardModule
  ],
  exports: [
    MainComponent
  ]
})
export class SiteModule { }
