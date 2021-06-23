import { Component } from 'react';
import './Search.css';

class Search extends Component {
    // state = {
    //     value: '',
    //     tasks: this.props.task
    // };

    // handleInputChange = (e) => {
    //     const value = e.target.value;
    //     this.setState({ value });
    //     this.serchItem(value);
    // };
    // searchItem = (value) => {
    //     this.setState({ value });
    // };
    // searchChanged(value) {
    //     if (value.length === 0) {
    //         return this.props.task;
    //     }

    //     return this.props.tasks.filter((item) => {
    //         return item.title.toLowerCase().indexOf(value.toLowerCase()) > -1;
    //     });
    // }

    render() {

        return (
            <input className="header_input header_input-icon"
                type="search"
                placeholder="Search task for to do"
                tabIndex="1"
                onChange={() => (this.props.handleInputChange)} />
        )
    }
}
export default Search;