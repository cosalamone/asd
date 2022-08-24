export interface PlaylistModel {
    name: string;
    description: string;
}

export interface UpdatePlaylist extends Partial<PlaylistModel> {
  
}