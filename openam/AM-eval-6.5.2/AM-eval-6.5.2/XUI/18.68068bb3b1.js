(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18,220],{1164:function(e,t,a){var r=a(62);e.exports=(r["default"]||r).template({compiler:[7,">= 4.0.0"],main:function(e,t,a,r,n){return'<a class="btn info-button visible-lg-inline-block visible-md-inline-block visible-sm-inline-block" tabindex="0" data-toggle="popoverclickaway">\n    <i class="fa fa-info-circle"></i>\n</a>\n'},useData:true})},1521:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=a(1);var n=o(r);var i=a(0);var l=o(i);function o(e){return e&&e.__esModule?e:{default:e}}var u=l.default.shape({params:l.default.array.isRequired});t.default=u},1522:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=function(e){var t=function t(a){var r=u.default.currentRoute;var i=u.default.extractParameters(r,d.default.getCurrentFragment());var o=u.default.applyDefaultParameters(r,i);var s={params:n.default.map(o,function(e){if(!e)return"";return decodeURIComponent(e)})};return l.default.createElement(e,n.default.extend({},a,{router:s}))};t.displayName="withRouter("+f(e)+")";t.WrappedComponent=e;return t};var r=a(6);var n=c(r);var i=a(1);var l=c(i);var o=a(73);var u=c(o);var s=a(63);var d=c(s);function c(e){return e&&e.__esModule?e:{default:e}}function f(e){return e.displayName||e.name||"Component"}},1525:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});a(1539);var r=a(6);var n=E(r);var i=a(19);var l=E(i);var o=a(159);var u=E(o);var s=a(1538);var d=E(s);var c=a(1164);var f=E(c);var p=a(1541);var v=E(p);var h=a(866);var m=E(h);var y=a(865);var b=E(y);var w=a(1531);var g=E(w);function E(e){return e&&e.__esModule?e:{default:e}}function _(e){var t=(0,f.default)();(0,l.default)(e).find(".help-block:not(.errormsg)").addClass("hidden-lg hidden-md hidden-sm").each(function(e,a){var r=(0,l.default)(t);r.popoverclickaway({container:"#content",html:true,placement:"auto top",content:a.innerHTML}).click(function(e){e.preventDefault()});(0,l.default)(a).parent().append(r)})}function C(e){(0,l.default)(e).find("input:password").attr("placeholder",l.default.t("common.form.passwordPlaceholder"))}g.default.define("enum_plugin",function(e){var t=this,a=arguments;var r=e.schema;var i=n.default.indexOf(r.enum,"");var l=i>-1;var o=function e(){var r=function e(t){return!t||8!==t.keyCode};t.deleteSelection=function(){var e=t.deleteSelection;return function(n){if(r(n))return e.apply(t,a);return false}}()};var u=function e(){t.plugins.settings["dropdown_header"]={title:r.options.enum_titles[i]};t.require("dropdown_header");t.setup=function(){var e=t.setup;return function(){e.apply(t,a);t.$dropdown.on("mousedown",".selectize-dropdown-header",function(){t.setValue("");t.close();t.blur();return false})}}()};l?u():o()});function O(e,t){var a=t.schema,r=t.values,n=t.hideInheritance,i=void 0!==n&&n;var l=6;var o=4;d.default.plugins.selectize.enable=true;d.default.plugins.selectize.plugins=function(e){return[{name:"enum_plugin",options:{schema:e}}]};d.default.defaults.themes.openam=v.default.getTheme(l,o);var u=a.toFlatWithInheritanceMeta(r);var s=r.removeInheritance();u=u.raw;s=s.raw;var c=new d.default(e[0],{disable_collapse:true,disable_edit_json:true,disable_properties:true,hide_inheritance:i,iconlib:"fontawesome4",schema:u,theme:"openam"});_(e);C(e);c.setValue(s);return c}var j=u.default.View.extend({className:"jsoneditor-block",initialize:function e(t){if(!(t.schema instanceof m.default))throw new TypeError('[JSONEditorView] "schema" argument is not an instance of JSONSchema.');if(!(t.values instanceof b.default))throw new TypeError('[JSONEditorView] "values" argument is not an instance of JSONValues.');this.options=n.default.defaults(t,{displayTitle:true})},toggleInheritance:function e(t,a,r){this.options.values=this.options.values.extend(this.getData());this.options.values=this.options.values.addValueForPath([t,"inherited"],r);this.options.values=this.options.values.addValueForPath([t,"value"],a);this.render()},render:function e(){this.$el.empty();var t=n.default.get(this.jsonEditor,"watchlist");this.jsonEditor=O(this.$el,this.options);this.jsonEditor.watchlist=t;this.options.displayTitle||this.$el.find("[data-header]").parent().hide();return this},isValid:function e(){return 0===this.jsonEditor.validate().length},getData:function e(){var t=new b.default(this.jsonEditor.getValue());this.options.schema.hasDefaultProperties()&&(t=t.pick(this.options.schema.raw.defaultProperties));t=t.nullifyEmptyPasswords(this.options.schema.getPasswordKeys());t=t.addInheritance(this.options.values.raw);return t.raw},setData:function e(t){this.options.values=this.options.values.extend(t)},watch:function e(t,a){this.jsonEditor.watch(t,a)},destroy:function e(){var t=this;var a=n.default.keys(this.jsonEditor.watchlist);n.default.forEach(a,function(e){t.jsonEditor.unwatch(e)});this.jsonEditor.destroy();this.jsonEditor=null}});t.default=j},1527:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e};var n=a(1548);var i=a(1);var l=s(i);var o=a(81);var u=s(o);function s(e){return e&&e.__esModule?e:{default:e}}var d=function e(t){return t.displayName||t.name||"Component"};var c=function e(t){for(var a=arguments.length,i=Array(a>1?a-1:0),o=1;o<a;o++)i[o-1]=arguments[o];var s=n.connect.apply(void 0,i)(t);var c=function e(t){return l.default.createElement(s,r({},t,{store:u.default}))};c.displayName="connectWithStore("+d(t)+")";c.WrappedComponent=t;return c};t.default=c},1528:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=a(6);var n=p(r);var i=a(159);var l=p(i);var o=a(1525);var u=p(o);var s=a(866);var d=p(s);var c=a(865);var f=p(c);function p(e){return e&&e.__esModule?e:{default:e}}function v(e){e&&setTimeout(e,0)}var h=l.default.View.extend({initialize:function e(t){if(!(t.schema instanceof d.default))throw new TypeError('[FlatJSONSchemaView] "schema" argument is not an instance of JSONSchema.');if(!(t.values instanceof f.default))throw new TypeError('[FlatJSONSchemaView] "values" argument is not an instance of JSONValues.');this.options=n.default.defaults(t,{showOnlyRequiredAndEmpty:false})},render:function e(){var t=this.options.schema;var a=true;if(this.options.showOnlyRequiredAndEmpty){var r=this.options.schema.getRequiredPropertyKeys();var i=this.options.values.getEmptyValueKeys(t);var l=n.default.intersection(r,i);t=t.removeUnrequiredNonDefaultProperties().addDefaultProperties(l);a=!n.default.isEmpty(l)}this.subview=new u.default({displayForm:a,hideInheritance:this.options.hideInheritance,displayTitle:false,el:this.$el,schema:t,values:this.options.values}).render();v(this.options.onRendered);return this},isValid:function e(){return!this.subview||this.subview.isValid()},getData:function e(){if(this.subview){var t;return(t=this.subview).getData.apply(t,arguments)}},setData:function e(t){if(this.subview){this.options.values=this.options.values.extend(t);return this.subview.setData(t)}},watch:function e(t,a){this.subview&&this.subview.watch(t,a)},destroy:function e(){if(this.subview){this.subview.destroy();this.subview=null}}});t.default=h},1529:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=a(0);var n=o(r);var i=a(1);var l=o(i);function o(e){return e&&e.__esModule?e:{default:e}}var u=function e(t){var a=t.children,r=t.icon,n=t.title,i=t.type;var o=i?"deep":"shallow";var u=r?l.default.createElement("span",{className:"header-icon pull-left bg-primary"},l.default.createElement("i",{className:"fa fa-"+r})):null;var s=i?l.default.createElement("h4",{className:"page-type"},i):null;return l.default.createElement("header",{className:"page-header page-header-no-border clearfix"},u,l.default.createElement("div",{className:"button-group pull-right "+o+"-page-header-button-group"},a),l.default.createElement("div",{className:"pull-left"},s,l.default.createElement("h1",{className:"wordwrap"},n)))};u.propTypes={children:n.default.node,icon:n.default.string,title:n.default.string.isRequired,type:n.default.string};t.default=u},1532:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=a(1);var n=l(r);var i=a(61);function l(e){return e&&e.__esModule?e:{default:e}}var o=function e(){return n.default.createElement("p",{className:"loading text-muted"},n.default.createElement("i",{className:"fa fa-circle-o-notch fa-spin fa-2x fa-fw"}),n.default.createElement("span",null,(0,i.t)("console.common.loading")))};t.default=o},1540:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=a(570);var n=a(6);var i=a(61);var l=a(0);var o=m(l);var u=a(1);var s=m(u);var d=a(73);var c=m(d);var f=a(1522);var p=m(f);var v=a(1521);var h=m(v);function m(e){return e&&e.__esModule?e:{default:e}}function y(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}var b=function e(t){var a=t.backRoute,l=t.backRouteArgs,o=t.disabled,u=t.onCreateClick,d=t.router;var f=d.params[0];var p=(0,n.map)([f].concat(y(l)),encodeURIComponent);var v="#"+c.default.getLink(a,p);return s.default.createElement(r.Clearfix,null,s.default.createElement("div",{className:"pull-right"},s.default.createElement("div",{className:"am-btn-action-group"},s.default.createElement(r.Button,{href:v},(0,i.t)("common.form.cancel")),s.default.createElement(r.Button,{bsStyle:"primary",disabled:o,onClick:u},(0,i.t)("common.form.create")))))};b.defaultProps={backRouteArgs:[],disabled:false};b.propTypes={backRoute:o.default.shape({url:o.default.oneOfType([o.default.string,o.default.instanceOf(RegExp)]).isRequired,pattern:o.default.string.isRequired}).isRequired,backRouteArgs:o.default.arrayOf(o.default.string),disabled:o.default.bool,onCreateClick:o.default.func.isRequired,router:h.default};t.default=(0,p.default)(b)},1543:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=a(6);var n=function e(t){if((0,r.isEmpty)(t))return true;if("."===t||".."===t||(0,r.startsWith)(t," ")||(0,r.endsWith)(t," ")||(0,r.startsWith)(t,"#")||(0,r.startsWith)(t,'"')||(0,r.includes)(t,"\\")||(0,r.includes)(t,"/")||(0,r.includes)(t,"+")||(0,r.includes)(t,";")||(0,r.includes)(t,",")||(0,r.includes)(t,"%")||(0,r.includes)(t,"[")||(0,r.includes)(t,"]")||(0,r.includes)(t,"|")||(0,r.includes)(t,"?"))return false;return true};t.default=n},1544:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||false;r.configurable=true;"value"in r&&(r.writable=true);Object.defineProperty(e,r.key,r)}}return function(t,a,r){a&&e(t.prototype,a);r&&e(t,r);return t}}();var n=a(570);var i=a(6);var l=a(0);var o=d(l);var u=a(1);var s=d(u);function d(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function p(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var v=function(e){p(t,e);function t(e){c(this,t);var a=f(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));a.handleOnChange=a.handleOnChange.bind(a);return a}r(t,[{key:"handleOnChange",value:function e(t){this.props.onChange(t.target.value)}},{key:"render",value:function e(){var t=this.props,a=t.isGrid,r=t.isValid,l=t.value,o=t.validationMessage,u=t.label,d=t.placeholder;var c=!r&&o?s.default.createElement(n.HelpBlock,null,s.default.createElement("small",{dangerouslySetInnerHTML:{__html:o}})):null;var f=s.default.createElement(n.FormControl,{onChange:this.handleOnChange,placeholder:d,type:"text",value:l});return a?s.default.createElement(n.FormGroup,{controlId:(0,i.uniqueId)("formGroupInput"),validationState:r?null:"error"},s.default.createElement(n.Clearfix,null,s.default.createElement(n.Col,{componentClass:n.ControlLabel,sm:4},u),s.default.createElement(n.Col,{sm:6},f,c))):s.default.createElement(n.FormGroup,{controlId:(0,i.uniqueId)("formGroupInput"),validationState:r?null:"error"},s.default.createElement(n.Clearfix,null,s.default.createElement(n.ControlLabel,null,u),f,c))}}]);return t}(u.Component);v.defaultProps={isGrid:true,isValid:true};v.propTypes={isGrid:o.default.bool,isValid:o.default.bool,label:o.default.string.isRequired,onChange:o.default.func.isRequired,placeholder:o.default.string,validationMessage:o.default.string,value:o.default.string.isRequired};t.default=v},1721:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=a(6);var n=function e(t,a){var n=(0,r.cloneDeep)(t);if("HsmSecretStore"===a){n.properties.providerGuiceKey.required=true;n.properties.file.required=true}return n};t.default=n},1722:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||false;r.configurable=true;"value"in r&&(r.writable=true);Object.defineProperty(e,r.key,r)}}return function(t,a,r){a&&e(t.prototype,a);r&&e(t,r);return t}}();var n=a(570);var i=a(61);var l=a(0);var o=S(l);var u=a(1);var s=S(u);var d=a(603);var c=S(d);var f=a(1540);var p=S(f);var v=a(1528);var h=S(v);var m=a(1544);var y=S(m);var b=a(866);var w=S(b);var g=a(865);var E=S(g);var _=a(1532);var C=S(_);var O=a(560);var j=S(O);var R=a(1529);var P=S(R);function S(e){return e&&e.__esModule?e:{default:e}}function k(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function V(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function M(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var q=function(e){M(t,e);function t(e){k(this,t);var a=V(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));a.handleCreate=a.handleCreate.bind(a);a.setRef=a.setRef.bind(a);return a}r(t,[{key:"componentWillReceiveProps",value:function e(t){if(this.props.template!==t.template&&this.jsonSchemaView){this.jsonSchemaView.destroy();this.jsonSchemaView=null}}},{key:"componentDidUpdate",value:function e(){if(this.jsonForm&&!this.jsonSchemaView&&this.props.template){this.jsonSchemaView=new h.default({hideInheritance:true,schema:new w.default(this.props.schema),values:new E.default(this.props.template),showOnlyRequiredAndEmpty:true});this.jsonForm.appendChild(this.jsonSchemaView.render().el)}}},{key:"handleCreate",value:function e(){this.jsonSchemaView.isValid()?this.props.onCreate(this.jsonSchemaView.getData()):j.default.addMessage({message:(0,i.t)("common.form.validation.errorsNotSaved"),type:j.default.TYPE_DANGER})}},{key:"setRef",value:function e(t){this.jsonForm=t}},{key:"render",value:function e(){var t=void 0;t=this.props.isFetching?s.default.createElement(C.default,null):s.default.createElement(n.Form,{horizontal:true},s.default.createElement(y.default,{isValid:this.props.isValidId,label:(0,i.t)("console.secretStores.new.id"),onChange:this.props.onIdChange,validationMessage:(0,i.t)("console.common.validation.invalidCharacters"),value:this.props.id}),s.default.createElement(n.FormGroup,{controlId:"secretStoresType"},s.default.createElement(n.Col,{componentClass:n.ControlLabel,sm:4},(0,i.t)("console.secretStores.new.type")),s.default.createElement(n.Col,{sm:6},s.default.createElement(c.default,{backspaceRemoves:false,clearable:false,deleteRemoves:false,inputProps:{id:"secretStoresType"},labelKey:"name",onChange:this.props.onTypeChange,options:this.props.types,placeholder:(0,i.t)("common.form.select"),simpleValue:true,value:this.props.selectedType,valueKey:"_id"}))),s.default.createElement("div",{ref:this.setRef}));return s.default.createElement(u.Fragment,null,s.default.createElement(P.default,{title:(0,i.t)("console.secretStores.new.title")}),s.default.createElement(n.Panel,null,s.default.createElement(n.Panel.Body,null,t),s.default.createElement(n.Panel.Footer,null,s.default.createElement(p.default,{backRoute:this.props.listRoute,disabled:!this.props.isCreateAllowed,onCreateClick:this.handleCreate}))))}}]);return t}(u.Component);q.propTypes={id:o.default.string.isRequired,isCreateAllowed:o.default.bool.isRequired,isFetching:o.default.bool.isRequired,isValidId:o.default.bool.isRequired,listRoute:o.default.objectOf(o.default.any).isRequired,onCreate:o.default.func.isRequired,onIdChange:o.default.func.isRequired,onTypeChange:o.default.func.isRequired,schema:o.default.objectOf(o.default.any),selectedType:o.default.string,template:o.default.objectOf(o.default.any),types:o.default.arrayOf(o.default.object)};t.default=q}}]);
//# sourceMappingURL=18.68068bb3b1.js.map