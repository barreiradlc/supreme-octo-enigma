import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { LoggedinPage } from '../pages/loggedin/loggedin';
import { RegisterPage } from '../pages/register/register';

// angular fire
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';

 const firebaseAuth = {
    apiKey: "AIzaSyBIk5dT_lUKvSCMyKnOXaFUK1nluHtdMnU",
    authDomain: "login-aa7b1.firebaseapp.com",
    databaseURL: "https://login-aa7b1.firebaseio.com",
    projectId: "login-aa7b1",
    storageBucket: "login-aa7b1.appspot.com",
    messagingSenderId: "864881454544"
  };



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    // login && registro
    LoginPage,
    RegisterPage,
    // após registro
    LoggedinPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    // firebase
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    // login && registro
    LoginPage,
    RegisterPage,
    // após registro
    LoggedinPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
