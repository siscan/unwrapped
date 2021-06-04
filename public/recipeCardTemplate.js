(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['recipeCard'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<section class=\"recipe-card\">\n  <div class=\"img-container\">\n    <!-- The <i> tag below includes the bullhorn icon from Font Awesome.  Do not directly style this element. -->\n    <img class=\"recipe-img\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"url") || (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":4,"column":33},"end":{"line":4,"column":40}}}) : helper)))
    + "\"/>\n  </div>\n  <div class=\"recipe-title\">\n    <a href=\"#\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":7,"column":16},"end":{"line":7,"column":25}}}) : helper)))
    + "</a>\n  </div>\n  <div class=\"recipe-time\">\n    <i class=\"fas fa-clock\"></i> Time: "
    + alias4(((helper = (helper = lookupProperty(helpers,"duration") || (depth0 != null ? lookupProperty(depth0,"duration") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"duration","hash":{},"data":data,"loc":{"start":{"line":10,"column":39},"end":{"line":10,"column":51}}}) : helper)))
    + " mins\n  </div>\n  <div class=\"recipe-servings\">\n    <p><i class=\"fas fa-user-friends\"></i> serves "
    + alias4(((helper = (helper = lookupProperty(helpers,"serving") || (depth0 != null ? lookupProperty(depth0,"serving") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"serving","hash":{},"data":data,"loc":{"start":{"line":13,"column":50},"end":{"line":13,"column":61}}}) : helper)))
    + " </p>\n    <p class=\"recipe-favorite\"><i class=\"fas fa-heart\"></i></p>\n  </div>\n</section>\n";
},"useData":true});
})();