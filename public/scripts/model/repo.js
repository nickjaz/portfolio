'use strict';

var app = app || {};

(function(module){
  const repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    $.ajax({
      url: 'https://api.github.com/user/repos',
      header: githubToken,
      method: 'GET'
    }).then(function(data){
      repos.all.push(data);
      callback();
    });
  };

  module.repos = repos;
})(app);
