import angular from 'angular';
import uiRouter from 'angular-ui-router';
import questionsComponent from './questions.component';
import HttpService from '../services/http/http.service';
import User from '../user/user';

let questionsModule = angular.module('questions', [
  uiRouter,
  User
])
  .service('HttpService', HttpService)
  .component('questions', questionsComponent)
  .name;

export default questionsModule;


