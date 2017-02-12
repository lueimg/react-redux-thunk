import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as courseActions from '../../actions/courseActions';
import { bindActionCreators } from 'redux';
class CoursesPage extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            course: {
                title: ''
            }
        };
    }

    onTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course: course});
    }

    onClickSave() {
        this.props.actions.createCourse(this.state.course);
    }

    courseRow(course , index) {
        return <div key={index}>{course.title}</div>;
    }
    


    render() {
        return (
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRow.bind(this))}
                <h2>Add course</h2>
                <input type="text"
                        onChange={this.onTitleChange.bind(this)}
                        value={this.state.course.title}  />
                
                <input type="submit"
                        value="Save"
                        onClick={this.onClickSave.bind(this)}/>

            </div>
        );
    }
}

CoursesPage.propTypes = {
    actions: React.PropTypes.object.isRequired,
    courses: React.PropTypes.array.isRequired
};

function mapStateToProps(state) {
    return {
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);