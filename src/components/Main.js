import React from 'react';
import Profile from './Profile';
import SearchBar from "./SearchBar";


// PythonShell.run('test.py', function (err, results) {
//     if (err) throw err;
//     // results is an array consisting of messages collected during execution
//     console.log('results: %j', results);
// });



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