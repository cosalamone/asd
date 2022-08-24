import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PlaylistService } from '../services/playlist.service';
import { PlaylistModel } from '../models/playlist.model';


@Component({
  selector: 'playlists',
  styleUrls: ['playlist.component.css'],
  templateUrl: 'playlist.component.html',
  providers: [PlaylistService]
})
export class Playlists implements OnInit {

  constructor(private playlistService: PlaylistService) {

  }
  playlists: PlaylistModel[] = []; // hace el ngfor en playlist.component.html

  @Input() playlist: PlaylistModel = { // playliist a renderizar
    name: '',
    description: '',
  }

  async ngOnInit() {
    this.playlists = await this.playlistService.getAllPlaylist();
  }


  @Output() playlistClick = new EventEmitter<PlaylistModel>();
 

  eventOnPlaylist(value: PlaylistModel) {
      this.playlistClick.emit(value);
  }

  deleteThisPlaylist (playlistToErase:PlaylistModel){

    const toDelete: string = playlistToErase.name
    
    const data = {
      name: toDelete
    }
    
    const params = new URLSearchParams(data);


    this.playlistService.deletePlaylist(params, toDelete)
    .subscribe(data=>{
      console.log('Playlist eliminada:', data)
    });
  }


  @Output() playlistInfo = new EventEmitter<string>();

  sendInfoOfPlaylist(value:string){
    this.playlistInfo.emit(value);
  }
}
