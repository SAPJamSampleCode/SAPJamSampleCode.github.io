/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP SE or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.suite.VerticalProgressIndicatorRenderer");sap.ui.suite.VerticalProgressIndicatorRenderer={};
sap.ui.suite.VerticalProgressIndicatorRenderer.render=function(r,c){var a=r;var V=c.getPercentage();if(V<0||V==Number.NaN)V=0;if(V>100)V=100;var P=Math.round(V*58/100);var b=58-P;var d=V.toString();a.write("<DIV");a.writeControlData(c);a.writeAttribute('tabIndex','0');if(c.getTooltip_AsString()){a.writeAttributeEscaped("title",c.getTooltip_AsString())}else{a.writeAttributeEscaped("title",d)}if(sap.ui.getCore().getConfiguration().getAccessibility()){a.writeAttribute('role','progressbar');a.writeAccessibilityState(c,{valuemin:'0%'});a.writeAccessibilityState(c,{valuemax:'100%'});a.writeAccessibilityState(c,{valuenow:V+'%'})}a.writeAttribute("class","sapUiVerticalProgressOuterContainer");a.write(">");a.write("<DIV");a.writeAttribute('id',c.getId()+'-bar');a.writeAttribute("class","sapUiVerticalProgressInnerContainer");a.addStyle("top",b+"px");a.addStyle("height",P+"px");a.writeClasses();a.writeStyles();a.write(">");a.write("</DIV>");a.write("</DIV>")};
