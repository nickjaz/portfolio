'use strict';

var app = app || {};

page('/about', app.aboutController.index);
page('/project', app.projectController.index);

page();
