import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  render() {
    return (
      <div className="search-bar">
        <input onChange={event => this.setState({term : event.target.value})}/>
      </div>

    )
  }

  onInputChange(event) {
    this.setState({
      term : event.target.value
    });
    console.log(this.state);
  }

}

export default SearchBar;
