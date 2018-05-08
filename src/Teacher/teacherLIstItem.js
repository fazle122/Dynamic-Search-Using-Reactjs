import React,{Component} from 'react';

class TeacherListItem extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
             <li style={{listStyleType:'none'}}>{this.props.teacherItem.name}({this.props.teacherItem.district})</li>
        );
    }
}

export default TeacherListItem;