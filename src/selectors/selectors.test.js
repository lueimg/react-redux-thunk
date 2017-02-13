import expect from 'expect';
import { authorsFormattedForDropDown } from './selectors';

describe('author selectors', () => {
    describe('authorsFormattedForDropDown ', () => {
        it('should return author data formatted for use in a dropdown', () => {
            const authors = [
                {id: 'a', firstName: 'a', lastName: 'a'},
                {id: 'v', firstName: 'v', lastName: 'v'}
            ];

            const expected = [
                {value: 'a', text: 'a a'},
                {value: 'v', text: 'v v'}
            ];

            expect(authorsFormattedForDropDown(authors)).toEqual(expected);

        })
    })
})