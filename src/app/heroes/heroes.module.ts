import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './pages/add/add.component';
import { SearchComponent } from './pages/search/search.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { HeroesRoutesModule } from './heroes.route.module';
import { HeroeComponent } from './pages/heroe/heroe.component';

@NgModule({
  declarations: [
    AddComponent, 
    SearchComponent, 
    HomeComponent, 
    ListComponent,
    HeroeComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutesModule
  ],
  exports: [
    HeroesRoutesModule
  ]
})
export class HeroesModule { }
