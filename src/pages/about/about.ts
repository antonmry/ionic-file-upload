import {Component} from '@angular/core';
import {NavController, Platform} from 'ionic-angular';
//import {FileSelectDirective, FileDropDirective, FileUploader} from '../node_modules/ng2-file-upload';
//import {FileSelectDirective, FileDropDirective, FileUploader} from 'ng2-file-upload';
import {FileUploader} from 'ng2-file-upload';

const URL = 'https://locationofyourserverandapiendpoint';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})

export class AboutPage {
  uploader: FileUploader;
  hasBaseDropZoneOver: boolean;
  hasAnotherDropZoneOver: boolean;

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }

  //NOTE: because I am using authorization I am passing the token through the file uploader - otherwise not required_

  constructor(platform: Platform, public navCtrl: NavController) {
    this.uploader = new FileUploader({authToken: 'Bearer ' + 'stored_token', url: URL + "/VARTOBEPASSEDWITHFILE"});
  }
}
