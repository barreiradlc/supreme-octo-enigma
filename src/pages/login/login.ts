import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
// firebase
import { AngularFireAuth } from 'angularfire2/auth';
// após login
import { LoggedinPage } from '../loggedin/loggedin';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

	@ViewChild('username') user;
	@ViewChild('password') password;

  constructor(	private alertCtrl: AlertController,
  				private fire: AngularFireAuth,
  				public navCtrl: NavController, 
  				public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  alert(message: string){
  	this.alertCtrl.create({
  		title: 'Info',
  		subTitle: message,
  		buttons: ['OK']
  	}).present();
  }

  // função de login
  signInUser() {
  	this.fire.auth.signInWithEmailAndPassword(this.user.value, this.password.value)
  	// caso haja informação a processar
  	.then(data => {
  		// console
  		console.log('deu bom', this.fire.auth.currentUser);
  		// alerta
  		this.alert('Logado com sucesso')
  		// redirecionamento
  		this.navCtrl.setRoot ( LoggedinPage )
  		// usuário logado
  	})
  	.catch( error => {
  		console.log('deu ruim', error);
  		this.alert(error.message);
  	})
  	console.log('registrar como:', this.user.value, this.password.value);
  }

}
