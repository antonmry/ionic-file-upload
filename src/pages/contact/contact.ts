import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }

  file: File;
  changeListener($event) : void {
    this.file = $event.target.files[0];
    console.log("File " + this.file.name)
  }

  todo = {}
  logForm() {
    console.log(this.todo)
  }
}
