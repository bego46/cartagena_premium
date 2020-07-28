import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app-routing.module';

import { AppComponent } from './app.component';
import { IndexComponent } from './componentes/index/index.component';
import { ChekInComponent } from './componentes/chek-in/chek-in.component';
import { PagoComponent } from './componentes/pago/pago.component';
import { ErrorComponent } from './componentes/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ChekInComponent,
    PagoComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
