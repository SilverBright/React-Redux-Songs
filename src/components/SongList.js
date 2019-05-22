// import React from 'react';
import React, { Component } from 'react';
import { connect } from 'react-redux';

// class SongList extends React.Component {
   class SongList extends Component {
    render() {
      // this.props === { songs: state.songs} - made available by 'return { songs: state.songs }'
      console.log(this.props);
      return (
        <div>
          SongList
        </div>
      );
    }
  }

  // pass in the entire state - all the songs
  const mapStateToProps = state => {
    //         key: value
    return { songs: state.songs };
    // by using return { key: value }, it will now show up as props in the component SongList
  }

 // pass in the component as the second function call (SongList)
  export default connect(mapStateToProps)(SongList);

  // The connect function is just returning another function
  // The second function invokes the next function.

  // function connect() {
  //  return function() {
  //   return 'Hello World!';  
  //  }  
  // }

  // connect()()