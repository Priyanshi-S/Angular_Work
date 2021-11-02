  import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2SearchPipeModule} from 'ng2-search-filter';

import { AppComponent } from './app.component';
import { HeaderComponent } from './service/header/header.component';
import { FooterComponent } from './service/footer/footer.component';
import { MainComponent } from './service/main/main.component';
import { FormsModule } from '@angular/forms';
import { ComparisonComponent } from './service/comparison/comparison.component';
import { Routes, RouterModule } from '@angular/router';  


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ComparisonComponent
  ],
  imports: [
    BrowserModule, 
    Ng2SearchPipeModule,
    FormsModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
