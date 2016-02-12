/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP SE or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.controller("sap.ui.demokit.explored.view.notFound",{onInit:function(){this.router=sap.ui.core.UIComponent.getRouterFor(this);this.router.attachRoutePatternMatched(this.onRouteMatched,this);this.getView().addEventDelegate(this)},_msg:"<div class='titlesNotFound'>The requested object '{0}' is unknown to the explored app. We suspect it's lost in space.</div>",onRouteMatched:function(e){if("notFound"!==e.getParameter("name")){return}var p=e.getParameter("arguments")["all*"];var h=this._msg.replace("{0}",p);this.getView().byId("msgHtml").setContent(h)},onBeforeShow:function(e){if(e.data.path){var h=this._msg.replace("{0}",e.data.path);this.getView().byId("msgHtml").setContent(h)}},onNavBack:function(){this.router.myNavBack("home",{})}});
