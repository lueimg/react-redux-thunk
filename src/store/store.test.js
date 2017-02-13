import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as courseActions from '../actions/courseActions';


describe('store', () => {
    it('should handle creating courses', () => {
        const store = createStore(rootReducer, initialState);
        const course = {
            title: "clean code"
        };

        const action = courseActions.createCourseSuccess(course);
        store.dispatch(action);

        const actual = store.getState().courses[0];
        const expected = {
            title: 'clean code'
        };

        expect(actual).toEqual(expected);

    });
});




