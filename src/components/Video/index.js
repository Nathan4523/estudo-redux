import React from 'react';

import { connect } from 'react-redux';

const Video = ({ activeModule, actionLesson }) => (
  <div>
    <strong>Módulo {activeModule.title}</strong>
    <span>Aula {actionLesson.title}</span>
  </div>
);

export default connect(state => ({
  activeModule: state.course.activeModule,
  actionLesson: state.course.activeLesson,
}))(Video);
