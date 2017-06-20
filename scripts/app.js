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
  this.image = projectDataObj.image;
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
  $('#menu').on('click', 'li.tab', function(e) {
    e.preventDefault();
    $('.tab_content').hide();
    var $tab = $(this).data('content');
    $('#' + $tab).show();
  });
};

var menuHandler = function() {
  $('.icon-cross').hide();

  $('.icon-menu').on('click', function() {
      $('#menu').removeClass('menu_hide').addClass('menu_show');
      $('.icon-menu').hide();
      $('.icon-cross').show();
  });

  $('.icon-cross').on('click', function() {
      $('#menu').removeClass('menu_show').addClass('menu_hide');
      $('.icon-menu').show();
      $('.icon-cross').hide();
  });
}


navHandler();
menuHandler();
