import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
// import {SearchPage} from "../search/search";
import {HttpServicesProvider} from "../../providers/http-services/http-services";

@IonicPage()
@Component({
  selector: 'page-main-hot',
  templateUrl: 'main-hot.html'
})
export class MainHotPage {
  public listInfo: any = {};
  public daily: object = {};
  public thread: Array<any> = []


  constructor(public navCtrl: NavController, public http: HttpServicesProvider) {
    this.getList()
  }

  getList() {
    this.http.get('/front/recommend', '', res => {
      this.thread = res.data
      console.log(res.data);
    })
  }

  searchs() {
    // this.navCtrl.push(SearchPage)
  }



}
