import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { SwapiFilm } from '../swapi/swapi-film';
import { SwapiService } from '../swapi/swapi.service';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.page.html',
  styleUrls: ['./film-detail.page.scss'],
})
export class FilmDetailPage implements OnInit {

  // TODO Add the back menu

  film: SwapiFilm | undefined;

  constructor(private activatedRoute: ActivatedRoute, private swapiService: SwapiService,
    public loadingController: LoadingController, private location: Location) { }

  async ngOnInit() {
    const filmId = this.activatedRoute.snapshot.paramMap.get('id');
    const loading = await this.loadingController.create({
      message: 'Loading film...',
    });
    await loading.present();
    this.swapiService.getFilm(filmId)
      .subscribe((data: SwapiFilm) => {
        this.film = data;
        loading.dismiss();
      });
  }

  goBack() {
    this.location.back();
  }

}
