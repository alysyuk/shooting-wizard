import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../hero/hero';
import { HeroService } from '../hero/hero.service';

@Component({
    selector: 'my-heroes',
    templateUrl: './heroes.component.html',
    styleUrls:  ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;

    constructor(
        private heroService: HeroService,
        private router: Router) {}

    getHeroes(): void {
        this.heroService
            .getHeroes()
            .then(heroes => this.heroes = heroes);
    }

    delete(hero: Hero): void {
        this.heroService
            .delete(hero.id)
            .then(() => {
                this.heroes = this.heroes.filter(h => h !== hero);
                if (this.selectedHero === hero)
                {
                    this.selectedHero = null;
                }
            });
    }

    ngOnInit(): void {
        this.getHeroes();
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    gotoDetail(isPresent: boolean): void {
        if (isPresent){
            this.router.navigate(['/detail', this.selectedHero.id]);
        } else {
            this.router.navigate(['create'])
        }
    }
}
