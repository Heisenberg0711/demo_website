import React from 'react';
import Profile from './Profile';
import SearchBar from "./SearchBar";



export class Main extends React.Component{

    render() {
        return (
            <div className="main" >
                <SearchBar />
                <Profile />

            </div>
        );
    }
}

export default Main;