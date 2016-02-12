/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.SearchField.
jQuery.sap.declare("sap.ui.commons.SearchField");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new SearchField.
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
 * <li>{@link #getEnableListSuggest enableListSuggest} : boolean (default: true)</li>
 * <li>{@link #getShowListExpander showListExpander} : boolean (default: true)</li>
 * <li>{@link #getEnableClear enableClear} : boolean (default: false)</li>
 * <li>{@link #getShowExternalButton showExternalButton} : boolean (default: false)</li>
 * <li>{@link #getValue value} : string (default: '')</li>
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * <li>{@link #getEditable editable} : boolean (default: true)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getMaxLength maxLength} : int (default: 0)</li>
 * <li>{@link #getTextAlign textAlign} : sap.ui.core.TextAlign (default: sap.ui.core.TextAlign.Begin)</li>
 * <li>{@link #getVisibleItemCount visibleItemCount} : int (default: 20)</li>
 * <li>{@link #getStartSuggestion startSuggestion} : int (default: 3)</li>
 * <li>{@link #getMaxSuggestionItems maxSuggestionItems} : int (default: 10)</li>
 * <li>{@link #getMaxHistoryItems maxHistoryItems} : int (default: 5)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getSearchProvider searchProvider} : sap.ui.commons.SearchProvider</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.commons.SearchField#event:search search} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.commons.SearchField#event:suggest suggest} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Allows the user to type search queries and to trigger the search. Optionally, suggestions can be added.
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.5.0-SNAPSHOT
 *
 * @constructor   
 * @public
 * @name sap.ui.commons.SearchField
 */
sap.ui.core.Control.extend("sap.ui.commons.SearchField", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"clearHistory", "suggest"
	],

	// ---- control specific ----
	library : "sap.ui.commons",
	properties : {
		"enableListSuggest" : {type : "boolean", group : "Behavior", defaultValue : true},
		"showListExpander" : {type : "boolean", group : "Behavior", defaultValue : true},
		"enableClear" : {type : "boolean", group : "Behavior", defaultValue : false},
		"showExternalButton" : {type : "boolean", group : "Behavior", defaultValue : false},
		"value" : {type : "string", group : "Data", defaultValue : ''},
		"enabled" : {type : "boolean", group : "Behavior", defaultValue : true},
		"editable" : {type : "boolean", group : "Behavior", defaultValue : true},
		"visible" : {type : "boolean", group : "Behavior", defaultValue : true},
		"width" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null},
		"maxLength" : {type : "int", group : "Behavior", defaultValue : 0},
		"textAlign" : {type : "sap.ui.core.TextAlign", group : "Appearance", defaultValue : sap.ui.core.TextAlign.Begin},
		"visibleItemCount" : {type : "int", group : "Behavior", defaultValue : 20},
		"startSuggestion" : {type : "int", group : "Behavior", defaultValue : 3},
		"maxSuggestionItems" : {type : "int", group : "Behavior", defaultValue : 10},
		"maxHistoryItems" : {type : "int", group : "Behavior", defaultValue : 5}
	},
	aggregations : {
    	"searchProvider" : {type : "sap.ui.commons.SearchProvider", multiple : false}
	},
	events : {
		"search" : {}, 
		"suggest" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ui.commons.SearchField with name <code>sClassName</code> 
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
 * @name sap.ui.commons.SearchField.extend
 * @function
 */

sap.ui.commons.SearchField.M_EVENTS = {'search':'search','suggest':'suggest'};


/**
 * Getter for property <code>enableListSuggest</code>.
 * Defines whether a pop up list shall be provided for suggestions
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>enableListSuggest</code>
 * @public
 * @name sap.ui.commons.SearchField#getEnableListSuggest
 * @function
 */


/**
 * Setter for property <code>enableListSuggest</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnableListSuggest  new value for property <code>enableListSuggest</code>
 * @return {sap.ui.commons.SearchField} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.SearchField#setEnableListSuggest
 * @function
 */

/**
 * Getter for property <code>showListExpander</code>.
 * Defines whether the list expander shall be displayed in the case of an enabled list for suggestions
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>showListExpander</code>
 * @public
 * @name sap.ui.commons.SearchField#getShowListExpander
 * @function
 */


/**
 * Setter for property <code>showListExpander</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowListExpander  new value for property <code>showListExpander</code>
 * @return {sap.ui.commons.SearchField} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.SearchField#setShowListExpander
 * @function
 */

/**
 * Getter for property <code>enableClear</code>.
 * Defines whether the clear functionality shall be active
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>enableClear</code>
 * @public
 * @name sap.ui.commons.SearchField#getEnableClear
 * @function
 */


/**
 * Setter for property <code>enableClear</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bEnableClear  new value for property <code>enableClear</code>
 * @return {sap.ui.commons.SearchField} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.SearchField#setEnableClear
 * @function
 */

/**
 * Getter for property <code>showExternalButton</code>.
 * Defines whether an additional search button shall be displayed
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>showExternalButton</code>
 * @public
 * @name sap.ui.commons.SearchField#getShowExternalButton
 * @function
 */


/**
 * Setter for property <code>showExternalButton</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bShowExternalButton  new value for property <code>showExternalButton</code>
 * @return {sap.ui.commons.SearchField} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.SearchField#setShowExternalButton
 * @function
 */

/**
 * Getter for property <code>value</code>.
 * Text that shall be displayed within the search field
 *
 * Default value is <code>''</code>
 *
 * @return {string} the value of property <code>value</code>
 * @public
 * @name sap.ui.commons.SearchField#getValue
 * @function
 */


/**
 * Setter for property <code>value</code>.
 *
 * Default value is <code>''</code> 
 *
 * @param {string} sValue  new value for property <code>value</code>
 * @return {sap.ui.commons.SearchField} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.SearchField#setValue
 * @function
 */

/**
 * Getter for property <code>enabled</code>.
 * Disabled fields have different colors, and they can not be focused.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * @name sap.ui.commons.SearchField#getEnabled
 * @function
 */


/**
 * Setter for property <code>enabled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnabled  new value for property <code>enabled</code>
 * @return {sap.ui.commons.SearchField} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.SearchField#setEnabled
 * @function
 */

/**
 * Getter for property <code>editable</code>.
 * Non-editable controls have different colors, depending on custom settings
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>editable</code>
 * @public
 * @name sap.ui.commons.SearchField#getEditable
 * @function
 */


/**
 * Setter for property <code>editable</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEditable  new value for property <code>editable</code>
 * @return {sap.ui.commons.SearchField} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.SearchField#setEditable
 * @function
 */

/**
 * Getter for property <code>visible</code>.
 * Invisible controls are not rendered.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.ui.commons.SearchField#getVisible
 * @function
 */


/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.commons.SearchField} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.SearchField#setVisible
 * @function
 */

/**
 * Getter for property <code>width</code>.
 * Control width in CSS-size
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.ui.commons.SearchField#getWidth
 * @function
 */


/**
 * Setter for property <code>width</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.commons.SearchField} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.SearchField#setWidth
 * @function
 */

/**
 * Getter for property <code>maxLength</code>.
 * Maximum number of characters. Value '0' means the feature is switched off.
 *
 * Default value is <code>0</code>
 *
 * @return {int} the value of property <code>maxLength</code>
 * @public
 * @name sap.ui.commons.SearchField#getMaxLength
 * @function
 */


/**
 * Setter for property <code>maxLength</code>.
 *
 * Default value is <code>0</code> 
 *
 * @param {int} iMaxLength  new value for property <code>maxLength</code>
 * @return {sap.ui.commons.SearchField} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.SearchField#setMaxLength
 * @function
 */

/**
 * Getter for property <code>textAlign</code>.
 * Sets the horizontal alignment of the text
 *
 * Default value is <code>Begin</code>
 *
 * @return {sap.ui.core.TextAlign} the value of property <code>textAlign</code>
 * @public
 * @name sap.ui.commons.SearchField#getTextAlign
 * @function
 */


/**
 * Setter for property <code>textAlign</code>.
 *
 * Default value is <code>Begin</code> 
 *
 * @param {sap.ui.core.TextAlign} oTextAlign  new value for property <code>textAlign</code>
 * @return {sap.ui.commons.SearchField} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.SearchField#setTextAlign
 * @function
 */

/**
 * Getter for property <code>visibleItemCount</code>.
 * 
 * Defines the number of items in the suggestion list that shall be displayed at once. If the overall number of list items is higher than the setting,
 * a scroll bar is provided.
 * 
 *
 * Default value is <code>20</code>
 *
 * @return {int} the value of property <code>visibleItemCount</code>
 * @public
 * @name sap.ui.commons.SearchField#getVisibleItemCount
 * @function
 */


/**
 * Setter for property <code>visibleItemCount</code>.
 *
 * Default value is <code>20</code> 
 *
 * @param {int} iVisibleItemCount  new value for property <code>visibleItemCount</code>
 * @return {sap.ui.commons.SearchField} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.SearchField#setVisibleItemCount
 * @function
 */

/**
 * Getter for property <code>startSuggestion</code>.
 * 
 * Minimum length of the entered string triggering the suggestion list.
 * 
 *
 * Default value is <code>3</code>
 *
 * @return {int} the value of property <code>startSuggestion</code>
 * @public
 * @name sap.ui.commons.SearchField#getStartSuggestion
 * @function
 */


/**
 * Setter for property <code>startSuggestion</code>.
 *
 * Default value is <code>3</code> 
 *
 * @param {int} iStartSuggestion  new value for property <code>startSuggestion</code>
 * @return {sap.ui.commons.SearchField} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.SearchField#setStartSuggestion
 * @function
 */

/**
 * Getter for property <code>maxSuggestionItems</code>.
 * 
 * Maximum number of suggestion items in the suggestion list.
 * 
 *
 * Default value is <code>10</code>
 *
 * @return {int} the value of property <code>maxSuggestionItems</code>
 * @public
 * @name sap.ui.commons.SearchField#getMaxSuggestionItems
 * @function
 */


/**
 * Setter for property <code>maxSuggestionItems</code>.
 *
 * Default value is <code>10</code> 
 *
 * @param {int} iMaxSuggestionItems  new value for property <code>maxSuggestionItems</code>
 * @return {sap.ui.commons.SearchField} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.SearchField#setMaxSuggestionItems
 * @function
 */

/**
 * Getter for property <code>maxHistoryItems</code>.
 * 
 * Maximum number of history items in the suggestion list.
 * 
 *
 * Default value is <code>5</code>
 *
 * @return {int} the value of property <code>maxHistoryItems</code>
 * @public
 * @name sap.ui.commons.SearchField#getMaxHistoryItems
 * @function
 */


/**
 * Setter for property <code>maxHistoryItems</code>.
 *
 * Default value is <code>5</code> 
 *
 * @param {int} iMaxHistoryItems  new value for property <code>maxHistoryItems</code>
 * @return {sap.ui.commons.SearchField} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.SearchField#setMaxHistoryItems
 * @function
 */
	
/**
 * Getter for aggregation <code>searchProvider</code>.<br/>
 * Search provider instance which handles the suggestions for this SearchField (e.g. Open Search Protocol).
 * 
 * @return {sap.ui.commons.SearchProvider}
 * @public
 * @name sap.ui.commons.SearchField#getSearchProvider
 * @function
 */

/**
 * Setter for the aggregated <code>searchProvider</code>.
 * @param oSearchProvider {sap.ui.commons.SearchProvider}
 * @return {sap.ui.commons.SearchField} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.SearchField#setSearchProvider
 * @function
 */


/**
 * Destroys the searchProvider in the aggregation 
 * named <code>searchProvider</code>.
 * @return {sap.ui.commons.SearchField} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.SearchField#destroySearchProvider
 * @function
 */

/**
 * Event which is fired when the user triggers a search 
 *
 * @name sap.ui.commons.SearchField#search
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.query The search query
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'search' event of this <code>sap.ui.commons.SearchField</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.commons.SearchField</code>.<br/> itself. 
 *  
 * Event which is fired when the user triggers a search 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.SearchField</code>.<br/> itself.
 *
 * @return {sap.ui.commons.SearchField} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.SearchField#attachSearch
 * @function
 */


/**
 * Detach event handler <code>fnFunction</code> from the 'search' event of this <code>sap.ui.commons.SearchField</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.SearchField} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.SearchField#detachSearch
 * @function
 */


/**
 * Fire event search to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'query' of type <code>string</code> The search query</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.SearchField} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.commons.SearchField#fireSearch
 * @function
 */

/**
 * Event which is fired when new suggest values are required. 
 *
 * @name sap.ui.commons.SearchField#suggest
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.value The value for which suggestions are required.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'suggest' event of this <code>sap.ui.commons.SearchField</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.commons.SearchField</code>.<br/> itself. 
 *  
 * Event which is fired when new suggest values are required. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.SearchField</code>.<br/> itself.
 *
 * @return {sap.ui.commons.SearchField} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.SearchField#attachSuggest
 * @function
 */


/**
 * Detach event handler <code>fnFunction</code> from the 'suggest' event of this <code>sap.ui.commons.SearchField</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.SearchField} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.SearchField#detachSuggest
 * @function
 */


/**
 * Fire event suggest to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'value' of type <code>string</code> The value for which suggestions are required.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.SearchField} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.commons.SearchField#fireSuggest
 * @function
 */

/**
 * Clears the history of the control
 *
 * @name sap.ui.commons.SearchField.prototype.clearHistory
 * @function

 * @type void
 * @public
 */


/**
 * Callback function used to provide the suggest values in the handler of the suggest event (only in list suggestion mode)
 *
 * @name sap.ui.commons.SearchField.prototype.suggest
 * @function
 * @param {string} 
 *         sSSuggestValue
 *         The value which was provided in the corresponding suggest event (parameter 'value')
 * @param {string[]} 
 *         aASuggestions
 *         The list of suggestions belonging to the suggest value

 * @type void
 * @public
 */


// Start of sap\ui\commons\SearchField.js
jQuery.sap.require("sap.ui.commons.ComboBox");
jQuery.sap.require("sap.ui.commons.TextField");
jQuery.sap.require("sap.ui.commons.ListBox");
jQuery.sap.require("sap.ui.core.History");

(function() {

var _DEFAULT_VISIBLE_ITEM_COUNT = 20;

//***********************************************
// Internal control functions
//***********************************************

/**
 * Does the setup when the control is created.
 * @private
 */
sap.ui.commons.SearchField.prototype.init = function(){

	_initChildControls(this, this.getEnableListSuggest());
	this._oHistory = new sap.ui.core.History(this.getId());
};


/**
 * Does all the cleanup when the control is to be destroyed.
 * Called from Element's destroy() method.
 * @private
 */
sap.ui.commons.SearchField.prototype.exit = function(){
	this._ctrl.destroy();
	this._lb.destroy();
	if(this._btn){
		this._btn.destroy();
	}
	this._ctrl = null;
	this._lb = null;
	this._btn = null;
	this._oHistory = null;
};


/**
 * Called when the theme is changed.
 * @private
 */
sap.ui.commons.SearchField.prototype.onThemeChanged = function(oEvent){
	this.invalidate();
};


/**
 * Called when the rendering is complete.
 * @private
 */
sap.ui.commons.SearchField.prototype.onAfterRendering = function(){
	if(this.getShowExternalButton()){
		var iButtonWidth = jQuery.sap.byId(this._btn.getId()).outerWidth(true);
		jQuery.sap.byId(this._ctrl.getId()).css(sap.ui.getCore().getConfiguration().getRTL() ? "left" : "right", iButtonWidth+"px");
    }
};


sap.ui.commons.SearchField.prototype.getFocusDomRef = function() {
	return this._ctrl.getFocusDomRef();
};


sap.ui.commons.SearchField.prototype.fireSearch = function(mArguments) {
	var sVal = jQuery(this._ctrl.getInputDomRef()).val();
	if(!sVal || !this.getEditable() || !this.getEnabled()) {
		return this;
	}
	if(!mArguments) {
		mArguments = {};
	}

	this.setValue(sVal);
	if(!mArguments.noFocus){
		sVal = this.getValue();
		this.focus();
		this._oHistory.add(sVal);
		this.fireEvent("search", {query: sVal});
	}
	return this;
};


//***********************************************
// Overridden getter und setter, API functions
//***********************************************

sap.ui.commons.SearchField.prototype.clearHistory = function() {
	this._oHistory.clear();
};


sap.ui.commons.SearchField.prototype.suggest = function(sSuggestValue, aSuggestions) {
	if(!this.getEnableListSuggest() || !sSuggestValue || !aSuggestions){
		return;
	}
	this._ctrl.updateSuggestions(sSuggestValue, aSuggestions);
};


sap.ui.commons.SearchField.prototype.setEnableListSuggest = function(bEnableListSuggest) {
	if((this.getEnableListSuggest() && bEnableListSuggest) || (!this.getEnableListSuggest() && !bEnableListSuggest)){
		return;
	}
	_initChildControls(this, bEnableListSuggest);
	this.setProperty("enableListSuggest", bEnableListSuggest);
	return this;
};

sap.ui.commons.SearchField.prototype.getValue = function() {
	return _get(this, "Value");
};

sap.ui.commons.SearchField.prototype.setValue = function(sValue) {
	return _set(this, "Value", sValue, !!this.getDomRef());
};

sap.ui.commons.SearchField.prototype.getEnabled = function() {
	return _get(this, "Enabled");
};

sap.ui.commons.SearchField.prototype.setEnabled = function(bEnabled) {
	if(this._btn){
		this._btn.setEnabled(bEnabled && this.getEditable());
	}
	return _set(this, "Enabled", bEnabled);
};

sap.ui.commons.SearchField.prototype.getEditable = function() {
	return _get(this, "Editable");
};

sap.ui.commons.SearchField.prototype.setEditable = function(bEditable) {
	if(this._btn){
		this._btn.setEnabled(bEditable && this.getEnabled());
	}
	return _set(this, "Editable", bEditable);
};

sap.ui.commons.SearchField.prototype.getMaxLength = function() {
	return _get(this, "MaxLength");
};

sap.ui.commons.SearchField.prototype.setMaxLength = function(iMaxLength) {
	return _set(this, "MaxLength", iMaxLength);
};

sap.ui.commons.SearchField.prototype.getTextAlign = function() {
	return _get(this, "TextAlign");
};

sap.ui.commons.SearchField.prototype.setTextAlign = function(oTextAlign) {
	return _set(this, "TextAlign", oTextAlign);
};

sap.ui.commons.SearchField.prototype.getTooltip = function() {
	return _get(this, "Tooltip");
};

sap.ui.commons.SearchField.prototype.setTooltip = function(oTooltip) {
	return _set(this, "Tooltip", oTooltip);
};

sap.ui.commons.SearchField.prototype.getVisibleItemCount = function() {
	return _get(this, "MaxPopupItems");
};

sap.ui.commons.SearchField.prototype.setVisibleItemCount = function(iVisibleItemCount) {
	return _set(this, "MaxPopupItems", iVisibleItemCount);
};

sap.ui.commons.SearchField.prototype.setShowExternalButton = function(bShowExternalButton) {
	if(!this._btn){
		jQuery.sap.require("sap.ui.commons.Button");
		var that = this;
		this._btn = new sap.ui.commons.Button(this.getId()+"-btn", {
			text: getText("SEARCHFIELD_BUTTONTEXT"),
			enabled: this.getEditable() && this.getEnabled(),
			press: function(){
				that.fireSearch();
			}
		});
		this._btn.setParent(this);
	}
	this.setProperty("showExternalButton", bShowExternalButton);
	return this;
};


//***********************************************
// Private helper functions
//***********************************************

var _set = function(oThis, sMutator, oVal, bSuppressRerendering) {
	oThis._ctrl["set"+sMutator](oVal);
	if(!bSuppressRerendering){
		oThis.invalidate();
	}
	return oThis;
};


var _get = function(oThis, sGetter) {
	return oThis._ctrl["get"+sGetter]();
};


var _initChildControls = function(oThis, bEnableListSuggest) {
	if(!oThis._lb){
		oThis._lb = new sap.ui.commons.ListBox(oThis.getId()+"-lb");
	}

	var oOldControl = oThis._ctrl;
	var oNewControl = null;
	if(bEnableListSuggest){
		oNewControl = new sap.ui.commons.SearchField.CB(oThis.getId()+"-cb", {listBox: oThis._lb, maxPopupItems: _DEFAULT_VISIBLE_ITEM_COUNT});
	}else{
		oNewControl = new sap.ui.commons.SearchField.TF(oThis.getId()+"-tf");
	}
	oNewControl.setParent(oThis);
	if(oOldControl){
		oNewControl.setValue(oOldControl.getValue());
		oNewControl.setEnabled(oOldControl.getEnabled());
		oNewControl.setEditable(oOldControl.getEditable());
		oNewControl.setMaxLength(oOldControl.getMaxLength());
		oNewControl.setTextAlign(oOldControl.getTextAlign());
		oNewControl.setTooltip(oOldControl.getTooltip());
		oNewControl.setMaxPopupItems(oOldControl.getMaxPopupItems());
		oOldControl.destroy();
	}
	oThis._ctrl = oNewControl;
};


var getText = function(sKey, aArgs) {
	var rb = sap.ui.getCore().getLibraryResourceBundle("sap.ui.commons");
	if(rb) {
		return rb.getText(sKey, aArgs);
	}
	return sKey;
};


//***********************************************
//***********************************************
// Inner Controls
//***********************************************

jQuery.sap.require("sap.ui.core.Renderer");

var _renderSearchIcon = function(oRM, oCtrl){
	oRM.write("<div");
	oRM.writeAttributeEscaped('id', oCtrl.getId() + '-searchico');
	oRM.writeAttribute('unselectable', 'on');
	if(sap.ui.getCore().getConfiguration().getAccessibility()){
		oRM.writeAttribute("role", "presentation");
	}
	oRM.addClass("sapUiSearchFieldIco");
	oRM.writeClasses();
	oRM.write(">X</div>");
};


//***********************************************
// Inner Control "Search Textfield"
//***********************************************

sap.ui.commons.SearchField.TF = function (sId, mSettings) {
	sap.ui.commons.TextField.apply(this, arguments);
};
sap.ui.commons.SearchField.TF.prototype = jQuery.sap.newObject(sap.ui.commons.TextField.prototype);
sap.ui.core.Element.defineClass("sap.ui.commons.SearchField.TF", {
  baseType : "sap.ui.commons.TextField",
  library : "sap.ui.commons"
});

sap.ui.commons.SearchField.TF.prototype.getInputDomRef = function() {
	return jQuery.sap.domById(this.getId() + "-input");
};

sap.ui.commons.SearchField.TF.prototype.getFocusDomRef = sap.ui.commons.SearchField.TF.prototype.getInputDomRef;

sap.ui.commons.SearchField.TF.prototype.onkeypress = function(oEvent) {
};

sap.ui.commons.SearchField.TF.prototype.onkeyup = function(oEvent) {
	sap.ui.commons.SearchField.CB.prototype.onkeyup.apply(this, arguments);
};

sap.ui.commons.SearchField.TF.prototype._triggerSuggest = function(sCurrentValue) {
	this._sSuggest = null;
	if((sCurrentValue && sCurrentValue.length >= this.getParent().getStartSuggestion()) || (!sCurrentValue && this.getParent().getStartSuggestion() == 0)){
		this.getParent().fireSuggest({value: sCurrentValue});
	}
};

sap.ui.commons.SearchField.TF.prototype._checkChange = function(oEvent, bDoNotFireSearch) {
	this.getParent().fireSearch({noFocus:bDoNotFireSearch});
};

sap.ui.commons.SearchField.TF.prototype.onfocusout = function(oEvent) {
	if(this.getEditable() && this.getEnabled() && this.getRenderer().onblur) {
		this.getRenderer().onblur(this);
	}
	this._checkChange(oEvent, true);
};

sap.ui.commons.SearchField.TF.prototype.onclick = function(oEvent){
	if(oEvent.target === jQuery.sap.domById(this.getId() + "-searchico")) {
		if(this.getEditable() && this.getEnabled()){
			this.focus();
		}
		if(!this.getParent().getEnableClear()){
			this._checkChange(oEvent);
		}else{
			this.setValue("");
			this._triggerValueHelp = true;
			this.onkeyup();
		}
	}
};

sap.ui.commons.SearchField.TF.prototype.getMaxPopupItems = function(){
	return this._iVisibleItemCount ? this._iVisibleItemCount : _DEFAULT_VISIBLE_ITEM_COUNT;
};

sap.ui.commons.SearchField.TF.prototype.setMaxPopupItems = function(iMaxPopupItems){
	this._iVisibleItemCount = iMaxPopupItems;
};


jQuery.sap.require("sap.ui.commons.TextFieldRenderer");
sap.ui.commons.SearchField.TFRenderer = sap.ui.core.Renderer.extend(sap.ui.commons.TextFieldRenderer);
sap.ui.commons.SearchField.TFRenderer.renderOuterContent = _renderSearchIcon;
sap.ui.commons.SearchField.TFRenderer.renderOuterAttributes = function(oRM, oCtrl) {
	oRM.addClass("sapUiSearchFieldTf");
};


//***********************************************
// Inner Control "Search Combo Box"
//***********************************************

sap.ui.commons.SearchField.CB = function (sId, mSettings) {
	sap.ui.commons.ComboBox.apply(this, arguments);
	this._mSuggestions = {};
	this._aSuggestValues = [];
};
sap.ui.commons.SearchField.CB.prototype = jQuery.sap.newObject(sap.ui.commons.ComboBox.prototype);
sap.ui.core.Element.defineClass("sap.ui.commons.SearchField.CB", {
  baseType : "sap.ui.commons.ComboBox",
  library : "sap.ui.commons"
});

sap.ui.commons.SearchField.CB.prototype.updateSuggestions = function(sSuggestVal, aSuggestions) {
	this._mSuggestions[sSuggestVal] = aSuggestions;
	if(this.getInputDomRef() && jQuery(this.getInputDomRef()).val() === sSuggestVal && this._hasSuggestValue(sSuggestVal)){
		this._doUpdateList(sSuggestVal);
		this._aSuggestValues = [sSuggestVal];
	}
};

sap.ui.commons.SearchField.CB.prototype._getListBox = function() {
	return this.getParent()._lb;
};

sap.ui.commons.SearchField.CB.prototype._hasSuggestValue = function(sSuggestVal) {
	return this._aSuggestValues.length > 0 && sSuggestVal == this._aSuggestValues[this._aSuggestValues.length-1];
};

sap.ui.commons.SearchField.CB.prototype._doUpdateList = function(sSuggestVal, bSkipOpen) {
	if((!this.oPopup || !this.oPopup.isOpen()) && !bSkipOpen){
		this._open();
	}else{
		this._updateList(sSuggestVal);
	}
	if(!this._lastKeyIsDel){
		this._doTypeAhead();
	}
};

sap.ui.commons.SearchField.CB.prototype.onclick = function(oEvent) {
	sap.ui.commons.ComboBox.prototype.onclick.apply(this, arguments);
	if(oEvent.target === jQuery.sap.domById(this.getId() + "-searchico")) {
		if(!this.getParent().getEnableClear()){
			this.getParent().fireSearch();
		}else{
			this.setValue("");
			this._triggerValueHelp = true;
			this.onkeyup(null, true);
			this._aSuggestValues = [];
		}
		if(this.getEditable() && this.getEnabled()){
			this.focus();
		}
	}else if(jQuery.sap.containsOrEquals(jQuery.sap.domById(this.getId() + "-providerico"), oEvent.target)) {
		if(this.getEditable() && this.getEnabled()){
			this.focus();
		}
	}
};

sap.ui.commons.SearchField.CB.prototype.onkeypress = function(oEvent) {
};

sap.ui.commons.SearchField.CB.prototype.onkeyup = function(oEvent, bSkipOpen) {
	if(oEvent){
		var oKC = jQuery.sap.KeyCodes;
		if(sap.ui.commons.ComboBox._isHotKey(oEvent) || oEvent.keyCode === oKC.F4 && oEvent.which === 0 /*this is the Firefox case and ensures 's' with same charCode is accepted*/) {
			return;
		}

		var iKC = oEvent.which || oEvent.keyCode;
		if(iKC !== oKC.ESCAPE) {
			this._triggerValueHelp = true;
			this._lastKeyIsDel = iKC == oKC.DELETE || iKC == oKC.BACKSPACE;
		}
	}

	if(this._triggerValueHelp){
		this._triggerValueHelp = false;
		if(this._sSuggest){
			jQuery.sap.clearDelayedCall(this._sSuggest);
			this._sSuggest = null;
		}
		var sCurrentValue = jQuery(this.getInputDomRef()).val();
		if((sCurrentValue && sCurrentValue.length >= this.getParent().getStartSuggestion()) || (!sCurrentValue && this.getParent().getStartSuggestion() == 0)){
			this._sSuggest = jQuery.sap.delayedCall(200, this, "_triggerSuggest", [sCurrentValue]);
		}else if(this._doUpdateList){ //Textfield uses the same onkeyup function -> therefore check existence of this function
			this._doUpdateList(sCurrentValue, bSkipOpen);
		}
	}
};

sap.ui.commons.SearchField.CB.prototype._triggerSuggest = function(sSuggestValue) {
	this._sSuggest = null;
	if(!this._mSuggestions[sSuggestValue]){
		this._aSuggestValues.push(sSuggestValue);
		var oSearchProvider = this.getParent().getSearchProvider();
		if(oSearchProvider){
			oSearchProvider._doSuggest(this.getParent(), sSuggestValue);
		}else{
			this.getParent().fireSuggest({value: sSuggestValue});
		}
	}else{
		this._doUpdateList(sSuggestValue);
	}
};

sap.ui.commons.SearchField.CB.prototype._updateList = function(sSuggestVal) {
	var bEmpty = false;
	var oLb = this._getListBox();
	oLb.destroyAggregation("items", true);

	var addToListbox = function(oLb, aValues, iMax, bSeparatorBefore){
		aValues = aValues ? aValues : [];
		var iCount = Math.min(aValues.length, iMax);

		if(bSeparatorBefore && iCount > 0){
			oLb.addItem(new sap.ui.core.SeparatorItem());
		}

		for(var i=0; i<iCount; i++){
			//oLb.addAggregation("items", new sap.ui.core.ListItem({text: aSug[i]}), true);
			oLb.addItem(new sap.ui.core.ListItem({text: aValues[i]}));
		}
		return iCount;
	};

	var iHistoryCount = addToListbox(oLb, this.getParent()._oHistory.get(sSuggestVal), this.getParent().getMaxHistoryItems(), false);

	var iSuggestCount = addToListbox(oLb,
			sSuggestVal && sSuggestVal.length >= this.getParent().getStartSuggestion() ? this._mSuggestions[sSuggestVal] : [],
			this.getParent().getMaxSuggestionItems(),
			iHistoryCount > 0);

	if(iHistoryCount == 0 && iSuggestCount == 0) {
		//oLb.addItem(new sap.ui.core.ListItem({text: getText("SEARCHFIELD_NO_ITEMS"), enabled: false}));
		//bEmpty = true;
	}

	var iItemsLength = oLb.getItems().length;
	var iMaxPopupItems = this.getMaxPopupItems();
	oLb.setVisibleItems(iMaxPopupItems < iItemsLength ? iMaxPopupItems : iItemsLength);
	oLb.setSelectedIndex(-1);
	oLb.setMinWidth(jQuery(this.getDomRef()).rect().width + "px");
	oLb.rerender();
	return bEmpty;
};

sap.ui.commons.SearchField.CB.prototype._prepareOpen = function() {};

sap.ui.commons.SearchField.CB.prototype._open = function() {
	sap.ui.commons.ComboBox.prototype._open.apply(this, [0]);
};

sap.ui.commons.SearchField.CB.prototype._rerenderListBox = function(){
	return this._updateList(this._aSuggestValues.length > 0 ? this._aSuggestValues[this._aSuggestValues.length-1] : null);
};

sap.ui.commons.SearchField.CB.prototype._checkChange = function(oEvent, bImmediate, bDoNotFireSearch) {
	this.getParent().fireSearch({noFocus:bDoNotFireSearch});
};

sap.ui.commons.SearchField.CB.prototype.onsapfocusleave = function(oEvent) {
	if(oEvent.relatedControlId === this._getListBox().getId()){
		this.focus();
		return;
	}
	this._checkChange(oEvent, true, true);
};

sap.ui.commons.SearchField.CB.prototype.onfocusout = function(oEvent) {
	if(this.getEditable() && this.getEnabled() && this.getRenderer().onblur) {
		this.getRenderer().onblur(this);
	}
	this._checkChange(oEvent, true, true);
};

sap.ui.commons.SearchField.CB.prototype.onsapshow = function(oEvent){
	if(this.getParent().getShowListExpander()){
		sap.ui.commons.ComboBox.prototype.onsapshow.apply(this, arguments);
	}else{
		oEvent.preventDefault();
		oEvent.stopImmediatePropagation();
	}
};

sap.ui.commons.SearchField.CB.prototype._handleSelect = function(oControlEvent) {
	var oItem = sap.ui.commons.ComboBox.prototype._handleSelect.apply(this, arguments);
	if(oItem && oItem.getEnabled()) {
		this.getParent().fireSearch();
	}
};


jQuery.sap.require("sap.ui.commons.ComboBoxRenderer");
sap.ui.commons.SearchField.CBRenderer = sap.ui.core.Renderer.extend(sap.ui.commons.ComboBoxRenderer);
sap.ui.commons.SearchField.CBRenderer.renderOuterContent = function(oRM, oCtrl){
	if(oCtrl.getParent().getShowListExpander()){
		sap.ui.commons.ComboBoxRenderer.renderOuterContent.apply(this, arguments);
	}
	_renderSearchIcon.apply(this, arguments);

	if(oCtrl.getParent().getSearchProvider() && oCtrl.getParent().getSearchProvider().getIcon()){
		oRM.write("<div");
		oRM.writeAttributeEscaped('id', oCtrl.getId() + '-providerico');
		oRM.writeAttribute('unselectable', 'on');
		if(sap.ui.getCore().getConfiguration().getAccessibility()){
			oRM.writeAttribute("role", "presentation");
		}
		oRM.addClass("sapUiSearchFieldProvIco");
		oRM.writeClasses();
		oRM.write("><img src=\""+oCtrl.getParent().getSearchProvider().getIcon()+"\"></img></div>");
	}
};
sap.ui.commons.SearchField.CBRenderer.renderOuterAttributes = function(oRM, oCtrl) {
	sap.ui.commons.ComboBoxRenderer.renderOuterAttributes.apply(this, arguments);
	oRM.addClass("sapUiSearchFieldCb");
	if(oCtrl.getParent().getSearchProvider() && oCtrl.getParent().getSearchProvider().getIcon()){
		oRM.addClass("sapUiSearchFieldCbProv");
	}
};

}());