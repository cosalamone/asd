import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { firstValueFrom, Observable } from 'rxjs';
import { PlaylistModel, UpdatePlaylist } from '../models/playlist.model';
import { SongModel } from '../models/song.model';

@Injectable({
  providedIn: 'root'
})

export class PlaylistService {
  private baseURL = environment.baseURL + 'api/v1/Playlist';

  constructor(private http: HttpClient) { }

  getAllPlaylist(): Promise<PlaylistModel[]> {

    let response = this.http.get<PlaylistModel[]>(this.baseURL)

    return firstValueFrom(response);
  }


  // Get Playlist Songs 
  getAllSongsOfPlaylist(playlistName: PlaylistModel): Promise<SongModel[]> {

    let playlistPorBuscar = playlistName.name

    let options = {
      headers: {
        Accept: "application/json",
        Auth: "Bearer aslkdjalñsjdañlsjd"
      },

    }

    let response = this.http.get<any>(this.baseURL + '/' + playlistPorBuscar, options);
    let responsePromise = firstValueFrom(response);

    let songsPromise = new Promise<SongModel[]>((resolve, reject) => {
      responsePromise.then(r => resolve(r.idSongs));
      responsePromise.catch(e => reject(e));
    });


    return songsPromise;
  }


  createSong(data: SongModel, playlist: any) {
    return this.http.post(`${this.baseURL}/${playlist}/songs`, data);
  }


  updateSong(playlist: any, data: any, song:string) {
    return this.http.put(`${this.baseURL}/${playlist}/songs/${song}`, data);

  }

  deleteSong(playlist: any, song:SongModel) {
    let nameSong:string=song.name
    return this.http.delete(`${this.baseURL}/${playlist}/songs/${nameSong}`)
  }





// PLAYLIST
  createPlaylist(data: PlaylistModel) {

    return this.http.post(this.baseURL, data);
  }


  update(playlistName: any, data: any) {

    return this.http.put(`${this.baseURL}?${playlistName}`, data);

  }


  deletePlaylist(playlistName: any, data: any) {

    return this.http.delete(`${this.baseURL}?${playlistName}`, data)
  }

}

