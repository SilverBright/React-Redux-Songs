import { combineReducers } from 'redux';

//reducer for songs list
const songsReducer = () => {
  return [
    { title: 'Song 1', duration: '4:05', id: 1 },
    { title: 'Song 2', duration: '3:53', id: 2 },
    { title: 'Song 3', duration: '2:25', id: 3 },
    { title: 'Song 4', duration: '4:45', id: 4 },
  ];
};

// reducer for selecting a song
const selectedSongReducer = (selectedSong=null, action) => {
  // 'SONG_SELECTED' was created in the actions/index.js file
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