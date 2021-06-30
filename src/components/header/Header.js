import { Component } from 'react';
import './Header.css';
import { ReactComponent as ReactIcon } from '../../assets/images/content/Logo.svg';
import Search from './search/Search';

class Header extends Component {

    render() {

        return (
            <header className="header">
                <ReactIcon className="header_logo" alt="Logo SENLA" />
                <Search task={this.props.task} searchItem={this.props.searchItem} />
            </header>
        )
    }
}
export default Header;