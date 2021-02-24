import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { HeroeService } from '../../services/heroe.service';
import { Heroe } from '../../interfaces/heroe';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent implements OnInit {

  public heroe: Heroe;

  constructor(private route: ActivatedRoute, private heroeService: HeroeService) { }

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap(x => this.heroeService.getById(x.get("id")))
      )
      .subscribe(heroe => {
        this.heroe = heroe;
      });
  }
}
