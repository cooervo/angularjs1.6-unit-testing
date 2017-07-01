import angular from 'angular';
import uiRouter from 'angular-ui-router';
import questionDetailComponent from './question-detail.component';

let questionDetailModule = angular.module('questionDetail', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";

  $stateProvider
    .state('question-detail', {
      url: '/question-detail',
      component: 'questionDetail'
    });
})

.component('questionDetail', questionDetailComponent)
.name;

export default questionDetailModule;
