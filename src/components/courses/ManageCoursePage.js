import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';

class ManageCoursePage extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render () {
        return (
            <div>
                <h1>Manage course</h1>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        state: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);