/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.Splitter.
jQuery.sap.declare("sap.ui.commons.Splitter");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new Splitter.
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
 * <li>{@link #getSplitterOrientation splitterOrientation} : sap.ui.commons.Orientation (default: sap.ui.commons.Orientation.Vertical)</li>
 * <li>{@link #getSplitterPosition splitterPosition} : string (default: '50%')</li>
 * <li>{@link #getMinSizeFirstPane minSizeFirstPane} : string (default: '0%')</li>
 * <li>{@link #getMinSizeSecondPane minSizeSecondPane} : string (default: '0%')</li>
 * <li>{@link #getWidth width} : string (default: '100%')</li>
 * <li>{@link #getHeight height} : string (default: '100%')</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getShowScrollBars showScrollBars} : boolean (default: true)</li>
 * <li>{@link #getSplitterBarVisible splitterBarVisible} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getFirstPaneContent firstPaneContent} : sap.ui.core.Control[]</li>
 * <li>{@link #getSecondPaneContent secondPaneContent} : sap.ui.core.Control[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
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
 * Allows to split the screen into two areas. Make sure that the container for the splitter has an absolute height or set an absolute height for the splitter using the height property. Otherwise the height of the splitter is calculated by the height of its contents.
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.5.0-SNAPSHOT
 *
 * @constructor   
 * @public
 * @name sap.ui.commons.Splitter
 */
sap.ui.core.Control.extend("sap.ui.commons.Splitter", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.commons",
	properties : {
		"splitterOrientation" : {type : "sap.ui.commons.Orientation", group : "Behavior", defaultValue : sap.ui.commons.Orientation.Vertical},
		"splitterPosition" : {type : "string", group : "Behavior", defaultValue : '50%'},
		"minSizeFirstPane" : {type : "string", group : "Behavior", defaultValue : '0%'},
		"minSizeSecondPane" : {type : "string", group : "Behavior", defaultValue : '0%'},
		"width" : {type : "string", group : "Behavior", defaultValue : '100%'},
		"height" : {type : "string", group : "Behavior", defaultValue : '100%'},
		"visible" : {type : "boolean", group : "Behavior", defaultValue : true},
		"showScrollBars" : {type : "boolean", group : "Behavior", defaultValue : true},
		"splitterBarVisible" : {type : "boolean", group : "Behavior", defaultValue : true}
	},
	aggregations : {
    	"firstPaneContent" : {type : "sap.ui.core.Control", multiple : true, singularName : "firstPaneContent"}, 
    	"secondPaneContent" : {type : "sap.ui.core.Control", multiple : true, singularName : "secondPaneContent"}
	}
}});


/**
 * Creates a new subclass of class sap.ui.commons.Splitter with name <code>sClassName</code> 
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
 * @name sap.ui.commons.Splitter.extend
 * @function
 */


/**
 * Getter for property <code>splitterOrientation</code>.
 * The splitter can have horizontal or vertical orientation.
 *
 * Default value is <code>Vertical</code>
 *
 * @return {sap.ui.commons.Orientation} the value of property <code>splitterOrientation</code>
 * @public
 * @name sap.ui.commons.Splitter#getSplitterOrientation
 * @function
 */


/**
 * Setter for property <code>splitterOrientation</code>.
 *
 * Default value is <code>Vertical</code> 
 *
 * @param {sap.ui.commons.Orientation} oSplitterOrientation  new value for property <code>splitterOrientation</code>
 * @return {sap.ui.commons.Splitter} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Splitter#setSplitterOrientation
 * @function
 */

/**
 * Getter for property <code>splitterPosition</code>.
 * Position of splitter bar in percentage.
 * The default value means that the splitter is positioned in the middle of the area that is available for the splitter.
 *
 * Default value is <code>50%</code>
 *
 * @return {string} the value of property <code>splitterPosition</code>
 * @public
 * @name sap.ui.commons.Splitter#getSplitterPosition
 * @function
 */


/**
 * Setter for property <code>splitterPosition</code>.
 *
 * Default value is <code>50%</code> 
 *
 * @param {string} sSplitterPosition  new value for property <code>splitterPosition</code>
 * @return {sap.ui.commons.Splitter} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Splitter#setSplitterPosition
 * @function
 */

/**
 * Getter for property <code>minSizeFirstPane</code>.
 * The minimum size (width for vertical splitter or height for horizontal splitter) of the first Pane
 * 
 *
 * Default value is <code>0%</code>
 *
 * @return {string} the value of property <code>minSizeFirstPane</code>
 * @public
 * @name sap.ui.commons.Splitter#getMinSizeFirstPane
 * @function
 */


/**
 * Setter for property <code>minSizeFirstPane</code>.
 *
 * Default value is <code>0%</code> 
 *
 * @param {string} sMinSizeFirstPane  new value for property <code>minSizeFirstPane</code>
 * @return {sap.ui.commons.Splitter} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Splitter#setMinSizeFirstPane
 * @function
 */

/**
 * Getter for property <code>minSizeSecondPane</code>.
 * The minimum size (width for vertical splitter or height for horizontal splitter) of the second Pane
 * 
 *
 * Default value is <code>0%</code>
 *
 * @return {string} the value of property <code>minSizeSecondPane</code>
 * @public
 * @name sap.ui.commons.Splitter#getMinSizeSecondPane
 * @function
 */


/**
 * Setter for property <code>minSizeSecondPane</code>.
 *
 * Default value is <code>0%</code> 
 *
 * @param {string} sMinSizeSecondPane  new value for property <code>minSizeSecondPane</code>
 * @return {sap.ui.commons.Splitter} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Splitter#setMinSizeSecondPane
 * @function
 */

/**
 * Getter for property <code>width</code>.
 * The width of the split area in px or in %
 *
 * Default value is <code>100%</code>
 *
 * @return {string} the value of property <code>width</code>
 * @public
 * @name sap.ui.commons.Splitter#getWidth
 * @function
 */


/**
 * Setter for property <code>width</code>.
 *
 * Default value is <code>100%</code> 
 *
 * @param {string} sWidth  new value for property <code>width</code>
 * @return {sap.ui.commons.Splitter} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Splitter#setWidth
 * @function
 */

/**
 * Getter for property <code>height</code>.
 * The height of the split area in px or in %
 *
 * Default value is <code>100%</code>
 *
 * @return {string} the value of property <code>height</code>
 * @public
 * @name sap.ui.commons.Splitter#getHeight
 * @function
 */


/**
 * Setter for property <code>height</code>.
 *
 * Default value is <code>100%</code> 
 *
 * @param {string} sHeight  new value for property <code>height</code>
 * @return {sap.ui.commons.Splitter} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Splitter#setHeight
 * @function
 */

/**
 * Getter for property <code>visible</code>.
 * Invisible splitters are not rendered.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.ui.commons.Splitter#getVisible
 * @function
 */


/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.commons.Splitter} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Splitter#setVisible
 * @function
 */

/**
 * Getter for property <code>showScrollBars</code>.
 * Specifies if the browser should display scroll bars or simply cut the content of a splitter pane when the content does not fit into its pane.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>showScrollBars</code>
 * @public
 * @name sap.ui.commons.Splitter#getShowScrollBars
 * @function
 */


/**
 * Setter for property <code>showScrollBars</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowScrollBars  new value for property <code>showScrollBars</code>
 * @return {sap.ui.commons.Splitter} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Splitter#setShowScrollBars
 * @function
 */

/**
 * Getter for property <code>splitterBarVisible</code>.
 * set the splitter bar to be visible or not.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>splitterBarVisible</code>
 * @public
 * @name sap.ui.commons.Splitter#getSplitterBarVisible
 * @function
 */


/**
 * Setter for property <code>splitterBarVisible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bSplitterBarVisible  new value for property <code>splitterBarVisible</code>
 * @return {sap.ui.commons.Splitter} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Splitter#setSplitterBarVisible
 * @function
 */
	
/**
 * Getter for aggregation <code>firstPaneContent</code>.<br/>
 * Controls inside the first pane. These are the left ones in case of defining a vertical splitter, and the top ones in case of using the horizontal splitter.
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.ui.commons.Splitter#getFirstPaneContent
 * @function
 */

/**
 * Inserts a firstPaneContent into the aggregation named <code>firstPaneContent</code>.
 *
 * @param {sap.ui.core.Control}
 *          oFirstPaneContent the firstPaneContent to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the firstPaneContent should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the firstPaneContent is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the firstPaneContent is inserted at 
 *             the last position        
 * @return {sap.ui.commons.Splitter} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Splitter#insertFirstPaneContent
 * @function
 */


/**
 * Adds some firstPaneContent <code>oFirstPaneContent</code> 
 * to the aggregation named <code>firstPaneContent</code>.
 *
 * @param {sap.ui.core.Control}
 *            oFirstPaneContent the firstPaneContent to add; if empty, nothing is inserted
 * @return {sap.ui.commons.Splitter} <code>this</code> to allow method chaining
 * @public 
 * @name sap.ui.commons.Splitter#addFirstPaneContent
 * @function
 */


/**
 * Removes an firstPaneContent from the aggregation named <code>firstPaneContent</code>.
 *
 * @param {int | string | sap.ui.core.Control} vFirstPaneContent the firstPaneContent to remove or its index or id
 * @return {sap.ui.core.Control} the removed firstPaneContent or null
 * @public
 * @name sap.ui.commons.Splitter#removeFirstPaneContent
 * @function
 */


/**
 * Removes all the controls in the aggregation named <code>firstPaneContent</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.commons.Splitter#removeAllFirstPaneContent
 * @function
 */


/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>firstPaneContent</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Control}
 *            oFirstPaneContent the firstPaneContent whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.commons.Splitter#indexOfFirstPaneContent
 * @function
 */


/**
 * Destroys all the firstPaneContent in the aggregation 
 * named <code>firstPaneContent</code>.
 * @return {sap.ui.commons.Splitter} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Splitter#destroyFirstPaneContent
 * @function
 */
	
/**
 * Getter for aggregation <code>secondPaneContent</code>.<br/>
 * Controls inside the second pane. These are the right ones in case of defining a vertical splitter, and the bottom ones in case of using the horizontal splitter.
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.ui.commons.Splitter#getSecondPaneContent
 * @function
 */

/**
 * Inserts a secondPaneContent into the aggregation named <code>secondPaneContent</code>.
 *
 * @param {sap.ui.core.Control}
 *          oSecondPaneContent the secondPaneContent to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the secondPaneContent should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the secondPaneContent is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the secondPaneContent is inserted at 
 *             the last position        
 * @return {sap.ui.commons.Splitter} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Splitter#insertSecondPaneContent
 * @function
 */


/**
 * Adds some secondPaneContent <code>oSecondPaneContent</code> 
 * to the aggregation named <code>secondPaneContent</code>.
 *
 * @param {sap.ui.core.Control}
 *            oSecondPaneContent the secondPaneContent to add; if empty, nothing is inserted
 * @return {sap.ui.commons.Splitter} <code>this</code> to allow method chaining
 * @public 
 * @name sap.ui.commons.Splitter#addSecondPaneContent
 * @function
 */


/**
 * Removes an secondPaneContent from the aggregation named <code>secondPaneContent</code>.
 *
 * @param {int | string | sap.ui.core.Control} vSecondPaneContent the secondPaneContent to remove or its index or id
 * @return {sap.ui.core.Control} the removed secondPaneContent or null
 * @public
 * @name sap.ui.commons.Splitter#removeSecondPaneContent
 * @function
 */


/**
 * Removes all the controls in the aggregation named <code>secondPaneContent</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.commons.Splitter#removeAllSecondPaneContent
 * @function
 */


/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>secondPaneContent</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Control}
 *            oSecondPaneContent the secondPaneContent whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.commons.Splitter#indexOfSecondPaneContent
 * @function
 */


/**
 * Destroys all the secondPaneContent in the aggregation 
 * named <code>secondPaneContent</code>.
 * @return {sap.ui.commons.Splitter} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Splitter#destroySecondPaneContent
 * @function
 */

// Start of sap\ui\commons\Splitter.js
jQuery.sap.require("sap.ui.core.delegate.ItemNavigation");
jQuery.sap.require("jquery.sap.events");
jQuery.sap.require("jquery.sap.keycodes");
jQuery.sap.require("sap.ui.core.ResizeHandler");


sap.ui.commons.Splitter.prototype.onBeforeRendering = function() {
	// cleanup resize event registration before re-rendering
	if (this.sResizeListenerId) {
		sap.ui.core.ResizeHandler.deregister(this.sResizeListenerId);
		this.sResizeListenerId = null;
	}
	if (this.sSpecialResizeListenerId) {
		sap.ui.core.ResizeHandler.deregister(this.sSpecialResizeListenerId);
		this.sSpecialResizeListenerId = null;
	}
};

sap.ui.commons.Splitter.prototype.onAfterRendering = function() {

	var rtl = sap.ui.getCore().getConfiguration().getRTL();

	this.splitterDIV = jQuery.sap.domById(this.getId());
	this.splitterBar = jQuery.sap.domById(this.getId() + '_SB');
	this.firstPane = jQuery.sap.domById(this.getId() + '_firstPane');
	this.secondPane = jQuery.sap.domById(this.getId() + '_secondPane');

	this.minSizeFP = this.getMinSizeFirstPane();
	this.minSizeSP = this.getMinSizeSecondPane();

	this.minSizeFP = this.minSizeFP.substring(0, (this.minSizeFP).length - 1);
	this.minSizeFP = parseFloat(this.minSizeFP);

	this.minSizeSP = this.minSizeSP.substring(0, (this.minSizeSP).length - 1);
	this.minSizeSP = parseFloat(this.minSizeSP);

	this.spOrientation =  this.getSplitterOrientation();

	this.sBarPosition = this.getSplitterPosition();
	this.sBarPosition = this.sBarPosition.substring(0, this.sBarPosition.length - 1);
	this.sBarPosition = parseFloat(this.sBarPosition);

	// in hcb mode set splitter bar width to 6 px
	if (sap.ui.getCore().getConfiguration().getTheme() == "sap_hcb") {
		this.sbSize = 6;
	}
	else {
		this.sbSize = 4;
	}
	this.resizeSplitterElements();

	// if no splitter parent height is specified and the splitter height is specified in % the splitter won't be displayed
	// and the splitterbar height will be
	// FF: 0 in vertical and horizontal splitters
	// or in IE: >= the div height (vertical) or  != sbSize (horizontal)
	// if any above is the case we have to set its height to a fixed pixel value
	var splitterBarHeight = jQuery(this.splitterBar).height();
	if (this.spOrientation == sap.ui.commons.Orientation.Vertical){
		if (splitterBarHeight <= 0 || splitterBarHeight > jQuery(this.splitterDIV).height()){
			this.fixHeight();
		}
	}else{
		if (splitterBarHeight <= 0 || splitterBarHeight != this.sbSize){
			this.fixHeight();
		}
	}

	this.sResizeListenerId = sap.ui.core.ResizeHandler.register(this.splitterDIV, jQuery.proxy(this.onresize, this));

};


sap.ui.commons.Splitter.prototype.onresize = function(oEvent) {

	this.resizeSplitterElements();

};

sap.ui.commons.Splitter.prototype.resizeSplitterElements = function() {

	var sbW, sbH, width, height, widthSP, heightSP;
	var rtl = sap.ui.getCore().getConfiguration().getRTL();

	/**
	 * Calculate the equivalent percentage of the 4px : the width/height of the splitter bar
	 */

	if (this.spOrientation == sap.ui.commons.Orientation.Vertical) {

		width = jQuery(this.splitterDIV).width();
		if (width == 0) {
			width = 100; //px so it would show something at least
		}
		sbW = (this.sbSize * 100) / width;

		// check if bar is in the far right
		if (this.sBarPosition >= 100 || this.sBarPosition + sbW > 100) {
			this.sBarPosition = 100 - sbW;
			widthSP = 0;
		}else{
			widthSP = 100 - sbW - this.sBarPosition;
		}
		jQuery(this.firstPane).css("width", this.sBarPosition + "%");
		jQuery(this.splitterBar).css("width", sbW + "%");
		jQuery(this.secondPane).css("width", widthSP + "%");

	} else {

		height = jQuery(this.splitterDIV).height();
		if (height == 0 ){
			height = 100; //px so it would show something at least
		}
		sbH = (this.sbSize * 100) / height;

		// check if bar is in the far bottom
		if (this.sBarPosition >= 100 || this.sBarPosition + sbH > 100){
			this.sBarPosition = 100 - sbH;
			heightSP = 0;
		}else{
			heightSP = 100 - sbH - this.sBarPosition;
		}
		jQuery(this.firstPane).css("height", this.sBarPosition + "%");
		jQuery(this.splitterBar).css("height", sbH + "%");
		jQuery(this.secondPane).css("height", heightSP + "%");

	}

	// update splitterpos value...suppress rerendering
	this.setProperty("splitterPosition", this.sBarPosition + "%", true);

	// fix height if splitterdiv height is 0 we set it to 100 px to show something at least
	// further resizing should then work correctly
	if (jQuery(this.splitterDIV).height() == 0){
		jQuery(this.splitterDIV).css("height", "100px");
		jQuery(this.splitterBar).css("height", "100px");
	}

};
/*
sap.ui.commons.Splitter.prototype.setSplitterPosition = function(oSplitterPosition){
	this.splitterPosition = oSplitterPosition;
};

sap.ui.commons.Splitter.prototype.getSplitterPosition = function(oSplitterPosition){
	this.splitterPosition = oSplitterPosition;
};
*/

/**
 * set height to a fixed height if there is no absolute height specified
 */
sap.ui.commons.Splitter.prototype.fixHeight = function() {
	var height = jQuery(this.splitterDIV).height();
	// reset the splitter div height so that its contents fit inside...
	jQuery(this.splitterDIV).css("height", height + "px");
	if (this.spOrientation == sap.ui.commons.Orientation.Vertical) {
		jQuery(this.splitterBar).css("height", height + "px");
	}
	var oParent = this.splitterDIV.parentNode;
	if (oParent){
		var fHandler = jQuery.proxy(this.onresizespecial, this);
		this.sSpecialResizeListenerId = sap.ui.core.ResizeHandler.register(oParent, fHandler);
		//fHandler({target: oParent});
	}
};

/**
 *	cleanup resize event registration before re-rendering
 */
sap.ui.commons.Splitter.prototype.exit = function() {
	if (this.sResizeListenerId) {
		sap.ui.core.ResizeHandler.deregister(this.sResizeListenerId);
		this.sResizeListenerId = null;
	}
	if (this.sSpecialResizeListenerId) {
		sap.ui.core.ResizeHandler.deregister(this.sSpecialResizeListenerId);
		this.sSpecialResizeListenerId = null;
	}
};


/**
 * resize event handler to handle the special case when no splitter parent height is specified and the splitter height is specified in %.
 * Then the splitter won't be displayed. In this case when the parent gets resized, get the parents height and use it to adapt the current fixed splitter height in px
 * so that everything stays in place.
 */
sap.ui.commons.Splitter.prototype.onresizespecial = function(oEvent) {
	// perhaps this is event handler is not needed. depends on if current child elements should be resized or not
	var parentHeight = jQuery(oEvent.target).height();
	var currentHeight = jQuery(this.splitterDIV).height();
	if (currentHeight != parentHeight){
		// set bar height to the splitterDIV height value
		jQuery(this.splitterDIV).css("height", parentHeight + "px");
		if (this.spOrientation == sap.ui.commons.Orientation.Vertical) {
			jQuery(this.splitterBar).css("height", parentHeight + "px");
		}
	}
};

/**
 * mousedown event handler: create a ghost bar for the splitter bar and starts dragging it
 */
sap.ui.commons.Splitter.prototype.onmousedown = function(oEvent) {

	if (!(oEvent.target == this.splitterBar)) {
		return;
	}

	var oJBody = jQuery(document.body);
		// Fix for IE text selection while dragging
	oJBody.bind("selectstart",jQuery.proxy(this.splitterSelectStart,this));

	var offset = jQuery(this.splitterBar).offset();
	var height = jQuery(this.splitterBar).height();
	var width = jQuery(this.splitterBar).width();
	var cssClass;
	var rtl = sap.ui.getCore().getConfiguration().getRTL();

	if (this.spOrientation == sap.ui.commons.Orientation.Vertical) {
		cssClass = "sapUiVSBGhost";
	}
	else {
		cssClass = "sapUiHSBGhost";
	}

	jQuery(document.body).append(
			"<div id=\"" + this.getId() + "_ghost\" class=\"" + cssClass + "\" style =\" height:" + height + "px; width:"
			+ width + "px; left:" + offset.left + "px; top:" + offset.top + "px\" ></div>");

	// append overlay over splitter to enable correct functionality of moving the splitter
	jQuery(this.splitterDIV).append(
			"<div id=\"" + this.getId() + "_overlay\" style =\"left: 0px;" +
					" right: 0px; bottom: 0px; top: 0px; position:absolute\" ></div>");

	jQuery(document).bind("mouseup", jQuery.proxy(this.onGhostMouseRelease, this));
	jQuery(document).bind("mousemove", jQuery.proxy(this.onGhostMouseMove, this));
	// cancel the event
	oEvent.preventDefault();
	oEvent.stopPropagation();

};

/**
 * The selectstart event triggered in IE to select the text.
 * @private
 * @param {event} oEvent The splitterselectstart event
 * @return {boolean} false
 */
sap.ui.commons.Splitter.prototype.splitterSelectStart = function(oEvent){
	oEvent.preventDefault();
	oEvent.stopPropagation();
	return false;
};

/**
 * drops the splitter bar
 */

sap.ui.commons.Splitter.prototype.onGhostMouseRelease = function(oEvent) {

	var newSbPosition, spHeight, spWidth;
	var splitterBarGhost = jQuery.sap.domById(this.getId() + "_ghost");
	var rtl = sap.ui.getCore().getConfiguration().getRTL();

	if ( this.spOrientation == sap.ui.commons.Orientation.Vertical){

		if (!rtl)
		{
		newSbPosition = oEvent.pageX - jQuery(this.firstPane).offset().left;
		spWidth = jQuery(this.splitterDIV).width();
		newSbPosition = (newSbPosition * 100) / spWidth;
		}
		else {
		newSbPosition = oEvent.pageX - jQuery(this.secondPane).offset().left;
		spWidth = jQuery(this.splitterDIV).width();
		newSbPosition = (( spWidth - newSbPosition ) * 100) / spWidth;
		}
	}
	else{
		newSbPosition = oEvent.pageY - jQuery(this.firstPane).offset().top;
		spHeight = jQuery(this.splitterDIV).height();
		newSbPosition = (newSbPosition * 100) / spHeight;
	}

	if (newSbPosition < this.minSizeFP) {
		newSbPosition = this.minSizeFP;
	}
	else
		if ((100 - newSbPosition) < this.minSizeSP) {
			newSbPosition = 100 - this.minSizeSP;
		}

	this.sBarPosition =  newSbPosition;

	this.resizeSplitterElements();

	jQuery(splitterBarGhost).remove();
	jQuery("#" + this.getId() + "_overlay").remove();

	var oJBody = jQuery(document.body);
	oJBody.unbind("selectstart", this.splitterSelectStart);

	jQuery(document).unbind("mouseup", this.onGhostMouseRelease);
	jQuery(document).unbind("mousemove", this.onGhostMouseMove);

};

sap.ui.commons.Splitter.prototype.onGhostMouseMove = function(oEvent) {

	var splitterBarGhost = jQuery.sap.domById(this.getId() + "_ghost");
	var max;
	var min;
	var rtl = sap.ui.getCore().getConfiguration().getRTL();

	var leftFirstPane = jQuery(this.firstPane).offset().left;
	var w = jQuery(this.splitterDIV).width();
	var leftSecondPane = jQuery(this.secondPane).offset().left;

	if (this.getSplitterOrientation() == sap.ui.commons.Orientation.Vertical) {

		if (!rtl) {

			min = leftFirstPane + (w * this.minSizeFP) / 100;
			max = leftFirstPane + (w * (100 - this.minSizeSP)) / 100;

			if (oEvent.pageX > min && oEvent.pageX < max) {
				jQuery(splitterBarGhost).css("left", oEvent.pageX + "px");
			}
		}
		else{


			min = leftSecondPane + (w * this.minSizeSP) / 100;
			max = leftSecondPane + (w * (100 - this.minSizeFP)) / 100;

			if (oEvent.pageX > min && oEvent.pageX < max) {
				jQuery(splitterBarGhost).css("left", oEvent.pageX + "px");
			}


		}

	} else {

		var h = jQuery(this.splitterDIV).height();

		min = jQuery(this.firstPane).offset().top + (h * this.minSizeFP) / 100;
		max = jQuery(this.secondPane).offset().top + jQuery(this.secondPane).height() - (h * this.minSizeSP) / 100;
		if (oEvent.pageY > min && oEvent.pageY < max) {
			jQuery(splitterBarGhost).css("top", oEvent.pageY + "px");
		}
	}
};

/**
 * Convenience method for handling of Ctrl key, meta key etc.
 *
 * @private
 */
sap.ui.commons.Splitter.prototype.getCtrlKey = function(oEvent) {
	return !!(oEvent.ctrlKey || oEvent.metaKey); // double negation doesn't have effect on boolean but ensures null and undefined are equivalent to false.
};

/**
 * Convenience method to check an event for a certain combination of modifier keys
 *
 * @private
 */
sap.ui.commons.Splitter.prototype.checkModifierKey = function(oEvent, bCtrlKey, bAltKey, bShiftKey) {
	return oEvent.shiftKey == bShiftKey && oEvent.altKey == bAltKey && this.getCtrlKey(oEvent) == bCtrlKey;
};

/**
 * Home key minimizes the focused pane to the last possible position
 */
sap.ui.commons.Splitter.prototype.onsaphome = function(oEvent) {
	if (oEvent.target == this.firstPane){
		this.sBarPosition = this.minSizeFP;
		this.resizeSplitterElements();
		oEvent.preventDefault();
		oEvent.stopPropagation();
	}
	if (oEvent.target == this.secondPane){
		this.sBarPosition = 100-this.minSizeSP;
		this.resizeSplitterElements();
		oEvent.preventDefault();
		oEvent.stopPropagation();
	}
};

/**
 * End key maximizes the focused pane to the last possible position
 */
sap.ui.commons.Splitter.prototype.onsapend = function(oEvent) {
	if (oEvent.target == this.firstPane){
		this.sBarPosition = 100-this.minSizeSP;
		this.resizeSplitterElements();
		oEvent.preventDefault();
		oEvent.stopPropagation();
	}
	if (oEvent.target == this.secondPane){
		this.sBarPosition = this.minSizeFP;
		this.resizeSplitterElements();
		oEvent.preventDefault();
		oEvent.stopPropagation();
	}
};

sap.ui.commons.Splitter.prototype.onArrowKeys = function(oEvent,oInc) {
	var width, height, sbSize, sbPosition, newSbPosition;

	if (this.spOrientation == sap.ui.commons.Orientation.Vertical) {
		width = jQuery(this.splitterDIV).width();
		sbPosition = jQuery(this.firstPane).width();
		sbPosition = (sbPosition * 100) / width;
		// move 10 pixels
		sbSize = (10 * 100) / width;
	} else {
		height = jQuery(this.splitterDIV).height();
		sbPosition = jQuery(this.firstPane).height();
		sbPosition = (sbPosition * 100) / height;
		// move 10 pixels
		sbSize = (10 * 100) / height;
	}

	if (oInc == "false") {
		newSbPosition = sbPosition - sbSize;
	}
	else if (oInc == "true") {
		newSbPosition = sbPosition + sbSize;
	}

	if (newSbPosition < this.minSizeFP)	{
		newSbPosition = this.minSizeFP;
	}
	else if ((100 - newSbPosition) < this.minSizeSP) {
		newSbPosition = 100 - this.minSizeSP;
	}

	this.sBarPosition = newSbPosition;
	this.resizeSplitterElements();
};

/**
 * Only working for horizontal splitters.
 * If the Shift and Up keys are pressed and if the focus is on one of the splitter panes moves the horizontal sash bar up by one step
 */
sap.ui.commons.Splitter.prototype.onsapupmodifiers = function(oEvent) {
	if (this.checkModifierKey(oEvent, false, false, true) && this.spOrientation == sap.ui.commons.Orientation.Horizontal){
		if (oEvent.target == this.firstPane || oEvent.target == this.secondPane){
			this.onArrowKeys(oEvent,"false");
			// cancel the event
			oEvent.preventDefault();
			oEvent.stopPropagation();
		}
	}
};


/**
 * Only working for horizontal splitters.
 * If the Shift and Up keys are pressed and if the focus is on one of the splitter panes moves the horizontal sash bar down by one step
 */
sap.ui.commons.Splitter.prototype.onsapdownmodifiers = function(oEvent) {
	if (this.checkModifierKey(oEvent, false, false, true) && this.spOrientation == sap.ui.commons.Orientation.Horizontal){
		if (oEvent.target == this.firstPane || oEvent.target == this.secondPane){
			this.onArrowKeys(oEvent,"true");
			// cancel the event
			oEvent.preventDefault();
			oEvent.stopPropagation();
		}
	}
};

/**
 * Only working for vertical splitters.
 * If the Shift and Left keys are pressed and if the focus is on one of the splitter panes moves the vertical sash bar left by one step
 */
sap.ui.commons.Splitter.prototype.onsapleftmodifiers = function(oEvent) {
	if (this.checkModifierKey(oEvent, false, false, true) && this.spOrientation == sap.ui.commons.Orientation.Vertical){
		if (oEvent.target == this.firstPane || oEvent.target == this.secondPane){
			var rtl = sap.ui.getCore().getConfiguration().getRTL();
			if (rtl) {
				this.onArrowKeys(oEvent,"true");
			}
			else {
				this.onArrowKeys(oEvent,"false");
			}
			// cancel the event
			oEvent.preventDefault();
			oEvent.stopPropagation();
		}
	}
};

/**
 * Only working for vertical splitters.
 * If the Shift and Right keys are pressed and if the focus is on one of the splitter panes moves the vertical sash bar right by one step
 */
sap.ui.commons.Splitter.prototype.onsaprightmodifiers = function(oEvent) {
	if (this.checkModifierKey(oEvent, false, false, true) && this.spOrientation == sap.ui.commons.Orientation.Vertical){
		if (oEvent.target == this.firstPane || oEvent.target == this.secondPane){
			var rtl = sap.ui.getCore().getConfiguration().getRTL();
			if (rtl) {
				this.onArrowKeys(oEvent,"false");
			}
			else {
				this.onArrowKeys(oEvent,"true");
			}
			// cancel the event
			oEvent.preventDefault();
			oEvent.stopPropagation();
		}
	}
};

/**
 * only drag events are fired; mouse events such as mousemove are not fired during drag operation
 */
/**
 * event dragstart fired when the user starts dragging the sash bar
 */

sap.ui.commons.Splitter.prototype.ondragstart = function(oEvent) {
	// cancel the event
	oEvent.preventDefault();
	oEvent.stopPropagation();
};

/**
 * Convenience method checks if a domElement is a first Pane, a second Pane or a splitter bar
 */

sap.ui.commons.Splitter.prototype.splitterPart = function(domElement) {
	/** *************method variables********************** */
	var classDomElement;
	/** *************************************************** */

	classDomElement = jQuery(domElement).attr("class");

	switch (classDomElement) {
		case "sapUiVSplitterFirstPane" :
		case "sapUiHSplitterFirstPane" : {
			return "first";
		}
		case "sapUiHSplitterSecondPane" :
		case "sapUiVSplitterSecondPane" : {
			return "second";
		}
		case "sapUiVerticalSplitterBar" :
		case "sapUiHorizontalSplitterBar" : {
			return "bar";
		}
		case "sapUiSplitter" : {
			return "DIV";
		}
		default :
			return "other";
	}
};

/**
 * Convenience method to set the focus on the next splitter element (first pane, splitter bar or second pane) in case of
 * embedded splitters: we consider the splitters as the nodes of a ternary tree, each node is a DOM element and has at
 * most three childs (FP, SB, SP) in this order if the focus is in a given node of the tree the next focus is computed
 * following the algorithm: 1- if the node has a child set the focus on the first child (first pane) 2- otherwise if the
 * node has a direct sibling on the right (SB or SP) set the focus on it 3- otherwise recursively search up (parent) the
 * tree the first node with a direct sibling on the right 4- if found set the focus on it otherwise return
 *
 * Note: in current spec splitter bar shouldn't be focused any more. This was changed in the code.
 */
sap.ui.commons.Splitter.prototype.setFocusNextSplitterElement = function(oEvent) {

	var currentFocusedDE = oEvent.target;
	var splitterElement = this.splitterPart(currentFocusedDE);
	var parent;
	var sibling;
	var child;
	var p;

	switch (splitterElement) {
		case "first" : {
			p = jQuery(currentFocusedDE).children(".sapUiSplitter");
			if (p.length != 0) {
				currentFocusedDE = p[0];
				child = jQuery(currentFocusedDE).children(".sapUiVSplitterFirstPane, .sapUiHSplitterFirstPane");

				jQuery(child[0]).focus();
				return;
			} else {
				sibling = jQuery(currentFocusedDE).next();
				//new: splitter bar shouldn't be focused anymore so skip it
				//jQuery(sibling).focus();
				jQuery(sibling).next().focus();
				return;
			}
		}
		case "second" : {
			p = jQuery(currentFocusedDE).children(".sapUiSplitter");
			if (p.length != 0) {
				currentFocusedDE = p[0];
				child = jQuery(currentFocusedDE).children(".sapUiVSplitterFirstPane, .sapUiHSplitterFirstPane");

				jQuery(child[0]).focus();
				return;
			} else {
				parent = jQuery(currentFocusedDE).closest(".sapUiVSplitterFirstPane, .sapUiHSplitterFirstPane");
				if (parent.length != 0) {
					sibling = jQuery(parent[0]).next();
					jQuery(sibling).focus();
					return;
				} else {
					return;
				}
			}
		}
		case "bar" : {
			jQuery(jQuery(currentFocusedDE).next()).focus();
			return;
		}
		case "other" : {
			parent = jQuery(currentFocusedDE).closest(
			".sapUiVSplitterFirstPane, .sapUiHSplitterFirstPane, .sapUiVSplitterSecondPane, .sapUiHSplitterSecondPane");
			if (parent.length != 0) {
				jQuery(parent[0]).focus();
				return;
			} else {
				return;
			}
		}
	}
};

sap.ui.commons.Splitter.prototype.focusPrev = function(oElement) {
	var child = jQuery(oElement).children(".sapUiSplitter");
	var sPane;
	if (child.length != 0) {
		sPane = jQuery(child[0]).children(".sapUiVSplitterSecondPane, .sapUiHSplitterSecondPane");
		this.focusPrev(sPane[0]);
	} else {
		jQuery(oElement).focus();
		return;
	}
};

/**
 * Convenience method to search for the next focusable splitter element in case of embedded splitters: we consider the
 * splitters as the nodes of a ternary tree, each node is a DOM element and has at most three childs (FP, SB, SP) in
 * this order. The algorithm is a recursive call of the following steps starting with the current focused node : 1- if
 * the node has a direct sibling on the left (SB or FP) call the method on it 2- else if the node has childs then call
 * the method on the third child (SP) 3- else set the focus on the node
 *
 * Note: in current spec splitter bar shouldn't be focused any more. This was changed in the code.
 */
sap.ui.commons.Splitter.prototype.setFocusPreviousSplitterElement = function(oEvent) {

	var currentFocusedDE = oEvent.target;
	var splitterElement = this.splitterPart(currentFocusedDE);
	var parent;
	var prevSibling;

	switch (splitterElement) {
		case "second" : {
			prevSibling = jQuery(currentFocusedDE).prev();
			// new: splitter bar shouldn't be focused any more so skip it
			if (this.splitterPart(prevSibling) == "bar"){
				var prevBarSibling = jQuery(prevSibling).prev();
				if (prevBarSibling && this.splitterPart(prevBarSibling) == "first") {
					this.focusPrev(prevBarSibling);
				}
			}else if (prevSibling && this.splitterPart(prevSibling) != "other"){
				jQuery(prevSibling).focus();
			}
			return;

		}
		case "bar" : {
			prevSibling = jQuery(currentFocusedDE).prev();
			if (prevSibling && this.splitterPart(prevSibling) == "first") {
				this.focusPrev(prevSibling);
			}
			return;
		}
		case "first" : {
		}
		case "other" : {
			var parent1 = jQuery(currentFocusedDE).parent();
			parent = jQuery(parent1).closest(
			".sapUiVSplitterFirstPane, .sapUiHSplitterFirstPane, .sapUiVSplitterSecondPane, .sapUiHSplitterSecondPane");
			if (parent.length != 0) {
				jQuery(parent[0]).focus();
				return;
			} else {
				return;
			}
		}
	}

};

/**
 * F6 Key combination if the keyboard focus is on the first Splitter Container The focus should move to the second Splitter Container if the focus is on the
 * second splitter Container it should jump to the next first splitter container if it exists
 */
sap.ui.commons.Splitter.prototype.onsapskipforward = function(oEvent) {
	// cancel the event
	oEvent.preventDefault();
	oEvent.stopPropagation();
	this.setFocusNextSplitterElement(oEvent);
};


/**
 * Shift F6 Key combination if the focus is on the second Splitter Container The focus should move back to the first container if the focus is on an UI element
 * inside a splitter container it should be set to the current splitter container
 */
sap.ui.commons.Splitter.prototype.onsapskipback = function(oEvent) {
	// cancel the event
	oEvent.preventDefault();
	oEvent.stopPropagation();
	this.setFocusPreviousSplitterElement(oEvent);
};