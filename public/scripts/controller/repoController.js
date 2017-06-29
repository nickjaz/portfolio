'use strict';

var app = app || {};

(function(module){
  const repoController = {};

  repoController.index = () => {
    $('.tab_content').hide();
    $('#repo').show();
    app.repos.requestRepos(app.repoView.index);
  };
  
  module.repoController = repoController;
})(app);
