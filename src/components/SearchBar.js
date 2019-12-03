import React, {Component} from 'react';
import axios from 'axios';
import { Input } from 'antd';
import {Text, TextInput, View} from 'react-native';

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
        console.log(this.state.candidate);
    }

    componentDidMount() {
        // axios.get('http://localhost:5000/info')
        //     .then((response) => {
        //         this.setState({trump_prob: response.data[0]['candidate1']});
        //         this.setState({hilary_prob: response.data[1]['candidate2']});
        //         this.setState({bernie_prob: response.data[2]['candidate3']});
        //         this.setState({andrew_prob: response.data[3]['candidate4']});
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     });
        console.log(this.state.message)
        axios.post('http://localhost:5000/convo',
            {tweet: this.state.message})
            .then((response) => {
                this.setState({trump_prob: response.data[0]['candidate1']});
                this.setState({hilary_prob: response.data[1]['candidate2']});
                this.setState({bernie_prob: response.data[2]['candidate3']});
                this.setState({andrew_prob: response.data[4]['tweet']});
                console.log("setstate finished");
            }, (error) => {
                console.log(error);
            });

    }


    render(){
        return (
                <div className="search-bar">

                    {/*<TextArea*/}
                    {/*    type="text"*/}
                    {/*    name="message"*/}
                    {/*    value={this.state.message}*/}
                    {/*    onChange={this._handlePress}*/}
                    {/*    rows = {6}*/}
                    {/*> </TextArea>*/}

                    <TextInput
                        style={{height: 40}}
                        placeholder="Type here to translate!"
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                    />

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