'use strict';

var app = app || {};

(function(module) {
  const projectController = {};

  projectController.index = (ctx, next) => {
    app.projectView.initPage();
    $('.tab_content').hide();
    $('#project').show();
  };

  projectController.loadData = (ctx, next) => {
    let attachProjects = () => ctx.projects = app.Project.all;
    app.Project.fetchAll(attachProjects);
    next();
  };

  projectController.goHome = () => {
    $('.tab_content').hide();
    $('#project').show();
  };

  module.projectController = projectController;
})(app);
