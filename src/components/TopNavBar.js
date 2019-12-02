import React, {Component} from 'react';
import logo from "../assets/images/twitter.png";


class TopNavBar extends Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>  Whose tweet is this ?</h1>
            </header>

        );
    }
}

export default TopNavBar;