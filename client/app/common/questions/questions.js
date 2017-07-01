import angular from 'angular';
import uiRouter from 'angular-ui-router';
import questionsComponent from './questions.component';

let questionsModule = angular.module('questions', [
  uiRouter
])

.component('questions', questionsComponent)

.name;

export default questionsModule;
