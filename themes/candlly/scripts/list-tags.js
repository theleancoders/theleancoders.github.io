'use strict';

function listTagsHelper(tags, options) {
  if (!options && (!tags || !tags.hasOwnProperty('length'))) {
    options = tags;
    tags = this.site.tags;
  }

  if (!tags || !tags.length) return '';
  options = options || {};

  const style = options.hasOwnProperty('style') ? options.style : 'list';
  const showCount = options.hasOwnProperty('show_count') ? options.show_count : true;
  const className = options.class || 'tag';
  const orderby = options.orderby || 'name';
  const order = options.order || 1;
  const transform = options.transform;
  const suffix = options.suffix || '';
  const separator = options.hasOwnProperty('separator') ? options.separator : ', ';
  let result = '';
  const self = this;

  // Sort the tags
  tags = tags.sort(orderby, order);

  // Ignore tags with zero posts
  tags = tags.filter(tag => tag.length);

  // Limit the number of tags
  if (options.amount) tags = tags.limit(options.amount);

  result += `<div class="tags">`;
  tags.forEach(tag => {
      result += `<a href="${self.url_for(tag.path)}${suffix}">`;
      result += transform ? transform(tag.name) : tag.name;
      result += '</a>';
  });
  result += '</div>'

  return result;
}

hexo.extend.helper.register('list_tags', listTagsHelper);
