/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.Label.
jQuery.sap.declare("sap.ui.commons.Label");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new Label.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * 
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 *
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getDesign design} : sap.ui.commons.LabelDesign (default: sap.ui.commons.LabelDesign.Standard)</li>
 * <li>{@link #getTextDirection textDirection} : sap.ui.core.TextDirection (default: sap.ui.core.TextDirection.Inherit)</li>
 * <li>{@link #getWrapping wrapping} : boolean (default: false)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: '')</li>
 * <li>{@link #getText text} : string (default: '')</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li>
 * <li>{@link #getTextAlign textAlign} : sap.ui.core.TextAlign (default: sap.ui.core.TextAlign.Begin)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getLabelFor labelFor} : string | sap.ui.core.Control</li></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * 
 * Is used for labeling other controls. The API provides formatting options, for example for bold display or alignment. A label can have an icon.
 * 
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.5.0-SNAPSHOT
 *
 * @constructor   
 * @public
 * @name sap.ui.commons.Label
 */
sap.ui.core.Control.extend("sap.ui.commons.Label", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.commons",
	properties : {
		"design" : {type : "sap.ui.commons.LabelDesign", group : "Appearance", defaultValue : sap.ui.commons.LabelDesign.Standard},
		"textDirection" : {type : "sap.ui.core.TextDirection", group : "Appearance", defaultValue : sap.ui.core.TextDirection.Inherit},
		"wrapping" : {type : "boolean", group : "Appearance", defaultValue : false},
		"width" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : ''},
		"text" : {type : "string", group : "Misc", defaultValue : ''},
		"visible" : {type : "boolean", group : "Behavior", defaultValue : true},
		"icon" : {type : "sap.ui.core.URI", group : "Appearance", defaultValue : null},
		"textAlign" : {type : "sap.ui.core.TextAlign", group : "Appearance", defaultValue : sap.ui.core.TextAlign.Begin}
	},
	associations : {
		"labelFor" : {type : "sap.ui.core.Control", multiple : false}
	}
}});


/**
 * Creates a new subclass of class sap.ui.commons.Label with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 *   
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * @name sap.ui.commons.Label.extend
 * @function
 */


/**
 * Getter for property <code>design</code>.
 * 
 * Labels can have bold format.
 * 
 *
 * Default value is <code>sap.ui.commons.LabelDesign.Standard</code>
 *
 * @return {sap.ui.commons.LabelDesign} the value of property <code>design</code>
 * @public
 * @name sap.ui.commons.Label#getDesign
 * @function
 */


/**
 * Setter for property <code>design</code>.
 *
 * Default value is <code>sap.ui.commons.LabelDesign.Standard</code> 
 *
 * @param {sap.ui.commons.LabelDesign} oDesign  new value for property <code>design</code>
 * @return {sap.ui.commons.Label} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Label#setDesign
 * @function
 */

/**
 * Getter for property <code>textDirection</code>.
 * 
 * Options for the text direction are RTL and LTR. Alternatively, the control can inherit the text direction from its parent container.
 * 
 *
 * Default value is <code>sap.ui.core.TextDirection.Inherit</code>
 *
 * @return {sap.ui.core.TextDirection} the value of property <code>textDirection</code>
 * @public
 * @name sap.ui.commons.Label#getTextDirection
 * @function
 */


/**
 * Setter for property <code>textDirection</code>.
 *
 * Default value is <code>sap.ui.core.TextDirection.Inherit</code> 
 *
 * @param {sap.ui.core.TextDirection} oTextDirection  new value for property <code>textDirection</code>
 * @return {sap.ui.commons.Label} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Label#setTextDirection
 * @function
 */

/**
 * Getter for property <code>wrapping</code>.
 * Specifies whether a line wrapping shall be displayed when the text value is longer than the width
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>wrapping</code>
 * @public
 * @name sap.ui.commons.Label#getWrapping
 * @function
 */


/**
 * Setter for property <code>wrapping</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bWrapping  new value for property <code>wrapping</code>
 * @return {sap.ui.commons.Label} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Label#setWrapping
 * @function
 */

/**
 * Getter for property <code>width</code>.
 * 
 * Control width as common CSS-size (px or % as unit, for example).
 * 
 *
 * Default value is <code>''</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.ui.commons.Label#getWidth
 * @function
 */


/**
 * Setter for property <code>width</code>.
 *
 * Default value is <code>''</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.commons.Label} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Label#setWidth
 * @function
 */

/**
 * Getter for property <code>text</code>.
 * 
 * Text to be displayed.
 * 
 *
 * Default value is <code>''</code>
 *
 * @return {string} the value of property <code>text</code>
 * @public
 * @name sap.ui.commons.Label#getText
 * @function
 */


/**
 * Setter for property <code>text</code>.
 *
 * Default value is <code>''</code> 
 *
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.ui.commons.Label} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Label#setText
 * @function
 */

/**
 * Getter for property <code>visible</code>.
 * 
 * Invisible labels are not rendered.
 * 
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.ui.commons.Label#getVisible
 * @function
 */


/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.commons.Label} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Label#setVisible
 * @function
 */

/**
 * Getter for property <code>icon</code>.
 * 
 * Icon to be displayed in the control.
 * 
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * @name sap.ui.commons.Label#getIcon
 * @function
 */


/**
 * Setter for property <code>icon</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sIcon  new value for property <code>icon</code>
 * @return {sap.ui.commons.Label} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Label#setIcon
 * @function
 */

/**
 * Getter for property <code>textAlign</code>.
 * 
 * Available alignment settings are "Begin", "Center", "End", "Left", and "Right".
 * 
 *
 * Default value is <code>sap.ui.core.TextAlign.Begin</code>
 *
 * @return {sap.ui.core.TextAlign} the value of property <code>textAlign</code>
 * @public
 * @name sap.ui.commons.Label#getTextAlign
 * @function
 */


/**
 * Setter for property <code>textAlign</code>.
 *
 * Default value is <code>sap.ui.core.TextAlign.Begin</code> 
 *
 * @param {sap.ui.core.TextAlign} oTextAlign  new value for property <code>textAlign</code>
 * @return {sap.ui.commons.Label} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Label#setTextAlign
 * @function
 */

/**
 * Association to the labeled control.
 * By default the label set the for attribute to the ID of the labeled control. This can be changed implementing function getIdForLabel on the labelled control.
 *
 * @return {string} Id of the element which is the current target of the <code>labelFor</code> association, or null
 * @public
 * @name sap.ui.commons.Label#getLabelFor
 * @function
 */


/**
 * Association to the labeled control.
 * By default the label set the for attribute to the ID of the labeled control. This can be changed implementing function getIdForLabel on the labelled control.
 *
 * @param {string | sap.ui.core.Control} vLabelFor 
 *    Id of an element which becomes the new target of this <code>labelFor</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.ui.commons.Label} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Label#setLabelFor
 * @function
 */

// Start of sap\ui\commons\Label.js

sap.ui.commons.Label.prototype.onAfterRendering = function () {
	if (this.getLabelFor() && (this.getTooltip_AsString() == "" || !(this.getTooltip() instanceof sap.ui.core.TooltipBase))) {
		var oFor = sap.ui.getCore().byId(this.getLabelFor());
		// no own tooltip use RichTooltip of labeled control if available
		if (oFor && (oFor.getTooltip() instanceof sap.ui.core.TooltipBase)) {
			this.oForTooltip = oFor.getTooltip();
			this.addDelegate(this.oForTooltip);
		}
	}
};

sap.ui.commons.Label.prototype.onBeforeRendering = function () {
	if (this.oForTooltip) {
		this.removeDelegate(this.oForTooltip);
		this.oForTooltip = null;
	}
};

sap.ui.commons.Label.prototype.exit = function(){
	if (this.oForTooltip) {
		this.removeDelegate(this.oForTooltip);
		this.oForTooltip = null;
	}
};
