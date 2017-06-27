'use strict';

var app = app || {};

(function(module) {
  const aboutController = {};

  aboutController.index = () => {
    $('main > section').hide();
    $('#about').show();
  };

  module.aboutController = aboutController;
})(app);
