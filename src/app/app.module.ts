import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AngularFirestoreModule } from "@angular/fire/firestore"
import { ChatComponent} from "./componentes/chat/chat.component"

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {LoginPageModule} from './componentes/login/login.module';

import {firebaseConfig} from '../environments/environment';
import {AngularFireModule} from  '@angular/fire';
import {AngularFireAuthModule } from '@angular/fire/auth';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [AppComponent,ChatComponent],
  entryComponents: [ChatComponent],
  imports: [FormsModule,BrowserModule, IonicModule.forRoot(), AppRoutingModule, LoginPageModule,
    AngularFireModule.initializeApp(firebaseConfig), AngularFireAuthModule, AngularFirestoreModule, FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
