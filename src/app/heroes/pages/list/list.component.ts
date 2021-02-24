import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroe';
import { HeroeService } from '../../services/heroe.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public heroes: Heroe[] = [];

  constructor(private heroeService: HeroeService) { }

  ngOnInit(): void {
    this.heroeService.get().subscribe(heroes => {
      this.heroes = heroes;
    });
  }

}
