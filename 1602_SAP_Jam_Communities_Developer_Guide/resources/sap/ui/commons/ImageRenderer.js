/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

// Provides default renderer for control sap.ui.commons.Image
jQuery.sap.declare("sap.ui.commons.ImageRenderer");

/**
 * @class
 *
 * @author d046011
 * @version 0.1
 * @static
 */
sap.ui.commons.ImageRenderer = {
};

/**
 * Renders the HTML for the Image, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRenderManager The RenderManager that can be used for writing to the render output buffer.
 * @param {sap.ui.commons.Image} oImage The control that should be rendered.
 */
sap.ui.commons.ImageRenderer.render = function(oRenderManager, oImage) {
	var rm = oRenderManager;

	// Return immediately if control is invisible
	if (!oImage.getVisible()) {
		return;
	}

	// Open the <img> tag
	rm.write("<img");
	rm.writeControlData(oImage);

	rm.writeAttributeEscaped("src", oImage.getSrc());

	rm.addClass("sapUiImg");
	if (oImage.hasListeners("press")) {
		rm.addClass("sapUiImgWithHandler");
	}
	rm.writeClasses();

	var tooltip = oImage.getTooltip_AsString();
	if (tooltip) {
		rm.writeAttributeEscaped("title", tooltip);
	}

	var sUseMap = oImage.getUseMap();
	if (sUseMap) {
		if (!(jQuery.sap.startsWith(sUseMap, "#"))) {
			sUseMap = "#" + sUseMap;
		}
		rm.writeAttributeEscaped("useMap", sUseMap);
	}

	// determine tab index and write alt attribute - both depending on "decorative" state (which is overridden by the "useMap" property
	var myTabIndex = 0;
	if ((oImage.getDecorative() && (!sUseMap))) {
		myTabIndex = -1;
		rm.writeAttribute("role", "presentation");
		rm.write(" alt=''"); // accessibility requirement: write always empty alt attribute for decorative images
	} else {
		if (oImage.getAlt()) {
			rm.writeAttributeEscaped("alt", oImage.getAlt() || tooltip); // accessibility requirement: use tooltip for alt if alt is not set
		} else if (tooltip) {
			rm.writeAttributeEscaped("alt", tooltip);
		}
	}
	rm.writeAttribute("tabIndex", myTabIndex);

	// Dimensions
	var myStyle = "";
	if (oImage.getWidth() && oImage.getWidth() != '') {
		myStyle += "width:" + oImage.getWidth() + ";";
	}
	if (oImage.getHeight() && oImage.getHeight() != '') {
		myStyle += "height:" + oImage.getHeight() + ";";
	}
	if (myStyle != "") {
		rm.writeAttribute("style", myStyle);
	}

	rm.write("></img>"); // close the <img> element
};