'use strict';

function listCategoriesHelper(categories, options) {
    if (!options && (!categories || !categories.hasOwnProperty('length'))) {
    options = categories;
    categories = this.site.categories;
    }

    if (!categories || !categories.length) return '';
    options = options || {};

    const style = options.hasOwnProperty('style') ? options.style : 'list';
    const showCount = options.hasOwnProperty('show_count') ? options.show_count : true;
    const className = options.class || 'categories-list';
    const countClass = options.count_class || '';
    const depth = options.depth ? parseInt(options.depth, 10) : 0;
    const orderby = options.orderby || 'name';
    const order = options.order || 1;
    const transform = options.transform;
    const separator = options.hasOwnProperty('separator') ? options.separator : ', ';
    const showCurrent = options.show_current || false;
    const suffix = options.suffix || '';
    const childrenIndicator = options.hasOwnProperty('children_indicator') ? options.children_indicator : false;
    let result = '';
    const self = this;

    function prepareQuery(parent) {
        const query = {};

        if (parent) {
            query.parent = parent;
        } else {
            query.parent = {$exists: false};
        }

        return categories.find(query).sort(orderby, order).filter(cat => cat.length);
    }

    function hierarchicalList(level, parent) {
        let result = '';

        prepareQuery(parent).forEach((cat, i) => {
            let child;
            if (!depth || level + 1 < depth) {
                child = hierarchicalList(level + 1, cat._id);
            }

            let isCurrent = false;
            if (showCurrent && self.page) {
                for (let j = 0; j < cat.length; j++) {
                    const post = cat.posts.data[j];
                    if (post && post._id === self.page._id) {
                    isCurrent = true;
                    break;
                    }
                }

                // special case: category page
                if (!isCurrent && self.page.base) {
                    if (self.page.base.indexOf(cat.path) === 0) {
                        isCurrent = true;
                    }
                }
            }

            let additionalClassName = '';
            if (child && childrenIndicator) {
                additionalClassName = ` ${childrenIndicator}`;
            }

            let categoryName = transform ? transform(cat.name) : cat.name;
            result += `<li><a href="${self.url_for(cat.path)}${suffix}">${categoryName}`;
            
            if (showCount) {
                result += ` <span class="${countClass}">${cat.length}</span>`;
            }

            result += '</a></li>';
        });

        return result;
    }

    result += `<ul class="${className}">${hierarchicalList(0)}</ul>`;

    return result;
}

hexo.extend.helper.register('list_categories', listCategoriesHelper);
