/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.TextField.
jQuery.sap.declare("sap.ui.commons.TextField");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new TextField.
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
 * <li>{@link #getValue value} : string (default: '')</li>
 * <li>{@link #getTextDirection textDirection} : sap.ui.core.TextDirection (default: sap.ui.core.TextDirection.Inherit)</li>
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * <li>{@link #getEditable editable} : boolean (default: true)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getRequired required} : boolean (default: false)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getMaxLength maxLength} : int (default: 0)</li>
 * <li>{@link #getValueState valueState} : sap.ui.core.ValueState (default: sap.ui.core.ValueState.None)</li>
 * <li>{@link #getTextAlign textAlign} : sap.ui.core.TextAlign (default: sap.ui.core.TextAlign.Begin)</li>
 * <li>{@link #getImeMode imeMode} : sap.ui.core.ImeMode (default: sap.ui.core.ImeMode.Auto)</li>
 * <li>{@link #getDesign design} : sap.ui.core.Design (default: sap.ui.core.Design.Standard)</li>
 * <li>{@link #getHelpId helpId} : string (default: '')</li>
 * <li>{@link #getAccessibleRole accessibleRole} : sap.ui.core.AccessibleRole (default: sap.ui.core.AccessibleRole.Textbox)</li>
 * <li>{@link #getName name} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.commons.TextField#event:change change} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.commons.TextField#event:liveChange liveChange} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Control is used to enter text.
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.5.0-SNAPSHOT
 *
 * @constructor   
 * @public
 * @name sap.ui.commons.TextField
 */
sap.ui.core.Control.extend("sap.ui.commons.TextField", { metadata : {

	// ---- object ----
	interfaces : [
		"sap.ui.commons.ToolbarItem"
	],
	publicMethods : [
		// methods
		"focus", "getLiveValue"
	],

	// ---- control specific ----
	library : "sap.ui.commons",
	properties : {
		"value" : {type : "string", group : "Data", defaultValue : '', bindable : "bindable"},
		"textDirection" : {type : "sap.ui.core.TextDirection", group : "Appearance", defaultValue : sap.ui.core.TextDirection.Inherit},
		"enabled" : {type : "boolean", group : "Behavior", defaultValue : true},
		"editable" : {type : "boolean", group : "Behavior", defaultValue : true},
		"visible" : {type : "boolean", group : "Behavior", defaultValue : true},
		"required" : {type : "boolean", group : "Appearance", defaultValue : false},
		"width" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null},
		"maxLength" : {type : "int", group : "Behavior", defaultValue : 0},
		"valueState" : {type : "sap.ui.core.ValueState", group : "Data", defaultValue : sap.ui.core.ValueState.None},
		"textAlign" : {type : "sap.ui.core.TextAlign", group : "Appearance", defaultValue : sap.ui.core.TextAlign.Begin},
		"imeMode" : {type : "sap.ui.core.ImeMode", group : "Behavior", defaultValue : sap.ui.core.ImeMode.Auto},
		"design" : {type : "sap.ui.core.Design", group : "Appearance", defaultValue : sap.ui.core.Design.Standard},
		"helpId" : {type : "string", group : "Behavior", defaultValue : ''},
		"accessibleRole" : {type : "sap.ui.core.AccessibleRole", group : "Accessibility", defaultValue : sap.ui.core.AccessibleRole.Textbox},
		"name" : {type : "string", group : "Misc", defaultValue : null}
	},
	events : {
		"change" : {}, 
		"liveChange" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ui.commons.TextField with name <code>sClassName</code> 
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
 * @name sap.ui.commons.TextField.extend
 * @function
 */

sap.ui.commons.TextField.M_EVENTS = {'change':'change','liveChange':'liveChange'};


/**
 * Getter for property <code>value</code>.
 * Text inside the textfield
 *
 * Default value is <code>''</code>
 *
 * @return {string} the value of property <code>value</code>
 * @public
 * @name sap.ui.commons.TextField#getValue
 * @function
 */


/**
 * Setter for property <code>value</code>.
 *
 * Default value is <code>''</code> 
 *
 * @param {string} sValue  new value for property <code>value</code>
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @public
 * @SecSource {return} The 'value' property of the TextField control and its subclasses represents unfiltered user input. 
		Applications must ensure that the data is either validated / cleansed or that it is not used in a context which is sensible to XSS attacks.
 * @name sap.ui.commons.TextField#setValue
 * @function
 */

/**
 * Binder for property <code>value</code>.
 *
 * @param {string} sPath path to a property in the model 
 * @param {function} [fnFormatter=null] the formatter function
 * @param {sap.ui.model.BindingMode} [sMode=Default] the binding mode to be used for this property binding (e.g. one way) 
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.TextField#bindValue
 * @function
 */


/**
 * Unbinder for property <code>value</code>.
 *
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.TextField#unbindValue
 * @function

 */

/**
 * Getter for property <code>textDirection</code>.
 * Direction of the text. Possible values: rtl, ltr.
 *
 * Default value is <code>Inherit</code>
 *
 * @return {sap.ui.core.TextDirection} the value of property <code>textDirection</code>
 * @public
 * @name sap.ui.commons.TextField#getTextDirection
 * @function
 */


/**
 * Setter for property <code>textDirection</code>.
 *
 * Default value is <code>Inherit</code> 
 *
 * @param {sap.ui.core.TextDirection} oTextDirection  new value for property <code>textDirection</code>
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.TextField#setTextDirection
 * @function
 */

/**
 * Getter for property <code>enabled</code>.
 * Switches enabled state of the control. Disabled fields have different colors, and can not be focused.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * @name sap.ui.commons.TextField#getEnabled
 * @function
 */


/**
 * Setter for property <code>enabled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnabled  new value for property <code>enabled</code>
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.TextField#setEnabled
 * @function
 */

/**
 * Getter for property <code>editable</code>.
 * Switches edit state of the control. Read-only fields have different colors, depending on customer setting.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>editable</code>
 * @public
 * @name sap.ui.commons.TextField#getEditable
 * @function
 */


/**
 * Setter for property <code>editable</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEditable  new value for property <code>editable</code>
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.TextField#setEditable
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
 * @name sap.ui.commons.TextField#getVisible
 * @function
 */


/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.TextField#setVisible
 * @function
 */

/**
 * Getter for property <code>required</code>.
 * Depending on theme the TextField is shown as required.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>required</code>
 * @public
 * @name sap.ui.commons.TextField#getRequired
 * @function
 */


/**
 * Setter for property <code>required</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bRequired  new value for property <code>required</code>
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.TextField#setRequired
 * @function
 */

/**
 * Getter for property <code>width</code>.
 * Width of text field. When it is set (CSS-size such as % or px), this is the exact size. When left blank, the text field length defines the width.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.ui.commons.TextField#getWidth
 * @function
 */


/**
 * Setter for property <code>width</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.TextField#setWidth
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
 * @name sap.ui.commons.TextField#getMaxLength
 * @function
 */


/**
 * Setter for property <code>maxLength</code>.
 *
 * Default value is <code>0</code> 
 *
 * @param {int} iMaxLength  new value for property <code>maxLength</code>
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.TextField#setMaxLength
 * @function
 */

/**
 * Getter for property <code>valueState</code>.
 * Visualizes warnings or errors related to the text field. Possible values: Warning, Error, Success.
 *
 * Default value is <code>None</code>
 *
 * @return {sap.ui.core.ValueState} the value of property <code>valueState</code>
 * @public
 * @name sap.ui.commons.TextField#getValueState
 * @function
 */


/**
 * Setter for property <code>valueState</code>.
 *
 * Default value is <code>None</code> 
 *
 * @param {sap.ui.core.ValueState} oValueState  new value for property <code>valueState</code>
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.TextField#setValueState
 * @function
 */

/**
 * Getter for property <code>textAlign</code>.
 * Sets the horizontal alignment of the text.
 *
 * Default value is <code>Begin</code>
 *
 * @return {sap.ui.core.TextAlign} the value of property <code>textAlign</code>
 * @public
 * @name sap.ui.commons.TextField#getTextAlign
 * @function
 */


/**
 * Setter for property <code>textAlign</code>.
 *
 * Default value is <code>Begin</code> 
 *
 * @param {sap.ui.core.TextAlign} oTextAlign  new value for property <code>textAlign</code>
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.TextField#setTextAlign
 * @function
 */

/**
 * Getter for property <code>imeMode</code>.
 * State of the Input Method Editor (IME).
 *
 * Default value is <code>Auto</code>
 *
 * @return {sap.ui.core.ImeMode} the value of property <code>imeMode</code>
 * @public
 * @name sap.ui.commons.TextField#getImeMode
 * @function
 */


/**
 * Setter for property <code>imeMode</code>.
 *
 * Default value is <code>Auto</code> 
 *
 * @param {sap.ui.core.ImeMode} oImeMode  new value for property <code>imeMode</code>
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.TextField#setImeMode
 * @function
 */

/**
 * Getter for property <code>design</code>.
 * Font type. Standard, Monospace
 *
 * Default value is <code>Standard</code>
 *
 * @return {sap.ui.core.Design} the value of property <code>design</code>
 * @public
 * @name sap.ui.commons.TextField#getDesign
 * @function
 */


/**
 * Setter for property <code>design</code>.
 *
 * Default value is <code>Standard</code> 
 *
 * @param {sap.ui.core.Design} oDesign  new value for property <code>design</code>
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.TextField#setDesign
 * @function
 */

/**
 * Getter for property <code>helpId</code>.
 * Unique identifier used for help service.
 *
 * Default value is <code>''</code>
 *
 * @return {string} the value of property <code>helpId</code>
 * @public
 * @name sap.ui.commons.TextField#getHelpId
 * @function
 */


/**
 * Setter for property <code>helpId</code>.
 *
 * Default value is <code>''</code> 
 *
 * @param {string} sHelpId  new value for property <code>helpId</code>
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.TextField#setHelpId
 * @function
 */

/**
 * Getter for property <code>accessibleRole</code>.
 * Accessibility role for the text field.
 *
 * Default value is <code>Textbox</code>
 *
 * @return {sap.ui.core.AccessibleRole} the value of property <code>accessibleRole</code>
 * @public
 * @name sap.ui.commons.TextField#getAccessibleRole
 * @function
 */


/**
 * Setter for property <code>accessibleRole</code>.
 *
 * Default value is <code>Textbox</code> 
 *
 * @param {sap.ui.core.AccessibleRole} oAccessibleRole  new value for property <code>accessibleRole</code>
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.TextField#setAccessibleRole
 * @function
 */

/**
 * Getter for property <code>name</code>.
 * The 'name' property to be used in the HTML code (e.g. for HTML forms that send data to the server via 'submit').
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>name</code>
 * @public
 * @name sap.ui.commons.TextField#getName
 * @function
 */


/**
 * Setter for property <code>name</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sName  new value for property <code>name</code>
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.TextField#setName
 * @function
 */

/**
 * Event is fired when the text in the field has changed AND the focus leaves the TextField or the Enter key is pressed. 
 *
 * @name sap.ui.commons.TextField#change
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.newValue The new / changed value of the textfield.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'change' event of this <code>sap.ui.commons.TextField</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.commons.TextField</code>.<br/> itself. 
 *  
 * Event is fired when the text in the field has changed AND the focus leaves the TextField or the Enter key is pressed. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.TextField</code>.<br/> itself.
 *
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.TextField#attachChange
 * @function
 */


/**
 * Detach event handler <code>fnFunction</code> from the 'change' event of this <code>sap.ui.commons.TextField</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.TextField#detachChange
 * @function
 */


/**
 * Fire event change to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'newValue' of type <code>string</code> The new / changed value of the textfield.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.commons.TextField#fireChange
 * @function
 */

/**
 * This event if fired during typing into the TextField and returns the currently enterted value. This is not the content of the value property. The value property is only updated by ENTER and by leaving the control. 
 *
 * @name sap.ui.commons.TextField#liveChange
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.liveValue Current value of the Textfield.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'liveChange' event of this <code>sap.ui.commons.TextField</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.commons.TextField</code>.<br/> itself. 
 *  
 * This event if fired during typing into the TextField and returns the currently enterted value. This is not the content of the value property. The value property is only updated by ENTER and by leaving the control. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.TextField</code>.<br/> itself.
 *
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.TextField#attachLiveChange
 * @function
 */


/**
 * Detach event handler <code>fnFunction</code> from the 'liveChange' event of this <code>sap.ui.commons.TextField</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.TextField#detachLiveChange
 * @function
 */


/**
 * Fire event liveChange to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'liveValue' of type <code>string</code> Current value of the Textfield.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.commons.TextField#fireLiveChange
 * @function
 */

/**
 * Puts the focus to this control.
 *
 * @name sap.ui.commons.TextField.prototype.focus
 * @function

 * @type void
 * @public
 */


/**
 * Returns the current value of the TextField. In case of editing the TextField you can access the current value via this method. The validated value is accessible via the property value.
 *
 * @name sap.ui.commons.TextField.prototype.getLiveValue
 * @function

 * @type string
 * @public
 */


// Start of sap\ui\commons\TextField.js
/**
 * Event handler called when control is receiving the focus
 *
 * @param {jQuery.Event} oEvent
 * @protected
 */
sap.ui.commons.TextField.prototype.onfocusin = function(oEvent) {

	if(this.getEditable() && this.getEnabled() && this.getRenderer().onfocus) {
		this.getRenderer().onfocus(this);
	}

};

/**
 * Event handler called when control is losing the focus
 *
 * @param {jQuery.Event} oEvent
 * @protected
 */
sap.ui.commons.TextField.prototype.onfocusout = function(oEvent) {
	if(this.getEditable() && this.getEnabled() && this.getRenderer().onblur) {
		this.getRenderer().onblur(this);
	}

	this._checkChange(oEvent);
};

/**
 * Event handler called when enter key is pressed.
 * @see sap.ui.commons.TextField#onfocusout
 * @protected
 */
sap.ui.commons.TextField.prototype.onsapenter = function(oEvent) {
	this._checkChange(oEvent);
};

/**
 * Compares the previous value with the current value and fires the change event
 * if the TextField is editable and the value has changed.
 *
 * @param {jQuery.Event} oEvent
 * @protected
 */
sap.ui.commons.TextField.prototype._checkChange = function(oEvent) {
	var oInput = this.getInputDomRef(),
		newVal = oInput && oInput.value,
		oldVal = this.getValue();

	if(this.getEditable() && this.getEnabled() && (oldVal != newVal)) {
		this.setProperty("value", newVal, true); // suppress rerendering
		this.fireChange({newValue:newVal}); // oldValue is not that easy in ComboBox and anyway not in API... thus skip it
	}
};

/**
 * Event handler called when text selection starts.
 * When the text field is disabled, the text should not be selectable, so cancel the event.
 *
 * @param {jQuery.Event} oEvent
 * @protected
 */
sap.ui.commons.TextField.prototype.onselectstart = function(oEvent) {
	if (!this.getEnabled()){
		oEvent.preventDefault();
		oEvent.stopPropagation();
	}
};

/**
 * Event handler called when a key is pressed.
 * onsapescape did not work in firefox (the value update is ignored), so the keypress event is used instead
 * the value must be set to the old one before the changes
 * @protected
 */
sap.ui.commons.TextField.prototype.onkeypress = function(oEvent) {

	var oKC = jQuery.sap.KeyCodes;
	var iKC = oEvent.which || oEvent.keyCode;
	if(iKC == oKC.ESCAPE){
		var sValue = this.getProperty("value");
		var oInput = this.getInputDomRef();
		if(oInput && oInput.value !== sValue) {
			jQuery(oInput).val(sValue);
		}
	}

};

/**
 * Escape fires no keypress in webkit
 * the value must be set to the old one before the changes
 * @protected
 */
sap.ui.commons.TextField.prototype.onsapescape = function(oEvent) {

	if(jQuery.browser.webkit){
		var oKC = jQuery.sap.KeyCodes;
		var iKC = oEvent.which || oEvent.keyCode;
		if(iKC == oKC.ESCAPE){
			var sValue = this.getProperty("value");
			var oInput = this.getInputDomRef();
			if(oInput && oInput.value !== sValue) {
				jQuery(oInput).val(sValue);
			}
		}
	}

};

/**
 * Event handler for keyup.
 * fire the liveChange event
 * @protected
 */
sap.ui.commons.TextField.prototype.onkeyup = function(oEvent) {

	this._fireLiveChange();
};

/**
 * Event handler for paste.
 * fire the liveChange event
 * @protected
 */
sap.ui.commons.TextField.prototype.onpaste = function(oEvent) {

	// as on the paste event there is still the value before paste in the input field
	// wait some time (until paste is finished) and check it for change
	var that = this;
	setTimeout(function(){
		that._fireLiveChange();
	}, 10);

};

/**
 * Handler for live change
 * reads the current content and fires the liveChabge event
 * @private
 */
sap.ui.commons.TextField.prototype._fireLiveChange = function() {

	var sLiveValue = jQuery(this.getInputDomRef()).val();
	this.fireLiveChange({liveValue:sLiveValue});

};

/* Overwrite of generated function - no new JS-doc.
 * Property setter for the ValueState
 *
 * @param {Valuestate} oValueState
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TextField.prototype.setValueState = function(oValueState) {

	var oldValueState = this.getValueState();

	if( oldValueState == oValueState ){
		return this;
	}

	this.setProperty("valueState", oValueState, true); // do not render again

	if(!this.getDomRef()){
		//not already rendered.
		return this;
	}

	if(this.getRenderer().setValueState) {
		this.getRenderer().setValueState(this, oldValueState, oValueState);
	}

	if(this.delayedCallId) {
		jQuery.sap.clearDelayedCall(this.delayedCallId);
		this.delayedCallId = null;
	}
	if(sap.ui.core.ValueState.Success == oValueState) {
		this.delayedCallId = jQuery.sap.delayedCall(3000, this, "removeValidVisualization");
	}

	return this;
};

sap.ui.commons.TextField.prototype.removeValidVisualization = function() {
	if(this.getRenderer().removeValidVisualization){
		this.getRenderer().removeValidVisualization(this);
	}
};

/* Overwrite of generated function - no new JS-doc.
 * Property setter for the editable state
 *
 * @param bEditable
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TextField.prototype.setEditable = function(bEditable) {

	this.setProperty('editable', bEditable, true); // No re-rendering

	if (this.getDomRef() && this.getRenderer().setEditable){
			this.getRenderer().setEditable(this, bEditable);
	}

	return this;
};

/* Overwrite of generated function - no new JS-doc.
 * Property setter for the enabled state
 *
 * @param bEnabled
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TextField.prototype.setEnabled = function(bEnabled) {

	this.setProperty('enabled', bEnabled, true); // No re-rendering

	if (this.getDomRef() && this.getRenderer().setEnabled){
			this.getRenderer().setEnabled(this, bEnabled);
	}

	return this;
};

/* Overwrite of generated function - no new JS-doc.
 * Property setter for the Required-State
 *
 * @param bRequired:
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TextField.prototype.setRequired = function(bRequired) {

	this.setProperty('required', bRequired, true); // No re-rendering

	if (this.getDomRef()){
		// If already rendered, adapt rendered control without complete re-rendering
		if(this.getRenderer().setRequired) {
			this.getRenderer().setRequired(this, bRequired);
		}
	}

	return this;
};

/* Overwrite of generated function - no new JS-doc.
 * Property setter for the Design
 *
 * @param sDesign:
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TextField.prototype.setDesign = function(sDesign) {

	this.setProperty('design', sDesign, true); // No re-rendering

	if (this.getDomRef()){
		// If already rendered, adapt rendered control without complete re-rendering
		if(this.getRenderer().setDesign) {
			this.getRenderer().setDesign(this, sDesign);
		}
	}

	return this;
};

/* Overwrite of generated function - no new JS-doc.
 * Property setter for the Value
 *
 * @param sValue:
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TextField.prototype.setValue = function(sValue) {
	var newValue = sValue;
	if( newValue && newValue.length > this.getMaxLength() && this.getMaxLength() > 0){
		newValue = newValue.substring(0,this.getMaxLength());
//		this.fireChange({newValue:newValue});
	}

	this.setProperty("value", newValue, true); // no re-rendering!
	var oInput = this.getInputDomRef();
	if(oInput && oInput.value !== newValue) {
		oInput.value = this.getValue();
	}

	return this;
};

/**
 * Method for accessing the DOM Ref of the input element.
 * Might be overwritten in child classes.
 *
 * @protected
 */
sap.ui.commons.TextField.prototype.getInputDomRef = function(){
	return this.getFocusDomRef();
};

/**
 * Applies the focus info
 * overwrite of the Element method because in IE8 on rerendering focus is lost
 * @param {object} oFocusInfo
 * @protected
 */
sap.ui.commons.TextField.prototype.applyFocusInfo = function (oFocusInfo) {

	if (jQuery.browser.msie && jQuery.browser.version == 8) {
		var oPos = this.getValue().length;
		var that = this;
		setTimeout(function(){
			that.focus();
			jQuery(that.getFocusDomRef()).cursorPos(oPos);
		}, 0);
	}else{
		this.focus();
	}
	return this;
};

/*
 * Implementation of the getLiveValue method
 */
sap.ui.commons.TextField.prototype.getLiveValue = function() {
	var oIDomRef = this.getInputDomRef();
	if (oIDomRef) {
		return jQuery(oIDomRef).val();
	} else {
		return this.getValue();
	}
};
