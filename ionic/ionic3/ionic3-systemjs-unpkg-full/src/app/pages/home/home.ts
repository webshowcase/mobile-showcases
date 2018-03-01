import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'app/pages/home/home.html',
  styleUrls: ['app/pages/home/home.scss']
})
export class HomePage {

  appName = 'Ionic App';

  constructor(public navController: NavController) {

  }

}
