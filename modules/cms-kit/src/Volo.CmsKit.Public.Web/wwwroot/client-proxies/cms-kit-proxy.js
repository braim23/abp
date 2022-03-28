/* This file is automatically generated by ABP framework to use MVC Controllers from javascript. */


// module cms-kit

(function(){

  // controller volo.cmsKit.public.tags.tagPublic

  (function(){

    abp.utils.createNamespace(window, 'volo.cmsKit.public.tags.tagPublic');

    volo.cmsKit.public.tags.tagPublic.getAllRelatedTags = function(entityType, entityId, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/cms-kit-public/tags/' + entityType + '/' + entityId + '',
        type: 'GET'
      }, ajaxParams));
    };

  })();

  // controller volo.cmsKit.public.reactions.reactionPublic

  (function(){

    abp.utils.createNamespace(window, 'volo.cmsKit.public.reactions.reactionPublic');

    volo.cmsKit.public.reactions.reactionPublic.getForSelection = function(entityType, entityId, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/cms-kit-public/reactions/' + entityType + '/' + entityId + '',
        type: 'GET'
      }, ajaxParams));
    };

    volo.cmsKit.public.reactions.reactionPublic.create = function(entityType, entityId, reaction, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/cms-kit-public/reactions/' + entityType + '/' + entityId + '/' + reaction + '',
        type: 'PUT',
        dataType: null
      }, ajaxParams));
    };

    volo.cmsKit.public.reactions.reactionPublic['delete'] = function(entityType, entityId, reaction, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/cms-kit-public/reactions/' + entityType + '/' + entityId + '/' + reaction + '',
        type: 'DELETE',
        dataType: null
      }, ajaxParams));
    };

  })();

  // controller volo.cmsKit.public.ratings.ratingPublic

  (function(){

    abp.utils.createNamespace(window, 'volo.cmsKit.public.ratings.ratingPublic');

    volo.cmsKit.public.ratings.ratingPublic.create = function(entityType, entityId, input, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/cms-kit-public/ratings/' + entityType + '/' + entityId + '',
        type: 'PUT',
        data: JSON.stringify(input)
      }, ajaxParams));
    };

    volo.cmsKit.public.ratings.ratingPublic['delete'] = function(entityType, entityId, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/cms-kit-public/ratings/' + entityType + '/' + entityId + '',
        type: 'DELETE',
        dataType: null
      }, ajaxParams));
    };

    volo.cmsKit.public.ratings.ratingPublic.getGroupedStarCounts = function(entityType, entityId, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/cms-kit-public/ratings/' + entityType + '/' + entityId + '',
        type: 'GET'
      }, ajaxParams));
    };

  })();

  // controller volo.cmsKit.public.pages.pagesPublic

  (function(){

    abp.utils.createNamespace(window, 'volo.cmsKit.public.pages.pagesPublic');

    volo.cmsKit.public.pages.pagesPublic.findBySlug = function(slug, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/cms-kit-public/pages/' + slug + '',
        type: 'GET'
      }, ajaxParams));
    };

  })();

  // controller volo.cmsKit.public.menus.menuItemPublic

  (function(){

    abp.utils.createNamespace(window, 'volo.cmsKit.public.menus.menuItemPublic');

    volo.cmsKit.public.menus.menuItemPublic.getList = function(ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/cms-kit-public/menu-items',
        type: 'GET'
      }, ajaxParams));
    };

  })();

  // controller volo.cmsKit.public.globalResources.globalResourcePublic

  (function(){

    abp.utils.createNamespace(window, 'volo.cmsKit.public.globalResources.globalResourcePublic');

    volo.cmsKit.public.globalResources.globalResourcePublic.getGlobalScript = function(ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/cms-kit-public/global-resources/script',
        type: 'GET'
      }, ajaxParams));
    };

    volo.cmsKit.public.globalResources.globalResourcePublic.getGlobalStyle = function(ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/cms-kit-public/global-resources/style',
        type: 'GET'
      }, ajaxParams));
    };

  })();

  // controller volo.cmsKit.public.comments.commentPublic

  (function(){

    abp.utils.createNamespace(window, 'volo.cmsKit.public.comments.commentPublic');

    volo.cmsKit.public.comments.commentPublic.getList = function(entityType, entityId, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/cms-kit-public/comments/' + entityType + '/' + entityId + '',
        type: 'GET'
      }, ajaxParams));
    };

    volo.cmsKit.public.comments.commentPublic.create = function(entityType, entityId, input, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/cms-kit-public/comments/' + entityType + '/' + entityId + '',
        type: 'POST',
        data: JSON.stringify(input)
      }, ajaxParams));
    };

    volo.cmsKit.public.comments.commentPublic.update = function(id, input, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/cms-kit-public/comments/' + id + '',
        type: 'PUT',
        data: JSON.stringify(input)
      }, ajaxParams));
    };

    volo.cmsKit.public.comments.commentPublic['delete'] = function(id, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/cms-kit-public/comments/' + id + '',
        type: 'DELETE',
        dataType: null
      }, ajaxParams));
    };

  })();

  // controller volo.cmsKit.public.blogs.blogPostPublic

  (function(){

    abp.utils.createNamespace(window, 'volo.cmsKit.public.blogs.blogPostPublic');

    volo.cmsKit.public.blogs.blogPostPublic.get = function(blogSlug, blogPostSlug, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/cms-kit-public/blog-posts/' + blogSlug + '/' + blogPostSlug + '',
        type: 'GET'
      }, ajaxParams));
    };

    volo.cmsKit.public.blogs.blogPostPublic.getList = function(blogSlug, input, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/cms-kit-public/blog-posts/' + blogSlug + '' + abp.utils.buildQueryString([{ name: 'authorId', value: input.authorId }, { name: 'sorting', value: input.sorting }, { name: 'skipCount', value: input.skipCount }, { name: 'maxResultCount', value: input.maxResultCount }]) + '',
        type: 'GET'
      }, ajaxParams));
    };

    volo.cmsKit.public.blogs.blogPostPublic.getAuthorsHasBlogPosts = function(ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/cms-kit-public/blog-posts/authors',
        type: 'GET'
      }, ajaxParams));
    };

  })();

})();


