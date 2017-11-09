import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;

  heroes: Hero[] = [];

  constructor(
    private heroService: HeroService
  ) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.heroService.getHeroes().subscribe((heroes: Hero[]) => this.heroes = heroes);
  }

  onSelectHero(hero: Hero) {
    this.selectedHero = hero;
  }
}
