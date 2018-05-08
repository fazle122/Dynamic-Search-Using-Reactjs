import React,{Component} from 'react';
import StudentListItem from './stdListItem';

class Students extends React.Component{
    constructor(props){
        super(props);
    }

    render(){

        return(
             <div>
                 <ul>
                     {
                        <StudentListItem studentItem = {this.props.students}  handleClick={()=> {this.props.handelStudent(this.props.students)}} />

                     }

                 </ul>
             </div>
        );
    }
}

export default Students;