import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';

import toastr from 'toastr';

import { authorsFormattedForDropDown } from '../../selectors/selectors';

export class ManageCoursePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            course: Object.assign({}, this.props.course),
            errors: {},
            saving: false
        }

        this.updateCourseState = this.updateCourseState.bind(this);
        
    }

    updateCourseState(event) {
        const field = event.target.name;
        let course = this.state.course;
        course[field] = event.target.value;
        
        return this.setState({course: course});
    }

    courseFormIsValid() {
        let formIsValid = true;
        let errors= {};
        if (this.state.course.title.length < 5) {
            errors.title = 'Title must be at least 5 characters.';
            formIsValid = false;
        }
        this.setState({errors: errors});
        return formIsValid;
    }
    
    saveCourse(event) {
        event.preventDefault();

        if(!this.courseFormIsValid()) return ;

        this.setState({saving: true});
        this.props.actions.saveCourse(this.state.course).then(() => {
            this.redirect();
        }).catch((error) => {
            toastr.error(error);
            this.setState({saving: false});
        });
    }

    redirect() {
        this.setState({saving: false});
        toastr.success('course saved!');
        this.context.router.push('/courses');        
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.course.id != nextProps.course.id) {
            this.setState({course: Object.assign({}, nextProps.course)});
        }
    }

    render () {
        return (
            <CourseForm 
                    allAuthor={this.props.authors}
                    onChange={this.updateCourseState}
                    onSave={this.saveCourse.bind(this)}
                    errors={this.state.errors}
                    loading={this.state.saving}
                    course={this.state.course} />
        )
    }
}

ManageCoursePage.contextTypes = {
    router: PropTypes.object
};

function getCourseById(courses, id) {
    const course = courses.filter(course => course.id == id);
    if (course) return course[0];
    return null;
}

function mapStateToProps(state, ownProps) {
    const courseId = ownProps.params.id;

    let course = {id: '', watchHref: '', title: '', authorId:'', length: '', category: ''};

    if (courseId && state.courses.length > 0) {
        course = getCourseById(state.courses, courseId);
    }

    return{
        course: course,
        authors: authorsFormattedForDropDown(state.authors)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);