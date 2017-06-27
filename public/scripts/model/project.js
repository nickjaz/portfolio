'user strict';
//global variables

var app = app || {};

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

  Project.fetchAll = function(callback)  {
    if(localStorage.projData) {
      Project.loadAll(JSON.parse(localStorage.projData));
      callback();
    } else {
      $.getJSON('./data/source_data.json')
      .then(function(data){
        localStorage.projData = JSON.stringify(data);
        Project.loadAll(data);
        callback();
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

  module.Project = Project;
}(app));
