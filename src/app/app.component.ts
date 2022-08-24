import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PlaylistModel } from './models/playlist.model';
import { FormsModule } from '@angular/forms';
import { PlaylistService } from './services/playlist.service';
import { SongModel } from './models/song.model';
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';
import { Playlists } from './playlist.component/playlist.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {

  title = 'proyecto-spotify';
  currentPlaylist='';
  isLogged: boolean = false;

  playlists: PlaylistModel[] = [];
  songsAImprimir: SongModel[] = [];

  constructor(private http: HttpClient,
    private playlistService: PlaylistService,
    private logInService: LoginService,
    private router: Router) { }

  ngOnInit(): void {
    this.isLogged = this.logInService.isAuthenticated()
  }


  login() {
    this.isLogged = this.logInService.logged()
    this.router.navigate([''])
  }

  logout() {
    this.isLogged = this.logInService.notLogged()
    this.router.navigate([''])
  }

  async clickedOn(value: PlaylistModel): Promise<SongModel[]> {
    let listaAImprimir = await this.playlistService.getAllSongsOfPlaylist(value)
    console.log(listaAImprimir);
    this.songsAImprimir = listaAImprimir;
    return (this.songsAImprimir);
  }

  addPlaylist(playlistToAdd: PlaylistModel) {

    this.playlists.push(playlistToAdd)
    console.log(this.playlists)

  }

  ngOnChanges(changes: SimpleChanges) {
    this.playlists = changes['playlists'].currentValue;
  }

  

  getInfoPlaylist(name:string){
    this.currentPlaylist= name;

  }
}
