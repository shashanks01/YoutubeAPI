import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import 'bootstrap/dist/css/bootstrap.min.css';
import VideoDetail from './components/video_detail';


const API_KEY = 'AIzaSyAhrMEWOs9p4WowzqUeeMDMDRVW608dwR0';
class App extends Component {

constructor(props){
  super(props);

  this.state = {
    videos: [],
    selectedvideo: null
  };
  this.videoSearch('surfboards');
}

videoSearch(term) {
  YTSearch({key: API_KEY, term: term  }, (videos) => {
      this.setState({
        videos:videos,
        selectedvideo: videos[0]
      });
     });
}

  render() {
    return (
      <div className="App">
          <SearchBar  onSearchTermChange={term => this.videoSearch(term)} />
          <VideoDetail video={this.state.selectedvideo}/>
          <VideoList
            onVideoSelect={selectedvideo => this.setState({selectedvideo})}
            videos={this.state.videos}/>
      </div>

    );
  }
}

export default App;
