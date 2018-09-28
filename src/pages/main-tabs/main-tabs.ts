import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';

@IonicPage()
@Component({
  templateUrl: 'main-tabs.html',
  selector: 'page-main-tabs'
})
export class MainTabsPage {

  mainTab1Root = 'MainHotPage';
  mainTab2Root = 'MainCommunityPage';
  mainTab3Root = 'MainFastPage';
  mainTab4Root = 'MainFunPage';
  mainTab5Root = 'MainMyPage';

  constructor(public navCtrl: NavController) {
  }
}
