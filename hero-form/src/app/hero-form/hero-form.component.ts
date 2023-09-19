import { Component } from '@angular/core';
import { Hero } from "../hero"

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']

})
export class HeroFormComponent {

  powers = ['Relly Smart', 'Super Flexible', 'Super Hot', 'Weather Changer']

  model = new Hero(18, 'Dr. IQ', this.powers[0], 'Chuck Overstreet');
  submitted = false;

  onSubmit() { this.submitted = true; }
  // const myHero  = new Hero(42,'Sky Dog','+Fetch any object at any distance', 'Leslie Rollover');

  newHero() {
    this.model = new Hero(42, '', '');
  }
}
