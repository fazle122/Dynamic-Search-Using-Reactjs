import React,{Component} from 'react';

class CourseListItem extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
             <li style={{listStyleType:'none'}}>{this.props.courseItem.name}({this.props.courseItem.credit})</li>
        );
    }
}

export default CourseListItem;