'use strict';

let app = app || {};

(function(module) {
  const projectController = {};

  projectController.index = () => {
    $('main > section').hide();
    $('#project').show();
  };

  module.projectController = projectController;
});
