import { combineReducers } from 'redux';

import course from './courses';

export default combineReducers({
    course
})

/**
 * Caso necessite de usar mais de um reducer, basta inserir um objeto de reducer
 * {
 *  Course { modules: [], activeLesson: {}, activeModule: {} }
 *  User { name: '', avatar: '' }
 * }
 */