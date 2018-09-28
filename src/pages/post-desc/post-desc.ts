import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {HttpServicesProvider} from "../../providers/http-services/http-services";

/**
 * Generated class for the PostDescPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-post-desc',
  templateUrl: 'post-desc.html',
})
export class PostDescPage {
  private wid: string = '';
  private tid: string = '';
  public postinfo: object = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpServicesProvider) {
    console.log(this.navParams);
    let datas = this.navParams.data;
    this.wid = datas.wid;
    this.tid = datas.tid
  }

  ionViewDidLoad() {
    this.getPost()
  }

  getPost() {
    let obj = {
      wid: this.wid,
      tid: this.tid
    }
    this.http.get('/post', obj, res => {
      this.postinfo = res.data[0]
    })
  }
}
