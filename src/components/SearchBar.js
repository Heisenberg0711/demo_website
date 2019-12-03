import React, {Component} from 'react';
// import axios from 'axios';
import { Input } from 'antd';
const { TextArea } = Input;

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {message: '',}
    }

    _handlePress = (event) => {
        this.setState({message: event.target.value});
        console.log(this.state.message);
        console.log("what the fuck");
    };

    _handleSub = (event) => {
        console.log("this message is sent");
        console.log(this.state.message);

    }
    render() {
        return (
                <div className="search-bar">
                    {/*<form>*/}
                    {/*    <label htmlFor="tweet">tweet here</label>*/}
                    {/*    <input*/}
                    {/*        type="text"*/}
                    {/*        name="message"*/}
                    {/*        value={this.state.message}*/}
                    {/*        onChange={this._handlePress}*/}
                    {/*    />*/}
                    {/*</form>*/}

                    <TextArea
                        type="text"
                        name="message"
                        value={this.state.message}
                        onChange={this._handlePress}
                        rows = {6}
                    > </TextArea>

                    <div className='button__container'>
                        <button className='button' onClick={this._handleSub}>
                            Submit
                        </button>
                    </div>
                </div>


        );
    }
}

export default SearchBar;