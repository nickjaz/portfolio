'use strict';

var app = app || {};

(function(module) {

  const projectView = {};

  projectView.initPage = function() {
    app.Project.all.forEach(function(project) {
      $('#project').append(project.toHtml());
    });
    projectView.navHandler();
    projectView.menuHandler();
    projectView.bannerHandler();
  };

  //event handlers
  projectView.navHandler = function() {
    $('#menu').on('click', function() {
      $('#menu').removeClass('menu_show').addClass('menu_hide');
      $('.icon-menu').show();
      $('.icon-cross').hide();
    });
  };

  projectView.menuHandler = function() {
    $('.icon-cross').hide();

    $('.icon-menu').on('click', function() {
      $('#menu').removeClass('menu_hide').addClass('menu_show');
      $('.icon-menu').hide();
      $('.icon-cross').show();
    });

    $('.icon-cross').on('click', function() {
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

  module.projectView = projectView;
})(app);
