(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[44,220,341,359],{1164:function(e,t,a){var n=a(62);e.exports=(n["default"]||n).template({compiler:[7,">= 4.0.0"],main:function(e,t,a,n,r){return'<a class="btn info-button visible-lg-inline-block visible-md-inline-block visible-sm-inline-block" tabindex="0" data-toggle="popoverclickaway">\n    <i class="fa fa-info-circle"></i>\n</a>\n'},useData:true})},1165:function(e,t,a){var n=a(62);e.exports=(n["default"]||n).template({compiler:[7,">= 4.0.0"],main:function(e,t,a,n,r){var i,o=null!=t?t:e.nullContext||{},s=a.helperMissing,l="function",u=e.escapeExpression;return'<div class="subnav-container">\n    <div class="container">\n        <strong><i class="fa fa-angle-left text-muted"></i> <a href="'+u((i=null!=(i=a.hash||(null!=t?t.hash:t))?i:s,typeof i===l?i.call(o,{name:"hash",hash:{},data:r}):i))+'">'+u((i=null!=(i=a.title||(null!=t?t.title:t))?i:s,typeof i===l?i.call(o,{name:"title",hash:{},data:r}):i))+"</a></strong>\n    </div>\n</div>\n"},useData:true})},1292:function(e,t,a){var n=a(62);e.exports=(n["default"]||n).template({compiler:[7,">= 4.0.0"],main:function(e,t,a,n,r){var i,o=null!=t?t:e.nullContext||{},s=a.helperMissing,l=e.escapeExpression;return'<nav id="backlink"></nav>\n<div class="container">\n'+(null!=(i=e.invokePartial(n["headers/_TitleWithSubAndIcon"],t,{name:"headers/_TitleWithSubAndIcon",hash:{icon:"bookmark-o",type:"console.sites.edit.title",title:null!=t?t.name:t},data:r,indent:"    ",helpers:a,partials:n,decorators:e.decorators}))?i:"")+'\n    <div class="panel panel-default">\n        <div class="panel-body">\n            <div data-json-form></div>\n        </div>\n        <div class="panel-footer clearfix">\n            <div class="pull-right">\n                <a class="btn btn-default" href="'+l((a.routeTo||t&&t.routeTo||s).call(o,"listSites",{name:"routeTo",hash:{},data:r}))+'">'+l((a.t||t&&t.t||s).call(o,"common.form.cancel",{name:"t",hash:{},data:r}))+'</a>\n                <button data-save class="btn btn-primary" type="button" disabled>'+l((a.t||t&&t.t||s).call(o,"common.form.saveChanges",{name:"t",hash:{},data:r}))+"</button>\n            </div>\n        </div>\n    </div>\n</div>\n"},usePartial:true,useData:true})},1411:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=a(19);var r=T(n);var i=a(114);var o=T(i);var s=a(1553);var l=T(s);var u=a(27);var d=T(u);var c=a(1292);var f=T(c);var v=a(59);var h=T(v);var p=a(1528);var m=T(p);var g=a(1533);var w=T(g);var b=a(560);var y=T(b);var _=a(73);var E=T(_);var P=a(1619);var S=T(P);function T(e){return e&&e.__esModule?e:{default:e}}function V(e,t){e.find("[data-save]").prop("disabled",!t)}var j=o.default.extend({template:f.default,events:{"click [data-save]":"onSave","click [data-delete]":"onDelete"},render:function e(t){var a=this;this.data.id=t[0];S.default.sites.get(this.data.id).then(function(e){a.data.name=e.values.raw._id;a.data.etag=e.values.raw.etag;a.data.headerActions=[{actionPartial:"form/_Button",data:"delete",title:"common.form.delete",icon:"fa-times"}];a.parentRender(function(){(new l.default).render();a.jsonSchemaView&&a.jsonSchemaView.remove();a.jsonSchemaView=new m.default({schema:e.schema,values:e.values,onRendered:function e(){return V(a.$el,true)}});(0,r.default)(a.jsonSchemaView.render().el).appendTo(a.$el.find("[data-json-form]"))})})},onSave:function e(){S.default.sites.update(this.data.id,this.jsonSchemaView.getData(),this.data.etag).then(function(){return h.default.sendEvent(d.default.EVENT_DISPLAY_MESSAGE_REQUEST,"changesSaved")},function(e){return y.default.addMessage({response:e,type:y.default.TYPE_DANGER})})},onDelete:function e(t){var a=this;t.preventDefault();w.default.showConfirmationBeforeDeleting({message:r.default.t("console.common.confirmDeleteText",{type:r.default.t("console.sites.common.confirmType")})},function(){S.default.sites.remove(a.data.id,a.data.etag).then(function(){return E.default.routeTo(E.default.configuration.routes.listSites,{args:[],trigger:true})},function(e){return y.default.addMessage({response:e,type:y.default.TYPE_DANGER})})})}});t.default=new j},1525:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});a(1539);var n=a(6);var r=_(n);var i=a(19);var o=_(i);var s=a(159);var l=_(s);var u=a(1538);var d=_(u);var c=a(1164);var f=_(c);var v=a(1541);var h=_(v);var p=a(866);var m=_(p);var g=a(865);var w=_(g);var b=a(1531);var y=_(b);function _(e){return e&&e.__esModule?e:{default:e}}function E(e){var t=(0,f.default)();(0,o.default)(e).find(".help-block:not(.errormsg)").addClass("hidden-lg hidden-md hidden-sm").each(function(e,a){var n=(0,o.default)(t);n.popoverclickaway({container:"#content",html:true,placement:"auto top",content:a.innerHTML}).click(function(e){e.preventDefault()});(0,o.default)(a).parent().append(n)})}function P(e){(0,o.default)(e).find("input:password").attr("placeholder",o.default.t("common.form.passwordPlaceholder"))}y.default.define("enum_plugin",function(e){var t=this,a=arguments;var n=e.schema;var i=r.default.indexOf(n.enum,"");var o=i>-1;var s=function e(){var n=function e(t){return!t||8!==t.keyCode};t.deleteSelection=function(){var e=t.deleteSelection;return function(r){if(n(r))return e.apply(t,a);return false}}()};var l=function e(){t.plugins.settings["dropdown_header"]={title:n.options.enum_titles[i]};t.require("dropdown_header");t.setup=function(){var e=t.setup;return function(){e.apply(t,a);t.$dropdown.on("mousedown",".selectize-dropdown-header",function(){t.setValue("");t.close();t.blur();return false})}}()};o?l():s()});function S(e,t){var a=t.schema,n=t.values,r=t.hideInheritance,i=void 0!==r&&r;var o=6;var s=4;d.default.plugins.selectize.enable=true;d.default.plugins.selectize.plugins=function(e){return[{name:"enum_plugin",options:{schema:e}}]};d.default.defaults.themes.openam=h.default.getTheme(o,s);var l=a.toFlatWithInheritanceMeta(n);var u=n.removeInheritance();l=l.raw;u=u.raw;var c=new d.default(e[0],{disable_collapse:true,disable_edit_json:true,disable_properties:true,hide_inheritance:i,iconlib:"fontawesome4",schema:l,theme:"openam"});E(e);P(e);c.setValue(u);return c}var T=l.default.View.extend({className:"jsoneditor-block",initialize:function e(t){if(!(t.schema instanceof m.default))throw new TypeError('[JSONEditorView] "schema" argument is not an instance of JSONSchema.');if(!(t.values instanceof w.default))throw new TypeError('[JSONEditorView] "values" argument is not an instance of JSONValues.');this.options=r.default.defaults(t,{displayTitle:true})},toggleInheritance:function e(t,a,n){this.options.values=this.options.values.extend(this.getData());this.options.values=this.options.values.addValueForPath([t,"inherited"],n);this.options.values=this.options.values.addValueForPath([t,"value"],a);this.render()},render:function e(){this.$el.empty();var t=r.default.get(this.jsonEditor,"watchlist");this.jsonEditor=S(this.$el,this.options);this.jsonEditor.watchlist=t;this.options.displayTitle||this.$el.find("[data-header]").parent().hide();return this},isValid:function e(){return 0===this.jsonEditor.validate().length},getData:function e(){var t=new w.default(this.jsonEditor.getValue());this.options.schema.hasDefaultProperties()&&(t=t.pick(this.options.schema.raw.defaultProperties));t=t.nullifyEmptyPasswords(this.options.schema.getPasswordKeys());t=t.addInheritance(this.options.values.raw);return t.raw},setData:function e(t){this.options.values=this.options.values.extend(t)},watch:function e(t,a){this.jsonEditor.watch(t,a)},destroy:function e(){var t=this;var a=r.default.keys(this.jsonEditor.watchlist);r.default.forEach(a,function(e){t.jsonEditor.unwatch(e)});this.jsonEditor.destroy();this.jsonEditor=null}});t.default=T},1526:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=s;var n=a(61);var r=a(655);var i=o(r);function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:(0,n.t)("common.form.delete");i.default.confirm({type:i.default.TYPE_DANGER,title:(0,n.t)("common.form.confirm")+" "+a,message:e.message?e.message:(0,n.t)("console.common.confirmDeleteText",{type:e.type}),btnOKLabel:a,btnOKClass:"btn-danger",callback:function e(a){a&&t&&t()}})}},1528:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=a(6);var r=v(n);var i=a(159);var o=v(i);var s=a(1525);var l=v(s);var u=a(866);var d=v(u);var c=a(865);var f=v(c);function v(e){return e&&e.__esModule?e:{default:e}}function h(e){e&&setTimeout(e,0)}var p=o.default.View.extend({initialize:function e(t){if(!(t.schema instanceof d.default))throw new TypeError('[FlatJSONSchemaView] "schema" argument is not an instance of JSONSchema.');if(!(t.values instanceof f.default))throw new TypeError('[FlatJSONSchemaView] "values" argument is not an instance of JSONValues.');this.options=r.default.defaults(t,{showOnlyRequiredAndEmpty:false})},render:function e(){var t=this.options.schema;var a=true;if(this.options.showOnlyRequiredAndEmpty){var n=this.options.schema.getRequiredPropertyKeys();var i=this.options.values.getEmptyValueKeys(t);var o=r.default.intersection(n,i);t=t.removeUnrequiredNonDefaultProperties().addDefaultProperties(o);a=!r.default.isEmpty(o)}this.subview=new l.default({displayForm:a,hideInheritance:this.options.hideInheritance,displayTitle:false,el:this.$el,schema:t,values:this.options.values}).render();h(this.options.onRendered);return this},isValid:function e(){return!this.subview||this.subview.isValid()},getData:function e(){if(this.subview){var t;return(t=this.subview).getData.apply(t,arguments)}},setData:function e(t){if(this.subview){this.options.values=this.options.values.extend(t);return this.subview.setData(t)}},watch:function e(t,a){this.subview&&this.subview.watch(t,a)},destroy:function e(){if(this.subview){this.subview.destroy();this.subview=null}}});t.default=p},1533:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=a(1537);var r=u(n);var i=a(1536);var o=u(i);var s=a(1526);var l=u(s);function u(e){return e&&e.__esModule?e:{default:e}}var d={};d.showConfirmationBeforeDeleting=function(e,t){(0,r.default)("FormHelper.showConfirmationBeforeDeleting","org/forgerock/openam/ui/admin/utils/form/showConfirmationBeforeAction");return(0,l.default)(e,t)};d.setActiveTab=function(e,t){(0,r.default)("FormHelper.setActiveTab","org/forgerock/openam/ui/admin/utils/form/setActiveTab");return(0,o.default)(e,t)};t.default=d},1536:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=function(e){e&&e.activeTabId&&e.$el.find('.nav-tabs a[href="'+e.activeTabId+'"]').tab("show")}},1537:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=n;function n(e,t){console.warn(e+" is marked as deprecated. \nPlease use "+t)}},1553:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=a(6);var r=v(n);var i=a(19);var o=v(i);var s=a(159);var l=v(s);var u=a(1165);var d=v(u);var c=a(63);var f=v(c);function v(e){return e&&e.__esModule?e:{default:e}}function h(e,t){return r.default.take(e,t+1).join("/")}t.default=l.default.View.extend({el:"#backlink",render:function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;var a=f.default.getCurrentFragment().split("/");var n=a[t];var i=r.default.startCase(""+n);var s={title:o.default.t("console.navigation."+n+".title",{defaultValue:i}),hash:"#"+h(a,t)};this.$el.html((0,d.default)(s))}})},1619:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=a(6);var r=p(n);var i=a(169);var o=p(i);var s=a(27);var l=p(s);var u=a(168);var d=p(u);var c=a(866);var f=p(c);var v=a(865);var h=p(v);function p(e){return e&&e.__esModule?e:{default:e}}var m=new o.default(""+l.default.host+l.default.context+"/json");var g=function e(t){return r.default.pick(t,["url","secondaryURLs"])};var w=function e(){return m.serviceCall({url:(0,d.default)("/global-config/sites?_action=schema",{realm:false}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST",success:function e(t){var a=g(t.properties);t.properties=a;return t}})};var b=function e(t){return m.serviceCall({url:(0,d.default)("/global-config/sites/"+t,{realm:false}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},success:function e(t,a){t.etag=a.getResponseHeader("ETag");return t}})};var y=function e(){return m.serviceCall({url:(0,d.default)("/global-config/sites?_action=template",{realm:false}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST"})};m.sites={getAll:function e(){return m.serviceCall({url:(0,d.default)("/global-config/sites?_queryFilter=true",{realm:false}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"}}).then(function(e){return r.default.sortBy(e.result,"_id")})},get:function e(t){return Promise.all([w(),b(t)]).then(function(e){return{schema:new f.default(e[0]),values:new h.default(e[1])}})},create:function e(t){return m.serviceCall({url:(0,d.default)("/global-config/sites?_action=create",{realm:false}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST",data:JSON.stringify(r.default.omit(t,["servers"]))})},update:function e(t,a,n){return m.serviceCall({url:(0,d.default)("/global-config/sites/"+t,{realm:false}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0","If-Match":n},type:"PUT",data:JSON.stringify(g(a))})},remove:function e(t,a){var e=function e(t,a){return m.serviceCall({url:(0,d.default)("/global-config/sites/"+t,{realm:false}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0","If-Match":a},type:"DELETE"})};return r.default.isUndefined(a)?b(t).then(function(a){return e(t,a.etag)}):e(t,a)},getInitialState:function e(){return Promise.all([w(),y()]).then(function(e){return{schema:new f.default(e[0]),values:new h.default(e[1])}})}};t.default=m}}]);
//# sourceMappingURL=44.f495937f90.js.map