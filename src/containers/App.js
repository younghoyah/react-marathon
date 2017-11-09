import React from 'react';
import PlaylistCollection from '../components/PlaylistCollection';
import SongCollection from '../components/SongCollection';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPlaylistId: 2
    }
    this.selectPlaylist=this.selectPlaylist.bind(this);
  }
 selectPlaylist(id){
   
   this.setState({
     selectedPlaylistId: id

   })



 }
  render() {
    let data = this.props.data;

    let selectedPlaylist = data.playlists.find(playlist => {
      return this.state.selectedPlaylistId === playlist.id
    })

    let currentSongs = data.songs.filter(song =>{
      return selectedPlaylist.songs.includes(song.id)
    })

    return (
      <ul className="App row">
        <PlaylistCollection
          playlists={data.playlists}
          selectedPlaylistId={this.state.selectedPlaylistId}
          handleSelect={this.selectPlaylist}
        />
        <SongCollection
          songs={currentSongs}
        />
      </ul>
    );
  }
}

export default App;
