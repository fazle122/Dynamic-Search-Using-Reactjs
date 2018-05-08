import React,{Component} from 'react';

class Greetings extends React.Component{

    render(){
        return(
            <div> WellCome : {this.props.member.name}</div>
        );
    }
}

export default Greetings;