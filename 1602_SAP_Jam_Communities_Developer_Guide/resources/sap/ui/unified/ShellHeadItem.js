/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP SE or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.unified.ShellHeadItem");jQuery.sap.require("sap.ui.unified.library");jQuery.sap.require("sap.ui.core.Element");sap.ui.core.Element.extend("sap.ui.unified.ShellHeadItem",{metadata:{library:"sap.ui.unified",properties:{"startsSection":{type:"boolean",group:"Appearance",defaultValue:false,deprecated:true},"showSeparator":{type:"boolean",group:"Appearance",defaultValue:true},"selected":{type:"boolean",group:"Appearance",defaultValue:false},"showMarker":{type:"boolean",group:"Appearance",defaultValue:false,deprecated:true},"icon":{type:"sap.ui.core.URI",group:"Appearance",defaultValue:null},"visible":{type:"boolean",group:"Appearance",defaultValue:true}},events:{"press":{}}}});sap.ui.unified.ShellHeadItem.M_EVENTS={'press':'press'};jQuery.sap.require("sap.ui.core.IconPool");
sap.ui.unified.ShellHeadItem.prototype.onclick=function(e){this.firePress();e.preventDefault()};
sap.ui.unified.ShellHeadItem.prototype.onsapspace=sap.ui.unified.ShellHeadItem.prototype.onclick;
sap.ui.unified.ShellHeadItem.prototype.setStartsSection=function(s){s=!!s;this.setProperty("startsSection",s,true);this.$().toggleClass("sapUiUfdShellHeadItmDelim",s);return this};
sap.ui.unified.ShellHeadItem.prototype.setShowSeparator=function(s){s=!!s;this.setProperty("showSeparator",s,true);this.$().toggleClass("sapUiUfdShellHeadItmSep",s);return this};
sap.ui.unified.ShellHeadItem.prototype.setSelected=function(s){s=!!s;this.setProperty("selected",s,true);this.$().toggleClass("sapUiUfdShellHeadItmSel",s);return this};
sap.ui.unified.ShellHeadItem.prototype.setVisible=function(v){this.setProperty("visible",!!v);return this};
sap.ui.unified.ShellHeadItem.prototype.setShowMarker=function(m){m=!!m;this.setProperty("showMarker",m,true);this.$().toggleClass("sapUiUfdShellHeadItmMark",m);return this};
sap.ui.unified.ShellHeadItem.prototype.setIcon=function(i){this.setProperty("icon",i,true);if(this.getDomRef()){this._refreshIcon()}return this};
sap.ui.unified.ShellHeadItem.prototype._refreshIcon=function(){var i=jQuery(this.$().children()[0]);var I=this.getIcon();if(sap.ui.core.IconPool.isIconURI(I)){var o=sap.ui.core.IconPool.getIconInfo(I);i.html("").css("style","");if(o){i.text(o.content).css("font-family","'"+o.fontFamily+"'")}}else{var $=this.$("img-inner");if($.length==0||$.attr("src")!=I){i.css("style","").html("<img id='"+this.getId()+"-img-inner' src='"+jQuery.sap.encodeHTML(I)+"'></img>")}}};
