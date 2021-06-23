import { Component } from 'react';
import './Search.css';

class Search extends Component {
    state = {
        value: ''
    };


    render() {

        return (
            <input className="header_input header_input-icon"
                type="search"
                placeholder="Search task for to do"
                tabIndex="1"
                onChange={(event) => (this.props.filterList(event.target.value))} />
        )
    }
}
export default Search;