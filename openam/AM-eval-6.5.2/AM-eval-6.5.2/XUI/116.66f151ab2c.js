(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[116,259,260,362],{1184:function(e,t,a){var r=a(62);e.exports=(r["default"]||r).template({compiler:[7,">= 4.0.0"],main:function(e,t,a,r,n){var l;return'<div class="cell-model-icon">\n    <span><i class="fa"></i></span>\n</div>\n<div class="cell-model-name">\n    '+e.escapeExpression(e.lambda(null!=(l=null!=t?t.attributes:t)?l.name:l,t))+"\n</div>\n"},useData:true})},1214:function(e,t,a){var r=a(62);e.exports=(r["default"]||r).template({compiler:[7,">= 4.0.0"],main:function(e,t,a,r,n){return'<button class="btn btn-primary" data-add-entity>\n    <i class="fa fa-plus"></i> '+e.escapeExpression((a.t||t&&t.t||a.helperMissing).call(null!=t?t:e.nullContext||{},"console.authorization.resourceTypes.list.add",{name:"t",hash:{},data:n}))+"\n</button>\n"},useData:true})},1215:function(e,t,a){var r=a(62);e.exports=(r["default"]||r).template({1:function(e,t,a,r,n){return'<div class="btn-toolbar page-toolbar" role="toolbar" aria-label="toolbar" data-grid-toolbar></div>\n<div class="panel panel-default">\n    <div class="panel-body">\n        <div class="table-container"></div>\n    </div>\n</div>\n'},3:function(e,t,a,r,n){var l=null!=t?t:e.nullContext||{},o=a.helperMissing,s=e.escapeExpression;return'<div class="panel panel-default">\n    <div class="panel-body">\n        <div class="call-to-action-block">\n            <h3>'+s((a.t||t&&t.t||o).call(l,"console.authorization.resourceTypes.list.noResourceTypes",{name:"t",hash:{},data:n}))+'</h3>\n            <button type="button" data-add-entity class="btn btn-primary">\n                <i class="fa fa-plus"></i> '+s((a.t||t&&t.t||o).call(l,"console.authorization.resourceTypes.list.addNewResourceType",{name:"t",hash:{},data:n}))+"\n            </button>\n        </div>\n    </div>\n</div>\n"},compiler:[7,">= 4.0.0"],main:function(e,t,a,r,n){var l,o=null!=t?t:e.nullContext||{};return(null!=(l=e.invokePartial(r["headers/_Title"],t,{name:"headers/_Title",hash:{title:"console.authorization.resourceTypes.list.title"},data:n,helpers:a,partials:r,decorators:e.decorators}))?l:"")+'\n<p class="page-description">'+e.escapeExpression((a.t||t&&t.t||a.helperMissing).call(o,"console.authorization.resourceTypes.list.description",{name:"t",hash:{},data:n}))+"</p>\n"+(null!=(l=a["if"].call(o,null!=t?t.hasResourceTypes:t,{name:"if",hash:{},fn:e.program(1,n,0),inverse:e.program(3,n,0),data:n}))?l:"")},usePartial:true,useData:true})},1382:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});a(1572);a(1554);var r=a(6);var n=N(r);var l=a(19);var o=N(l);var s=a(159);var i=N(s);var u=a(1657);var d=N(u);var c=a(1535);var f=N(c);var p=a(1546);var m=N(p);var v=a(1184);var h=N(v);var b=a(1654);var y=N(b);var T=a(1215);var g=N(T);var R=a(1214);var C=N(R);var _=a(73);var x=N(_);var w=a(1183);var P=N(w);var k=a(1555);var E=N(k);function N(e){return e&&e.__esModule?e:{default:e}}t.default=d.default.extend({template:g.default,toolbarTemplate:C.default,events:{"click [data-add-entity]":"addNewResourceType"},render:function e(t,a){var r=this;var n=i.default.PageableCollection.extend({url:E.default.substitute("__api__/resourcetypes"),model:y.default,state:m.default.getState(),queryParams:m.default.getQueryParams({_queryFilter:["name+eq+"+encodeURIComponent('"^(?!Delegation Service$).*"')]}),parseState:m.default.parseState,parseRecords:m.default.parseRecords,sync:function e(t,a,r){r.beforeSend=function(e){e.setRequestHeader("Accept-API-Version","protocol=1.0,resource=1.0")};return m.default.sync(t,a,r)}});this.realmPath=t[0];this.data.items=new n;this.data.items.fetch({reset:true}).then(function(e){if(e.resultCount>0){r.data.hasResourceTypes=true;r.renderTable(a)}else{r.data.hasResourceTypes=false;r.parentRender(r.renderToolbar)}},function(){x.default.routeTo(x.default.configuration.routes.realms,{args:[],trigger:true})})},renderTable:function e(t){var a=this;var r=this;var l=m.default.ClickableRow.extend({callback:function e(t){var a=(0,o.default)(t.target);if(a.parents().hasClass("fr-col-btn-2"))return;x.default.routeTo(x.default.configuration.routes.realmsResourceTypeEdit,{args:n.default.map([r.realmPath,this.model.id],encodeURIComponent),trigger:true})}});var s=[{name:"name",label:o.default.t("console.authorization.resourceTypes.list.grid.0"),cell:m.default.TemplateCell.extend({iconClass:"fa-cube",template:h.default,rendered:function e(){this.$el.find("i.fa").addClass(this.iconClass)}}),headerCell:m.default.FilterHeaderCell,sortType:"toggle",editable:false},{name:"",cell:m.default.TemplateCell.extend({className:"fr-col-btn-2",template:P.default,events:{"click [data-edit-item]":"editItem","click [data-delete-item]":"deleteItem"},editItem:function e(t){r.editRecord(t,this.model.id,x.default.configuration.routes.realmsResourceTypeEdit)},deleteItem:function e(t){r.onDeleteClick(t,{type:o.default.t("console.authorization.common.resourceType")},this.model.id)}}),sortable:false,editable:false}];var i=new f.default.Grid({columns:s,row:l,collection:this.data.items,className:"backgrid table table-hover",emptyText:o.default.t("console.common.noResults")});var u=new f.default.Extension.ThemeablePaginator({collection:this.data.items,windowSize:3});this.bindDefaultHandlers();this.parentRender(function(){a.renderToolbar();a.$el.find(".table-container").append(i.render().el);a.$el.find(".panel-body").append(u.render().el);t&&t()})},addNewResourceType:function e(){x.default.routeTo(x.default.configuration.routes.realmsResourceTypeNew,{args:[encodeURIComponent(this.realmPath)],trigger:true})}})},1654:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=a(6);var n=c(r);var l=a(159);var o=c(l);var s=a(1570);var i=c(s);var u=a(1555);var d=c(u);function c(e){return e&&e.__esModule?e:{default:e}}t.default=o.default.Model.extend({idAttribute:"uuid",urlRoot:d.default.substitute("__api__/resourcetypes"),defaults:function e(){return{uuid:null,description:"",actions:{},patterns:[]}},validate:function e(t){if(""===t.name.trim())return"errorNoName";if(0===t.name.indexOf("#"))return"errorCantStartWithHash";if(n.default.isEmpty(t.patterns))return"resTypeErrorNoPatterns";if(n.default.isEmpty(t.actions))return"resTypeErrorNoActions"},sync:function e(t,a,r){r=r||{};r.beforeSend=function(e){e.setRequestHeader("Accept-API-Version","protocol=1.0,resource=1.0")};r.error=i.default.errorHandler;"create"!==t.toLowerCase()&&null!==a.id||(r.url=this.urlRoot()+"/?_action=create");return o.default.Model.prototype.sync.call(this,t,a,r)}})}}]);
//# sourceMappingURL=116.66f151ab2c.js.map