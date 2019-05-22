// Reducer for selecting a song

const songsReducer = () => {
  return [
    { title: 'Song Number 1', duraction: '4:05' },
    { title: 'Song Number 2', duraction: '3:53' },
    { title: 'Song Number 3', duraction: '2:25' },
    { title: 'Song Number 4', duraction: '4:45' },
  ];
};

const selectedSongReducer = (selectedSong=null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};