import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SongModel } from '../models/song.model'
import { PlaylistService } from '../services/playlist.service';


@Component({
  selector: 'lista-canciones',
  styleUrls: ['lista-canciones.component.css'],
  templateUrl: 'lista-canciones.component.html',
})


export class listaCanciones implements OnChanges {

  @Input() songsData: SongModel[] = [];
  @Input() playlistData = '';

constructor( private playlistService: PlaylistService){

}


  displayedColumns: string[] = ['name', 'artist', 'album', 'date', 'options'];

  dataSource = this.songsData;
  

  ngOnInit(): void {
    console.log("se ejecuto oninit")
  }

  ngOnChanges(changes: SimpleChanges) {
    this.dataSource = changes['songsData'].currentValue;
  }



  deleteThisSong(song: SongModel, playlistData: string) {
    playlistData.toUpperCase
    this.playlistService.deleteSong(playlistData, song)
    .subscribe((data: any)=>{
      console.log('Playlist eliminada:', data)
    });
  }

}
