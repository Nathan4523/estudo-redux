/**
 * 
 * @param {*} module 
 * @param {*} lesson 
 * @return Object
 */
export function toggleLesson(module, lesson) {
    return {
        type: 'TOGGLE_LESSON',
        module,
        lesson
    };
}