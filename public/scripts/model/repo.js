'use strict';

var app = app || {};

(function(module){
  const repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    $.ajax({
      url: 'https://github.com/user/:nickjaz/repos',
      header: {githubToken},
      method: 'GET'
    }).then(function(data){
      repos.all.push(data);
      callback();
    });
  };

  module.repos = repos;
})(app);
