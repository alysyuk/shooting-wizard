import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
    selector: 'my-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
    hero: Hero;
    heroPlaceHolder: Hero = {
        id: null,
        name: '',
        power: null
    };

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.heroService.getHero(id)
                .then(hero => this.hero = hero ? hero : this.heroPlaceHolder);
        });
    }

    onSubmit(): void {
        if (this.hero.id) {
            this.heroService.update(this.hero)
                .then(this.goBack);
        } else {
            this.heroService.create(this.hero.name, this.hero.power)
                .then(this.goBack);
        }

    }

    goBack(): void {
        window.history.back();
    }
}
