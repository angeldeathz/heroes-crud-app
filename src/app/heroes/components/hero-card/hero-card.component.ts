import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroe';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss']
})
export class HeroCardComponent  {

  @Input() heroe: Heroe = null;

}
