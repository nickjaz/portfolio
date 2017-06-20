'user strict;'
//global variables

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

Project.all = [];

//render function builds the page dynamically
Project.prototype.toHtml = function() {
  var template = $('#project_template').html();

  var templateRender = Handlebars.compile(template);

  return templateRender(this);
}

//project data stored in the source_data.js file
Project.loadAll = function(rawData) {
  rawData.forEach(function(projectObj){
    Project.all.push(new Project(projectObj));
  })
}

Project.fetchAll = function() {
  if(localStorage.rawData) {
    Project.loadAll(JSON.parse(localStorage.rawData));
    initPage();
  } else {
    $.getJSON('/scripts/source_data.json')
    .then(function(data){
      localStorage.rawData = JSON.stringify(data)
      Project.loadAll(JSON.parse(data));
      initPage();
    }, function(err){
      console.error('My page broke because:', err);
    })
  }
}

var initPage = function() {
 Project.all.forEach(function(project) {
   $('#project').append(project.toHtml());
 });
 navHandler();
 menuHandler();
}

//event handlers
var navHandler = function() {
  $('#menu').on('click', 'li.tab', function(e) {
    e.preventDefault();
    $('.tab_content').hide();
    var $tab = $(this).data('content');
    $('#' + $tab).show();
  });
}

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
