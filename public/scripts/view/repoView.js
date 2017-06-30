'use strict';

var app = app || {};

(function(module) {
  const repoView = {};

  const ui = function () {
    let $repo = $('#repo');

    $repo.find('ul').empty();
    $repo.show().siblings().hide();
  };

  var render = Handlebars.compile($('#repo_template').html());

  repoView.index = function() {
    ui();

    $('#repo ul').append(app.repos.all.map(render));
  };

  module.repoView = repoView;
})(app);
