import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import QuestionDetail from './question-detail/question-detail';

let componentModule = angular.module('app.components', [
  Home,
  About,
  QuestionDetail
])

.name;

export default componentModule;
