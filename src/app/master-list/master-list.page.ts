import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { SwapiFilm } from '../swapi/swapi-film';
import { SwapiFilms } from '../swapi/swapi-films';
import { SwapiService } from '../swapi/swapi.service';

@Component({
  selector: 'app-master-list',
  templateUrl: './master-list.page.html',
  styleUrls: ['./master-list.page.scss'],
})
export class MasterListPage implements OnInit {

  films: Array<SwapiFilm> | undefined;

  constructor(private swapiService: SwapiService, public loadingController: LoadingController,
    private router: Router) { }

  async ngOnInit() {
    const loading = await this.loadingController.create({
      message: 'Loading films...',
    });
    await loading.present();
    this.swapiService.getFilms()
      .subscribe((data: SwapiFilms) => {
        this.films = data.results;
        loading.dismiss();
      });
  }

  openFilmDetail(film: SwapiFilm) {
    this.router.navigate(['/film-detail', {id: film.episode_id}]);
  }

}
