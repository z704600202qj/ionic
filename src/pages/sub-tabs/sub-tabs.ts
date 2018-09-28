import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';

/**
 * Generated class for the SubTabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sub-tabs',
  templateUrl: 'sub-tabs.html'
})
export class SubTabsPage {

  tab1Root = 'SubHomePage';
  tab2Root = 'SubGoPage';
  tab3Root = 'SubTopsPage'
  tab4Root = 'SubMyPage'
  tab5Root = 'SubReleasePage'

  public data: { viewCtrl: any };

  constructor(public navCtrl: NavController) {
  }

}
