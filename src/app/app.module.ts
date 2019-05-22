import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicStorageModule } from '@ionic/storage';

// For Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import { AppMaterialModule } from './app-material/app-material.module';

import { FormsModule ,ReactiveFormsModule } from '@angular/forms';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttprequestinterceptorService } from './services/httprequestinterceptor.service';

import { GlobalconstantService } from './services/globalconstant.service';

import { AuthService } from './services/auth.service';
import { HttpRequestHandlerService } from './services/http-request-handler.service';
import { DataShareService } from './services/data-share.service';
import { IonicSelectableModule } from 'ionic-selectable';
import { Keyboard } from '@ionic-native/keyboard/ngx';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule ,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(), 
    AppRoutingModule,
    IonicSelectableModule
    //RouterModule
  ],
  providers: [
    Keyboard,
    StatusBar,
    SplashScreen,
    GlobalconstantService,
    AuthService,
    HttpRequestHandlerService,
    DataShareService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttprequestinterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
