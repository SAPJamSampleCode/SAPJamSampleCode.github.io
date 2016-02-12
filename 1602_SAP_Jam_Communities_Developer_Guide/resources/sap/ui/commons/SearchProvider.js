/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.SearchProvider.
jQuery.sap.declare("sap.ui.commons.SearchProvider");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Element");

/**
 * Constructor for a new SearchProvider.
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
 * <li>{@link #getSuggestUrl suggestUrl} : sap.ui.core.URI</li>
 * <li>{@link #getSuggestType suggestType} : string (default: 'json')</li>
 * <li>{@link #getIcon icon} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
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
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * A SearchProvider which can be attached to a Search Field.
 * @extends sap.ui.core.Element
 *
 * @author  
 * @version 1.5.0-SNAPSHOT
 *
 * @constructor   
 * @public
 * @name sap.ui.commons.SearchProvider
 */
sap.ui.core.Element.extend("sap.ui.commons.SearchProvider", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.commons",
	properties : {
		"suggestUrl" : {type : "sap.ui.core.URI", group : "Misc", defaultValue : null},
		"suggestType" : {type : "string", group : "Misc", defaultValue : 'json'},
		"icon" : {type : "string", group : "Misc", defaultValue : null}
	}
}});


/**
 * Creates a new subclass of class sap.ui.commons.SearchProvider with name <code>sClassName</code> 
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
 * @name sap.ui.commons.SearchProvider.extend
 * @function
 */


/**
 * Getter for property <code>suggestUrl</code>.
 * The URL for suggestions of the search provider. As placeholder for the concrete search queries '{searchTerms}' must be used. For cross domain requests maybe a proxy must be used.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>suggestUrl</code>
 * @public
 * @name sap.ui.commons.SearchProvider#getSuggestUrl
 * @function
 */


/**
 * Setter for property <code>suggestUrl</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sSuggestUrl  new value for property <code>suggestUrl</code>
 * @return {sap.ui.commons.SearchProvider} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.SearchProvider#setSuggestUrl
 * @function
 */

/**
 * Getter for property <code>suggestType</code>.
 * The type of data which is provided by the given suggestUrl: either 'json' or 'xml'.
 *
 * Default value is <code>json</code>
 *
 * @return {string} the value of property <code>suggestType</code>
 * @public
 * @name sap.ui.commons.SearchProvider#getSuggestType
 * @function
 */


/**
 * Setter for property <code>suggestType</code>.
 *
 * Default value is <code>json</code> 
 *
 * @param {string} sSuggestType  new value for property <code>suggestType</code>
 * @return {sap.ui.commons.SearchProvider} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.SearchProvider#setSuggestType
 * @function
 */

/**
 * Getter for property <code>icon</code>.
 * Icon of the Search Provider
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>icon</code>
 * @public
 * @name sap.ui.commons.SearchProvider#getIcon
 * @function
 */


/**
 * Setter for property <code>icon</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sIcon  new value for property <code>icon</code>
 * @return {sap.ui.commons.SearchProvider} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.SearchProvider#setIcon
 * @function
 */

// Start of sap\ui\commons\SearchProvider.js
jQuery.sap.require("jquery.sap.encoder");

/**
 * Called by the search field, when suggestions are requested.
 *
 * @private
 */
sap.ui.commons.SearchProvider.prototype._doSuggest = function(oSearchField, sSuggestValue) {
	var sUrl = this.getSuggestUrl();
	if(!sUrl) {
		return;
	}
	sUrl = sUrl.replace("{searchTerms}", jQuery.sap.encodeURL(sSuggestValue));

	var sType = this.getSuggestType();
	var fSuccess;
	if(sType && sType.toLowerCase() === "xml"){
		//Docu: http://msdn.microsoft.com/en-us/library/cc891508%28v=vs.85%29.aspx
		sType = "xml";
		fSuccess = function(data){
			var jXMLDocument = jQuery(data);
			var jItems = jXMLDocument.find("Text");
			var aSuggestions = [];
			jItems.each(function(){
				aSuggestions.push(jQuery(this).text());
			});
			oSearchField.suggest(sSuggestValue, aSuggestions);
		};
	}else{
		//Docu: http://www.opensearch.org/Specifications/OpenSearch/Extensions/Suggestions/1.1#Response_format
		sType = "json";
		fSuccess = function(data){
			oSearchField.suggest(sSuggestValue, data[1]);
		};
	}

	jQuery.ajax({
		url: sUrl,
		dataType: sType,
		success: fSuccess,
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			jQuery.sap.log.fatal("The following problem occurred: " + textStatus, XMLHttpRequest.responseText + ","
					+ XMLHttpRequest.status);
		}
	});
};
