'use strict';

var app = app || {};

(function(module) {
  const projectController = {};

  projectController.index = () => {
    app.Project.fetchAll(app.projectView.initPage);
    $('.tab_content').hide();
    $('#project').show();
  };

  module.projectController = projectController;
})(app);
