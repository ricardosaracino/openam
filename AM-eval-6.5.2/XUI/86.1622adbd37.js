(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[86,220],{1164:function(e,t,r){var a=r(62);e.exports=(a["default"]||a).template({compiler:[7,">= 4.0.0"],main:function(e,t,r,a,n){return'<a class="btn info-button visible-lg-inline-block visible-md-inline-block visible-sm-inline-block" tabindex="0" data-toggle="popoverclickaway">\n    <i class="fa fa-info-circle"></i>\n</a>\n'},useData:true})},1352:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||false;a.configurable=true;"value"in a&&(a.writable=true);Object.defineProperty(e,a.key,a)}}return function(t,r,a){r&&e(t.prototype,r);a&&e(t,a);return t}}();var n=r(3);var o=r(6);var u=r(0);var i=P(u);var l=r(1);var s=P(l);var d=r(1534);var c=r(1530);var f=r(240);var p=r(239);var v=r(1527);var h=P(v);var m=r(560);var g=P(m);var y=r(1783);var b=P(y);var _=r(73);var w=P(_);var E=r(1522);var C=P(E);var O=r(1521);var I=P(O);function P(e){return e&&e.__esModule?e:{default:e}}function R(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function S(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function j(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var T=function(e){j(t,e);function t(e){R(this,t);var r=S(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));r.state={isFetching:true,groupId:""};r.handleCreate=r.handleCreate.bind(r);r.handleGroupIdChange=r.handleGroupIdChange.bind(r);return r}a(t,[{key:"componentDidMount",value:function e(){var t=this;var r=this.props.router.params[0];(0,d.getInitialState)(r,c.TRUSTED_JWT_ISSUER).then(function(e){var r=e.schema,a=e.values;t.setState({isFetching:false});t.props.setSchema(r);t.props.setTemplate(a)},function(e){t.setState({isFetching:false});g.default.addMessage({response:e,type:g.default.TYPE_DANGER})})}},{key:"handleGroupIdChange",value:function e(t){this.setState({groupId:t})}},{key:"handleCreate",value:function e(t){var r=this;var a=this.props.router.params[0];(0,d.create)(a,c.TRUSTED_JWT_ISSUER,t,this.state.groupId).then(function(){w.default.routeTo(w.default.configuration.routes.realmsApplicationsOAuth2TrustedJwtIssuerAgentGroupsEdit,{args:(0,o.map)([a,r.state.groupId],encodeURIComponent),trigger:true})},function(e){g.default.addMessage({response:e,type:g.default.TYPE_DANGER})})}},{key:"render",value:function e(){var t=!(0,o.isEmpty)(this.state.groupId);return s.default.createElement(b.default,{isCreateAllowed:t,isFetching:this.state.isFetching,onCreate:this.handleCreate,onGroupIdChange:this.handleGroupIdChange,schema:this.props.schema,serverUrl:this.state.serverUrl,template:this.props.template})}}]);return t}(l.Component);T.propTypes={router:I.default,schema:i.default.shape({type:i.default.string.isRequired}),setSchema:i.default.func.isRequired,setTemplate:i.default.func.isRequired,template:i.default.shape({type:i.default.string.isRequired})};T=(0,h.default)(T,function(e){return{schema:e.remote.config.realm.applications.agents.trustedJwtIssuer.groups.schema,template:e.remote.config.realm.applications.agents.trustedJwtIssuer.groups.template}},function(e){return{setSchema:(0,n.bindActionCreators)(f.setSchema,e),setTemplate:(0,n.bindActionCreators)(p.setTemplate,e)}});T=(0,C.default)(T);t.default=T},1521:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=r(1);var n=i(a);var o=r(0);var u=i(o);function i(e){return e&&e.__esModule?e:{default:e}}var l=u.default.shape({params:u.default.array.isRequired});t.default=l},1522:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=function(e){var t=function t(r){var a=l.default.currentRoute;var o=l.default.extractParameters(a,d.default.getCurrentFragment());var i=l.default.applyDefaultParameters(a,o);var s={params:n.default.map(i,function(e){if(!e)return"";return decodeURIComponent(e)})};return u.default.createElement(e,n.default.extend({},r,{router:s}))};t.displayName="withRouter("+f(e)+")";t.WrappedComponent=e;return t};var a=r(6);var n=c(a);var o=r(1);var u=c(o);var i=r(73);var l=c(i);var s=r(63);var d=c(s);function c(e){return e&&e.__esModule?e:{default:e}}function f(e){return e.displayName||e.name||"Component"}},1523:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=function e(t){if(t){var r=t.sizePerPage,a=t.pagedResultsOffset,n=t.sortKey,o=t.sortDirection;var u=a?"&_pagedResultsOffset="+a:"";var i="&_pageSize="+r;var l=n&&o?"&_sortKeys="+encodeURIComponent(o)+n:"";return""+u+i+l}return""};t.default=a},1524:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=function e(t){return t?"&_fields="+t.join(","):""};t.default=a},1525:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});r(1539);var a=r(6);var n=w(a);var o=r(19);var u=w(o);var i=r(159);var l=w(i);var s=r(1538);var d=w(s);var c=r(1164);var f=w(c);var p=r(1541);var v=w(p);var h=r(866);var m=w(h);var g=r(865);var y=w(g);var b=r(1531);var _=w(b);function w(e){return e&&e.__esModule?e:{default:e}}function E(e){var t=(0,f.default)();(0,u.default)(e).find(".help-block:not(.errormsg)").addClass("hidden-lg hidden-md hidden-sm").each(function(e,r){var a=(0,u.default)(t);a.popoverclickaway({container:"#content",html:true,placement:"auto top",content:r.innerHTML}).click(function(e){e.preventDefault()});(0,u.default)(r).parent().append(a)})}function C(e){(0,u.default)(e).find("input:password").attr("placeholder",u.default.t("common.form.passwordPlaceholder"))}_.default.define("enum_plugin",function(e){var t=this,r=arguments;var a=e.schema;var o=n.default.indexOf(a.enum,"");var u=o>-1;var i=function e(){var a=function e(t){return!t||8!==t.keyCode};t.deleteSelection=function(){var e=t.deleteSelection;return function(n){if(a(n))return e.apply(t,r);return false}}()};var l=function e(){t.plugins.settings["dropdown_header"]={title:a.options.enum_titles[o]};t.require("dropdown_header");t.setup=function(){var e=t.setup;return function(){e.apply(t,r);t.$dropdown.on("mousedown",".selectize-dropdown-header",function(){t.setValue("");t.close();t.blur();return false})}}()};u?l():i()});function O(e,t){var r=t.schema,a=t.values,n=t.hideInheritance,o=void 0!==n&&n;var u=6;var i=4;d.default.plugins.selectize.enable=true;d.default.plugins.selectize.plugins=function(e){return[{name:"enum_plugin",options:{schema:e}}]};d.default.defaults.themes.openam=v.default.getTheme(u,i);var l=r.toFlatWithInheritanceMeta(a);var s=a.removeInheritance();l=l.raw;s=s.raw;var c=new d.default(e[0],{disable_collapse:true,disable_edit_json:true,disable_properties:true,hide_inheritance:o,iconlib:"fontawesome4",schema:l,theme:"openam"});E(e);C(e);c.setValue(s);return c}var I=l.default.View.extend({className:"jsoneditor-block",initialize:function e(t){if(!(t.schema instanceof m.default))throw new TypeError('[JSONEditorView] "schema" argument is not an instance of JSONSchema.');if(!(t.values instanceof y.default))throw new TypeError('[JSONEditorView] "values" argument is not an instance of JSONValues.');this.options=n.default.defaults(t,{displayTitle:true})},toggleInheritance:function e(t,r,a){this.options.values=this.options.values.extend(this.getData());this.options.values=this.options.values.addValueForPath([t,"inherited"],a);this.options.values=this.options.values.addValueForPath([t,"value"],r);this.render()},render:function e(){this.$el.empty();var t=n.default.get(this.jsonEditor,"watchlist");this.jsonEditor=O(this.$el,this.options);this.jsonEditor.watchlist=t;this.options.displayTitle||this.$el.find("[data-header]").parent().hide();return this},isValid:function e(){return 0===this.jsonEditor.validate().length},getData:function e(){var t=new y.default(this.jsonEditor.getValue());this.options.schema.hasDefaultProperties()&&(t=t.pick(this.options.schema.raw.defaultProperties));t=t.nullifyEmptyPasswords(this.options.schema.getPasswordKeys());t=t.addInheritance(this.options.values.raw);return t.raw},setData:function e(t){this.options.values=this.options.values.extend(t)},watch:function e(t,r){this.jsonEditor.watch(t,r)},destroy:function e(){var t=this;var r=n.default.keys(this.jsonEditor.watchlist);n.default.forEach(r,function(e){t.jsonEditor.unwatch(e)});this.jsonEditor.destroy();this.jsonEditor=null}});t.default=I},1527:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e};var n=r(1548);var o=r(1);var u=s(o);var i=r(81);var l=s(i);function s(e){return e&&e.__esModule?e:{default:e}}var d=function e(t){return t.displayName||t.name||"Component"};var c=function e(t){for(var r=arguments.length,o=Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];var s=n.connect.apply(void 0,o)(t);var c=function e(t){return u.default.createElement(s,a({},t,{store:l.default}))};c.displayName="connectWithStore("+d(t)+")";c.WrappedComponent=t;return c};t.default=c},1528:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=r(6);var n=p(a);var o=r(159);var u=p(o);var i=r(1525);var l=p(i);var s=r(866);var d=p(s);var c=r(865);var f=p(c);function p(e){return e&&e.__esModule?e:{default:e}}function v(e){e&&setTimeout(e,0)}var h=u.default.View.extend({initialize:function e(t){if(!(t.schema instanceof d.default))throw new TypeError('[FlatJSONSchemaView] "schema" argument is not an instance of JSONSchema.');if(!(t.values instanceof f.default))throw new TypeError('[FlatJSONSchemaView] "values" argument is not an instance of JSONValues.');this.options=n.default.defaults(t,{showOnlyRequiredAndEmpty:false})},render:function e(){var t=this.options.schema;var r=true;if(this.options.showOnlyRequiredAndEmpty){var a=this.options.schema.getRequiredPropertyKeys();var o=this.options.values.getEmptyValueKeys(t);var u=n.default.intersection(a,o);t=t.removeUnrequiredNonDefaultProperties().addDefaultProperties(u);r=!n.default.isEmpty(u)}this.subview=new l.default({displayForm:r,hideInheritance:this.options.hideInheritance,displayTitle:false,el:this.$el,schema:t,values:this.options.values}).render();v(this.options.onRendered);return this},isValid:function e(){return!this.subview||this.subview.isValid()},getData:function e(){if(this.subview){var t;return(t=this.subview).getData.apply(t,arguments)}},setData:function e(t){if(this.subview){this.options.values=this.options.values.extend(t);return this.subview.setData(t)}},watch:function e(t,r){this.subview&&this.subview.watch(t,r)},destroy:function e(){if(this.subview){this.subview.destroy();this.subview=null}}});t.default=h},1529:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=r(0);var n=i(a);var o=r(1);var u=i(o);function i(e){return e&&e.__esModule?e:{default:e}}var l=function e(t){var r=t.children,a=t.icon,n=t.title,o=t.type;var i=o?"deep":"shallow";var l=a?u.default.createElement("span",{className:"header-icon pull-left bg-primary"},u.default.createElement("i",{className:"fa fa-"+a})):null;var s=o?u.default.createElement("h4",{className:"page-type"},o):null;return u.default.createElement("header",{className:"page-header page-header-no-border clearfix"},l,u.default.createElement("div",{className:"button-group pull-right "+i+"-page-header-button-group"},r),u.default.createElement("div",{className:"pull-left"},s,u.default.createElement("h1",{className:"wordwrap"},n)))};l.propTypes={children:n.default.node,icon:n.default.string,title:n.default.string.isRequired,type:n.default.string};t.default=l},1530:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=t.JAVA_AGENT="J2EEAgent";var n=t.OAUTH2_CLIENT="OAuth2Client";var o=t.REMOTE_CONSENT_AGENT="RemoteConsentAgent";var u=t.SOAP_STS_AGENT="SoapSTSAgent";var i=t.SOFTWARE_PUBLISHER="SoftwarePublisher";var l=t.WEB_AGENT="WebAgent";var s=t.TRUSTED_JWT_ISSUER="TrustedJwtIssuer"},1532:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=r(1);var n=u(a);var o=r(61);function u(e){return e&&e.__esModule?e:{default:e}}var i=function e(){return n.default.createElement("p",{className:"loading text-muted"},n.default.createElement("i",{className:"fa fa-circle-o-notch fa-spin fa-2x fa-fw"}),n.default.createElement("span",null,(0,o.t)("console.common.loading")))};t.default=i},1534:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.getAll=m;t.get=g;t.getSchema=y;t.remove=b;t.getInitialState=_;t.create=w;t.update=E;var a=r(6);var n=r(169);var o=v(n);var u=r(27);var i=v(u);var l=r(1524);var s=v(l);var d=r(1523);var c=v(d);var f=r(168);var p=v(f);function v(e){return e&&e.__esModule?e:{default:e}}var h=new o.default(""+i.default.host+i.default.context+"/json");function m(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};var a=(0,c.default)(r.pagination);var n=(0,s.default)(r.fields);return h.serviceCall({url:(0,p.default)("/realm-config/agents/groups/"+t+"?_queryFilter=true"+a+n,{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"}})}function g(e,t,r){return h.serviceCall({url:(0,p.default)("/realm-config/agents/groups/"+t+"/"+encodeURIComponent(r),{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"}})}function y(e,t){return h.serviceCall({url:(0,p.default)("/realm-config/agents/groups/"+t+"?_action=schema",{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},type:"POST"})}function b(e,t,r){var n=(0,a.map)(r,function(r){return h.serviceCall({url:(0,p.default)("/realm-config/agents/groups/"+t+"/"+encodeURIComponent(r),{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},type:"DELETE"})});return Promise.all(n)}function _(e,t){function r(){return h.serviceCall({url:(0,p.default)("/realm-config/agents/groups/"+t+"?_action=template",{realm:e}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST"})}return Promise.all([y(e,t),r()]).then(function(e){return{schema:e[0],values:e[1]}})}function w(e,t,r,a){return h.serviceCall({url:(0,p.default)("/realm-config/agents/groups/"+t+"/"+encodeURIComponent(a),{realm:e}),type:"PUT",headers:{"Accept-API-Version":"protocol=2.0,resource=1.0","If-None-Match":"*"},data:JSON.stringify(r),suppressSpinner:true,errorsHandlers:{incorrectRevisionError:{status:412}}})}function E(e,t,r,n){return h.serviceCall({url:(0,p.default)("/realm-config/agents/groups/"+t+"/"+encodeURIComponent(n),{realm:e}),type:"PUT",headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},data:JSON.stringify((0,a.omit)(r,"_rev"))})}},1540:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=r(570);var n=r(6);var o=r(61);var u=r(0);var i=m(u);var l=r(1);var s=m(l);var d=r(73);var c=m(d);var f=r(1522);var p=m(f);var v=r(1521);var h=m(v);function m(e){return e&&e.__esModule?e:{default:e}}function g(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}var y=function e(t){var r=t.backRoute,u=t.backRouteArgs,i=t.disabled,l=t.onCreateClick,d=t.router;var f=d.params[0];var p=(0,n.map)([f].concat(g(u)),encodeURIComponent);var v="#"+c.default.getLink(r,p);return s.default.createElement(a.Clearfix,null,s.default.createElement("div",{className:"pull-right"},s.default.createElement("div",{className:"am-btn-action-group"},s.default.createElement(a.Button,{href:v},(0,o.t)("common.form.cancel")),s.default.createElement(a.Button,{bsStyle:"primary",disabled:i,onClick:l},(0,o.t)("common.form.create")))))};y.defaultProps={backRouteArgs:[],disabled:false};y.propTypes={backRoute:i.default.shape({url:i.default.oneOfType([i.default.string,i.default.instanceOf(RegExp)]).isRequired,pattern:i.default.string.isRequired}).isRequired,backRouteArgs:i.default.arrayOf(i.default.string),disabled:i.default.bool,onCreateClick:i.default.func.isRequired,router:h.default};t.default=(0,p.default)(y)},1543:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=r(6);var n=function e(t){if((0,a.isEmpty)(t))return true;if("."===t||".."===t||(0,a.startsWith)(t," ")||(0,a.endsWith)(t," ")||(0,a.startsWith)(t,"#")||(0,a.startsWith)(t,'"')||(0,a.includes)(t,"\\")||(0,a.includes)(t,"/")||(0,a.includes)(t,"+")||(0,a.includes)(t,";")||(0,a.includes)(t,",")||(0,a.includes)(t,"%")||(0,a.includes)(t,"[")||(0,a.includes)(t,"]")||(0,a.includes)(t,"|")||(0,a.includes)(t,"?"))return false;return true};t.default=n},1544:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||false;a.configurable=true;"value"in a&&(a.writable=true);Object.defineProperty(e,a.key,a)}}return function(t,r,a){r&&e(t.prototype,r);a&&e(t,a);return t}}();var n=r(570);var o=r(6);var u=r(0);var i=d(u);var l=r(1);var s=d(l);function d(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function p(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var v=function(e){p(t,e);function t(e){c(this,t);var r=f(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));r.handleOnChange=r.handleOnChange.bind(r);return r}a(t,[{key:"handleOnChange",value:function e(t){this.props.onChange(t.target.value)}},{key:"render",value:function e(){var t=this.props,r=t.isGrid,a=t.isValid,u=t.value,i=t.validationMessage,l=t.label,d=t.placeholder;var c=!a&&i?s.default.createElement(n.HelpBlock,null,s.default.createElement("small",{dangerouslySetInnerHTML:{__html:i}})):null;var f=s.default.createElement(n.FormControl,{onChange:this.handleOnChange,placeholder:d,type:"text",value:u});return r?s.default.createElement(n.FormGroup,{controlId:(0,o.uniqueId)("formGroupInput"),validationState:a?null:"error"},s.default.createElement(n.Clearfix,null,s.default.createElement(n.Col,{componentClass:n.ControlLabel,sm:4},l),s.default.createElement(n.Col,{sm:6},f,c))):s.default.createElement(n.FormGroup,{controlId:(0,o.uniqueId)("formGroupInput"),validationState:a?null:"error"},s.default.createElement(n.Clearfix,null,s.default.createElement(n.ControlLabel,null,l),f,c))}}]);return t}(l.Component);v.defaultProps={isGrid:true,isValid:true};v.propTypes={isGrid:i.default.bool,isValid:i.default.bool,label:i.default.string.isRequired,onChange:i.default.func.isRequired,placeholder:i.default.string,validationMessage:i.default.string,value:i.default.string.isRequired};t.default=v},1783:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||false;a.configurable=true;"value"in a&&(a.writable=true);Object.defineProperty(e,a.key,a)}}return function(t,r,a){r&&e(t.prototype,r);a&&e(t,a);return t}}();var n=r(570);var o=r(61);var u=r(0);var i=S(u);var l=r(1);var s=S(l);var d=r(1540);var c=S(d);var f=r(1528);var p=S(f);var v=r(1544);var h=S(v);var m=r(1543);var g=S(m);var y=r(866);var b=S(y);var _=r(865);var w=S(_);var E=r(1532);var C=S(E);var O=r(1529);var I=S(O);var P=r(73);var R=S(P);function S(e){return e&&e.__esModule?e:{default:e}}function j(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function T(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function A(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var k=function(e){A(t,e);function t(e){j(this,t);var r=T(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));r.state={groupId:""};r.handleCreate=r.handleCreate.bind(r);r.handleGroupIdChange=r.handleGroupIdChange.bind(r);r.setRef=r.setRef.bind(r);return r}a(t,[{key:"componentDidUpdate",value:function e(){if(!this.jsonSchemaView&&this.props.template){this.jsonSchemaView=new p.default({hideInheritance:true,schema:new b.default(this.props.schema),values:new w.default(this.props.template),showOnlyRequiredAndEmpty:true});this.jsonForm.appendChild(this.jsonSchemaView.render().el)}}},{key:"handleCreate",value:function e(){this.props.onCreate(this.jsonSchemaView.getData())}},{key:"handleGroupIdChange",value:function e(t){var r=this;this.setState({groupId:t},function(){r.props.onGroupIdChange((0,g.default)(r.state.groupId)?r.state.groupId:null)})}},{key:"setRef",value:function e(t){this.jsonForm=t}},{key:"render",value:function e(){var t=(0,g.default)(this.state.groupId);var r=void 0;r=this.props.isFetching?s.default.createElement(C.default,null):s.default.createElement(n.Form,{horizontal:true},s.default.createElement(h.default,{isValid:t,label:(0,o.t)("console.applications.agents.common.groups.new.groupId.title"),onChange:this.handleGroupIdChange,validationMessage:(0,o.t)("console.common.validation.invalidCharacters"),value:this.state.groupId}),s.default.createElement("div",{ref:this.setRef}));return s.default.createElement("div",null,s.default.createElement(I.default,{title:(0,o.t)("console.applications.agents.trustedJwtIssuer.groups.new.title")}),s.default.createElement(n.Panel,null,s.default.createElement(n.Panel.Body,null,r),s.default.createElement(n.Panel.Footer,null,s.default.createElement(c.default,{backRoute:R.default.configuration.routes.realmsApplicationsOAuth2TrustedJwtIssuer,disabled:!this.props.isCreateAllowed,onCreateClick:this.handleCreate}))))}}]);return t}(l.Component);k.propTypes={isCreateAllowed:i.default.bool.isRequired,isFetching:i.default.bool.isRequired,onCreate:i.default.func.isRequired,onGroupIdChange:i.default.func.isRequired,schema:i.default.objectOf(i.default.object).isRequired,template:i.default.objectOf(i.default.object).isRequired};t.default=k}}]);
//# sourceMappingURL=86.1622adbd37.js.map