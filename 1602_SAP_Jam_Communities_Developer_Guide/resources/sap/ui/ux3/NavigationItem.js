/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.ux3.NavigationItem.
jQuery.sap.declare("sap.ui.ux3.NavigationItem");
jQuery.sap.require("sap.ui.ux3.library");
jQuery.sap.require("sap.ui.core.Item");

/**
 * Constructor for a new NavigationItem.
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
 * <ul></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getSubItems subItems} : sap.ui.ux3.NavigationItem[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 *
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Item#constructor sap.ui.core.Item}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Is the item to be used within the NavigationBar
 * @extends sap.ui.core.Item
 *
 * @author SAP AG 
 * @version 1.5.0-SNAPSHOT
 *
 * @constructor   
 * @public
 * @name sap.ui.ux3.NavigationItem
 */
sap.ui.core.Item.extend("sap.ui.ux3.NavigationItem", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.ux3",
	defaultAggregation : "subItems",
	aggregations : {
    	"subItems" : {type : "sap.ui.ux3.NavigationItem", multiple : true, singularName : "subItem"}
	}
}});


/**
 * Creates a new subclass of class sap.ui.ux3.NavigationItem with name <code>sClassName</code> 
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
 * @name sap.ui.ux3.NavigationItem.extend
 * @function
 */

	
/**
 * Getter for aggregation <code>subItems</code>.<br/>
 * Any NavigationItems on the next hierarchy level connected to this NavigationItem
 * 
 * @return {sap.ui.ux3.NavigationItem[]}
 * @public
 * @name sap.ui.ux3.NavigationItem#getSubItems
 * @function
 */

/**
 * Inserts a subItem into the aggregation named <code>subItems</code>.
 *
 * @param {sap.ui.ux3.NavigationItem}
 *          oSubItem the subItem to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the subItem should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the subItem is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the subItem is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.NavigationItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.NavigationItem#insertSubItem
 * @function
 */


/**
 * Adds some subItem <code>oSubItem</code> 
 * to the aggregation named <code>subItems</code>.
 *
 * @param {sap.ui.ux3.NavigationItem}
 *            oSubItem the subItem to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.NavigationItem} <code>this</code> to allow method chaining
 * @public 
 * @name sap.ui.ux3.NavigationItem#addSubItem
 * @function
 */


/**
 * Removes an subItem from the aggregation named <code>subItems</code>.
 *
 * @param {int | string | sap.ui.ux3.NavigationItem} vSubItem the subItem to remove or its index or id
 * @return {sap.ui.ux3.NavigationItem} the removed subItem or null
 * @public
 * @name sap.ui.ux3.NavigationItem#removeSubItem
 * @function
 */


/**
 * Removes all the controls in the aggregation named <code>subItems</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.ux3.NavigationItem[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.ux3.NavigationItem#removeAllSubItems
 * @function
 */


/**
 * Checks for the provided <code>sap.ui.ux3.NavigationItem</code> in the aggregation named <code>subItems</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.ux3.NavigationItem}
 *            oSubItem the subItem whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.ux3.NavigationItem#indexOfSubItem
 * @function
 */


/**
 * Destroys all the subItems in the aggregation 
 * named <code>subItems</code>.
 * @return {sap.ui.ux3.NavigationItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.NavigationItem#destroySubItems
 * @function
 */

// Start of sap\ui\ux3\NavigationItem.js
