import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { MessageService } from './message.service';
import { UpdatedMessageService } from './updated-message.service';
import { Child3Component } from './child3/child3.component';

@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child2Component,
    Child3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide:MessageService, useClass:UpdatedMessageService},
    {provide:UpdatedMessageService, useExisting:MessageService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
