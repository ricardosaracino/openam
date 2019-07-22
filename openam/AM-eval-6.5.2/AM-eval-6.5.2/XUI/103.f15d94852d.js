(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[103],{1369:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e};var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||false;a.configurable=true;"value"in a&&(a.writable=true);Object.defineProperty(e,a.key,a)}}return function(t,r,a){r&&e(t.prototype,r);a&&e(t,a);return t}}();var l=r(3);var o=r(6);var s=r(0);var i=R(s);var u=r(1);var c=R(u);var f=r(1542);var d=r(1530);var p=r(267);var h=r(266);var v=r(1527);var g=R(v);var m=r(866);var y=R(m);var C=r(865);var b=R(C);var A=r(560);var U=R(A);var _=r(1805);var w=R(_);var I=r(73);var S=R(I);var j=r(1522);var O=R(j);var P=r(1521);var E=R(P);function R(e){return e&&e.__esModule?e:{default:e}}function T(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function k(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function M(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var q=function(e){M(t,e);function t(e){T(this,t);var r=k(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));r.state={agentId:"",isFetching:true};r.handleAgentIdChange=r.handleAgentIdChange.bind(r);r.handleAgentUrlChange=r.handleAgentUrlChange.bind(r);r.handleCreate=r.handleCreate.bind(r);r.handleServerUrlChange=r.handleServerUrlChange.bind(r);return r}n(t,[{key:"componentDidMount",value:function e(){var t=this;var r=this.props.router.params[0];(0,f.getInitialState)(r,d.JAVA_AGENT).then(function(e){var r=e.schema,a=e.values;t.setState({isFetching:false});t.props.setSchema(r);t.props.setTemplate(a)},function(e){t.setState({isFetching:false});U.default.addMessage({response:e,type:U.default.TYPE_DANGER})})}},{key:"handleAgentIdChange",value:function e(t){this.setState({agentId:t})}},{key:"handleAgentUrlChange",value:function e(t){this.setState({agentUrl:t})}},{key:"handleServerUrlChange",value:function e(t){this.setState({serverUrl:t})}},{key:"handleCreate",value:function e(t){var r=this;var n=this.props.router.params[0];var l=new b.default(t);var s=l.removeNullPasswords(new y.default(this.props.schema));var i=a({},s.raw,{agentUrl:this.state.agentUrl,serverUrl:this.state.serverUrl});(0,f.create)(n,d.JAVA_AGENT,i,this.state.agentId).then(function(){S.default.routeTo(S.default.configuration.routes.realmsApplicationsAgentsJavaAgentsEdit,{args:(0,o.map)([n,r.state.agentId],encodeURIComponent),trigger:true})},function(e){U.default.addMessage({response:e,type:U.default.TYPE_DANGER})})}},{key:"render",value:function e(){var t=!(0,o.isEmpty)(this.state.agentId)&&!(0,o.isEmpty)(this.state.agentUrl)&&!(0,o.isEmpty)(this.state.serverUrl);return c.default.createElement(w.default,{isCreateAllowed:t,isFetching:this.state.isFetching,onAgentIdChange:this.handleAgentIdChange,onAgentUrlChange:this.handleAgentUrlChange,onCreate:this.handleCreate,onServerUrlChange:this.handleServerUrlChange,schema:this.props.schema,serverUrl:this.state.serverUrl,template:this.props.template})}}]);return t}(u.Component);q.propTypes={router:E.default,schema:i.default.shape({type:i.default.string.isRequired}),setSchema:i.default.func.isRequired,setTemplate:i.default.func.isRequired,template:i.default.shape({type:i.default.string.isRequired})};q=(0,g.default)(q,function(e){return{schema:e.remote.config.realm.applications.agents.java.agents.schema,template:e.remote.config.realm.applications.agents.java.agents.template}},function(e){return{setSchema:(0,l.bindActionCreators)(p.setSchema,e),setTemplate:(0,l.bindActionCreators)(h.setTemplate,e)}});q=(0,O.default)(q);t.default=q},1542:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.getCreatableTypes=g;t.create=m;t.update=y;t.get=C;t.getSchema=b;t.getAll=A;t.getInitialState=U;t.remove=_;var a=r(6);var n=r(169);var l=h(n);var o=r(27);var s=h(o);var i=r(1524);var u=h(i);var c=r(1523);var f=h(c);var d=r(168);var p=h(d);function h(e){return e&&e.__esModule?e:{default:e}}var v=new l.default(""+s.default.host+s.default.context+"/json");function g(e){return v.serviceCall({url:(0,p.default)("/realm-config/agents?_action=getCreatableTypes",{realm:e}),type:"POST",headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"}}).then(function(e){return e.result})}function m(e,t,r,a){return v.serviceCall({url:(0,p.default)("/realm-config/agents/"+t+"/"+encodeURIComponent(a),{realm:e}),type:"PUT",headers:{"Accept-API-Version":"protocol=2.0,resource=1.0","If-None-Match":"*"},data:JSON.stringify(r),suppressSpinner:true,errorsHandlers:{incorrectRevisionError:{status:412}}})}function y(e,t,r,n){return v.serviceCall({url:(0,p.default)("/realm-config/agents/"+t+"/"+encodeURIComponent(n),{realm:e}),type:"PUT",headers:{"Accept-API-Version":"protocol=2.0,resource=1.0","If-Match":"*"},data:JSON.stringify((0,a.omit)(r,"_rev"))})}function C(e,t,r){return v.serviceCall({url:(0,p.default)("/realm-config/agents/"+t+"/"+encodeURIComponent(r),{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},suppressSpinner:true})}function b(e,t){return v.serviceCall({url:(0,p.default)("/realm-config/agents/"+t+"?_action=schema",{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},type:"POST"})}function A(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};var a=(0,f.default)(r.pagination);var n=(0,u.default)(r.fields);return v.serviceCall({url:(0,p.default)("/realm-config/agents/"+t+"?_queryFilter=true"+a+n,{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"}})}function U(e,t){function r(){return v.serviceCall({url:(0,p.default)("/realm-config/agents/"+t+"?_action=template",{realm:e}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST"})}return Promise.all([b(e,t),r()]).then(function(e){return{schema:e[0],values:e[1]}})}function _(e,t,r){var n=(0,a.map)(r,function(r){return v.serviceCall({url:(0,p.default)("/realm-config/agents/"+t+"/"+encodeURIComponent(r),{realm:e}),headers:{"Accept-API-Version":"protocol=2.0,resource=1.0"},type:"DELETE"})});return Promise.all(n)}},1803:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=r(184);var n=l(a);function l(e){return e&&e.__esModule?e:{default:e}}var o=function e(t){if(!t)return true;try{var r=n.default.parse(t);return!!(r.protocol&&r.hostname&&r.port&&"/"!==r.path)}catch(e){return false}};t.default=o},1804:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||false;a.configurable=true;"value"in a&&(a.writable=true);Object.defineProperty(e,a.key,a)}}return function(t,r,a){r&&e(t.prototype,r);a&&e(t,a);return t}}();var n=r(570);var l=r(61);var o=r(0);var s=y(o);var i=r(1);var u=y(i);var c=r(1544);var f=y(c);var d=r(1543);var p=y(d);var h=r(1629);var v=y(h);var g=r(1803);var m=y(g);function y(e){return e&&e.__esModule?e:{default:e}}function C(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function A(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var U=function(e){A(t,e);function t(e){C(this,t);var r=b(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));r.state={agentId:"",agentUrl:"",serverUrl:""};r.handleAgentIdChange=r.handleAgentIdChange.bind(r);r.handleAgentUrlChange=r.handleAgentUrlChange.bind(r);r.handleServerUrlChange=r.handleServerUrlChange.bind(r);return r}a(t,[{key:"handleAgentIdChange",value:function e(t){var r=this;this.setState({agentId:t},function(){r.props.onAgentIdChange((0,p.default)(r.state.agentId)?r.state.agentId:null)})}},{key:"handleAgentUrlChange",value:function e(t){var r=this;this.setState({agentUrl:t},function(){r.props.onAgentUrlChange((0,m.default)(r.state.agentUrl)?r.state.agentUrl:null)})}},{key:"handleServerUrlChange",value:function e(t){var r=this;this.setState({serverUrl:t},function(){r.props.onServerUrlChange((0,v.default)(r.state.serverUrl)?r.state.serverUrl:null)})}},{key:"render",value:function e(){var t=(0,m.default)(this.state.agentUrl);var r=(0,v.default)(this.state.serverUrl);var a=(0,p.default)(this.state.agentId);return u.default.createElement(n.Form,{horizontal:true},u.default.createElement(f.default,{isValid:a,label:(0,l.t)("console.applications.agents.common.agents.new.agentId.title"),onChange:this.handleAgentIdChange,validationMessage:(0,l.t)("console.common.validation.invalidCharacters"),value:this.state.agentId}),u.default.createElement(f.default,{isValid:t,label:(0,l.t)("console.applications.agents.common.agentUrl.title"),onChange:this.handleAgentUrlChange,placeholder:(0,l.t)("console.applications.agents.java.agents.new.agentUrl.placeholder"),validationMessage:(0,l.t)("console.applications.agents.java.agents.new.agentUrl.validationMessage"),value:this.state.agentUrl}),u.default.createElement(f.default,{isValid:r,label:(0,l.t)("console.applications.agents.common.serverUrl.title"),onChange:this.handleServerUrlChange,placeholder:(0,l.t)("console.applications.agents.common.serverUrl.placeholder"),validationMessage:(0,l.t)("console.applications.agents.common.serverUrl.validationMessage"),value:this.state.serverUrl}),this.props.children)}}]);return t}(i.Component);U.propTypes={children:s.default.node.isRequired,onAgentIdChange:s.default.func.isRequired,onAgentUrlChange:s.default.func.isRequired,onServerUrlChange:s.default.func.isRequired};t.default=U},1805:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||false;a.configurable=true;"value"in a&&(a.writable=true);Object.defineProperty(e,a.key,a)}}return function(t,r,a){r&&e(t.prototype,r);a&&e(t,a);return t}}();var n=r(570);var l=r(61);var o=r(0);var s=S(o);var i=r(1);var u=S(i);var c=r(1540);var f=S(c);var d=r(1557);var p=S(d);var h=r(866);var v=S(h);var g=r(865);var m=S(g);var y=r(1532);var C=S(y);var b=r(1804);var A=S(b);var U=r(1529);var _=S(U);var w=r(73);var I=S(w);function S(e){return e&&e.__esModule?e:{default:e}}function j(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function O(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function P(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var E=function(e){P(t,e);function t(e){j(this,t);var r=O(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));r.handleCreate=r.handleCreate.bind(r);r.setRef=r.setRef.bind(r);return r}a(t,[{key:"componentDidUpdate",value:function e(){if(!this.jsonSchemaView&&this.props.template){this.jsonSchemaView=new p.default({hideInheritance:true,schema:new v.default(this.props.schema),values:new m.default(this.props.template),showOnlyRequiredAndEmpty:true});this.jsonForm.appendChild(this.jsonSchemaView.render().el)}}},{key:"handleCreate",value:function e(){this.props.onCreate(this.jsonSchemaView.getData())}},{key:"setRef",value:function e(t){this.jsonForm=t}},{key:"render",value:function e(){var t=void 0;t=this.props.isFetching?u.default.createElement(C.default,null):u.default.createElement(A.default,{onAgentIdChange:this.props.onAgentIdChange,onAgentUrlChange:this.props.onAgentUrlChange,onServerUrlChange:this.props.onServerUrlChange},u.default.createElement("div",{ref:this.setRef}));return u.default.createElement("div",null,u.default.createElement(_.default,{title:(0,l.t)("console.applications.agents.java.agents.new.title")}),u.default.createElement(n.Panel,null,u.default.createElement(n.Panel.Body,null,t),u.default.createElement(n.Panel.Footer,null,u.default.createElement(f.default,{backRoute:I.default.configuration.routes.realmsApplicationsAgentsJava,disabled:!this.props.isCreateAllowed,onCreateClick:this.handleCreate}))))}}]);return t}(i.Component);E.propTypes={isCreateAllowed:s.default.bool.isRequired,isFetching:s.default.bool.isRequired,onAgentIdChange:s.default.func.isRequired,onAgentUrlChange:s.default.func.isRequired,onCreate:s.default.func.isRequired,onServerUrlChange:s.default.func.isRequired,schema:s.default.objectOf(s.default.object).isRequired,template:s.default.objectOf(s.default.object).isRequired};t.default=E}}]);
//# sourceMappingURL=103.f15d94852d.js.map