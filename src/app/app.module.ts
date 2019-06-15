import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SalaService } from './sala-service';

export const firebaseConfig = {
  apiKey: "AIzaSyDuvgNCBp8w8My_LlvWjxdQ_1JLTC0LNB8",
  authDomain: "fire-notablenotes3.firebaseapp.com",
  databaseURL: "https://fire-notablenotes3.firebaseio.com",
  projectId: "fire-notablenotes3",
  storageBucket: "fire-notablenotes3.appspot.com",
  messagingSenderId: "422833676559",
  appId: "1:422833676559:web:11fd0d4309442f28"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SalaService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
