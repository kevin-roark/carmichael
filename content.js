
module.exports = Content;

function Content(config) {
  this.link = config.link;
  this.title = config.title;
  this.description = config.description;
  this.when = config.when;
}

Content.prototype.render = function() {
  var view = '<div class="content-item">';

  view += `<a class="content-title" target="_blank" href="${this.link}">${this.title}</a>`;
  view += ` — <span class="content-when">${this.when}</span>`;

  view += `<div class="content-description">${this.description}</div>`;

  view += '</div>';

  return view;
};
