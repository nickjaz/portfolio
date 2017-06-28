'use strict';

var app = app || {};

(function(module) {
  const aboutController = {};

  aboutController.index = () => {
    $('.tab_content').hide();
    $('#about').show();
  };

  module.aboutController = aboutController;
})(app);
