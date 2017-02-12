import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const CourseForm = ({ course, allAuthor, onSave, onChange, loading, errors}) => {
    return (
        <form>
            <h1>Manage Course</h1>
            <TextInput name="title" 
                        label="Title" 
                        value={course.title} onChange={onChange} error={errors.title} />
            <SelectInput name="authorId" label="Author" value={course.authorId} defaultOption="Select Author" 
                         options={allAuthor} onChange={onChange} error={errors.authorId} />
            <TextInput name="category" label="category" value={course.category} onChange={onChange} error={errors.category} />
            <TextInput name="length" label="length" value={course.length} onChange={onChange} error={errors.length} />
            <input type="submit" disabled={loading} value={loading ? 'Saving ...' : 'Save'} className="btn btn-primary" onClick={onSave} />
        </form>
    );
};

CourseForm.propTypes = {
    course: React.PropTypes.object.isRequired,
    allAuthor: React.PropTypes.array,
    onSave: React.PropTypes.func,
    onChange: React.PropTypes.func,
    loading: React.PropTypes.bool,
    errors: React.PropTypes.object
};

export default CourseForm;