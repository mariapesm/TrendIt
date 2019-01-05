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
     apiKey: "AIzaSyAO4JY3phcUM5XNQSrskipNMyWvne5FT7Y",
    authDomain: "pinclone-75ba3.firebaseapp.com",
    databaseURL: "https://pinclone-75ba3.firebaseio.com",
    projectId: "pinclone-75ba3",
    storageBucket: "pinclone-75ba3.appspot.com",
    messagingSenderId: "337334617922"
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
