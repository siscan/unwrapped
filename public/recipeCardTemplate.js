(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['recipeCard'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<section class=\"recipe-card\">\r\n  <div class=\"img-container\">\r\n    <!-- The <i> tag below includes the bullhorn icon from Font Awesome.  Do not directly style this element. -->\r\n    <img class=\"recipe-img\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"url") || (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":4,"column":33},"end":{"line":4,"column":40}}}) : helper)))
    + "\"/>\r\n  </div>\r\n  <div class=\"recipe-title\">\r\n    <a href=\"#\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":7,"column":16},"end":{"line":7,"column":25}}}) : helper)))
    + "</a>\r\n  </div>\r\n  <div class=\"recipe-time\">\r\n    <i class=\"fas fa-clock\"></i> Time: "
    + alias4(((helper = (helper = lookupProperty(helpers,"duration") || (depth0 != null ? lookupProperty(depth0,"duration") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"duration","hash":{},"data":data,"loc":{"start":{"line":10,"column":39},"end":{"line":10,"column":51}}}) : helper)))
    + " mins\r\n  </div>\r\n  <div class=\"recipe-servings\">\r\n    <p><i class=\"fas fa-user-friends\"></i> serves "
    + alias4(((helper = (helper = lookupProperty(helpers,"serving") || (depth0 != null ? lookupProperty(depth0,"serving") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"serving","hash":{},"data":data,"loc":{"start":{"line":13,"column":50},"end":{"line":13,"column":61}}}) : helper)))
    + " </p>\r\n		<button type=\"button\" id=\"recipe-favorite\"><i class=\"fas fa-heart\"></i></p>\r\n  </div>\r\n  <div class=\"recipe-ingredients hidden\">\r\n    "
    + alias4(((helper = (helper = lookupProperty(helpers,"ingredients") || (depth0 != null ? lookupProperty(depth0,"ingredients") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ingredients","hash":{},"data":data,"loc":{"start":{"line":17,"column":4},"end":{"line":17,"column":19}}}) : helper)))
    + "\r\n  </div>\r\n  <div class=\"recipe-instructions hidden\">\r\n    "
    + alias4(((helper = (helper = lookupProperty(helpers,"instructions") || (depth0 != null ? lookupProperty(depth0,"instructions") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"instructions","hash":{},"data":data,"loc":{"start":{"line":20,"column":4},"end":{"line":20,"column":20}}}) : helper)))
    + "\r\n  </div>\r\n  <div class=\"recipe-author hidden\">\r\n    "
    + alias4(((helper = (helper = lookupProperty(helpers,"author") || (depth0 != null ? lookupProperty(depth0,"author") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author","hash":{},"data":data,"loc":{"start":{"line":23,"column":4},"end":{"line":23,"column":14}}}) : helper)))
    + "\r\n  </div>\r\n</section>\r\n";
},"useData":true});
})();