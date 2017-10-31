import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';

// import { AngularFireModule } from 'angularfire2';
// import { AngularFirestoreModule } from 'angularfire2/firestore';
// import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { AppService } from './app.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    Ng2AutoCompleteModule,
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFirestoreModule
  ],
  providers: [ AppService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
