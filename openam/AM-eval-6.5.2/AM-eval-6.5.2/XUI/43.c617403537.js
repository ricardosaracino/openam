(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[43,220,339,359],{1164:function(e,t,a){var n=a(62);e.exports=(n["default"]||n).template({compiler:[7,">= 4.0.0"],main:function(e,t,a,n,r){return'<a class="btn info-button visible-lg-inline-block visible-md-inline-block visible-sm-inline-block" tabindex="0" data-toggle="popoverclickaway">\n    <i class="fa fa-info-circle"></i>\n</a>\n'},useData:true})},1165:function(e,t,a){var n=a(62);e.exports=(n["default"]||n).template({compiler:[7,">= 4.0.0"],main:function(e,t,a,n,r){var i,s=null!=t?t:e.nullContext||{},l=a.helperMissing,o="function",u=e.escapeExpression;return'<div class="subnav-container">\n    <div class="container">\n        <strong><i class="fa fa-angle-left text-muted"></i> <a href="'+u((i=null!=(i=a.hash||(null!=t?t.hash:t))?i:l,typeof i===o?i.call(s,{name:"hash",hash:{},data:r}):i))+'">'+u((i=null!=(i=a.title||(null!=t?t.title:t))?i:l,typeof i===o?i.call(s,{name:"title",hash:{},data:r}):i))+"</a></strong>\n    </div>\n</div>\n"},useData:true})},1290:function(e,t,a){var n=a(62);e.exports=(n["default"]||n).template({compiler:[7,">= 4.0.0"],main:function(e,t,a,n,r){var i,s=null!=t?t:e.nullContext||{},l=a.helperMissing,o=e.escapeExpression;return'<nav id="backlink"></nav>\n<div class="container">\n'+(null!=(i=e.invokePartial(n["headers/_Title"],t,{name:"headers/_Title",hash:{title:"console.sites.new.title"},data:r,indent:"    ",helpers:a,partials:n,decorators:e.decorators}))?i:"")+'\n    <div class="panel multiple-panels panel-content">\n        <div class="panel panel-default">\n            <div class="panel-body">\n                <div class="form-horizontal">\n                    <div class="form-group">\n                        <label class="col-sm-4 control-label" for="siteId">'+o((a.t||t&&t.t||l).call(s,"common.form.name",{name:"t",hash:{},data:r}))+'</label>\n                        <div class="col-sm-6">\n                            <input data-site-name type="text" id="siteId" class="form-control" required name="siteId"\n                                 placeholder="'+o((a.t||t&&t.t||l).call(s,"common.form.validation.required",{name:"t",hash:{},data:r}))+'">\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class="panel panel-default">\n            <div class="panel-body">\n                <form data-site-form></form>\n            </div>\n        </div>\n\n        <div class="panel-footer clearfix">\n            <div class="pull-right">\n                <a class="btn btn-default" href="'+o((a.routeTo||t&&t.routeTo||l).call(s,"listSites",{name:"routeTo",hash:{},data:r}))+'">'+o((a.t||t&&t.t||l).call(s,"common.form.cancel",{name:"t",hash:{},data:r}))+'</a>\n                <button data-create class="btn btn-primary" type="button" disabled>'+o((a.t||t&&t.t||l).call(s,"common.form.create",{name:"t",hash:{},data:r}))+"</button>\n            </div>\n        </div>\n    </div>\n</div>\n"},usePartial:true,useData:true})},1410:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=a(6);var r=_(n);var i=a(19);var s=_(i);var l=a(114);var o=_(l);var u=a(1553);var d=_(u);var c=a(1528);var f=_(c);var v=a(560);var h=_(v);var p=a(1290);var m=_(p);var w=a(73);var g=_(w);var b=a(1619);var y=_(b);function _(e){return e&&e.__esModule?e:{default:e}}var P=o.default.extend({template:m.default,events:{"click [data-create]":"onCreate","keyup  [data-site-name]":"onValidateProps"},render:function e(){var t=this;y.default.sites.getInitialState().then(function(e){return t.parentRender(function(){(new d.default).render();t.jsonSchemaView=new f.default({schema:e.schema,values:e.values});(0,s.default)(t.jsonSchemaView.render().el).appendTo(t.$el.find("[data-site-form]"))})})},onCreate:function e(){var t=r.default.cloneDeep(this.jsonSchemaView.getData());var a=this.$el.find("[data-site-name]").val();t["_id"]=a;y.default.sites.create(t).then(function(){g.default.routeTo(g.default.configuration.routes.listSites,{args:[],trigger:true})},function(e){h.default.addMessage({response:e,type:h.default.TYPE_DANGER})})},onValidateProps:function e(t){var a=(0,s.default)(t.currentTarget).val();if(-1!==a.indexOf(" ")){a=false;h.default.addMessage({type:h.default.TYPE_DANGER,message:s.default.t("console.sites.new.nameValidationError")})}this.$el.find("[data-create]").prop("disabled",!a)}});t.default=new P},1525:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});a(1539);var n=a(6);var r=_(n);var i=a(19);var s=_(i);var l=a(159);var o=_(l);var u=a(1538);var d=_(u);var c=a(1164);var f=_(c);var v=a(1541);var h=_(v);var p=a(866);var m=_(p);var w=a(865);var g=_(w);var b=a(1531);var y=_(b);function _(e){return e&&e.__esModule?e:{default:e}}function P(e){var t=(0,f.default)();(0,s.default)(e).find(".help-block:not(.errormsg)").addClass("hidden-lg hidden-md hidden-sm").each(function(e,a){var n=(0,s.default)(t);n.popoverclickaway({container:"#content",html:true,placement:"auto top",content:a.innerHTML}).click(function(e){e.preventDefault()});(0,s.default)(a).parent().append(n)})}function E(e){(0,s.default)(e).find("input:password").attr("placeholder",s.default.t("common.form.passwordPlaceholder"))}y.default.define("enum_plugin",function(e){var t=this,a=arguments;var n=e.schema;var i=r.default.indexOf(n.enum,"");var s=i>-1;var l=function e(){var n=function e(t){return!t||8!==t.keyCode};t.deleteSelection=function(){var e=t.deleteSelection;return function(r){if(n(r))return e.apply(t,a);return false}}()};var o=function e(){t.plugins.settings["dropdown_header"]={title:n.options.enum_titles[i]};t.require("dropdown_header");t.setup=function(){var e=t.setup;return function(){e.apply(t,a);t.$dropdown.on("mousedown",".selectize-dropdown-header",function(){t.setValue("");t.close();t.blur();return false})}}()};s?o():l()});function V(e,t){var a=t.schema,n=t.values,r=t.hideInheritance,i=void 0!==r&&r;var s=6;var l=4;d.default.plugins.selectize.enable=true;d.default.plugins.selectize.plugins=function(e){return[{name:"enum_plugin",options:{schema:e}}]};d.default.defaults.themes.openam=h.default.getTheme(s,l);var o=a.toFlatWithInheritanceMeta(n);var u=n.removeInheritance();o=o.raw;u=u.raw;var c=new d.default(e[0],{disable_collapse:true,disable_edit_json:true,disable_properties:true,hide_inheritance:i,iconlib:"fontawesome4",schema:o,theme:"openam"});P(e);E(e);c.setValue(u);return c}var S=o.default.View.extend({className:"jsoneditor-block",initialize:function e(t){if(!(t.schema instanceof m.default))throw new TypeError('[JSONEditorView] "schema" argument is not an instance of JSONSchema.');if(!(t.values instanceof g.default))throw new TypeError('[JSONEditorView] "values" argument is not an instance of JSONValues.');this.options=r.default.defaults(t,{displayTitle:true})},toggleInheritance:function e(t,a,n){this.options.values=this.options.values.extend(this.getData());this.options.values=this.options.values.addValueForPath([t,"inherited"],n);this.options.values=this.options.values.addValueForPath([t,"value"],a);this.render()},render:function e(){this.$el.empty();var t=r.default.get(this.jsonEditor,"watchlist");this.jsonEditor=V(this.$el,this.options);this.jsonEditor.watchlist=t;this.options.displayTitle||this.$el.find("[data-header]").parent().hide();return this},isValid:function e(){return 0===this.jsonEditor.validate().length},getData:function e(){var t=new g.default(this.jsonEditor.getValue());this.options.schema.hasDefaultProperties()&&(t=t.pick(this.options.schema.raw.defaultProperties));t=t.nullifyEmptyPasswords(this.options.schema.getPasswordKeys());t=t.addInheritance(this.options.values.raw);return t.raw},setData:function e(t){this.options.values=this.options.values.extend(t)},watch:function e(t,a){this.jsonEditor.watch(t,a)},destroy:function e(){var t=this;var a=r.default.keys(this.jsonEditor.watchlist);r.default.forEach(a,function(e){t.jsonEditor.unwatch(e)});this.jsonEditor.destroy();this.jsonEditor=null}});t.default=S},1528:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=a(6);var r=v(n);var i=a(159);var s=v(i);var l=a(1525);var o=v(l);var u=a(866);var d=v(u);var c=a(865);var f=v(c);function v(e){return e&&e.__esModule?e:{default:e}}function h(e){e&&setTimeout(e,0)}var p=s.default.View.extend({initialize:function e(t){if(!(t.schema instanceof d.default))throw new TypeError('[FlatJSONSchemaView] "schema" argument is not an instance of JSONSchema.');if(!(t.values instanceof f.default))throw new TypeError('[FlatJSONSchemaView] "values" argument is not an instance of JSONValues.');this.options=r.default.defaults(t,{showOnlyRequiredAndEmpty:false})},render:function e(){var t=this.options.schema;var a=true;if(this.options.showOnlyRequiredAndEmpty){var n=this.options.schema.getRequiredPropertyKeys();var i=this.options.values.getEmptyValueKeys(t);var s=r.default.intersection(n,i);t=t.removeUnrequiredNonDefaultProperties().addDefaultProperties(s);a=!r.default.isEmpty(s)}this.subview=new o.default({displayForm:a,hideInheritance:this.options.hideInheritance,displayTitle:false,el:this.$el,schema:t,values:this.options.values}).render();h(this.options.onRendered);return this},isValid:function e(){return!this.subview||this.subview.isValid()},getData:function e(){if(this.subview){var t;return(t=this.subview).getData.apply(t,arguments)}},setData:function e(t){if(this.subview){this.options.values=this.options.values.extend(t);return this.subview.setData(t)}},watch:function e(t,a){this.subview&&this.subview.watch(t,a)},destroy:function e(){if(this.subview){this.subview.destroy();this.subview=null}}});t.default=p},1553:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=a(6);var r=v(n);var i=a(19);var s=v(i);var l=a(159);var o=v(l);var u=a(1165);var d=v(u);var c=a(63);var f=v(c);function v(e){return e&&e.__esModule?e:{default:e}}function h(e,t){return r.default.take(e,t+1).join("/")}t.default=o.default.View.extend({el:"#backlink",render:function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;var a=f.default.getCurrentFragment().split("/");var n=a[t];var i=r.default.startCase(""+n);var l={title:s.default.t("console.navigation."+n+".title",{defaultValue:i}),hash:"#"+h(a,t)};this.$el.html((0,d.default)(l))}})},1619:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=a(6);var r=p(n);var i=a(169);var s=p(i);var l=a(27);var o=p(l);var u=a(168);var d=p(u);var c=a(866);var f=p(c);var v=a(865);var h=p(v);function p(e){return e&&e.__esModule?e:{default:e}}var m=new s.default(""+o.default.host+o.default.context+"/json");var w=function e(t){return r.default.pick(t,["url","secondaryURLs"])};var g=function e(){return m.serviceCall({url:(0,d.default)("/global-config/sites?_action=schema",{realm:false}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST",success:function e(t){var a=w(t.properties);t.properties=a;return t}})};var b=function e(t){return m.serviceCall({url:(0,d.default)("/global-config/sites/"+t,{realm:false}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},success:function e(t,a){t.etag=a.getResponseHeader("ETag");return t}})};var y=function e(){return m.serviceCall({url:(0,d.default)("/global-config/sites?_action=template",{realm:false}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST"})};m.sites={getAll:function e(){return m.serviceCall({url:(0,d.default)("/global-config/sites?_queryFilter=true",{realm:false}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"}}).then(function(e){return r.default.sortBy(e.result,"_id")})},get:function e(t){return Promise.all([g(),b(t)]).then(function(e){return{schema:new f.default(e[0]),values:new h.default(e[1])}})},create:function e(t){return m.serviceCall({url:(0,d.default)("/global-config/sites?_action=create",{realm:false}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST",data:JSON.stringify(r.default.omit(t,["servers"]))})},update:function e(t,a,n){return m.serviceCall({url:(0,d.default)("/global-config/sites/"+t,{realm:false}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0","If-Match":n},type:"PUT",data:JSON.stringify(w(a))})},remove:function e(t,a){var e=function e(t,a){return m.serviceCall({url:(0,d.default)("/global-config/sites/"+t,{realm:false}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0","If-Match":a},type:"DELETE"})};return r.default.isUndefined(a)?b(t).then(function(a){return e(t,a.etag)}):e(t,a)},getInitialState:function e(){return Promise.all([g(),y()]).then(function(e){return{schema:new f.default(e[0]),values:new h.default(e[1])}})}};t.default=m}}]);
//# sourceMappingURL=43.c617403537.js.map