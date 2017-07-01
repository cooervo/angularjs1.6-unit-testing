import angular from 'angular';
import Navbar from './navbar/navbar';
import Questions from './questions/questions';
import User from './user/user';

let commonModule = angular.module('app.common', [
  Navbar,
  Questions,
  User
])

.name;

export default commonModule;
