import React, {Component} from 'react';
import axios from 'axios';
import { Input } from 'antd';

const { TextArea } = Input;


class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            message: '',
            trump_prob: '',
            hilary_prob: '',
            bernie_prob: '',
            andrew_prob: ''
        }
    }


    _handlePress = (event) => {
        this.setState({message: event.target.value});
        console.log(this.state.message);
    };

    _handleSub = (event) => {
        console.log("below is the current message")
        console.log(this.state.message);

        axios.post('http://localhost:5000/convo',
            {tweet: this.state.message})
            .then((response) => {
                console.log("the response is ");
                console.log(response.data);
                this.setState({trump_prob: response.data[0]['Trump']});
                this.setState({hilary_prob: response.data[1]['Hilary']});
                this.setState({bernie_prob: response.data[2]['Andrew']});
                this.setState({andrew_prob: response.data[3]['Bernie']});
                console.log("handle setstate finished");
            }, (error) => {
                console.log(error);
            });
    }

    componentDidMount() {
        console.log(this.state.message)
        axios.post('http://localhost:5000/convo',
            {tweet: this.state.message})
            .then((response) => {
                this.setState({trump_prob: response.data[0]['Trump']});
                this.setState({hilary_prob: response.data[1]['Hilary']});
                this.setState({bernie_prob: response.data[2]['Andrew']});
                this.setState({andrew_prob: response.data[3]['Bernie']});
                console.log("setstate finished");
            }, (error) => {
                console.log(error);
            });

    }


    render(){
        return (
                <div className="search-bar">

                    <TextArea
                        type="text"
                        name="message"
                        value={this.state.message}
                        onChange={this._handlePress}
                        rows = {6}
                    > </TextArea>

                    {/*<TextInput*/}
                    {/*    style={{height: 40}}*/}
                    {/*    placeholder="Type here to translate!"*/}
                    {/*    onChangeText={(text) => this.setState({text})}*/}
                    {/*    value={this.state.text}*/}
                    {/*/>*/}

                    <div className='button__container'>
                        <button className='button' onClick={this._handleSub}>
                            Submit
                        </button>
                    </div>
                    <div className='button__container'>
                        <button className='button'>
                            Trump: {this.state.trump_prob} %
                        </button>
                        <button className='button'>
                            Hilary: {this.state.hilary_prob} %
                        </button>

                        <button className='button'>
                            Andrew: {this.state.andrew_prob} %
                        </button>

                        <button className='button'>
                            Bernie: {this.state.bernie_prob} %
                        </button>

                    </div>
                </div>

        );
    }
}

export default SearchBar;