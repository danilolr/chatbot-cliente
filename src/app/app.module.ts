import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { SelecionaDialogoComponent } from './pages/seleciona-dialogo/seleciona-dialogo.component';
import { DialogoComponent } from './pages/dialogo/dialogo.component';

import { RemoteService } from './service/remote.service';
import { ConfigService} from './service/config.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SelecionaDialogoComponent,
    DialogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [RemoteService,
  ConfigService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
