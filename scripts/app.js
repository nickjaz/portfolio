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
  var $newProject = $('project_template').clone();

  $newProject.find('h3').html(this.name);
  $newProject.find('.byline span.date').html(this.date);
  $newProject.find('.byline a').attr('src', this.gitPath);
  $newProject.find('.byline span.collabs').html(this.collabs);
  $newProject.find('.byline span.tools').html(this.tools);
  $newProject.find('section.project_about').html(this.about);
  console.log($newProject);

  return $newProject;
}

//project data stored in the source_data.js file
projectData.forEach(function(projectObj){
  projects.push(new Project(projectObj));
});

projects.forEach(function(project) {
  $('#projects').append(project.toHtml());
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



$(document).ready(function() {
  navHandler();
});
