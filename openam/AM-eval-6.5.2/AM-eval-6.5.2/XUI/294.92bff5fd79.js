(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[294],{1246:function(a,n,e){var t=e(62);a.exports=(t["default"]||t).template({1:function(a,n,e,t,l,i,s){var o,c,r=null!=n?n:a.nullContext||{},d=e.helperMissing,u="function",p=a.escapeExpression;return"                                <option "+(null!=(o=(e.equals||n&&n.equals||d).call(r,null!=n?n.uuid:n,null!=(o=null!=s[1]?s[1].entity:s[1])?o.resourceTypeUuid:o,{name:"equals",hash:{},fn:a.program(2,l,0,i,s),inverse:a.noop,data:l}))?o:"")+' value="'+p((c=null!=(c=e.uuid||(null!=n?n.uuid:n))?c:d,typeof c===u?c.call(r,{name:"uuid",hash:{},data:l}):c))+'">'+p((c=null!=(c=e.name||(null!=n?n.name:n))?c:d,typeof c===u?c.call(r,{name:"name",hash:{},data:l}):c))+"</option>\n"},2:function(a,n,e,t,l){return"selected"},compiler:[7,">= 4.0.0"],main:function(a,n,e,t,l,i,s){var o,c=a.escapeExpression,r=null!=n?n:a.nullContext||{},d=e.helperMissing;return(null!=(o=a.invokePartial(t["headers/_TitleWithSubAndIcon"],n,{name:"headers/_TitleWithSubAndIcon",hash:{detail:null!=n?n.status:n,icon:"gavel",type:"console.authorization.common.policy",title:null!=(o=null!=n?n.entity:n)?o.name:o},data:l,helpers:e,partials:t,decorators:a.decorators}))?o:"")+'\n<p class="panel-description">'+c(a.lambda(null!=(o=null!=n?n.entity:n)?o.description:o,n))+'</p>\n\n<div class="tab-menu">\n    <ul class="nav nav-tabs" role="tablist">\n        <li class="active">\n            <a href="#summaryTab" role="tab" data-toggle="tab" aria-expanded="false">\n                '+c((e.t||n&&n.t||d).call(r,"console.authorization.common.summary",{name:"t",hash:{},data:l}))+'\n            </a>\n        </li>\n        <li>\n            <a href="#resourcesTab" role="tab" data-toggle="tab" aria-expanded="false">\n                '+c((e.t||n&&n.t||d).call(r,"console.authorization.common.resources",{name:"t",hash:{},data:l}))+'\n            </a>\n        </li>\n        <li>\n            <a href="#actionsTab" role="tab" data-toggle="tab" aria-expanded="false">\n                '+c((e.t||n&&n.t||d).call(r,"console.authorization.common.actions",{name:"t",hash:{},data:l}))+'\n            </a>\n        </li>\n        <li>\n            <a href="#subjectsTab" role="tab" data-toggle="tab" aria-expanded="false">\n                '+c((e.t||n&&n.t||d).call(r,"console.authorization.common.subjects",{name:"t",hash:{},data:l}))+'\n            </a>\n        </li>\n        <li>\n            <a href="#environmentsTab" role="tab" data-toggle="tab" aria-expanded="false">\n                '+c((e.t||n&&n.t||d).call(r,"console.authorization.common.environments",{name:"t",hash:{},data:l}))+'\n            </a>\n        </li>\n        <li>\n            <a href="#responseAttributesTab" role="tab" data-toggle="tab" aria-expanded="false">\n                '+c((e.t||n&&n.t||d).call(r,"console.authorization.common.responseAttributes",{name:"t",hash:{},data:l}))+'\n            </a>\n        </li>\n    </ul>\n</div>\n\n<div class="panel panel-default fr-panel-tab">\n\n    <div class="panel-body tab-content">\n        <div role="tabpanel" class="tab-pane active" id="summaryTab"></div>\n\n        <div role="tabpanel" class="tab-pane" id="resourcesTab">\n            <p class="panel-description">'+c((e.t||n&&n.t||d).call(r,"console.authorization.policies.edit.resourcesDescription",{name:"t",hash:{},data:l}))+'</p>\n            <div class="form-horizontal">\n                <div class="form-group clearfix">\n                    <label class="col-sm-2 control-label" for="resTypesSelection">\n                        '+c((e.t||n&&n.t||d).call(r,"console.authorization.common.resourceType",{name:"t",hash:{},data:l}))+'\n                    </label>\n\n                    <div class="col-sm-9">\n                        <select class="selectize" id="resTypesSelection">\n'+(null!=(o=e.each.call(r,null!=(o=null!=n?n.options:n)?o.availableResourceTypes:o,{name:"each",hash:{},fn:a.program(1,l,0,i,s),inverse:a.noop,data:l}))?o:"")+'                        </select>\n\n                        <span class="input-helper-text">\n                            '+c((e.t||n&&n.t||d).call(r,"console.authorization.policies.edit.selectResourceTypeHelper",{name:"t",hash:{},data:l}))+'\n                        </span>\n                    </div>\n                </div>\n            </div>\n            <div id="editResources" class="form-horizontal clearfix"></div>\n        </div>\n\n        <div role="tabpanel" class="tab-pane" id="actionsTab">\n            <div class="form-inline">\n                <p class="panel-description">'+c((e.t||n&&n.t||d).call(r,"console.authorization.policies.edit.actionsDescription",{name:"t",hash:{},data:l}))+'</p>\n                <div id="actions" class="clearfix"></div>\n            </div>\n        </div>\n\n        <div role="tabpanel" class="tab-pane" id="subjectsTab">\n            <p class="panel-description">'+c((e.t||n&&n.t||d).call(r,"console.authorization.policies.edit.subjectConditionsDescription",{name:"t",hash:{},data:l}))+'</p>\n            <div id="subjectContainer" class="clearfix"></div>\n        </div>\n\n        <div role="tabpanel" class="tab-pane" id="environmentsTab">\n            <p class="panel-description">'+c((e.t||n&&n.t||d).call(r,"console.authorization.policies.edit.environmentConditionsDescription",{name:"t",hash:{},data:l}))+'</p>\n            <div id="environmentContainer" class="clearfix"></div>\n        </div>\n\n        <div role="tabpanel" class="tab-pane" id="responseAttributesTab">\n            <div id="userAttrs" class="block"></div>\n\n            <div class="block">\n                <h3 class="block-header">'+c((e.t||n&&n.t||d).call(r,"console.authorization.common.staticAttributes",{name:"t",hash:{},data:l}))+'</h3>\n                <div data-static-attributes></div>\n            </div>\n\n            <div id="customAttrs" class="block"></div>\n        </div>\n    </div>\n\n    <div id="policyFooter"></div>\n    <div id="settingsModal"></div>\n</div>\n'},usePartial:true,useData:true,useDepths:true})}}]);
//# sourceMappingURL=294.92bff5fd79.js.map