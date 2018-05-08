import React,{Component} from 'react';

class StudentListItem extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
             <li style={{listStyleType:'none'}} onClick={()=> {this.props.handleClick(this.props.studentItem)}} >{this.props.studentItem.name}({this.props.studentItem.address})</li>
        );
    }
}

export default StudentListItem;