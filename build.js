#!/usr/bin/env node

var fs = require('fs');
var beautify = require('js-beautify');

var contents = require('./content.json');

fs.readFile('base.html', 'utf8', function(err, base) {
  var featuredContainer = '<div class="content-container featured-container">';
  var featuredLocation = base.indexOf(featuredContainer) + featuredContainer.length;
  var featured = `\n` + contents.featured.map(renderContent).join('\n');

  var otherContainer = '<div class="content-container other-container">';
  var otherLocation = base.indexOf(otherContainer) + otherContainer.length;
  var other = `\n` + contents.other.map(renderContent).join('\n');

  var indexHTML = `${base.substring(0, featuredLocation)}${featured}${base.substring(featuredLocation + 1, otherLocation)}${other}${base.substring(otherLocation + 1)}`;
  indexHTML = beautify.html(indexHTML, {
    indent_size: 2
  });
  indexHTML += '\n';

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
