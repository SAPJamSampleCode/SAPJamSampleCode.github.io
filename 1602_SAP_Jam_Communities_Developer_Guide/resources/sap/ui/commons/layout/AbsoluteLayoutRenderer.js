/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

// Provides default renderer for control sap.ui.commons.layout.AbsoluteLayout
jQuery.sap.declare("sap.ui.commons.layout.AbsoluteLayoutRenderer");

/**
 * @class AbsoluteLayout renderer.
 * @static
 */
sap.ui.commons.layout.AbsoluteLayoutRenderer = {
};


(function() {

/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRenderManager the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.ui.commons.layout.AbsoluteLayoutRenderer.render = function(oRenderManager, oControl){
	var rm = oRenderManager;

	oControl.doBeforeRendering();

	if(!oControl.getVisible()) {
		return;
	}

	rm.write("<div");
	rm.writeControlData(oControl);
	rm.addClass("sapUiLayoutAbs");
	rm.addClass("sapUiLayoutAbsOvrflwY" + oControl.getVerticalScrolling());
	rm.addClass("sapUiLayoutAbsOvrflwX" + oControl.getHorizontalScrolling());
	rm.writeClasses();
	var sStyle = "width:" + oControl.getWidth() + ";height:" + oControl.getHeight() + ";";
	rm.writeAttribute("style", sStyle);
	rm.write(">");

	var aPositions = oControl.getPositions();
	if(aPositions && aPositions.length > 0){
		for(var index=0; index<aPositions.length; index++){
			var oPosition = aPositions[index];
			var oChildControl = oPosition.getControl();
			if(oChildControl) {
				rm.write("<div");
				rm.writeElementData(oPosition);
				rm.writeAttribute("class", "sapUiLayoutAbsPos");
				rm.writeAttribute("style", getComputedStyles(oPosition));
				rm.write(">");
				rm.renderControl(oChildControl);
				rm.write("</div>");
			}
		}
	}

	rm.write("</div>");
};


/**
 * Updates the size of the layout.
 *
 * @private
 */
sap.ui.commons.layout.AbsoluteLayoutRenderer.updateLayoutSize = function(oLayout) {
	jQuery(oLayout.getDomRef()).css("width", oLayout.getWidth()).css("height", oLayout.getHeight());
};


/**
 * Updates the scrolling mode of the layout.
 *
 * @private
 */
sap.ui.commons.layout.AbsoluteLayoutRenderer.updateLayoutScolling = function(oLayout) {
	var jLayout = jQuery(oLayout.getDomRef());
	for(var sScrollingType in sap.ui.core.Scrolling) {
		jLayout.removeClass("sapUiLayoutAbsOvrflwY"+sScrollingType).removeClass("sapUiLayoutAbsOvrflwX"+sScrollingType);
	}
	jLayout.addClass("sapUiLayoutAbsOvrflwY"+oLayout.getVerticalScrolling()).addClass("sapUiLayoutAbsOvrflwX"+oLayout.getHorizontalScrolling());
};


/**
 * Updates the styles of the given position in the Dom.
 *
 * @private
 */
sap.ui.commons.layout.AbsoluteLayoutRenderer.updatePositionStyles = function(oPosition) {
	jQuery(oPosition.getDomRef()).attr("style", getComputedStyles(oPosition));
};


/**
 * Removes the given position from the Dom.
 *
 * @private
 */
sap.ui.commons.layout.AbsoluteLayoutRenderer.removePosition = function(oPosition) {
	jQuery(oPosition.getDomRef()).remove();
};


/**
 * Removes all positions of the given layout from the Dom.
 *
 * @private
 */
sap.ui.commons.layout.AbsoluteLayoutRenderer.removeAllPositions = function(oLayout) {
	jQuery(oLayout.getDomRef()).html("");
};


/**
 * Updates the styles and the content of the given position in the Dom.
 *
 * @private
 */
sap.ui.commons.layout.AbsoluteLayoutRenderer.updatePositionedControl = function(oPosition) {
	sap.ui.commons.layout.AbsoluteLayoutRenderer.updatePositionStyles(oPosition);
	var rm = sap.ui.getCore().createRenderManager();
	rm.renderControl(oPosition.getControl());
	rm.flush(oPosition.getDomRef());
	rm.destroy();
};


/**
 * Inserts the given position into the Dom incl. the content and updating the styles.
 *
 * @private
 */
sap.ui.commons.layout.AbsoluteLayoutRenderer.insertPosition = function(oLayout, oPosition) {
	var index = oLayout.indexOfPosition(oPosition);
	var oPositions = oLayout.getPositions();
	var oPredecessorPosition = null;
	while(index > 0) {
		index--;
		if(oPositions[index].getDomRef()){
			oPredecessorPosition = oPositions[index];
			break;
		}
	}

	var sHTML = "<div id=\""+oPosition.getId()+"\" data-sap-ui=\""+oPosition.getId()+"\" class=\"sapUiLayoutAbsPos\"></div>";
	if(!oPredecessorPosition){
		jQuery(oLayout.getDomRef()).prepend(sHTML);
	}else{
		jQuery(oPredecessorPosition.getDomRef()).after(sHTML);
	}

	sap.ui.commons.layout.AbsoluteLayoutRenderer.updatePositionedControl(oPosition);
};


/**
 * Computes and returns the CSS styles for the given position.
 *
 * @private
 */
var getComputedStyles = function(oPosition) {
	var oPos = oPosition.getComputedPosition();

	var addStyle = function(oPosition, aBuffer, sPos, sVal){
		if(sVal) {
			aBuffer.push(sPos+":"+sVal+";");
		}
	};

	var aBuffer = [];
	addStyle(oPosition, aBuffer, "top", oPos.top);
	addStyle(oPosition, aBuffer, "bottom", oPos.bottom);
	addStyle(oPosition, aBuffer, "left", oPos.left);
	addStyle(oPosition, aBuffer, "right", oPos.right);
	addStyle(oPosition, aBuffer, "width", oPos.width);
	addStyle(oPosition, aBuffer, "height", oPos.height);

	return aBuffer.join("");
};

}());