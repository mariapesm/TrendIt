import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {Login} from '../pages/login/login';
import {AddTrend} from '../pages/add-trends/add-trends';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireModule} from 'angularfire2';

export const firebaseConfig = {
    apiKey: "AIzaSyAHd72_MCuR65Nj4QqcCD09kJcpfDxJzKQ",
    authDomain: "trendit-ab04c.firebaseapp.com",
    databaseURL: "https://trendit-ab04c.firebaseio.com",
    projectId: "trendit-ab04c",
    storageBucket: "trendit-ab04c.appspot.com",
    messagingSenderId: "382510013108"
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Login,
    AddTrend
  ],
  imports: [
    BrowserModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Login,
    AddTrend
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
