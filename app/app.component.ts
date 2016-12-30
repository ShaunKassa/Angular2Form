import {Component}         from 'angular2/core';
import {HeroFormComponent} from './hero-from.component'
@Component({
  selector: 'my-app',
  template: '<hero-form></hero-form>',
  directives: [HeroFormComponent]
})
export class AppComponent { }
