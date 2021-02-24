import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './pages/add/add.component';
import { SearchComponent } from './pages/search/search.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { HeroesRoutesModule } from './heroes.route.module';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { ImagePipe } from './pipes/image.pipe';

@NgModule({
  declarations: [
    AddComponent, 
    SearchComponent, 
    HomeComponent, 
    ListComponent,
    HeroeComponent,
    HeroCardComponent,
    ImagePipe
  ],
  imports: [
    CommonModule,
    HeroesRoutesModule,
    FlexLayoutModule,
    MaterialModule
  ],
  exports: [
    HeroesRoutesModule
  ]
})
export class HeroesModule { }
