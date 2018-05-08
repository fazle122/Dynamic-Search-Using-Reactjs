import React,{Component} from 'react';
import TeacherListItem from './teacherLIstItem';

class Teachers extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
             <div>
                 <ul>
                    {
                        <TeacherListItem teacherItem={this.props.teachers} />
                    }
                 </ul>
             </div>
        );
    }
}

export default Teachers;