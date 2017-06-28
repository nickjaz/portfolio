'use strict';

var app = app || {};

(function(module){
  const repoController = {};

  repoController.index = () => {
    $('.tab_content').hide();
    $('#repo').show();
  };

  module.repoController = repoController;
})(app);
