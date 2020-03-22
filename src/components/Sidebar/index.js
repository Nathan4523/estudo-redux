import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as CourseActions from '../../store/actions/course';

const Sidebar = ({ modules, toggleLesson }) => (
    <aside>
        {modules.map(module => (
            <viv>
                <strong>{module.title}</strong>
                <ul>
                    <li>
                        {module.lessons.map(lesson => (
                            <li key={lesson.id}>
                                {lesson.title}
                                <button onClick={() => toggleLesson(module, lesson)}>
                                    Selecionar
                            </button>
                            </li>
                        ))}
                    </li>
                </ul>
            </viv>
        ))}
    </aside>
);

const mapStateToProps = state => ({
    modules: state.course.modules
})

const mapDispatchToProps = dispatch => 
    bindActionCreators(CourseActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
