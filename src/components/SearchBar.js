import React, {Component} from 'react';
import axios from 'axios';
import { Input } from 'antd';
const { TextArea } = Input;

class SearchBar extends Component {
    constructor () {
        super()
        this.state = {
            username: ''
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick () {
        console.log('fuck me')
    }

    render() {
        return (
            <div className="search-bar">
                <TextArea rows={10} />
                <div className='button__container'>
                    <button className='button' onClick={this.handleClick}>
                        Click Me
                    </button>
                    <p>{this.state.username}</p>
                </div>

            </div>


        );
    }
}

export default SearchBar;