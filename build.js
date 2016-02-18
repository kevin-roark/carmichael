#!/usr/bin/env node

var fs = require('fs');
var Content = require('./content.js');

var contents = require('./content.json');
var contentItems = [];
contents.forEach(function(contentData){
  contentItems.push(new Content(contentData));
});

fs.readFile('base.html', 'utf8', function(err, base) {
  var contentContainer = '<div class="content-container">';
  var containerLocation = base.indexOf(contentContainer) + contentContainer.length;

  var renderedContent = '\n';
  contentItems.forEach(function(content) {
    renderedContent += content.render() + '\n';
  });

  var indexHTML = `${base.substring(0, containerLocation)}${renderedContent}${base.substring(containerLocation + 1)}`;

  fs.writeFile('index.html', indexHTML, 'utf8', function(err) {
    if (err) {
      console.log(err);
    }
  });
});
