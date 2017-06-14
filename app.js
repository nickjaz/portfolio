'user strict;'

// contructor function to add later projects
var projects = [];

function Project(projectDataObj){
  this.name = projectDataObj.name;
  this.date = projectDataObj.date;
  this.collabs = projectDataObj.collabs;
  this.tools = projectDataObj.tools;
  this.about = projectDataObj.about;
  this.gitPath = projectDataObj.gitPath;
}

Project.prototype.toHtml = function() {
  var $newProject = $('section.template').clone();
  $newProject.removeClass('template');

  $newProject.find('h1').html(this.name);
  $newProject.find('.byline span.date').html(this.date);
  $newProject.find('.byline a').attr('src', this.gitPath);
  $newProject.find('.byline span.collabs').html(this.collabs);
  $newProject.find('.byline span.tools').html(this.tools);
  $newProject.find('section.project_about').html(this.about);
  console.log($newProject);

  return $newProject;
}

projectData.forEach(function(projectObj){
  projects.push(new Project(projectObj));
});

projects.forEach(function(project) {
  $('#project_block').append(project.toHtml());
});
