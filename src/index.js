// Find the library called react installed as a dependency and assign it to the variable React
import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// Youtube API key
const API_KEY = 'AIzaSyD9sLc70vGL1bwBU743wxufLE2XIRneh_M';

// Create a new component. This component should produce some HTML
// const is like 'var' but is never going to be reassigned
// When a component is created, we are creating a type of component (a class, not an instance)
// Constructor always gets called with props
// Passing props: Need to pass data from the parent (App) to the child (VideoList)
  // videos is the prop
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}

// Take component and show it on the page (shove into DOM)
// Use ReactDOM because we're trying to touch something in the DOM
// React is used to created and manage our components
ReactDOM.render(<App />, document.querySelector('.container'));
