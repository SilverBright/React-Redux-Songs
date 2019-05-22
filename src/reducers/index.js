import { combineReducers } from 'redux';

//reducer for songs list
const songsReducer = () => {
  return [
    { title: 'Song 1', duration: '4:05' },
    { title: 'Song 2', duration: '3:53' },
    { title: 'Song 3', duration: '2:25' },
    { title: 'Song 4', duration: '4:45' },
  ];
};

// reducer for selecting a song
const selectedSongReducer = (selectedSong=null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

// assign objects to combineReducers and export it
export default combineReducers({
  // key: 
  songs: songsReducer,
  selectedSong: selectedSongReducer
});