import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Submenu.css';
class Submenu extends Component {

    handleSubDone = (done) => {
        this.props.task.map(item => (
            console.log(item.done)
        ))
    }
    render() {
        // const task = this.props.task;
        // const index = task.map(item => item.done);
        return (
            <section className="submenu-container">
                <div className="submenu-container_submenu">
                    <NavLink to="/all" className="submenu-container_submenu_all" tabIndex="2">All</NavLink>
                    <NavLink to="/active" className="submenu-container_submenu_active" tabIndex="3">Active</NavLink>
                    <NavLink to="/done" className="submenu-container_submenu_done" tabIndex="4">Done</NavLink>
                </div>
            </section>
        )
    }
}
export default Submenu;