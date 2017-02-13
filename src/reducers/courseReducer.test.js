import expect from 'expect';
import courseReducer from './courseReducer';
import * as actions from '../actions/courseActions';

describe('course reducer', () => {
    it('should add course when passed create course success', () => {
        const initialState = [
            {title: 'A'},
            {title: 'B'}
        ];

        const newCourse = {title: 'c'};

        const action = actions.createCourseSuccess(newCourse);

        const newState = courseReducer(initialState, action);

        expect(newState.length).toBe(3);


    });

    it('should update course', () => {
        const initialState = [
            {title: 'A',id: 'A'},
            {title: 'B',id: 'B'}
        ];

        const course = {title: 'new title B', id: 'B'};
        const action = actions.updateCourseSuccess(course);

        const newState = courseReducer(initialState, action);
        const updateCourse = newState.find(a => a.id == course.id);
        const untouchedCourse = newState.find(a => a.id == 'A');


        expect(updateCourse.title).toEqual('new title B');
        expect(newState.length).toBe(2);

    });

});
