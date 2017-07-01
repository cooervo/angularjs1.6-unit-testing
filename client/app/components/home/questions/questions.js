import angular from 'angular';
import uiRouter from 'angular-ui-router';
import questionsComponent from './questions.component';
import Question from './question/question';
import HttpService from '../../../common/services/http/http.service';

let questionsModule = angular.module('questions', [
  uiRouter,
  Question,
])
  .component('questions', questionsComponent)
  .name;

export default questionsModule;


