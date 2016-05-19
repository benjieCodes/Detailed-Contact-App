import angular from 'angular';
import $ from 'jquery';
import 'angular-ui-router';

// Importing the Configuration for the ui-router
import { Config } from './config.js'

// Importing the Controllers
import { AddContactController } from './controllers/add.controller.js';
import { HomeController } from './controllers/home.controller.js';

// URL for $http JSON data
const url ='https://secret-forest-21470.herokuapp.com/collections/detailed-contact-app-benjie/'

angular
  .module('app', ['ui.router'])
    .config(Config)
    .constant('URL', url)
  .controller('AddContactController', AddContactController)
  .controller('HomeController', HomeController)
;
