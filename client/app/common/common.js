import angular from 'angular';
import Navbar from './navbar/navbar';
import HttpService from './services/http/http.service';

let commonModule = angular.module('app.common', [
  Navbar
])
  .service('HttpService', HttpService)
  .name;

export default commonModule;
