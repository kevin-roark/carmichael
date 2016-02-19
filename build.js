#!/usr/bin/env node

var fs = require('fs');

var contents = require('./content.json');

fs.readFile('base.html', 'utf8', function(err, base) {
  var contentContainer = '<div class="content-container">';
  var containerLocation = base.indexOf(contentContainer) + contentContainer.length;

  var renderedContent = '\n';
  contents.forEach(function(content) {
    renderedContent += renderContent(content) + '\n';
  });

  var indexHTML = `${base.substring(0, containerLocation)}${renderedContent}${base.substring(containerLocation + 1)}`;

  fs.writeFile('index.html', indexHTML, 'utf8', function(err) {
    if (err) {
      console.log(err);
    }
  });
});

function renderContent(content) {
  var view = '<div class="content-item">';

  view += `<a class="content-title" target="_blank" href="${content.link}">${content.title}</a>`;
  view += ` — <span class="content-when">${content.when}</span>`;

  view += `<div class="content-description">${content.description}</div>`;

  view += '</div>';

  return view;
}
