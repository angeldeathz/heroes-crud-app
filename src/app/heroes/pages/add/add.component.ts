import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Heroe } from '../../interfaces/heroe';
import { HeroeService } from '../../services/heroe.service';
import { DialogComponent } from '../../components/dialog/dialog.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public publishers = ["DC Comics", "Marvel Comics"];
  public heroe: Heroe = {
    id: "",
    superhero: "",
    publisher: null,
    alter_ego: "",
    first_appearance: "",
    characters: "",
    alt_img: ""
  };

  constructor(
    private heroeService: HeroeService,
    private activeRoute: ActivatedRoute,
    private route: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.activeRoute.paramMap
      .pipe(
        switchMap(x => this.heroeService.getById(x.get("id")))
      )
      .subscribe(heroe => {
        this.heroe = heroe;
      });
  }

  public saveHeroe() {

    if (
      this.heroe.superhero.trim().length === 0 ||
      this.heroe.alter_ego.trim().length === 0 ||
      this.heroe.first_appearance.trim().length === 0 ||
      this.heroe.characters.trim().length === 0 ||
      !this.heroe.publisher || this.heroe.publisher.trim().length === 0
    ) {
      this.showSnakBar("You need to complete all the inputs");
      return;
    } else {
      if (this.heroe.id) {
        this.heroeService.put(this.heroe).subscribe(x => {
          this.showSnakBar("Hero Updated");
          this.route.navigateByUrl("/heroes/" + x.id);
        });
      } else {
        this.heroeService.post(this.heroe).subscribe(x => {
          this.showSnakBar("Hero Added");
          this.route.navigateByUrl("/heroes/" + x.id);
        });
      }
    }
  }

  public deleteHero(){

    const dialog = this.dialog.open(DialogComponent, {
      width: "250px",
      data: this.heroe
    });

    dialog.afterClosed().subscribe(x => {
      if (x) {
        if (this.heroe && this.heroe.id) {
          this.heroeService.delete(this.heroe.id).subscribe(x => {
            this.showSnakBar("Hero Deleted");
            this.route.navigateByUrl("/heroes/list");
          });
        }
      }
    });
  }

  private showSnakBar(message: string): void {
    this.snackBar.open(message, "Ok", {
      duration: 2500
    });
  }
}
