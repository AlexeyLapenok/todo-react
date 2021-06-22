import { Component } from 'react';
import './Submenu.css';
class Submenu extends Component {

    handleSubDone = (done) => {
        this.props.task.map(item => (
            console.log(item.done)
        ))
    }
    render() {
        const task = this.props.task;
        const index = task.map(item => item.done);
        console.log(index);
        return (
            <section className="submenu-container">
                <ul className="submenu-container_submenu">
                    <li className="submenu-container_submenu_all select" tabIndex="2">All</li>
                    <li className="submenu-container_submenu_active" tabIndex="3">Active</li>
                    <li onClick={() => this.handleSubDone()} className="submenu-container_submenu_done" tabIndex="4">Done</li>
                </ul>
            </section>
        )
    }
}
export default Submenu;