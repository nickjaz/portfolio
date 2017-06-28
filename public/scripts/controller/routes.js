'use strict';

var app = app || {};

page('/about', app.aboutController.index);
page('/', app.projectController.index);
page('/repo', app.repoController.index);

page(); //turns on page so it can identify where you are or were when you reload the page
