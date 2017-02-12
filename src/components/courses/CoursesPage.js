import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as courseActions from '../../actions/courseActions';
import { bindActionCreators } from 'redux';

import CourseList from './CourseList';
import { browserHistory } from 'react-router';

class CoursesPage extends Component {
    constructor(props) {
        super(props);   
    }

    courseRow(course , index) {
        return <div key={index}>{course.title}</div>;
    }

    redirectToAddCoursePage() {
        browserHistory.push('/course');
    }
    
    render() {
        const {courses} = this.props;

        return (
            <div>
                <h1>Courses</h1>
                <input type="submit" value="Add course" className="btn btn-primary" onClick={this.redirectToAddCoursePage.bind(this)} />
                <CourseList courses={courses} />
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