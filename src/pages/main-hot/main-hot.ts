import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
// import {SearchPage} from "../search/search";
import {HttpServicesProvider} from "../../providers/http-services/http-services";
import {ToastController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-main-hot',
  templateUrl: 'main-hot.html'
})
export class MainHotPage {
  public list: Array<any> = [];
  public info: any


  constructor(public navCtrl: NavController, public http: HttpServicesProvider, private toastCtrl: ToastController) {
    this.getList('')
  }

  getList(type, ...pages) {
    this.http.get('/front/recommend', pages[0], res => {
      this.list = this.list.concat(res.data);
      this.info = res;
      if (type) {
        type.complete();
        //toast提示
        this.showInfo("加载成功");
      }
    })
  }

  doRefresh(refresher) {
    this.getList(refresher)
  }

  //下滑动加载数据
  doInfinite(infiniteScroll) {
    console.log(this.info);
    let {currentPage} = this.info.pages
    let obj = {
      'page': currentPage + 1
    };
    this.getList(infiniteScroll, obj)
  }


  //显示toast消息
  showInfo(msg) {
    let toast = this.toastCtrl.create({
      message: msg, //提示消息
      duration: 1500,//3秒后自动消失
      position: 'top',//位置top,bottom
      showCloseButton: true, //是否显示关闭按钮
      closeButtonText: "关闭" //关闭按钮字段
    });

    //关闭后执行的操作
    toast.onDidDismiss(() => {
      console.log('toast被关闭之后执行');
    });
    //显示toast
    toast.present();//符合触发条件后立即执行显示。
  }


  searchs() {
    // this.navCtrl.push(SearchPage)
  }


}
