(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[25,261,262,263,264,265],{1216:function(t,e,a){var n=a(62);t.exports=(n["default"]||n).template({1:function(t,e,a,n,i,s,l){var r,d=null!=e?e:t.nullContext||{};return'    <h5 class="list-group-header">'+t.escapeExpression((a.t||e&&e.t||a.helperMissing).call(d,"console.authorization.common.patterns",{name:"t",hash:{},data:i}))+'</h5>\n    <ul class="list-group">\n'+(null!=(r=a.each.call(d,null!=e?e.items:e,{name:"each",hash:{},fn:t.program(2,i,0,s,l),inverse:t.noop,data:i}))?r:"")+"    </ul>\n"},2:function(t,e,a,n,i,s,l){var r,d=t.lambda,o=t.escapeExpression;return'        <li class="'+(null!=(r=(a.equals||e&&e.equals||a.helperMissing).call(null!=e?e:t.nullContext||{},e,null!=(r=null!=l[2]?l[2].options:l[2])?r.justAdded:r,{name:"equals",hash:{},fn:t.program(3,i,0,s,l),inverse:t.noop,data:i}))?r:"")+' list-group-item" data-item-name="'+o(d(e,e))+'">\n            <span tabindex="0" data-delete class="fa fa-close pull-right"></span>\n            <span class="key">'+o(d(e,e))+"</span>\n        </li>\n"},3:function(t,e,a,n,i){return"text-success"},compiler:[7,">= 4.0.0"],main:function(t,e,a,n,i,s,l){var r,d=null!=e?e:t.nullContext||{},o=a.helperMissing,u=t.escapeExpression;return'<div class="list-table created-items">\n'+(null!=(r=a["if"].call(d,null!=e?e.items:e,{name:"if",hash:{},fn:t.program(1,i,0,s,l),inverse:t.noop,data:i}))?r:"")+'\n    <div class="editing">\n        <div class="form-group">\n            <input class="form-control" type="text" placeholder="'+u((a.t||e&&e.t||o).call(d,"console.authorization.resourceTypes.edit.addNewPatternPlaceholder",{name:"t",hash:{},data:i}))+'" data-editing-input/>\n        </div>\n        <button class="btn btn-default" data-add-item disabled>\n            <i class="fa fa-plus"></i> '+u((a.t||e&&e.t||o).call(d,"console.authorization.resourceTypes.edit.addPattern",{name:"t",hash:{},data:i}))+"\n        </button>\n    </div>\n</div>\n"},useData:true,useDepths:true})},1217:function(t,e,a){var n=a(62);t.exports=(n["default"]||n).template({compiler:[7,">= 4.0.0"],main:function(t,e,a,n,i){var s=null!=e?e:t.nullContext||{},l=a.helperMissing,r=t.escapeExpression;return'<div id="createdActions"></div>\n<div class="editing">\n    <div class="form-group">\n        <input class="form-control" type="text" placeholder="'+r((a.t||e&&e.t||l).call(s,"console.authorization.resourceTypes.edit.addNewActionPlaceholder",{name:"t",hash:{},data:i}))+'" data-editing-input/>\n    </div>\n    <button class="btn btn-default" data-add-item disabled>\n        <i class="fa fa-plus"></i> '+r((a.t||e&&e.t||l).call(s,"console.authorization.resourceTypes.edit.addAction",{name:"t",hash:{},data:i}))+"\n    </button>\n</div>\n"},useData:true})},1218:function(t,e,a){var n=a(62);t.exports=(n["default"]||n).template({1:function(t,e,a,n,i){var s,l=t.escapeExpression;return'<div class="form-group clearfix">\n    <label class="col-sm-2 control-label" for="resTypeDescription">'+l((a.t||e&&e.t||a.helperMissing).call(null!=e?e:t.nullContext||{},"console.common.description",{name:"t",hash:{},data:i}))+'</label>\n    <div class="col-sm-9">\n        <textarea class="form-control" id="resTypeDescription" data-field="description">'+l(t.lambda(null!=(s=null!=e?e.entity:e)?s.description:s,e))+"</textarea>\n    </div>\n</div>\n"},compiler:[7,">= 4.0.0"],main:function(t,e,a,n,i){var s,l=null!=e?e:t.nullContext||{},r=a.helperMissing,d=t.escapeExpression;return'<div class="form-group clearfix">\n    <label class="col-sm-2 control-label" for="resTypeName">'+d((a.t||e&&e.t||r).call(l,"console.common.name",{name:"t",hash:{},data:i}))+'</label>\n\n    <div class="col-sm-9">\n        <input type="text" id="resTypeName" class="form-control" value="'+d(t.lambda(null!=(s=null!=e?e.entity:e)?s.name:s,e))+'"\n               data-field="name" autofocus required\n               placeholder="'+d((a.t||e&&e.t||r).call(l,"common.form.validation.required",{name:"t",hash:{},data:i}))+'" name="entityName">\n    </div>\n</div>\n\n'+(null!=(s=a.unless.call(l,null!=e?e.newEntity:e,{name:"unless",hash:{},fn:t.program(1,i,0),inverse:t.noop,data:i}))?s:"")},useData:true})},1219:function(t,e,a){var n=a(62);t.exports=(n["default"]||n).template({compiler:[7,">= 4.0.0"],main:function(t,e,a,n,i){var s,l=null!=e?e:t.nullContext||{},r=a.helperMissing,d=t.escapeExpression;return(null!=(s=t.invokePartial(n["headers/_Title"],e,{name:"headers/_Title",hash:{title:"console.authorization.resourceTypes.edit.title"},data:i,helpers:a,partials:n,decorators:t.decorators}))?s:"")+'\n<div class="panel panel-default">\n    <div class="panel-body">\n        <div class="block clearfix">\n            <h3 class="block-header">'+d((a.t||e&&e.t||r).call(l,"common.form.details",{name:"t",hash:{},data:i}))+'</h3>\n            <div class="form-horizontal" id="resTypeSetting"></div>\n        </div>\n\n        <div class="block clearfix">\n            <h3 class="block-header">'+d((a.t||e&&e.t||r).call(l,"console.authorization.resourceTypes.edit.specifyPatterns",{name:"t",hash:{},data:i}))+'</h3>\n            <p class="panel-description">'+d((a.t||e&&e.t||r).call(l,"console.authorization.resourceTypes.edit.patternsDescription",{name:"t",hash:{},data:i}))+'</p>\n            <div class="form-inline" id="resTypePatterns"></div>\n        </div>\n\n        <div class="block clearfix">\n            <h3 class="block-header">'+d((a.t||e&&e.t||r).call(l,"console.authorization.resourceTypes.edit.specifyActions",{name:"t",hash:{},data:i}))+'</h3>\n            <p class="panel-description">'+d((a.t||e&&e.t||r).call(l,"console.authorization.resourceTypes.edit.actionsDescription",{name:"t",hash:{},data:i}))+'</p>\n            <div class="form-inline" id="resTypeActions"></div>\n        </div>\n    </div>\n\n    <div class="panel-footer clearfix">\n        <div class="pull-right">\n            <a class="btn btn-default" href="'+d((a.routeTo||e&&e.routeTo||r).call(l,"realmsResourceTypes",null!=e?e.realmPath:e,{name:"routeTo",hash:{},data:i}))+'">'+d((a.t||e&&e.t||r).call(l,"common.form.cancel",{name:"t",hash:{},data:i}))+'</a>\n            <button data-save class="btn btn-primary" type="button">'+d((a.t||e&&e.t||r).call(l,"common.form.create",{name:"t",hash:{},data:i}))+"</button>\n        </div>\n    </div>\n</div>\n"},usePartial:true,useData:true})},1220:function(t,e,a){var n=a(62);t.exports=(n["default"]||n).template({1:function(t,e,a,n,i){var s;return null!=(s=t.invokePartial(n["headers/_TitleWithSubAndIcon"],e,{name:"headers/_TitleWithSubAndIcon",hash:{icon:"cube",type:"console.authorization.common.resourceType",title:null!=(s=null!=e?e.entity:e)?s.name:s},data:i,indent:"    ",helpers:a,partials:n,decorators:t.decorators}))?s:""},compiler:[7,">= 4.0.0"],main:function(t,e,a,n,i){var s,l=null!=e?e:t.nullContext||{},r=t.escapeExpression,d=a.helperMissing;return(null!=(s=a["if"].call(l,null!=(s=null!=e?e.entity:e)?s.name:s,{name:"if",hash:{},fn:t.program(1,i,0),inverse:t.noop,data:i}))?s:"")+'\n<p class="panel-description">'+r(t.lambda(null!=(s=null!=e?e.entity:e)?s.description:s,e))+'</p>\n\n<div class="tab-menu">\n    <ul class="nav nav-tabs" role="tablist">\n        <li class="active"><a href="#patterns" role="tab" data-toggle="tab" aria-expanded="false">'+r((a.t||e&&e.t||d).call(l,"console.authorization.common.patterns",{name:"t",hash:{},data:i}))+'</a></li>\n        <li><a href="#actions" role="tab" data-toggle="tab" aria-expanded="false">'+r((a.t||e&&e.t||d).call(l,"console.authorization.common.actions",{name:"t",hash:{},data:i}))+'</a></li>\n        <li><a href="#settings" role="tab" data-toggle="tab" aria-expanded="false">'+r((a.t||e&&e.t||d).call(l,"common.form.details",{name:"t",hash:{},data:i}))+'</a></li>\n    </ul>\n</div>\n\n<div class="panel panel-default fr-panel-tab">\n    <div class="panel-body tab-content">\n        <div role="tabpanel" class="tab-pane active" id="patterns">\n            <div class="form-inline">\n                <p class="panel-description">'+r((a.t||e&&e.t||d).call(l,"console.authorization.resourceTypes.edit.patternsDescription",{name:"t",hash:{},data:i}))+'</p>\n                <div id="resTypePatterns"></div>\n            </div>\n        </div>\n        <div role="tabpanel" class="tab-pane" id="actions">\n            <div class="form-inline">\n                <p class="panel-description">'+r((a.t||e&&e.t||d).call(l,"console.authorization.resourceTypes.edit.actionsDescription",{name:"t",hash:{},data:i}))+'</p>\n                <div id="resTypeActions"></div>\n            </div>\n        </div>\n        <div role="tabpanel" class="tab-pane" id="settings">\n            <div class="form-horizontal" id="resTypeSetting"></div>\n        </div>\n    </div>\n    <div class="panel-footer clearfix">\n        <div class="pull-right">\n            <button data-save class="btn btn-primary" type="button">'+r((a.t||e&&e.t||d).call(l,"common.form.saveChanges",{name:"t",hash:{},data:i}))+"</button>\n        </div>\n    </div>\n</div>\n"},usePartial:true,useData:true})},1654:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:true});var n=a(6);var i=c(n);var s=a(159);var l=c(s);var r=a(1570);var d=c(r);var o=a(1555);var u=c(o);function c(t){return t&&t.__esModule?t:{default:t}}e.default=l.default.Model.extend({idAttribute:"uuid",urlRoot:u.default.substitute("__api__/resourcetypes"),defaults:function t(){return{uuid:null,description:"",actions:{},patterns:[]}},validate:function t(e){if(""===e.name.trim())return"errorNoName";if(0===e.name.indexOf("#"))return"errorCantStartWithHash";if(i.default.isEmpty(e.patterns))return"resTypeErrorNoPatterns";if(i.default.isEmpty(e.actions))return"resTypeErrorNoActions"},sync:function t(e,a,n){n=n||{};n.beforeSend=function(t){t.setRequestHeader("Accept-API-Version","protocol=1.0,resource=1.0")};n.error=d.default.errorHandler;"create"!==e.toLowerCase()&&null!==a.id||(n.url=this.urlRoot()+"/?_action=create");return l.default.Model.prototype.sync.call(this,e,a,n)}})},1830:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:true});a(1693);var n=a(6);var i=p(n);var s=a(19);var l=p(s);var r=a(114);var d=p(r);var o=a(27);var u=p(o);var c=a(59);var f=p(c);function p(t){return t&&t.__esModule?t:{default:t}}e.default=d.default.extend({noBaseTemplate:true,events:{"click [data-add-item]":"addItem","keyup [data-add-item]":"addItem","keyup [data-editing-input]":"addItem","click span[data-delete]":"deleteItem","keyup span[data-delete]":"deleteItem"},baseRender:function t(e,a,n,i){this.data=e;this.data.options={};this.template=a;this.element=n;this.renderParent(i)},renderParent:function t(e){this.parentRender(function(){delete this.data.options.justAdded;this.flashDomItem(this.$el.find(".text-success"),"text-success");e&&e()})},addItem:function t(e){var a=this;if("keyup"===e.type&&13!==e.keyCode){this.toggleAddButton(this.isValid(e));return}var n=this.getPendingItem(e);var s=-1;var l=0;if(!this.isValid(e)){f.default.sendEvent(u.default.EVENT_DISPLAY_MESSAGE_REQUEST,"invalidItem");this.flashDomItem(this.$el.find(".editing"),"text-danger");return}i.default.each(this.data.items,function(t){if(a.isExistingItem(n,t)){s=l;return}l++});if(s>=0){f.default.sendEvent(u.default.EVENT_DISPLAY_MESSAGE_REQUEST,"duplicateItem");this.flashDomItem(this.$el.find(".list-group-item:eq("+s+")"),"text-danger")}else{this.data.items.push(n);this.data.options.justAdded=n;this.updateEntity&&this.updateEntity();this.renderParent(function(){a.$el.find(".editing input[type=text]").focus()})}},deleteItem:function t(e){if("keyup"===e.type&&13!==e.keyCode)return;this.data.items=this.getCollectionWithout(e);this.updateEntity&&this.updateEntity();this.renderParent()},flashDomItem:function t(e,a){e.addClass(a);l.default.doTimeout(i.default.uniqueId(a),2e3,function(){e.removeClass(a)})},toggleAddButton:function t(e){this.$el.find("[data-add-item]").prop("disabled",!e)}})},1831:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:true});var n=a(6);var i=c(n);var s=a(19);var l=c(s);var r=a(1216);var d=c(r);var o=a(1830);var u=c(o);function c(t){return t&&t.__esModule?t:{default:t}}function f(){}f.prototype=new u.default;f.prototype.render=function(t,e,a,n){this.data={};this.entity=t;this.data.items=e||[];this.baseRender(this.data,d.default,a,n)};f.prototype.getPendingItem=function(){return this.$el.find("[data-editing-input]").val().toString().trim()};f.prototype.isValid=function(t){return""!==this.getPendingItem(t)};f.prototype.isExistingItem=function(t,e){return t===e};f.prototype.getCollectionWithout=function(t){var e=(0,l.default)(t.target).parents("li").data("item-name").toString();return i.default.without(this.data.items,e)};f.prototype.updateEntity=function(){this.entity.patterns=this.data.items};e.default=f},1832:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:true});var n=a(6);var i=y(n);var s=a(19);var l=y(s);var r=a(114);var d=y(r);var o=a(1187);var u=y(o);var c=a(27);var f=y(c);var p=a(59);var h=y(p);var m=a(1217);var v=y(m);function y(t){return t&&t.__esModule?t:{default:t}}e.default=d.default.extend({element:"#actions",template:v.default,noBaseTemplate:true,events:{"click [data-toggle-item]":"toggleRadio","keyup [data-toggle-item]":"toggleRadio","click [data-add-item]":"addItem","keyup [data-add-item]":"addItem","keyup [data-editing-input]":"addItem","click button[data-delete]":"deleteItem","keyup button[data-delete]":"deleteItem"},render:function t(e,a,n){var s=this;i.default.extend(this.data,e);this.element=a;this.parentRender(function(){s.renderActionsTable(n)})},renderActionsTable:function t(e){var a=this;var n=(0,u.default)({items:this.data.actions});a.$el.find("#createdActions").html(n);e&&e()},updateEntity:function t(){var e=null;if(this.data.actions.length){e={};this.data.actions.forEach(function(t){e[t.name]=t.value})}this.data.entity.actions=e},isExistingItem:function t(e,a){return e.name===a.name},addItem:function t(e){var a=this;var n=this.$el.find("[data-editing-input]").val();if("keyup"===e.type&&13!==e.keyCode){this.toggleAddButton(""!==n);return}var s={name:n,value:true};var l=-1;var r=0;if(""===s.name){h.default.sendEvent(f.default.EVENT_DISPLAY_MESSAGE_REQUEST,"invalidItem");return}i.default.each(this.data.actions,function(t){if(a.isExistingItem(s,t)){l=r;return}r++});if(l>=0)h.default.sendEvent(f.default.EVENT_DISPLAY_MESSAGE_REQUEST,"duplicateItem");else{this.data.actions.push(s);this.updateEntity();this.renderActionsTable(function(){a.toggleAddButton(false);a.$el.find("[data-editing-input]").val("").focus()})}},deleteItem:function t(e){if("keyup"===e.type&&13!==e.keyCode)return;var a=(0,l.default)(e.target),n=a.closest("tr").find(".action-name").text().trim();this.data.actions=i.default.without(this.data.actions,i.default.find(this.data.actions,{name:n}));this.updateEntity();this.renderActionsTable()},toggleRadio:function t(e){var a=(0,l.default)(e.target),n,s;n=a.val()||a.find("input").val();s=a.closest("tr").find(".action-name").text().trim();if(!s)return;i.default.find(this.data.actions,function(t){return t.name===s}).value="true"===n;this.updateEntity()},toggleAddButton:function t(e){this.$el.find("[data-add-item]").prop("disabled",!e)}})},881:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:true});a(1580);var n=a(6);var i=C(n);var s=a(19);var l=C(s);var r=a(114);var d=C(r);var o=a(27);var u=C(o);var c=a(1220);var f=C(c);var p=a(59);var h=C(p);var m=a(1533);var v=C(m);var y=a(560);var g=C(y);var b=a(1219);var E=C(b);var T=a(1832);var x=C(T);var _=a(1654);var A=C(_);var S=a(1831);var I=C(S);var k=a(1218);var P=C(k);var M=a(73);var D=C(M);function C(t){return t&&t.__esModule?t:{default:t}}e.default=d.default.extend({events:{"click [data-save]":"submitForm","click [data-delete]":"onDeleteClick"},tabs:[{name:"patterns",attr:["patterns"]},{name:"actions",attr:["actions"]},{name:"settings",attr:["name","description"]}],onModelSync:function t(){this.renderAfterSyncModel()},render:function t(e,a){var n;this.data.realmPath=e[0];a&&(this.renderCallback=a);2===e.length&&(n=e[1]);if(n){this.template=f.default;this.data.headerActions=[{actionPartial:"form/_Button",data:"delete",title:"common.form.delete",icon:"fa-times"}];this.model=new A.default({uuid:n});this.listenTo(this.model,"sync",this.onModelSync);this.model.fetch()}else{this.template=E.default;this.data.newEntity=true;this.model=new A.default;this.listenTo(this.model,"sync",this.onModelSync);this.renderAfterSyncModel()}},renderAfterSyncModel:function t(){var e=this,a=this.data;this.data.entity=i.default.cloneDeep(this.model.attributes);a.actions=[];i.default.each(this.data.entity.actions,function(t,e){a.actions.push({name:e,value:t})});a.actions.sort();this.initialActions=i.default.cloneDeep(a.actions);this.initialPatterns=i.default.cloneDeep(a.entity.patterns);this.parentRender(function(){var t=[],a=function e(){return(t[t.length]=l.default.Deferred()).resolve},n=e.data;e.$el.find(".tab-menu .nav-tabs").tabdrop();e.renderSettings();e.patternsView=new I.default;e.patternsView.render(n.entity,n.entity.patterns,"#resTypePatterns",a());e.actionsList=new x.default;e.actionsList.render(n,"#resTypeActions",a());Promise.all(t).then(function(){v.default.setActiveTab(e);e.renderCallback&&e.renderCallback()})})},renderSettings:function t(){var e=this;var a=(0,P.default)(this.data);e.$el.find("#resTypeSetting").html(a);e.$el.find("#resTypeSetting [autofocus]").focus()},updateFields:function t(){var e=this.data.entity,a=this.$el.find("[data-field]"),n;i.default.each(a,function(t){n=t.getAttribute("data-field");"checkbox"===t.type?t.checked&&e[n].push(t.value):e[n]=t.value})},submitForm:function t(e){e.preventDefault();var a=this,n,s=i.default.clone(this.model.attributes),l=this.$el.find(".tab-pane.active"),r;this.updateFields();this.activeTabId=this.$el.find(".tab-menu li.active a").attr("href");if(this.data.newEntity)i.default.extend(this.model.attributes,this.data.entity);else{r=i.default.pick(this.data.entity,this.tabs[l.index()].attr);i.default.extend(this.model.attributes,r)}n=this.model.save();if(n)n.then(function(){a.data.newEntity?D.default.routeTo(D.default.configuration.routes.realmsResourceTypeEdit,{args:i.default.map([a.data.realmPath,a.model.id],encodeURIComponent),trigger:true}):h.default.sendEvent(u.default.EVENT_DISPLAY_MESSAGE_REQUEST,"changesSaved")});else{i.default.extend(this.model.attributes,s);h.default.sendEvent(u.default.EVENT_DISPLAY_MESSAGE_REQUEST,this.model.validationError)}},onDeleteClick:function t(e){e.preventDefault();v.default.showConfirmationBeforeDeleting({type:l.default.t("console.authorization.common.resourceType")},i.default.bind(this.deleteResourceType,this))},deleteResourceType:function t(){var e=this,a=function t(){D.default.routeTo(D.default.configuration.routes.realmsResourceTypes,{args:[encodeURIComponent(e.data.realmPath)],trigger:true});h.default.sendEvent(u.default.EVENT_DISPLAY_MESSAGE_REQUEST,"changesSaved")},n=function t(e,a){g.default.addMessage({response:a,type:g.default.TYPE_DANGER})};this.model.destroy({success:a,error:n,wait:true})}})}}]);
//# sourceMappingURL=25.c0103b5061.js.map