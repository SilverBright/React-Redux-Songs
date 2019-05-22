// import React from 'react';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions/index.js';

// class SongList extends React.Component {
   class SongList extends Component {
    renderList() {
      return this.props.songs.map(song => {
        return (
          <div className="item" key={song.id}>
            <div className="right floated content">
              <button 
                className="ui button primary"
                onClick={() => this.props.selectSong(song)}
              >
              Select
              </button>
            </div>
            <div className="content">{song.title}</div>
          </div>
        );
      });
    }


    render() {
      // console.log(this.props)
      // this.props === { songs: state.songs} - made available by 'return { songs: state.songs }'
      return (       
        <div className="ui divided list">      
          {this.renderList()}    
        </div>
        );
      }
    }

  // pass in the entire state, which is all of the songs, directly from the store
  const mapStateToProps = state => {
    console.log(state);
    //         key: value
    return { songs: state.songs };
    // by using return { key: value }, it will now show up as props in the component SongList
  }

 // pass in the component as the second function call (SongList)
 // { selectSong: selectSong } is a key: value and comes from actions/index.js
 // because the key matches the value we can just shorten it to selectSong
  export default connect(mapStateToProps, { selectSong })(SongList);

  // The connect function is just returning another function
  // The second function invokes the next function.

  // function connect() {
  //  return function() {
  //   return 'Hello World!';  
  //  }  
  // }

  // connect()()