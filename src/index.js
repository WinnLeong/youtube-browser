import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

import './style/style.css';

const API_KEY = 'AIzaSyB4joyp4APdPaljHLSfzABgYL8xM-Vrguw';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      videos: [], 
      selectedVideo: null 
    };

    this.videoSearch(null);
  }

  videoSearch(value) {
    YTSearch({key: API_KEY, term: value}, videos => {
      this.setState({ 
        videos,
        selectedVideo: videos[0]
      });
    });
  }


  render() {
    const videoSearch = _.debounce(value => { this.videoSearch(value); }, 300);

    return (
      <div>
        <SearchBar 
          placeholder="Search" 
          onSearchTermChange={videoSearch} 
        />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
          onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
