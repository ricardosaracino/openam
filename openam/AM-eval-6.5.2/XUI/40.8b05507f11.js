(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[40,357],{1301:function(e,a,t){var n=t(62);e.exports=(n["default"]||n).template({compiler:[7,">= 4.0.0"],main:function(e,a,t,n,r){var i,s=null!=a?a:e.nullContext||{},u=t.helperMissing,l="function",d=e.escapeExpression;return'<iframe data-iframe src="'+d((i=null!=(i=t.src||(null!=a?a.src:a))?i:u,typeof i===l?i.call(s,{name:"src",hash:{},data:r}):i))+'" class="'+d((i=null!=(i=t.className||(null!=a?a.className:a))?i:u,typeof i===l?i.call(s,{name:"className",hash:{},data:r}):i))+'"/>\n'},useData:true})},1407:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:true});var n=t(6);var r=v(n);var i=t(114);var s=v(i);var u=t(27);var l=v(u);var d=t(1679);var o=v(d);var c=t(1301);var f=v(c);function v(e){return e&&e.__esModule?e:{default:e}}var p=s.default.extend({template:f.default,render:function e(){var a=this;this.data.src=l.default.context+"/json/docs/api";this.data.className="am-iframe-full-width";this.parentRender(function(){a.resize();window.addEventListener("resize",r.default.debounce(a.resize.bind(a),100))})},resize:function e(){var a=(0,o.default)();this.$el.find("[data-iframe]").height(a)},remove:function e(){window.removeEventListener("resize",this.resize)}});a.default=new p},1679:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:true});var n=function e(){var a=76;var t=81;return window.innerHeight-a-t};a.default=n}}]);
//# sourceMappingURL=40.8b05507f11.js.map