(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[23,345,359],{1165:function(e,r,t){var a=t(62);e.exports=(a["default"]||a).template({compiler:[7,">= 4.0.0"],main:function(e,r,t,a,n){var l,o=null!=r?r:e.nullContext||{},u=t.helperMissing,i="function",s=e.escapeExpression;return'<div class="subnav-container">\n    <div class="container">\n        <strong><i class="fa fa-angle-left text-muted"></i> <a href="'+s((l=null!=(l=t.hash||(null!=r?r.hash:r))?l:u,typeof l===i?l.call(o,{name:"hash",hash:{},data:n}):l))+'">'+s((l=null!=(l=t.title||(null!=r?r.title:r))?l:u,typeof l===i?l.call(o,{name:"title",hash:{},data:n}):l))+"</a></strong>\n    </div>\n</div>\n"},useData:true})},1296:function(e,r,t){var a=t(62);e.exports=(a["default"]||a).template({compiler:[7,">= 4.0.0"],main:function(e,r,t,a,n){var l,o=null!=r?r:e.nullContext||{},u=t.helperMissing,i=e.escapeExpression;return'<nav id="backlink"></nav>\n<div class="container">\n'+(null!=(l=e.invokePartial(a["headers/_Title"],r,{name:"headers/_Title",hash:{title:null!=r?r.title:r},data:n,indent:"    ",helpers:t,partials:a,decorators:e.decorators}))?l:"")+'\n    <div class="panel multiple-panels panel-content">\n        <div class="panel panel-default">\n            <div class="panel-body">\n                <div class="form-horizontal">\n                    <div class="form-group">\n                        <label class="col-sm-4 control-label" for="serverUrl">'+i((t.t||r&&r.t||u).call(o,"console.servers.new.serverUrl",{name:"t",hash:{},data:n}))+'</label>\n                        <div class="col-sm-6">\n                            <input data-server-url type="text" id="serverUrl" class="form-control" required name="serverUrl"\n                                 placeholder="'+i((t.t||r&&r.t||u).call(o,"common.form.validation.required",{name:"t",hash:{},data:n}))+'">\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class="panel-footer clearfix">\n            <div class="pull-right">\n                <a class="btn btn-default" href="'+i((t.routeTo||r&&r.routeTo||u).call(o,"listServers",{name:"routeTo",hash:{},data:n}))+'">'+i((t.t||r&&r.t||u).call(o,"common.form.cancel",{name:"t",hash:{},data:n}))+'</a>\n                <button data-create class="btn btn-primary" type="button" disabled>'+i((t.t||r&&r.t||u).call(o,null!=r?r.buttonTitle:r,{name:"t",hash:{},data:n}))+"</button>\n            </div>\n        </div>\n    </div>\n</div>\n"},usePartial:true,useData:true})},1553:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:true});var a=t(6);var n=f(a);var l=t(19);var o=f(l);var u=t(159);var i=f(u);var s=t(1165);var c=f(s);var v=t(63);var d=f(v);function f(e){return e&&e.__esModule?e:{default:e}}function h(e,r){return n.default.take(e,r+1).join("/")}r.default=i.default.View.extend({el:"#backlink",render:function e(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;var t=d.default.getCurrentFragment().split("/");var a=t[r];var l=n.default.startCase(""+a);var u={title:o.default.t("console.navigation."+a+".title",{defaultValue:l}),hash:"#"+h(t,r)};this.$el.html((0,c.default)(u))}})},1573:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:true});var a=function(){function e(e,r){var t=[];var a=true;var n=false;var l=void 0;try{for(var o=e[Symbol.iterator](),u;!(a=(u=o.next()).done);a=true){t.push(u.value);if(r&&t.length===r)break}}catch(e){n=true;l=e}finally{try{!a&&o["return"]&&o["return"]()}finally{if(n)throw l}}return t}return function(r,t){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return e(r,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();var n=t(6);var l=m(n);var o=t(169);var u=m(o);var i=t(27);var s=m(i);var c=t(168);var v=m(c);var d=t(866);var f=m(d);var h=t(865);var p=m(h);function m(e){return e&&e.__esModule?e:{default:e}}var g=new u.default(""+s.default.host+s.default.context+"/json");var y="server-default";var b="advanced";var A=function e(r){return"serverDefaults"===r};var w=function e(r){return A(r)?y:r};var _=function e(r){return l.default.map(r,function(e,r){return{key:r,value:e}})};var C=function e(r){return l.default.reduce(r,function(e,r){e[r.key]=r.value;return e},{})};var P=function e(r,t){return g.serviceCall({url:(0,v.default)("/global-config/servers/"+r+"/properties/"+t+"?_action=schema",{realm:false}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST"}).then(function(e){return new f.default(e)})};var T=function e(r,t){return g.serviceCall({url:(0,v.default)("/global-config/servers/"+r+"/properties/"+t,{realm:false}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"}}).then(function(e){t===b&&(e=l.default.sortBy(_(e),function(e){return e.key}));return new p.default(e)})};var S=function e(r,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:y;var n=t;r===b&&(n=C(t[b]));return g.serviceCall({url:(0,v.default)("/global-config/servers/"+a+"/properties/"+r,{realm:false}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"PUT",data:JSON.stringify(n)})};g.servers={clone:function e(r,t){return g.serviceCall({url:(0,v.default)("/global-config/servers/"+r+"?_action=clone",{realm:false}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST",data:JSON.stringify({clonedUrl:t})})},get:function e(r,t){return Promise.all([P(r,t),T(r,t)]).then(function(e){return{schema:e[0],values:e[1]}})},getWithDefaults:function e(r,t){var n=w(r);var l=[g.servers.get(n,t)];A(r)||"directoryConfiguration"===t||l.push(T(y,t));return Promise.all(l).then(function(e){var r=a(e,2),t=r[0],n=r[1],l=void 0===n?{}:n;return{schema:t.schema,values:t.values,defaultValues:l}})},getUrl:function e(r){return g.serviceCall({url:(0,v.default)("/global-config/servers/"+r,{realm:false}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"}}).then(function(e){return e.url},function(){return})},getAll:function e(){return g.serviceCall({url:(0,v.default)("/global-config/servers?_queryFilter=true",{realm:false}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"}}).then(function(e){return l.default.reject(e.result,{_id:y})})},remove:function e(r){return g.serviceCall({url:(0,v.default)("/global-config/servers/"+r,{realm:false}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"DELETE"})},create:function e(r){return g.serviceCall({url:(0,v.default)("/global-config/servers?_action=create",{realm:false}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST",data:JSON.stringify(r)})},update:function e(r,t,a){return S(r,t,w(a))},ADVANCED_SECTION:b,DEFAULT_SERVER:y};r.default=g},886:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:true});var a=function(){function e(e,r){var t=[];var a=true;var n=false;var l=void 0;try{for(var o=e[Symbol.iterator](),u;!(a=(u=o.next()).done);a=true){t.push(u.value);if(r&&t.length===r)break}}catch(e){n=true;l=e}finally{try{!a&&o["return"]&&o["return"]()}finally{if(n)throw l}}return t}return function(r,t){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return e(r,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();var n=t(19);var l=A(n);var o=t(114);var u=A(o);var i=t(1553);var s=A(i);var c=t(560);var v=A(c);var d=t(1296);var f=A(d);var h=t(73);var p=A(h);var m=t(1573);var g=A(m);var y=t(63);var b=A(y);function A(e){return e&&e.__esModule?e:{default:e}}var w=function e(r){return r.val().trim()};var _=function e(r){v.default.addMessage({response:r,type:v.default.TYPE_DANGER})};var C=function e(r){p.default.routeTo(p.default.configuration.routes.editServerGeneral,{args:[r],trigger:true})};var P=u.default.extend({template:f.default,events:{"click [data-create]":"createServer","keyup [data-server-url]":"toggleCreateButton"},render:function e(r){var t=a(r,1),n=t[0];this.data.id=n;var l=b.default.getCurrentFragment().split("/");this.isCloneView=-1!==l.indexOf("clone");if(this.isCloneView){this.data.title="console.servers.clone.title";this.data.buttonTitle="common.form.clone"}else{this.data.title="console.servers.new.title";this.data.buttonTitle="common.form.create"}this.parentRender(function(){(new s.default).render()});return this},createServer:function e(){var r=w(this.$el.find("[data-server-url]"));this.isCloneView?g.default.servers.clone(this.data.id,r).then(function(e){C(e.clonedId)},_):g.default.servers.create({url:r}).then(function(e){C(e._id)},_)},toggleCreateButton:function e(r){var t=w((0,l.default)(r.currentTarget));var a=""!==t;this.$el.find("[data-create]").prop("disabled",!a)}});r.default=new P}}]);
//# sourceMappingURL=23.0778d0fca6.js.map