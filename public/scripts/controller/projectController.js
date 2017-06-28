'use strict';

var app = app || {};

(function(module) {
  const projectController = {};

  projectController.index = () => {
    $('.tab_content').hide();
    $('#project').show();
  };

  module.projectController = projectController;
})(app);
