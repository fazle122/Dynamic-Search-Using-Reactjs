import React,{ Component } from 'react';

class Header extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let headerStyle = {
            border: '1px solid black',
            background:'orange',
            textAlign:'center'
        };
        return(
            <div>
                <h2 style={headerStyle}>Training Academy</h2>
            </div>
        );
    }
}

export default Header;