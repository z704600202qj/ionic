import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
// import {NavController} from 'ionic-angular'
//, HttpEvent, HttpInterceptor, HttpHandler, HttpRequest,
//   HttpErrorResponse
@Injectable()
export class HttpServicesProvider {
  public restServer;
  public http;

  constructor(Http: HttpClient) {
    this.http = Http;
    this.restServer = 'https://new.wfun.com/api';
  }

  public get(url, params?: Object, cb?: Function) {
    let httpParams = new HttpParams();
    console.log('get开始请求');
    const vm = this;
    if (params) {
      for (const key in params) {
        if (params[key] === false || params[key]) {
          httpParams = httpParams.set(key, params[key]);
        }
      }
    }
    vm.http.get(vm.restServer + url, {params: httpParams})
      .subscribe(data => {
        vm.dealCode(cb, data)
      });
  }

  public post(url, data?: Object, cb?: Function, options?: Object) {
    console.log('post开始请求');
    const vm = this;
    vm.http.post(vm.restServer + url, data, options)
      .subscribe(res => {
        vm.dealCode(cb, data)

      });
  }

  public put(url, data?: Object, cb?: Function, options?: Object) {
    console.log('put开始请求');
    const vm = this;
    vm.http.put(vm.restServer + url, data, options)
      .subscribe(res => {
        vm.dealCode(cb, data)

      });
  }

  public delete(url, params?: Object, cb?: Function) {
    let httpParams = new HttpParams();
    console.log('delete开始请求');
    const vm = this;
    if (params) {
      for (const key in params) {
        if (params[key]) {
          httpParams = httpParams.set(key, params[key]);
        }
      }
    }
    vm.http.delete(vm.restServer + url, {params: httpParams})
      .subscribe(data => {
        vm.dealCode(cb, data)
      });
  }

  public dealCode(cb, data) {
    if (data.code == 0) {
      cb(data);
    } else {
      // this.navCtrl.push(LoginPage)
    }

  }
}
