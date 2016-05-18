import angular from 'angular';
import $ from 'jquery';
import 'angular-ui-router';

// Importing the configuration for the ui-router
import { Config } from './config.js'

angular
  .module('app', ['ui.router'])
    .config(Config)
;
