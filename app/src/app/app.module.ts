import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DBService } from '../services/db.service';
import { AppRoutingModule } from './app.routes';
import { StartComponent } from './start/start.component';
import { HomeComponent } from './home/home.component';
import { FragenkatalogComponent } from './fragenkatalog/fragenkatalog.component';
import { GameComponent } from './game/game.component';
import { HeaderComponent } from './start/header/header.component';
import { FooterComponent } from './start/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatButtonModule

  ],
  declarations: [
    AppComponent,
    StartComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FragenkatalogComponent,
    GameComponent
  ],
  providers: [DBService],
  bootstrap: [AppComponent],
})
export class AppModule { }
