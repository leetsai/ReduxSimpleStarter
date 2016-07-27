import React, { Component } from 'react';

// Define a new class called SearchBar and give it the functionalities that React.Component has
// Every class must have a render function
// Inside the constructor is the only time we explicitly set state
  // other times we use this.setState
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;

// state is a plain javascript object used to record and react to user events
// each class base component that we define has its own state object
// whenver a component state is changed, the component immediately re-renders
// it also forces all of its children to re-render
