import { HttpParams } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlaylistModel, UpdatePlaylist } from '../models/playlist.model';
import { PlaylistService } from '../services/playlist.service';


@Component({
  selector: 'add-playlist',
  templateUrl: './add-playlist.component.html',
  styleUrls: ['./add-playlist.component.css']
})
export class AddPlaylistComponent implements OnInit {

  formAddPlaylist!: FormGroup;

  @Output() playlistEvent = new EventEmitter<any>();


  constructor(private readonly formBuilder: FormBuilder,
    private playlistService: PlaylistService){    
  }

  ngOnInit(): void {
    this.formAddPlaylist = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    })
  }
  

  createNewPlaylist(formAddPlaylist: FormGroup){

    console.log(JSON.stringify(formAddPlaylist.value));
    let playlistToAdd: PlaylistModel = formAddPlaylist.value

   
    this.playlistService.createPlaylist(playlistToAdd)
    .subscribe(playlistToAdd=>{
      console.log('creada',playlistToAdd)
    })
  }

  updatePlaylist(formAddPlaylist: FormGroup){
   

    console.log(JSON.stringify(formAddPlaylist.value));
    const originalName: string = (formAddPlaylist.value).name
    const newDescription: string= (formAddPlaylist.value).description
   
    const changes: UpdatePlaylist= {
      name: originalName,
      description: newDescription,
    }

    const data={
      name: originalName
    }

    const params = new URLSearchParams(data);

    
    this.playlistService.update(params, changes)
    .subscribe(data=>{
      console.log('update', data)
    })
  }
}
