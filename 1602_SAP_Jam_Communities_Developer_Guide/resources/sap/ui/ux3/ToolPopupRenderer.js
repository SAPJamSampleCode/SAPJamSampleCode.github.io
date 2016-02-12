/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

// Provides default renderer for the sap.ui.ux3.ToolPopup
jQuery.sap.declare("sap.ui.ux3.ToolPopupRenderer");

/**
 * @class ToolPopup renderer.
 * @static
 */
sap.ui.ux3.ToolPopupRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRenderManager the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.ui.ux3.ToolPopupRenderer.render = function(rm, oControl) {
	var rb = sap.ui.getCore().getLibraryResourceBundle("sap.ui.ux3");

	// write the HTML into the render manager
	rm.write("<div");
	rm.writeControlData(oControl);
	rm.addClass("sapUiUx3TP");
	rm.writeClasses();
	rm.write(" aria-labelledby='", oControl.getId(), "-title ", oControl.getId(), "-acc' role='dialog'>"); // div element

	rm.write("<div id='" + oControl.getId() + "-arrow' class='sapUiUx3TPArrow sapUiUx3TPArrow" + oControl._getArrowPosition() + "'></div>");
	rm.write("<span style='display:none;' id='", oControl.getId(), "-acc'>", rb.getText("DIALOG_CLOSE_HELP"), "</span>");

	// title
	var sTitle = oControl.getTitle();
	if (sTitle && (sTitle.length > 0)) {
		rm.write("<h1 id='" + oControl.getId() + "-title'>" + sTitle + "</h1>");
		rm.write("<hr/>");
	} else { // for accessibility reasons use tooltip as hidden label
		var sTooltip = oControl.getTooltip_AsString();
		if (sTooltip) {
			rm.write("<h1 id='" + oControl.getId() + "-title' style='display:none;'>" + sTooltip + "</h1>");
		}
	}

	// content
	var aChildren = oControl.getContent();
	for (var i = 0; i < aChildren.length; i++) {
		rm.renderControl(aChildren[i]);
	}

	// button row
	aChildren = oControl.getButtons();
	if (aChildren.length > 0) {
		rm.write("<hr/><div class='sapUiUx3TPBtnRow'>");
		for (var i = 0; i < aChildren.length; i++) {
			rm.renderControl(aChildren[i].addStyleClass("sapUiUx3TPBtn"));
		}
		rm.write("</div>");
	}

	rm.write("</div>");
};