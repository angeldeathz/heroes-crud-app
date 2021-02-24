import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroe';
import { HeroeService } from '../../services/heroe.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public query: string = null;
  public heroes: Heroe[] = [];
  public heroeSelected: Heroe = null;
  public heroNotFound = false;

  constructor(private heroService: HeroeService) { }

  ngOnInit(): void {
  }

  public searchHero() {
    console.log("a-", this.query);
    this.heroService.getByQuery(this.query).subscribe(heroes => {
      this.heroes = heroes;

      if (this.heroes.length === 0) {
        this.heroNotFound = true;
      } else {
        this.heroNotFound = false;
      }
    });
  }

  public optionSelected(event: MatAutocompleteSelectedEvent) {
    this.heroeSelected = event.option.value;
    this.query = this.heroeSelected.superhero ? this.heroeSelected.superhero : "";
  }
}
