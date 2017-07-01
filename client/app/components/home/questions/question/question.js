import angular from 'angular';
import uiRouter from 'angular-ui-router';
import questionComponent from './question.component';

let questionModule = angular.module('question', [
  uiRouter
])
  .component('question', questionComponent)
  .name;

export default questionModule;
