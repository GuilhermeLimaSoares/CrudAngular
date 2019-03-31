import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditComponent } from './contatos/edit/edit.component';
import { ListComponent } from './contatos/list/list.component';
import { FormsModule} from '@angular/forms';
import { ContatoDataService } from './contatos/shared/contato-data.service';
import { ContatoService } from './contatos/shared/contato.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase)

  ],
  providers: [ContatoService, ContatoDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
