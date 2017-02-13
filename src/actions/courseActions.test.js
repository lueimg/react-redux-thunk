import expect from 'expect';
import * as courseActions from './courseActions';
import * as types from './actionTypes';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

describe('course actions', () => {
    describe('createCourseSuccess', () => {
        it('should create a CREATE_COURSE_SUCCESS', () => {
            const course = {id: 'clean-code', title: 'clean code'};
            const expectedAction = {
                type: types.CREATE_COURSE_SUCCESS,
                course
            };

            const action = courseActions.createCourseSuccess(course);

            expect(action).toEqual(expectedAction);
        });
    });
});


const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async actions', () => {
    afterEach(() => {
        nock.cleanAll();
    });

    it('should create BEGIN AJAX CALL AND LOAD COURSES SUCCESS when loading courses', (done) => {
        /**
         * nock('http://...')
         * .get('/courses')
         * .reply(200, { body: { courses: [...]}})
         */

         const expectedActions = [
            {type: types.BEGIN_AJAX_CALL},
            {type: types.LOAD_COURSES_SUCCESS, body: {courses: [{id: '', title: ''}]}}
         ];

         const store = mockStore({courses: []}, expectedActions);
         store.dispatch(courseActions.loadCourses()).then(() => {
             const actions = store.getActions();
             expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
             done();
         })

    });

})