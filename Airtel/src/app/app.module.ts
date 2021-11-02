import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './demo/header/header.component';
import { FooterComponent } from './demo/footer/footer.component';
import { FooterLinkComponent } from './demo/footer-link/footer-link.component';
import { FirstComponent } from './demo/first/first.component';
import { SecondComponent } from './demo/second/second.component';
import { ThirdComponent } from './demo/third/third.component';
import { HeaderlinkComponent } from './demo/headerlink/headerlink.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FooterLinkComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    HeaderlinkComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
