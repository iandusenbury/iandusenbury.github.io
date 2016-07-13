Handlebars.registerPartial("footer", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"footer\">Footer</div>\n";
},"useData":true}));
this["MySite"] = this["MySite"] || {};
this["MySite"]["templates"] = this["MySite"]["templates"] || {};
this["MySite"]["templates"]["Main"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = this.invokePartial(partials.head,depth0,{"name":"head","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "<body>\n  <div id=\"page_wrap\" class=\"page-wrap\"></div>\n"
    + ((stack1 = this.invokePartial(partials.header,(depth0 != null ? depth0.active : depth0),{"name":"header","data":data,"indent":"  ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "  This is the site\n</body>\n";
},"usePartial":true,"useData":true});
Handlebars.registerPartial("head", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<head>\n  <title>Ian Dusenbury</title>\n  <script src=\"js/handlebars.runtime.js\"></script>\n  <script src=\"js/templates.js\"></script>\n</head>\n";
},"useData":true}));
this["MySite"]["templates"]["Site"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return ((stack1 = this.invokePartial(partials.header,(depth0 != null ? depth0.active : depth0),{"name":"header","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "This is the site!\n"
    + ((stack1 = ((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"body","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n"
    + ((stack1 = this.invokePartial(partials.footer,depth0,{"name":"footer","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "");
},"usePartial":true,"useData":true});
Handlebars.registerPartial("header", Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "active";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<header>\n  <nav>\n    <ul>\n      <li class=\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.active_home : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " nav-item\"><a href=\"/\">Home</a></li>\n      <li class=\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.active_blog : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " nav-item\"><a href=\"/\">Blog</a></li>\n      <li class=\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.active_apps : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " nav-item\"><a href=\"/\">Apps</a></li>\n    </ul>\n  </nav>\n</header>\n";
},"useData":true}));