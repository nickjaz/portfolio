'use strict';

var app = app || {};

page('/about', app.aboutController.index);
page('/project', app.projectController.index);

page(); //turns on page so it can identify where you are or were when you reload the page
