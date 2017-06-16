'user strict;'
//global variables
var projects = [];

// contructor function to add later projects
function Project(projectDataObj){
  this.name = projectDataObj.name;
  this.date = projectDataObj.date;
  this.collabs = projectDataObj.collabs;
  this.tools = projectDataObj.tools;
  this.about = projectDataObj.about;
  this.gitPath = projectDataObj.gitPath;
}

//render function builds the page dynamically
Project.prototype.toHtml = function() {
  var template = $('#project_template').html();

  var templateRender = Handlebars.compile(template);

  return templateRender(this);
}

//project data stored in the source_data.js file
projectData.forEach(function(projectObj){
  projects.push(new Project(projectObj));
});

projects.forEach(function(p) {
  $('#project').append(p.toHtml());
});

//event handlers
//nav events
var navHandler = function() {
  $('.main_menu').on('click', 'li.tab', function(e) {
    e.preventDefault();
    $('.tab_content').hide();
    var $tab = $(this).data('content');
    $('#' + $tab).show();
  });
};


navHandler();
