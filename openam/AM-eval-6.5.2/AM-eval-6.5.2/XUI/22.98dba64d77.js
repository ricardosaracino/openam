(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[22,224,225,226,227,231,358],{1174:function(e,t,a){var r=a(62);e.exports=(r["default"]||r).template({1:function(e,t,a,r,n){return"<td>"+e.escapeExpression(e.lambda(null!=t?t.data:t,t))+"</td>"},compiler:[7,">= 4.0.0"],main:function(e,t,a,r,n){var l,o=null!=t?t:e.nullContext||{},i=a.helperMissing,u=e.escapeExpression;return(null!=(l=a.each.call(o,null!=t?t.columns:t,{name:"each",hash:{},fn:e.program(1,n,0),inverse:e.noop,data:n}))?l:"")+'\n<td class="fr-col-btn-2">\n    <div class="btn-group">\n        <button class="btn btn-link" data-edit-row title="'+u((a.t||t&&t.t||i).call(o,"common.form.edit",{name:"t",hash:{},data:n}))+'"><i class="fa fa-pencil"></i></button>\n        <button class="btn btn-link" data-delete-row title="'+u((a.t||t&&t.t||i).call(o,"common.form.delete",{name:"t",hash:{},data:n}))+'"><i class="fa fa-close"></i></button>\n    </div>\n</td>\n'},useData:true})},1175:function(e,t,a){var r=a(62);e.exports=(r["default"]||r).template({1:function(e,t,a,r,n){var l;return null!=(l=a["if"].call(null!=t?t:e.nullContext||{},null!=t?t.selectOptions:t,{name:"if",hash:{},fn:e.program(2,n,0),inverse:e.program(6,n,0),data:n}))?l:""},2:function(e,t,a,r,n){var l,o,i=null!=t?t:e.nullContext||{};return'    <td class="form-group">\n        <select class="form-control" data-row-'+e.escapeExpression((o=null!=(o=a.index||n&&n.index)?o:a.helperMissing,"function"===typeof o?o.call(i,{name:"index",hash:{},data:n}):o))+">\n"+(null!=(l=a.each.call(i,null!=t?t.selectOptions:t,{name:"each",hash:{},fn:e.program(3,n,0),inverse:e.noop,data:n}))?l:"")+"        </select>\n    </td>\n"},3:function(e,t,a,r,n){var l,o=e.lambda,i=e.escapeExpression;return'            <option value="'+i(o(null!=t?t.value:t,t))+'" '+(null!=(l=a["if"].call(null!=t?t:e.nullContext||{},null!=t?t.isSelected:t,{name:"if",hash:{},fn:e.program(4,n,0),inverse:e.noop,data:n}))?l:"")+">"+i(o(null!=t?t.value:t,t))+"</option>\n"},4:function(e,t,a,r,n){return"selected"},6:function(e,t,a,r,n){var l,o=e.lambda,i=e.escapeExpression,u=null!=t?t:e.nullContext||{},s=a.helperMissing;return'    <td class="form-group">\n        <input class="form-control" type="text" value="'+i(o(null!=t?t.data:t,t))+'" data-add-row placeholder="'+i((a.t||t&&t.t||s).call(u,"common.form.addValue",{name:"t",hash:{},data:n}))+'" data-row-'+i((l=null!=(l=a.index||n&&n.index)?l:s,"function"===typeof l?l.call(u,{name:"index",hash:{},data:n}):l))+' data-validator="'+i(o(null!=t?t.required:t,t))+'">\n    </td>\n'},compiler:[7,">= 4.0.0"],main:function(e,t,a,r,n){var l,o=null!=t?t:e.nullContext||{};return(null!=(l=a.each.call(o,null!=t?t.columns:t,{name:"each",hash:{},fn:e.program(1,n,0),inverse:e.noop,data:n}))?l:"")+'<td class="fr-col-btn-2">\n    <div class="btn-group">\n        <button class="btn btn-link" data-add-row title="'+e.escapeExpression((a.t||t&&t.t||a.helperMissing).call(o,"common.form.add",{name:"t",hash:{},data:n}))+'"><i class="fa fa-plus"></i></button>\n    </div>\n</td>\n'},useData:true})},1176:function(e,t,a){var r=a(62);e.exports=(r["default"]||r).template({1:function(e,t,a,r,n){return"<th>"+e.escapeExpression(e.lambda(t,t))+"</th>"},compiler:[7,">= 4.0.0"],main:function(e,t,a,r,n){var l;return'<div class="table-container am-inline-edit-table">\n    <table class="table">\n        <thead>\n            <tr>\n                '+(null!=(l=a.each.call(null!=t?t:e.nullContext||{},null!=t?t.headers:t,{name:"each",hash:{},fn:e.program(1,n,0),inverse:e.noop,data:n}))?l:"")+'\n                <th class="fr-col-btn-2"></th>\n            </tr>\n        </thead>\n        <tbody></tbody>\n    </table>\n</div>\n'},useData:true})},1177:function(e,t,a){var r=a(62);e.exports=(r["default"]||r).template({1:function(e,t,a,r,n){var l;return null!=(l=a["if"].call(null!=t?t:e.nullContext||{},null!=t?t.selectOptions:t,{name:"if",hash:{},fn:e.program(2,n,0),inverse:e.program(6,n,0),data:n}))?l:""},2:function(e,t,a,r,n){var l,o,i=null!=t?t:e.nullContext||{};return'<td class="form-group">\n    <select class="form-control" data-save-row data-row-'+e.escapeExpression((o=null!=(o=a.index||n&&n.index)?o:a.helperMissing,"function"===typeof o?o.call(i,{name:"index",hash:{},data:n}):o))+">\n"+(null!=(l=a.each.call(i,null!=t?t.selectOptions:t,{name:"each",hash:{},fn:e.program(3,n,0),inverse:e.noop,data:n}))?l:"")+"    </select>\n</td>\n"},3:function(e,t,a,r,n){var l,o=e.lambda,i=e.escapeExpression;return'        <option value="'+i(o(null!=t?t.value:t,t))+'" '+(null!=(l=a["if"].call(null!=t?t:e.nullContext||{},null!=t?t.isSelected:t,{name:"if",hash:{},fn:e.program(4,n,0),inverse:e.noop,data:n}))?l:"")+">"+i(o(null!=t?t.value:t,t))+"</option>\n"},4:function(e,t,a,r,n){return"selected"},6:function(e,t,a,r,n){var l,o=e.lambda,i=e.escapeExpression,u=null!=t?t:e.nullContext||{},s=a.helperMissing;return'<td class="form-group">\n    <input class="form-control" data-save-row type="text" value="'+i(o(null!=t?t.data:t,t))+'" placeholder="'+i((a.t||t&&t.t||s).call(u,"common.form.addValue",{name:"t",hash:{},data:n}))+'" data-row-'+i((l=null!=(l=a.index||n&&n.index)?l:s,"function"===typeof l?l.call(u,{name:"index",hash:{},data:n}):l))+' data-validator="'+i(o(null!=t?t.required:t,t))+'">\n</td>\n'},compiler:[7,">= 4.0.0"],main:function(e,t,a,r,n){var l,o=null!=t?t:e.nullContext||{},i=a.helperMissing,u=e.escapeExpression;return(null!=(l=a.each.call(o,null!=t?t.columns:t,{name:"each",hash:{},fn:e.program(1,n,0),inverse:e.noop,data:n}))?l:"")+'<td class="fr-col-btn-2">\n    <div class="btn-group">\n        <button class="btn btn-link" data-save-row title="'+u((a.t||t&&t.t||i).call(o,"common.form.update",{name:"t",hash:{},data:n}))+'"><i class="fa fa-check"></i></button>\n        <button class="btn btn-link" data-undo-edit-row title="'+u((a.t||t&&t.t||i).call(o,"common.form.cancel",{name:"t",hash:{},data:n}))+'"><i class="fa fa-undo"></i></button>\n    </div>\n</td>\n'},useData:true})},1196:function(e,t,a){var r=a(62);e.exports=(r["default"]||r).template({compiler:[7,">= 4.0.0"],main:function(e,t,a,r,n){return'<div class="panel panel-default">\n    <div data-panel-body class="panel-body" role="panel"></div>\n    <div data-panel-footer class="panel-footer clearfix"></div>\n</div>\n'},useData:true})},1302:function(e,t,a){var r=a(62);e.exports=(r["default"]||r).template({compiler:[7,">= 4.0.0"],main:function(e,t,a,r,n){var l;return(null!=(l=e.invokePartial(r["headers/_Title"],t,{name:"headers/_Title",hash:{title:null!=t?t.title:t},data:n,helpers:a,partials:r,decorators:e.decorators}))?l:"")+"\n<form data-json-form></form>\n"},usePartial:true,useData:true})},1573:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=function(){function e(e,t){var a=[];var r=true;var n=false;var l=void 0;try{for(var o=e[Symbol.iterator](),i;!(r=(i=o.next()).done);r=true){a.push(i.value);if(t&&a.length===t)break}}catch(e){n=true;l=e}finally{try{!r&&o["return"]&&o["return"]()}finally{if(n)throw l}}return a}return function(t,a){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();var n=a(6);var l=m(n);var o=a(169);var i=m(o);var u=a(27);var s=m(u);var d=a(168);var c=m(d);var f=a(866);var v=m(f);var h=a(865);var p=m(h);function m(e){return e&&e.__esModule?e:{default:e}}var w=new i.default(""+s.default.host+s.default.context+"/json");var y="server-default";var g="advanced";var b=function e(t){return"serverDefaults"===t};var x=function e(t){return b(t)?y:t};var E=function e(t){return l.default.map(t,function(e,t){return{key:t,value:e}})};var S=function e(t){return l.default.reduce(t,function(e,t){e[t.key]=t.value;return e},{})};var R=function e(t,a){return w.serviceCall({url:(0,c.default)("/global-config/servers/"+t+"/properties/"+a+"?_action=schema",{realm:false}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST"}).then(function(e){return new v.default(e)})};var I=function e(t,a){return w.serviceCall({url:(0,c.default)("/global-config/servers/"+t+"/properties/"+a,{realm:false}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"}}).then(function(e){a===g&&(e=l.default.sortBy(E(e),function(e){return e.key}));return new p.default(e)})};var O=function e(t,a){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:y;var n=a;t===g&&(n=S(a[g]));return w.serviceCall({url:(0,c.default)("/global-config/servers/"+r+"/properties/"+t,{realm:false}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"PUT",data:JSON.stringify(n)})};w.servers={clone:function e(t,a){return w.serviceCall({url:(0,c.default)("/global-config/servers/"+t+"?_action=clone",{realm:false}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST",data:JSON.stringify({clonedUrl:a})})},get:function e(t,a){return Promise.all([R(t,a),I(t,a)]).then(function(e){return{schema:e[0],values:e[1]}})},getWithDefaults:function e(t,a){var n=x(t);var l=[w.servers.get(n,a)];b(t)||"directoryConfiguration"===a||l.push(I(y,a));return Promise.all(l).then(function(e){var t=r(e,2),a=t[0],n=t[1],l=void 0===n?{}:n;return{schema:a.schema,values:a.values,defaultValues:l}})},getUrl:function e(t){return w.serviceCall({url:(0,c.default)("/global-config/servers/"+t,{realm:false}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"}}).then(function(e){return e.url},function(){return})},getAll:function e(){return w.serviceCall({url:(0,c.default)("/global-config/servers?_queryFilter=true",{realm:false}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"}}).then(function(e){return l.default.reject(e.result,{_id:y})})},remove:function e(t){return w.serviceCall({url:(0,c.default)("/global-config/servers/"+t,{realm:false}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"DELETE"})},create:function e(t){return w.serviceCall({url:(0,c.default)("/global-config/servers?_action=create",{realm:false}),headers:{"Accept-API-Version":"protocol=1.0,resource=1.0"},type:"POST",data:JSON.stringify(t)})},update:function e(t,a,r){return O(t,a,x(r))},ADVANCED_SECTION:g,DEFAULT_SERVER:y};t.default=w},1677:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=a(6);var n=p(r);var l=a(159);var o=p(l);var i=a(1177);var u=p(i);var s=a(1175);var d=p(s);var c=a(1174);var f=p(c);var v=a(586);var h=p(v);function p(e){return e&&e.__esModule?e:{default:e}}var m=function e(t,a){return n.default.map(t,function(e){return{value:e,isSelected:e===a}})};var w=function e(t,a){var r=[];n.default.each(a.properties,function(e,l){r[e.propertyOrder]={data:t[l],required:!!n.default.includes(a.required,l)&&"required"};e.enum&&(r[e.propertyOrder].selectOptions=m(e.enum,t[l]))});return r};var y=function e(t,a){return{columns:w(t,a)}};var g=function e(t,a){var r={};n.default.each(t.properties,function(e,t){var n="input";e.enum&&(n="select");var l=a.find(n+"[data-row-"+e.propertyOrder+"]").val();r[t]=l?l.trim():l});return r};t.default=o.default.View.extend({events:{"click button[data-add-row]":"addRow","keyup [data-add-row]":"addRow","click button[data-save-row]":"saveRow","blur [data-save-row]":"stopEvent","keyup [data-save-row]":"saveRow","dblclick td":"editRow","keyup [data-edit-row]":"editRow","mouseup [data-edit-row]":"editRow","click [data-delete-row]":"deleteRow","click [data-undo-edit-row]":"exitEditMode"},tagName:"tr",initialize:function e(t,a){this.rowData=t;this.rowSchema=a},renderTemplate:function e(t){var a=t(y(this.rowData,this.rowSchema));this.$el.html(a);h.default.bindValidators(this.$el)},renderInReadOnlyMode:function e(){this.$el.removeClass("am-inline-edit-table-row");this.renderTemplate(f.default);return this},renderInEditMode:function e(){this.$el.addClass("am-inline-edit-table-row");this.renderTemplate(u.default);return this},renderInNewMode:function e(){this.$el.addClass("am-inline-edit-table-row");this.renderTemplate(d.default);return this},editRow:function e(t){if("keyup"===t.type&&13!==t.keyCode)return;this.trigger("edit",this)},deleteRow:function e(){this.trigger("delete",this)},exitEditMode:function e(){this.trigger("exitEditMode",this)},focus:function e(){this.$el.find("input:first").focus()},addRow:function e(t){if("keyup"===t.type&&13!==t.keyCode)return;h.default.validateAllFields(this.$el);var a=g(this.rowSchema,this.$el);if(this.isDataValid(a,this.rowSchema)){this.rowData=a;this.trigger("add",this)}},saveRow:function e(t){if("keyup"===t.type&&13!==t.keyCode)return;h.default.validateAllFields(this.$el);var a=g(this.rowSchema,this.$el);if(this.isDataValid(a,this.rowSchema)){this.rowData=a;this.trigger("exitEditMode",this)}},isDataValid:function e(t,a){return n.default.every(t,function(e,t){return void 0!==e&&e.length>0||!n.default.includes(a.required,t)})},getData:function e(){return this.rowData}})},1678:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=a(6);var n=v(r);var l=a(19);var o=v(l);var i=a(159);var u=v(i);var s=a(1677);var d=v(s);var c=a(1176);var f=v(c);function v(e){return e&&e.__esModule?e:{default:e}}var h={required:["key"],properties:{key:{title:o.default.t("common.form.propertyName"),propertyOrder:0},value:{title:o.default.t("common.form.propertyValue"),propertyOrder:1}}};t.default=u.default.View.extend({template:f.default,initialize:function e(t){var a=t.values,r=void 0===a?[]:a,n=t.rowSchema,l=void 0===n?h:n;this.values=r;this.rowSchema=l;this.rows=[]},getHeaders:function e(){var t=[];n.default.each(this.rowSchema.properties,function(e){t[e.propertyOrder]=e.title});return t},getRenderData:function e(){return{headers:this.getHeaders()}},render:function e(){var t=this;this.$el.empty();var a=this.template(this.getRenderData());this.$el.html(a);this.tBody=this.$el.find("tbody");n.default.each(this.values,function(e){var a=t.initRow(e);t.tBody.append(a.renderInReadOnlyMode().$el);t.rows.push(a)});this.appendEmptyNewRowToTheBottom();return this},initRow:function e(){var t=this;var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var r=new d.default(a,this.rowSchema);var l=function e(a){if(a===t.currentlyEditedRow||a===t.newRow)return;t.currentlyEditedRow&&t.currentlyEditedRow.renderInReadOnlyMode();a.renderInEditMode().focus();t.currentlyEditedRow=a;t.newRow.$el.hide()};var o=function e(){if(t.currentlyEditedRow){t.currentlyEditedRow.renderInReadOnlyMode();t.currentlyEditedRow=void 0}t.newRow.$el.show()};var i=function e(a){t.rows.push(a);a.renderInReadOnlyMode();t.appendEmptyNewRowToTheBottom()};var u=function e(a){t.rows=n.default.without(t.rows,a);a.remove()};r.on("edit",l);r.on("exitEditMode",o);r.on("delete",u);r.on("add",i);return r},appendEmptyNewRowToTheBottom:function e(){var t=this.initRow();this.tBody.append(t.renderInNewMode().$el);this.newRow=t},getData:function e(){return n.default.map(this.rows,function(e){return e.getData()})},isValid:function e(){return true},setData:function e(t){this.values=t;this.rows=[];this.render()}})},2029:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=a(159);var n=i(r);var l=a(1196);var o=i(l);function i(e){return e&&e.__esModule?e:{default:e}}var u=n.default.View.extend({template:o.default,initialize:function e(t){var a=t.createBody,r=t.createFooter;this.createBody=a;this.createFooter=r},getBody:function e(){return this.panelBody},render:function e(){var t=this.template();this.$el.html(t);this.panelBody=this.createBody();this.$el.find("[data-panel-body]").append(this.panelBody.render().$el);this.$el.find("[data-panel-footer]").append(this.createFooter().render().$el);return this}});t.default=u},885:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=function(){function e(e,t){var a=[];var r=true;var n=false;var l=void 0;try{for(var o=e[Symbol.iterator](),i;!(r=(i=o.next()).done);r=true){a.push(i.value);if(t&&a.length===t)break}}catch(e){n=true;l=e}finally{try{!r&&o["return"]&&o["return"]()}finally{if(n)throw l}}return a}return function(t,a){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();var n=a(6);var l=B(n);var o=a(19);var i=B(o);var u=a(114);var s=B(u);var d=a(27);var c=B(d);var f=a(59);var v=B(f);var h=a(1528);var p=B(h);var m=a(1302);var w=B(m);var y=a(1678);var g=B(y);var b=a(866);var x=B(b);var E=a(865);var S=B(E);var R=a(560);var I=B(R);var O=a(2029);var D=B(O);var _=a(1592);var A=B(_);var V=a(1573);var C=B(V);var M=a(1602);var k=B(M);var T=a(1591);var N=B(T);var P=a(1590);var $=B(P);function B(e){return e&&e.__esModule?e:{default:e}}function j(e,t,a){t in e?Object.defineProperty(e,t,{value:a,enumerable:true,configurable:true,writable:true}):e[t]=a;return e}function F(e){return(0,l.default)(e.raw.properties).map(function(e,t){return{id:t,order:e.propertyOrder,title:e.title}}).sortBy("order").value()}function J(e){return e===C.default.servers.ADVANCED_SECTION}t.default=s.default.extend({template:w.default,events:{"click [data-save]":"onSave","click [data-inherit-value]":"toggleInheritance"},getJSONSchemaView:function e(){return this.subview.getBody()},render:function e(t){var a=this;var n=r(t,2),o=n[0],u=n[1];this.sectionId=u;this.serverId=o;this.data.title=i.default.t("console.navigation."+this.sectionId+".title");C.default.servers.getWithDefaults(this.serverId,this.sectionId).then(function(e){var t=e.defaultValues,r=e.schema,n=e.values;a.schema=r;a.values=n;a.defaultValues=t;a.parentRender(function(){if(J(a.sectionId))a.subview=new D.default({createBody:function e(){return new g.default({values:l.default.cloneDeep(a.values.raw)})},createFooter:function e(){return new A.default({partial:"form/_JSONSchemaFooter"})}});else{var e=F(r);a.subview=new N.default({tabs:e,createBody:function e(t){return"array"===r.raw.properties[t].type?new g.default({values:l.default.cloneDeep(a.values.raw)[t],rowSchema:r.raw.properties[t].items}):new p.default({schema:new x.default(r.raw.properties[t]),values:new S.default(l.default.cloneDeep(a.values.raw)[t])})},createFooter:function e(){return new A.default({partial:"form/_JSONSchemaFooter"})}});var t={properties:a.schema.raw.properties,onChange:function e(t,r){a.subview.setTabId(t);(0,k.default)(a.$el.find('[data-schemapath="root.'+r+'"]'))}};a.$el.find("[data-tab-search]").append(new $.default(t).render().$el)}a.subview.setElement("[data-json-form]");a.subview.render()})})},getSection:function e(){return this.sectionId===C.default.servers.ADVANCED_SECTION?this.sectionId:this.subview.getTabId()},updateValues:function e(){this.values=this.values.extend(j({},this.getSection(),this.getJSONSchemaView().getData()))},onSave:function e(){if(!this.getJSONSchemaView().isValid()){I.default.addMessage({message:i.default.t("common.form.validation.errorsNotSaved"),type:I.default.TYPE_DANGER});return}this.updateValues();var t=J(this.sectionId)?this.values:this.values.removeNullPasswords(this.schema);C.default.servers.update(this.sectionId,t.raw,this.serverId).then(function(){v.default.sendEvent(c.default.EVENT_DISPLAY_MESSAGE_REQUEST,"changesSaved")},function(e){I.default.addMessage({response:e,type:I.default.TYPE_DANGER})})},toggleInheritance:function e(t){var a=t.currentTarget;var r=function e(t){return t.slice(5)};var n=r(a.getAttribute("data-schemapath"));var l="true"===a.getAttribute("data-inherit-value");var o=void 0;o=l?this.values.raw[this.subview.getTabId()][n].value:this.defaultValues.raw[this.subview.getTabId()][n];this.getJSONSchemaView().subview.toggleInheritance(n,o,!l)}})}}]);
//# sourceMappingURL=22.98dba64d77.js.map