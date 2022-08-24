import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SongModel } from '../models/song.model';
import { PlaylistService } from '../services/playlist.service';



@Component({
  selector: 'add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.css']
})
export class AddSongComponent implements OnInit {

  formAddSong!: FormGroup;

  @Output() songsEvent = new EventEmitter<any>();

  constructor(private readonly formBuilder: FormBuilder,
    private playlistService: PlaylistService) {
  }

  ngOnInit(): void {

    this.formAddSong = this.formBuilder.group({
      playlist: ['', Validators.required],
      name: ['', Validators.required],
      artist: ['', Validators.required],
      album: ['', Validators.required],
    })

  }


  createNewSong(formAddSong: FormGroup) {
    console.log(JSON.stringify(formAddSong.value));
    let songToAdd: SongModel = formAddSong.value


    let playlist = formAddSong.value.playlist

    this.playlistService.createSong(songToAdd, playlist)
      .subscribe(songToAdd => {
        console.log('song creada: ', songToAdd)
      })
  }

  updateSongDetail(formAddSong: FormGroup) {

    console.log(JSON.stringify(formAddSong.value));
    const originalName: string = (formAddSong.value).name
    const newArtist: string = (formAddSong.value).artist
    const newAlbum: string = (formAddSong.value).album



    const changes = {
      name: originalName,
      artist: newArtist,
      album: newAlbum,
    }

    const playlist = (formAddSong.value).playlist



    this.playlistService.updateSong(playlist, changes, originalName)
      .subscribe(data => {
        console.log('update song', data)
      })
  }



}
