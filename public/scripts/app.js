'user strict';
//global variables

let app = {};

(function(module) {
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
  };

  //project data stored in the source_data.js file
  Project.loadAll = function(rawData) {
    rawData.forEach(function(projectObj){
      Project.all.push(new Project(projectObj));
    });
  };

  Project.fetchAll = function() {
    if(localStorage.projData) {
      Project.loadAll(JSON.parse(localStorage.projData));
      initPage();
    } else {
      $.getJSON('/scripts/source_data.json')
      .then(function(data){
        localStorage.projData = JSON.stringify(data);
        Project.loadAll(data);
        initPage();
      }, function(err){
        console.error('My page broke because:', err);
      });
    }
  };

  Project.getCollabs = () => {
    Project.all.map((project) => project.collabs.split(', ')).reduce((count, collabs) => {
      return count.includes(collabs) ? null : count.push(collabs);
    }, []);

  };

  var initPage = function() {
    Project.all.forEach(function(project) {
      $('#project').append(project.toHtml());
    });
    navHandler();
    menuHandler();
    bannerHandler();
  };

  //event handlers
  var navHandler = function() {
    $('#menu').on('click', 'li.tab', function(e) {
      e.preventDefault();
      $('.tab_content').hide();
      var $tab = $(this).data('content');
      $('#' + $tab).show();
      $('#menu').removeClass('menu_show').addClass('menu_hide');
      $('.icon-menu').show();
      $('.icon-cross').hide();
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
  };

  var bannerHandler = function() {
    $('.info').hide();
    $('.project_banner').on('click', function() {
      $(this).find('.info').fadeIn();
      $(this).find('h3').addClass('click');
      $('.project_banner').mouseleave(function(){
        $(this).find('.info').fadeOut();
        $(this).find('h3').removeClass('click');
      });
    });
  };
  module.Project = Project;
}(app));
