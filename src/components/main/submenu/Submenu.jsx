import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Submenu.css';
class Submenu extends Component {

    state = {
        activeClassName: "active"
    }

    handleClass = () => {
        this.setState(state => {
            state.activeClassName = "";
            return state;
        })
    }

    handleClassAll = () => {
        this.setState(state => {
            state.activeClassName = "active";
            return state;
        })
    }
    componentDidMount() {
        const localStorageRef = localStorage.getItem('stateSub');
        if (localStorageRef) {
            this.setState({ activeClassName: JSON.parse(localStorageRef) });
        }
    }

    componentDidUpdate() {
        localStorage.setItem('stateSub', JSON.stringify(this.state.activeClassName));
    }

    render() {

        return (
            <section className="submenu-container">
                <div className="submenu-container_submenu">
                    <NavLink
                        to="/#/"
                        onClick={() => this.handleClassAll()}
                        className="submenu-container_submenu_all"
                        activeClassName={this.state.activeClassName}
                        tabIndex="2"
                    >All
                    </NavLink>
                    <NavLink
                        to="/#/active"
                        onClick={() => this.handleClass()}
                        className="submenu-container_submenu_active"
                        tabIndex="3"
                    >Active
                    </NavLink>
                    <NavLink
                        to="/#/done"
                        onClick={() => this.handleClass()}
                        className="submenu-container_submenu_done"
                        tabIndex="4"
                    >Done
                    </NavLink>
                </div>
            </section>
        )
    }
}
export default Submenu;