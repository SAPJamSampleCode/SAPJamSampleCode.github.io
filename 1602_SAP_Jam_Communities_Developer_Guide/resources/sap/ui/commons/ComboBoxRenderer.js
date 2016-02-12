/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

// Provides default renderer for control sap.ui.commons.ComboBox
jQuery.sap.declare("sap.ui.commons.ComboBoxRenderer");
jQuery.sap.require("sap.ui.core.Renderer");
jQuery.sap.require("sap.ui.commons.TextFieldRenderer");

/**
 * @class Renderer for the sap.ui.commons.ComboBox
 * @static
 */
sap.ui.commons.ComboBoxRenderer = sap.ui.core.Renderer.extend(sap.ui.commons.TextFieldRenderer);

/**
 * Renders the outer &lt;div&gt; for the ComboBox to the TextField
 *
 * @param {sap.ui.fw.RenderManager} oRenderManager the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.fw.Control} oControl an object representation of the control that should be rendered
 */
sap.ui.commons.ComboBoxRenderer.renderOuterAttributes = function(rm, oCmb) {
	rm.addClass("sapUiTfCombo");
	this.renderComboARIAInfo(rm, oCmb);
};

/**
 * Renders additional HTML for the ComboBox to the TextField (sets the icon)
 *
 * @param {sap.ui.fw.RenderManager} oRenderManager the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.fw.Control} oControl an object representation of the control that should be rendered
 */
sap.ui.commons.ComboBoxRenderer.renderOuterContent = function(oRenderManager, oCmb){
	// convenience variable
	var rm = oRenderManager;

	rm.write("<div");
	rm.writeAttributeEscaped('id', oCmb.getId() + '-icon');
	rm.writeAttribute('unselectable', 'on');
	if ( sap.ui.getCore().getConfiguration().getAccessibility()){
		rm.writeAttribute("role", "presentation");
	}
	rm.addClass("sapUiTfComboIcon");
	rm.writeClasses();
	rm.write(">&#9660;</div>");//Symbol for HCB Theme (Must be hidden in other themes)
};

/**
 * Renders ARIA information for the combobox (outer &lt;div&gt;)
 * @param {sap.ui.fw.RenderManager} rm the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.fw.Control} oControl an object representation of the control that should be rendered
 * @private
 */
sap.ui.commons.ComboBoxRenderer.renderComboARIAInfo = function(rm, oCmb) {
	if ( sap.ui.getCore().getConfiguration().getAccessibility()){
		rm.writeAttribute("role", "combobox");
		var oACCInfo = {owns: oCmb.getId() + "-input " + oCmb._getListBox().getId()};
		if (oCmb.getSelectedItemId()) {
			oACCInfo.activedescendant = oCmb.getSelectedItemId();
		}
		rm.writeAccessibilityState(oCmb, oACCInfo);
	}
};

/**
 * Renders ARIA information for the given input field (called from 'parent'-renderer, i.e. sap.ui.commons.TextFieldRenderer)
 * @param {sap.ui.fw.RenderManager} rm the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.fw.Control} oControl an object representation of the control that should be rendered
 * @private
 */
sap.ui.commons.ComboBoxRenderer.renderARIAInfo = function(rm, oCmb) {
	if ( sap.ui.getCore().getConfiguration().getAccessibility()){
		var oACCInfo = {"autocomplete": "inline" ,"live": "polite"};
		if(oCmb.getValueState() == sap.ui.core.ValueState.Error){
			jQuery.extend(oACCInfo, {invalid: true});
		}
		rm.writeAccessibilityState(oCmb, oACCInfo);
	}
};