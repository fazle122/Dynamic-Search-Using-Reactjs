import React,{Component} from 'react';
import CourseListItem from './courseListItem';

class Courses extends React.Component{
    constructor(porps){
        super(porps);
    }

    render(){
        return(
            <div>
                <ul>
                    {                       
                        <CourseListItem  courseItem={this.props.course} />                        
                    }
                </ul>

            </div>
        );
    }
}

export default Courses;