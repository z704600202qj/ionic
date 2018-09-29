import {Component, Input} from '@angular/core';
import {NavController} from 'ionic-angular'
import {VideoPlayer, VideoOptions} from '@ionic-native/video-player';

/**
 * Generated class for the ItemsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'items',
  templateUrl: 'items.html'
})
export class ItemsComponent {
  videoOpts: VideoOptions;
  text: string;
  @Input()
  private item: object;

  constructor(public navCtrl: NavController, private videoPlayer: VideoPlayer) {
    this.text = 'Hello World';
  }

  public playVideo(fileUrl) {
    this.videoOpts = {volume: 1.0};
    this.videoPlayer.play(fileUrl).then(() => {
      console.log('video completed');
    }).catch(err => {
      console.log(err);
    });
  }

  public stopPlayingVideo() {
    this.videoPlayer.close();
  }

  look_desc(item) {
    console.log(item);
    this.navCtrl.push('PostDescPage', {
      wid: item.wid,
      tid: item.tid
    })

  }

}
