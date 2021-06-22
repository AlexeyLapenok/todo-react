import { Component } from 'react';
import './Search.css';

class Search extends Component {

    render() {

        return (
            <input className="header_input header_input-icon"
                type="search"
                placeholder="Search task for to do"
                tabIndex="1" />
        )
    }
}
export default Search;