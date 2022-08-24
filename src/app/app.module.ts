import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { navegadorInicio } from './navegador-inicio.component/navegador-inicio.component';
import { listaCanciones } from './lista-canciones.component/lista-canciones.component';
import { Playlists } from './playlist.component/playlist.component';
import { HttpClientModule } from '@angular/common/http';
import { AddPlaylistComponent } from './add-playlist/add-playlist.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddSongComponent } from './add-song/add-song.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginPageComponent } from './pages/login/login-page.component';
import { MatMenuModule } from '@angular/material/menu';



@NgModule({
  declarations: [
    AppComponent,
    navegadorInicio,
    listaCanciones,
    Playlists,
    AddPlaylistComponent,
    LoginComponent,
    AddSongComponent,
    HomeComponent,
    LoginPageComponent,
   

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    MatSidenavModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    RouterModule.forRoot([]),
    MatMenuModule,
    




  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
