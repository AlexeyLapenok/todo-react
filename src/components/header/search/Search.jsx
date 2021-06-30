import { Component } from 'react';
import './Search.css';

class Search extends Component {
  state = {
    search: '',
  };

  handleInputChange = (event) => {
    const search = event.target.value;
    this.setState({ search });
    this.props.searchItem(search);
  };

  render() {

    return (
      <input className="header_input header_input-icon"
        type="search"
        placeholder="Search task for to do"
        tabIndex="1"
        onChange={this.handleInputChange} />
    )
  }
}
export default Search;