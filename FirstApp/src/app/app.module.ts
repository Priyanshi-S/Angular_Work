import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppheaderComponent } from './nse/appheader/appheader.component';
import { LinkheaderComponent } from './nse/linkheader/linkheader.component';
import { LeftpanelComponent } from './nse/leftpanel/leftpanel.component';
import { MainpanelComponent } from './nse/mainpanel/mainpanel.component';
import { RightpanelComponent } from './nse/rightpanel/rightpanel.component';

@NgModule({
  declarations: [
    AppComponent,
    AppheaderComponent,
    LinkheaderComponent,
    LeftpanelComponent,
    MainpanelComponent,
    RightpanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
