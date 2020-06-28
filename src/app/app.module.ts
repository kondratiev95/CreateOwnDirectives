import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StyleDirective } from './Directives/style.directive';
import { StructureDDirective } from './directives/structure-d.directive';

@NgModule({
  declarations: [
    AppComponent,
    StyleDirective,
    StructureDDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
