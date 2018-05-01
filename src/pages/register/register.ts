import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

	@ViewChild('username') user;
	@ViewChild('password') password;

  constructor(	private fire: AngularFireAuth,
  				// public afAuth: AngularFireAuth
  				public navCtrl: NavController, 
  				public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  registerUser() {
  	console.log('registrar como:', this.user.value, this.password.value);
  }

  registerUser() {
  	this.fire.auth.createUserWithEmailAndPassword(this.user.value, this.password.value)
  	.then(data => { 
  		console.log('upa! Deu bom!', data);
  	})
  	.catch(error => {
  		console.log('Anem... Deu ruim', error);
  	});
  	console.log('registrar com', this.user.value, this.password.value);
  }


}
