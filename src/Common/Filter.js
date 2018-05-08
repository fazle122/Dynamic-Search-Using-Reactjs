import React,{Component} from 'react';

class Filter extends React.Component{
    constructor(props){
        super(props);
        this.state={
            keyword:''
        }

    }


    render(){
        return(
            <div>
                <h3>Search : <input type='text' onChange={this.props.handleSearch} /></h3>
                
            </div>
        );
    }
}

export default Filter;