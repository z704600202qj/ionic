import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';


@IonicPage()
@Component({
  templateUrl: 'main-tabs.html',
  selector: 'page-main-tabs'
})
export class MainTabsPage {

  tab1Root = 'HomePage';
  tab2Root = 'AboutPage';
  tab3Root = 'ContactPage'

  constructor(public navCtrl: NavController) {
  }
}
