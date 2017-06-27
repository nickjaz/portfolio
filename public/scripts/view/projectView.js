'use strict';

var app = app || {}

(function(module) {

  let projectView = {};

  projectView.initPage = function() {
    app.Project.all.forEach(function(project) {
      $('#project').append(project.toHtml());
    });
    projectView.navHandler();
    projectView.bannerHandler();
  };

  //event handlers
  projectView.navHandler = function() {
    $('#menu').on('click', 'li.tab', function(e) {
      e.preventDefault();
      $('.tab_content').hide();
      var $tab = $(this).data('content');
      $('#' + $tab).show();
      $('#menu').removeClass('menu_show').addClass('menu_hide');
      $('.icon-menu').show();
      $('.icon-cross').hide();
    });
  };

  projectView.bannerHandler = function() {
    $('.info').hide();
    $('.project_banner').on('click', function() {
      $(this).find('.info').fadeIn();
      $(this).find('h3').addClass('click');
      $('.project_banner').mouseleave(function(){
        $(this).find('.info').fadeOut();
        $(this).find('h3').removeClass('click');
      });
    });
  };

  app.Project.fetchAll(projectView.initPage);
  module.projectView = projectView;
})(app);
