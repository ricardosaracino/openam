(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13,361],{1183:function(e,t,a){var r=a(62);e.exports=(r["default"]||r).template({compiler:[7,">= 4.0.0"],main:function(e,t,a,r,n){var l=null!=t?t:e.nullContext||{},i=a.helperMissing,u=e.escapeExpression;return'<div class="pull-right btn-group">\n    <button name="edit" type="button" class="btn btn-link" title="'+u((a.t||t&&t.t||i).call(l,"common.form.edit",{name:"t",hash:{},data:n}))+'" data-edit-item>\n        <i class="fa fa-pencil"></i>\n    </button>\n    <button name="delete" type="button" class="btn btn-link" title="'+u((a.t||t&&t.t||i).call(l,"common.form.delete",{name:"t",hash:{},data:n}))+'" data-delete-item>\n        <i class="fa fa-close"></i>\n    </button>\n</div>\n'},useData:true})},1526:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=u;var r=a(61);var n=a(655);var l=i(n);function i(e){return e&&e.__esModule?e:{default:e}}function u(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:(0,r.t)("common.form.delete");l.default.confirm({type:l.default.TYPE_DANGER,title:(0,r.t)("common.form.confirm")+" "+a,message:e.message?e.message:(0,r.t)("console.common.confirmDeleteText",{type:e.type}),btnOKLabel:a,btnOKClass:"btn-danger",callback:function e(a){a&&t&&t()}})}},1533:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=a(1537);var n=s(r);var l=a(1536);var i=s(l);var u=a(1526);var o=s(u);function s(e){return e&&e.__esModule?e:{default:e}}var d={};d.showConfirmationBeforeDeleting=function(e,t){(0,n.default)("FormHelper.showConfirmationBeforeDeleting","org/forgerock/openam/ui/admin/utils/form/showConfirmationBeforeAction");return(0,o.default)(e,t)};d.setActiveTab=function(e,t){(0,n.default)("FormHelper.setActiveTab","org/forgerock/openam/ui/admin/utils/form/setActiveTab");return(0,i.default)(e,t)};t.default=d},1535:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=a(19);var n=u(r);var l=a(1562);var i=u(l);function u(e){return e&&e.__esModule?e:{default:e}}i.default.HeaderCell.prototype.render=function(){this.$el.empty();var e=this.column,t=i.default.callByNeed(e.sortable(),e,this.collection),a;a=t?(0,n.default)("<a>").text(e.get("label")).append("<b class='sort-caret'></b>"):document.createTextNode(e.get("label"));this.$el.append(a);this.$el.attr("data-field",e.get("name"));this.$el.addClass(e.get("direction"));this.delegateEvents();return this};t.default=i.default},1536:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=function(e){e&&e.activeTabId&&e.$el.find('.nav-tabs a[href="'+e.activeTabId+'"]').tab("show")}},1537:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=r;function r(e,t){console.warn(e+" is marked as deprecated. \nPlease use "+t)}},1546:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};a(1552);var n=a(6);var l=b(n);var i=a(19);var u=b(i);var o=a(159);var s=b(o);var d=a(12);var f=b(d);var c=a(1535);var m=b(c);var h=a(560);var v=b(h);var p=a(73);var g=b(p);function b(e){return e&&e.__esModule?e:{default:e}}var _={};_.DatetimeAgoCell=m.default.Cell.extend({className:"date-time-ago-cell",formatter:{fromRaw:function e(t){return(0,f.default)(t).fromNow()}},render:function e(){_.DatetimeAgoCell.__super__.render.apply(this);this.$el.attr("title",(0,f.default)(this.model.get(this.column.get("name"))).format("Do MMMM YYYY, h:mm:ssa"));return this}});_.ArrayCell=m.default.Cell.extend({className:"array-formatter-cell",buildHtml:function e(t){var a="<ul>",r=0;for(;r<t.length;r++)l.default.isString(t[r])?a+="<li>"+t[r]+"</li>":a+="<li>"+JSON.stringify(t[r])+"</li>";a+="</ul>";return a},render:function e(){this.$el.empty();var t=this.model.get(this.column.attributes.name);this.$el.append(this.buildHtml(t));this.delegateEvents();return this}});_.ObjectCell=m.default.Cell.extend({className:"object-formatter-cell",render:function e(){this.$el.empty();var t=this.model.get(this.column.attributes.name),a='<dl class="dl-horizontal">',r;for(r in t)l.default.isString(t[r])?a+="<dt>"+r+"</dt><dd>"+t[r]+"</dd>":a+="<dt>"+r+"</dt><dd>"+JSON.stringify(t[r])+"</dd>";a+="</dl>";this.$el.append(a);this.delegateEvents();return this}});_.UniversalIdToUsername=m.default.Cell.extend({formatter:{fromRaw:function e(t){return t.substring(3,t.indexOf(",ou=user"))}},render:function e(){_.UniversalIdToUsername.__super__.render.apply(this);this.$el.attr("title",this.model.get(this.column.get("name")));return this}});_.ClickableRow=m.default.Row.extend({events:{click:"onClick",keyup:"onKeyup"},onKeyup:function e(t){13===t.keyCode&&this.callback&&this.callback(t)},onClick:function e(t){this.callback&&this.callback(t)}});_.TemplateCell=m.default.Cell.extend({className:"template-cell",render:function e(){var t=this.template(this.model);this.$el.html(t);this.rendered&&this.rendered();this.delegateEvents();return this}});_.ClassHeaderCell=m.default.HeaderCell.extend({className:"",render:function e(){_.ClassHeaderCell.__super__.render.apply(this);this.delegateEvents();return this}});_.UriExtCell=m.default.UriCell.extend({events:{click:"gotoUrl"},render:function e(){this.$el.empty();var t=this.model.get(this.column.get("name")),a=this.formatter.fromRaw(t,this.model),r=l.default.isFunction(this.column.get("href"))?this.column.get("href")(t,a,this.model):this.column.get("href");this.$el.append((0,u.default)("<a>",{href:r||t,title:this.title||a}).text(a));if(r){this.$el.data("href",r);this.$el.prop("title",this.title||a)}this.delegateEvents();return this},gotoUrl:function e(t){t.preventDefault();var a=(0,u.default)(t.currentTarget).data("href");g.default.navigate(a,{trigger:true})}});_.FilterHeaderCell=m.default.HeaderCell.extend({className:"filter-header-cell enable-pointer",render:function e(){var t=new m.default.Extension.ThemeableServerSideFilter({name:this.column.get("name"),placeholder:u.default.t("common.form.filter"),collection:this.collection});this.addClassName&&this.$el.addClass(this.addClassName);this.collection.state.filters=this.collection.state.filters?this.collection.state.filters:[];this.collection.state.filters.push(t);_.FilterHeaderCell.__super__.render.apply(this);this.$el.prepend(t.render().el);return this}});_.queryFilter=function(e){void 0===e&&(e={});var t=[],a=e._queryFilter||[],r=function(){return e&&e.filterName&&"eq"===e.filterName?function(e,t){return e+"+eq+"+encodeURIComponent('"*'+t+'*"')}:function(e,t){return e+"+co+"+encodeURIComponent('"'+t+'"')}}();l.default.each(this.state.filters,function(e){""!==e.query()&&t.push(r(e.name,e.query()))});t=t.concat(a);return 0===t.length||t.join("+AND+")};_.parseState=function(e){this.state.totalRecords||(this.state.totalRecords=e.remainingPagedResults+e.resultCount);this.state.totalPages||(this.state.totalPages=Math.ceil(this.state.totalRecords/this.state.pageSize));return this.state};_.pagedResultsOffset=function(){return(this.state.currentPage-1)*this.state.pageSize};_.sortKeys=function(){return 1===this.state.order?"-"+this.state.sortKey:this.state.sortKey};_.sync=function(e,t,a){var r=[],n=["_pageSize","_pagedResultsOffset","_sortKeys"];"*"===a.data._queryId&&true===a.data._queryFilter?n.push("_queryId"):n.push("_queryFilter");l.default.forIn(a.data,function(e,t){l.default.includes(n,t)&&r.push(t+"="+e)});a.data=r.join("&");a.processData=false;a.beforeSend||(a.beforeSend=function(e){e.setRequestHeader("Accept-API-Version","protocol=1.0,resource=1.0")});a.error=function(e){v.default.addMessage({type:v.default.TYPE_DANGER,response:e})};return s.default.sync(e,t,a)};_.parseRecords=function(e){return e.result};_.getQueryParams=function(e){e=e||{};return{_sortKeys:this.sortKeys,_queryFilter:function t(){return _.queryFilter.call(this,e)},pageSize:"_pageSize",_pagedResultsOffset:this.pagedResultsOffset}};_.doubleSortFix=function(e){var t=e.cid,a=e.collection.filter(function(e){return e.cid!==t});l.default.each(a,function(e){e.set("direction",null)})};_.getState=function(e){var t={pageSize:20,sortKey:"name"};e&&"object"===("undefined"===typeof e?"undefined":r(e))&&l.default.extend(t,e);return t};t.default=_},1550:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=a(6);var n=s(r);var l=a(37);var i=s(l);var u=a(63);var o=s(u);function s(e){return e&&e.__esModule?e:{default:e}}var d={};d.decorateURLWithOverrideRealm=function(e){var t=d.getOverrideRealm(),a,r,n;if(t){if(-1!==e.indexOf("realm="))return e;r=e.indexOf("#");if(-1!==r){n=e.slice(r);e=e.slice(0,r)}a=-1===e.indexOf("?")?"?":"&";e=""+e+a+"realm="+t;n&&(e+=n)}return e};d.decorateURIWithRealm=function(e){e=d.decorateURIWithSubRealm(e);e=d.decorateURLWithOverrideRealm(e);return e};d.decorateURIWithSubRealm=function(e){var t=i.default.globalData,a=t&&t.auth?t.auth.subRealm:"",r=a?a+"/":"";t&&t.auth&&(void 0===t.auth.subRealm||null===t.auth.subRealm)&&console.warn("Unable to decorate URI, Configuration.globalData.auth.subRealm not yet set");e=e.replace("__subrealm__/",r);return e};d.getRealm=function(){var e=d.getOverrideRealm()||d.getSubRealm();return"/"===e.substring(0,1)?e.substring(1):e};d.getOverrideRealm=function(){var e=o.default.parseQueryString(o.default.getCurrentQueryString()).realm,t=o.default.parseQueryString(o.default.getCurrentFragmentQueryString()).realm;return e||t};d.getSubRealm=function(){var e=o.default.getCurrentFragment().split("/"),t=e.shift().split("&")[0],a=["login","passwordReset","continuePasswordReset","register","continueRegister"],r;if(t&&n.default.includes(a,t)){r=e.join("/").split("&")[0];r="/"===r.slice(-1)?r.slice(0,-1):r}else r=i.default.globalData.auth.subRealm?i.default.globalData.auth.subRealm:"";return r};d.encodeRealm=function(e){var t=[],a=e.split("/");n.default.each(a,function(e){""!==e&&t.push(encodeURIComponent(e))});return"/"+t.join("/")};t.default=d},1552:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});a(1579);var r=a(6);var n=s(r);var l=a(19);var i=s(l);var u=a(1535);var o=s(u);function s(e){return e&&e.__esModule?e:{default:e}}o.default.Extension.ThemeableServerSideFilter=o.default.Extension.ServerSideFilter.extend({events:n.default.extend(o.default.Extension.ServerSideFilter.prototype.events,{"keyup input[type=search]":"keyupSearch"}),keyupSearch:function e(t){t.preventDefault();this.showClearButtonMaybe(t);this.minimumSearchChars&&(0,i.default)(t.target).val().length>=this.minimumSearchChars&&this.search(t)},className:"form-group has-feedback",template:function e(t){return'<input class="form-control input-sm" type="search" '+(t.placeholder?'placeholder="'+t.placeholder+'"':"")+' name="'+t.name+'" '+(t.value?'value="'+t.value+'"':"")+'/><a class="fa fa-times form-control-feedback" data-backgrid-action="clear" role="button" href="#"></a>'}});t.default=o.default.Extension.ThemeableServerSideFilter},1554:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});a(1588);var r=a(19);var n=u(r);var l=a(1535);var i=u(l);function u(e){return e&&e.__esModule?e:{default:e}}i.default.Extension.ThemeablePaginator=i.default.Extension.Paginator.extend({className:"text-center",controls:{rewind:{label:"&laquo;",title:n.default.t("common.grid.pagination.first")},back:{label:"&lsaquo;",title:n.default.t("common.grid.pagination.previous")},forward:{label:"&rsaquo;",title:n.default.t("common.grid.pagination.next")},fastForward:{label:"&raquo;",title:n.default.t("common.grid.pagination.last")}},ulClassName:"pagination",render:function e(){i.default.Extension.Paginator.prototype.render.call(this);this.ulClassName&&this.$el.find("ul").addClass(this.ulClassName);return this}});t.default=i.default.Extension.ThemeablePaginator},1555:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=a(37);var n=f(r);var l=a(1578);var i=f(l);var u=a(27);var o=f(u);var s=a(1550);var d=f(s);function f(e){return e&&e.__esModule?e:{default:e}}t.default={substitute:function e(t){return function(){var e=i.default.getCurrentRealm(),a=""+o.default.host+o.default.context+"/json"+("/"===e?"":d.default.encodeRealm(e));return t.replace("__api__",a).replace("__host__",o.default.host).replace("__context__",o.default.context).replace("__username__",n.default.loggedUser.get("username"))}}}},1570:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=a(6);var n=m(r);var l=a(19);var i=m(l);var u=a(27);var o=m(u);var s=a(59);var d=m(s);var f=a(560);var c=m(f);function m(e){return e&&e.__esModule?e:{default:e}}var h={};function v(e){return n.default.has(e,"responseJSON.message")&&n.default.isString(e.responseJSON.message)}h.errorHandler=function(e){401===n.default.get(e,"status")?d.default.sendEvent(o.default.EVENT_UNAUTHORIZED,{error:e.error()}):v(e)?c.default.addMessage({type:c.default.TYPE_DANGER,escape:true,response:e}):c.default.addMessage({type:c.default.TYPE_DANGER,message:i.default.t("config.messages.CommonMessages.unknown")})};t.default=h},1578:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=a(63);var n=l(r);function l(e){return e&&e.__esModule?e:{default:e}}t.default={getCurrentRealm:function e(){return decodeURIComponent(n.default.getCurrentFragment().split("/")[1])}}},1657:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=a(6);var n=g(r);var l=a(114);var i=g(l);var u=a(1546);var o=g(u);var s=a(27);var d=g(s);var f=a(59);var c=g(f);var m=a(1533);var h=g(m);var v=a(73);var p=g(v);function g(e){return e&&e.__esModule?e:{default:e}}t.default=i.default.extend({toolbarTemplateID:"[data-grid-toolbar]",initialize:function e(){i.default.prototype.initialize.call(this)},onDeleteClick:function e(t,a,r,l){t.preventDefault();h.default.showConfirmationBeforeDeleting(a,n.default.bind(this.deleteRecord,this,r,l))},deleteRecord:function e(t,a){var r=this,n=r.data.items.get(t),l=function e(){c.default.sendEvent(d.default.EVENT_DISPLAY_MESSAGE_REQUEST,"changesSaved");a&&a()};n.destroy({success:l,wait:true}).always(function(){r.data.items.fetch({reset:true})})},editRecord:function e(t,a,r){var l=this;p.default.routeTo(r,{args:n.default.map([l.realmPath,a],encodeURIComponent),trigger:true})},bindDefaultHandlers:function e(){this.data.items.on("backgrid:sort",o.default.doubleSortFix)},renderToolbar:function e(){var t=this;var a=this.toolbarTemplate(this.data);t.$el.find(t.toolbarTemplateID).html(a)}})}}]);
//# sourceMappingURL=13.ba30a6eeea.js.map