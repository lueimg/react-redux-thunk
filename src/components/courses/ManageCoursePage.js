import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';
class ManageCoursePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            course: Object.assign({}, this.props.course),
            errors: {}
        }
        
    }
    
    render () {
        return (
            <CourseForm 
                    allAuthor={this.props.authors}
                    errors={this.state.errors}
                    course={this.state.course} />
        )
    }
}

function mapStateToProps(state) {
    let course = {id: '', watchHref: '', title: '', authorId:'', length: '', categoru: ''}

    const authorsFormattedForDropdown = state.authors.map(author => {
        return {
            value: author.id,
            text: author.firstName + ' ' + author.lastName
        };
    })

    return{
        course: course,
        authors: authorsFormattedForDropdown
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);