import template from './question.html';
import controller from './question.controller';
import './question.scss';

let questionComponent = {
  bindings: {
    question: '=',
  },
  template,
  controller
};

export default questionComponent;
