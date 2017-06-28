'use strict';

var app = app || {}

(function(module) {
  const repoView = {};

  var render = Handlebars.compile($('#repo_template').html());

  repoView.index = function() {
    $('#repo ul').append(
      app.repo.with('name').map(render)
    );
  };

  module.repoView = repoView;
})(app);
