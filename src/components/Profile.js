import React, {Component} from 'react';
import trump from "../assets/images/trump.jpg";
import hilary from "../assets/images/Hilary.jpg";
import andrew from "../assets/images/Andrew.jpg";
import bernie from "../assets/images/Bernie.jpg";
import democrat from "../assets/images/democrat.jpg"
import republican from "../assets/images/republican.png"




// PythonShell.run('code/test.py', null, function(err){
//     if (err) throw err;
//     console.log('finished');
// });

// PythonShell.runString('x=1+1;print(x)', null, function (err) {
//     if (err) throw err;
//     console.log('finished');
// });




const candidates = ["Trump", "Hilary", "Andrew", "Bernie"];
const party = ["Republic", "Democrat", "Democrat", "Democrat"];


function WhichCandidate(props) {
    return (
        <div className="profile">
            <div className="profile-entry player-name">{props.name}</div>
            <WhichPic name = {props.name}/>

            <WhichParty name = {props.name}/>

        </div>
    )
}

function WhichParty(props) {
    if (props.name === "Trump") {
       return  <img
            className="team-logo"
            src={republican}
            alt="Party"/>
    } else {
        return <img
            className="team-logo"
            src={democrat}
            alt="Party"/>
    }
}

function WhichPic(props) {
    if (props.name === "Trump") {
        return  <img
            className="profile-pic"
            src={trump}
            alt="Profile_pic"
        />

    }
    else if (props.name === "Hilary") {
        return <img
            className="profile-pic"
            src={hilary}
            alt="Profile_pic"
        />
    }
    else if (props.name === "Andrew") {
        return <img
            className="profile-pic"
            src={andrew}
            alt="Profile_pic"
        />

    }
    else {
        return <img
            className="profile-pic"
            src={bernie}
            alt="Profile_pic"
        />
    }
}


function AllCandidate(props) {
    let profiles = [];
    for (let i = 0; i < props.names.length; i++) {
        profiles.push(<WhichCandidate name={props.names[i]}/>)
    }
    return profiles
}


class Profile extends Component {
    render() {
        return (
            <React.Fragment>
                <AllCandidate names={candidates} parties={party}/>
            </React.Fragment>
        );
    }
}

export default Profile;



// import { Input } from 'antd';
//
// const { TextArea } = Input;
//
// ReactDOM.render(<TextArea rows={4} />, mountNode);