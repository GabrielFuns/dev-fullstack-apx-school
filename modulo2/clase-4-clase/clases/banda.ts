export class Banda {
  members: string[];
  albums: Album[];
  constructor(members: string[], albums: Album[]) {
    this.members = members;
    this.albums = albums;
  }
  getFirstAlbum() {
    return this.albums[0];
  }
  getAllAlbums() {
    return Album;
  }
  getAllMembers() {
    return this.members;
  }
  getRandomSong(albumTitle: string) {
    const albumSelected = this.albums.find((item) => item.title === albumTitle);
    if (albumSelected) {
      return albumSelected.songs[
        Math.floor(Math.random() * albumSelected.songs.length)
      ];
    } else {
      return "";
    }
  }
}

class Album {
  constructor(title: string, songs: string[]) {
    this.title = title;
    this.songs = songs;
  }
  title: string = "";
  songs: string[];
}
