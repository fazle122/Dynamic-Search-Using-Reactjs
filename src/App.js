import React, { Component } from 'react';
import Students from './Student/Students';
import Courses from './Course/Courses';
import Teachers from './Teacher/Teachers';
import Header from './Common/Header';
import Filter from './Common/Filter';
import Greeting from './Common/Greetings';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      keyword:'',
      students:[],
      courses:[],
      teachers:[],
      member:{name:'Everyone'},
      filteredStudents:[],
      filteredTeachers:[],
      filteredCourses:[],
    }

    this.handleStudentSearch = this.handleStudentSearch.bind(this);
    this.handleCourseSearch = this.handleCourseSearch.bind(this);
    this.handleTeacherSearch = this.handleTeacherSearch.bind(this);
    this.handleCommonSearch = this.handleCommonSearch.bind(this);
    this.handelStudent = this.handelStudent.bind(this);
  }

  handelStudent(x){
    this.setState({member:x})
  }

  componentWillMount(){
    this.setState({students:[
      {Id:"1",name : "abul", address: "monipur"},
      {Id:"2", name : "kalam", address: "shamoly"},
      {Id:"3", name : "selim", address: "firmgate"},
      {Id:"4",name : "jobbar", address: "kazipara"},
      {Id:"5", name : "sojib", address: "jigatola"},
      {Id:"6", name : "foysal", address: "malibag"},
      {Id:"7",name : "rased", address: "mohammadpur"},
      {Id:"8", name : "titu", address: "mouchak"},
      {Id:"9", name : "kholil", address: "agarga"},
      {Id:"10", name : "jumman", address: "pollobi"},
    ]})

    this.setState({courses:[
      {Id:"1",name : "math", credit: "3"},
      {Id:"2", name : "physics", credit: "3"},
      {Id:"3", name : "chemistry", credit: "3"},
      {Id:"4",name : "bangla", credit: "2"},
      {Id:"5", name : "english", credit: "2"},
      {Id:"6", name : "social-science", credit: "1"},
      {Id:"7",name : "religion", credit: "2"},
      {Id:"8", name : "highr-math", credit: "3"},
      {Id:"9", name : "practical", credit: "5"},
      {Id:"10", name : "biology", credit: "3"},
      
    ]})

    this.setState({teachers:[
      {Id:"1",name : "jaber", district: "dhaka"},
      {Id:"2", name : "shahin", district: "gazipur"},
      {Id:"3", name : "asfee", district: "joshor"},
      {Id:"4",name : "mannan", district: "chumilla"},
      {Id:"5", name : "sayed", district: "noakhali"},
      {Id:"6", name : "nurul", district: "chittagong"},
      {Id:"7",name : "baten", district: "sylhet"},
      {Id:"8", name : "toufiq", district: "b-baria"},
      {Id:"9", name : "taher", district: "shirajgong"},
      {Id:"10", name : "sumon", district: "rajshahi"},
      
    ]})

    this.setState({filteredStudents:[
      {Id:"1",name : "abul", address: "monipur"},
      {Id:"2", name : "kalam", address: "shamoly"},
      {Id:"3", name : "selim", address: "firmgate"},
      {Id:"4",name : "jobbar", address: "kazipara"},
      {Id:"5", name : "sojib", address: "jigatola"},
      {Id:"6", name : "foysal", address: "malibag"},
      {Id:"7",name : "rased", address: "mohammadpur"},
      {Id:"8", name : "titu", address: "mouchak"},
      {Id:"9", name : "kholil", address: "agarga"},
      {Id:"10", name : "jumman", address: "pollobi"},
    ]})

    this.setState({filteredCourses:[
      {Id:"1",name : "math", credit: "3"},
      {Id:"2", name : "physics", credit: "3"},
      {Id:"3", name : "chemistry", credit: "3"},
      {Id:"4",name : "bangla", credit: "2"},
      {Id:"5", name : "english", credit: "2"},
      {Id:"6", name : "social-science", credit: "1"},
      {Id:"7",name : "religion", credit: "2"},
      {Id:"8", name : "highr-math", credit: "3"},
      {Id:"9", name : "practical", credit: "5"},
      {Id:"10", name : "biology", credit: "3"},
      
    ]})

    this.setState({filteredTeachers:[
      {Id:"1",name : "jaber", district: "dhaka"},
      {Id:"2", name : "shahin", district: "gazipur"},
      {Id:"3", name : "asfee", district: "joshor"},
      {Id:"4",name : "mannan", district: "chumilla"},
      {Id:"5", name : "sayed", district: "noakhali"},
      {Id:"6", name : "nurul", district: "chittagong"},
      {Id:"7",name : "baten", district: "sylhet"},
      {Id:"8", name : "toufiq", district: "b-baria"},
      {Id:"9", name : "taher", district: "shirajgong"},
      {Id:"10", name : "sumon", district: "rajshahi"},
      
    ]})

    
  }

  handleStudentSearch(event){
    this.setState({keyword:event.target.value});
    var search = this.state.students.filter(std => std.name.indexOf(event.target.value) !== -1);
    this.setState({filteredStudents:search});
  }

  handleCourseSearch(event){
    this.setState({keyword:event.target.value});
    var search = this.state.courses.filter(std => std.name.indexOf(event.target.value) !== -1);
    this.setState({filteredCourses:search});
  }

  handleTeacherSearch(event){
    this.setState({keyword:event.target.value});
    var search = this.state.teachers.filter(std => std.name.indexOf(event.target.value) !== -1);
    this.setState({filteredTeachers:search});
  }

  handleCommonSearch(event){
    this.handleStudentSearch(event);
    this.handleCourseSearch(event);
    this.handleTeacherSearch(event)
  }

  render() {

    let appStyle = {
      display: 'flex', 
      justifyContent: 'center',
      border:'1px solid black',     
      textAlign:'center',
      background:'#c9cfd8',
      width:'750px',
      height:'750px',
      marginLeft:'350px'
    };

    let divStyle ={
      width:'200px',
      border: '1px solid black',
      float:'left',
      textAlign: 'center'
    }

    let countRowStyle ={
      width:'190px',
      height:'30px',
      margin:'5px',
      border:'1px solid red',
      background:'white',
      textAlign:'center',
      float:'left'
    }

    let greetingStyel ={
      width:'200px',

      textAlign: 'center'
    }

    const std = this.state.filteredStudents.filter(s => s.name)
    const stdCount = std.length
    const course = this.state.filteredCourses.filter(c => c.name)
    const crsCount = course.length
    const teacher = this.state.filteredTeachers.filter(t => t.name)
    const tecCount = teacher.length

    return (
      <div style={appStyle}>
        <div>
          <div>
            <Header />
          </div>
          
          <div>
            <Filter handleSearch={this.handleCommonSearch}/> <br/>
          </div>

          <div>
            <Greeting member={this.state.member} />
          </div>
          <div>
            <div style={countRowStyle}>Result Found :{stdCount}</div>
            <div style={countRowStyle}>Result Found :{crsCount}</div>
            <div style={countRowStyle}>Result Found :{tecCount}</div>
          </div>
          <div style={divStyle}>
            <h3>Students</h3>
            {this.state.filteredStudents.map((std)=>                      
              <Students key={std.Id} students={std} handelStudent={this.handelStudent} />
            )}
          </div>
          <div style={divStyle}>
            <h3>Courses</h3>
            {this.state.filteredCourses.map((crs)=>
                <Courses key={crs.Id} course={crs} />
              )}
          </div>
          <div style={divStyle}>
            <h3>Teachers</h3>
            {this.state.filteredTeachers.map((tec)=>                      
              <Teachers key={tec.Id} teachers={tec} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
