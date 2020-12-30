import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MymodalComponent } from './mymodal/mymodal.component';

@NgModule({
  declarations: [
    AppComponent,
    MymodalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  entryComponents: [
    MymodalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
