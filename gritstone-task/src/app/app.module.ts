import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './component/home/home.component';
import { CardComponent } from './component/card/card.component';
import { FooterComponent } from './component/footer/footer.component';
import { FormComponent } from './component/form/form.component';
import { AboutComponent } from './component/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    FooterComponent,
    FormComponent,
    AboutComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
