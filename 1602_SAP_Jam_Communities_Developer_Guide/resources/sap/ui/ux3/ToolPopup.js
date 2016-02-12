/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.ux3.ToolPopup.
jQuery.sap.declare("sap.ui.ux3.ToolPopup");
jQuery.sap.require("sap.ui.ux3.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new ToolPopup.
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
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li>
 * <li>{@link #getIconHover iconHover} : sap.ui.core.URI</li>
 * <li>{@link #getIconSelected iconSelected} : sap.ui.core.URI</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getButtons buttons} : sap.ui.core.Control[]</li>
 * <li>{@link #getContent content} : sap.ui.core.Control[]</li></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getInitialFocus initialFocus} : string | sap.ui.core.Control</li></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.ux3.ToolPopup#event:open open} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.ux3.ToolPopup#event:close close} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.ux3.ToolPopup#event:enter enter} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.ux3.ToolPopup#event:iconChanged iconChanged} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * A pop up which the user can open from the Shell's tool pane. Generally, the starting point would be an icon.
 * For this pop up, buttons can be defined with any text; therefore, it has the same purpose and similar look like any common dialog box.
 * A ToolPopup can have any content. Depending on the application type and design, the structure of the texts and input fields can be for
 * example form-like.
 * 
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.5.0-SNAPSHOT
 *
 * @constructor   
 * @public
 * @name sap.ui.ux3.ToolPopup
 */
sap.ui.core.Control.extend("sap.ui.ux3.ToolPopup", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"isOpen", "open", "close", "setPosition"
	],

	// ---- control specific ----
	library : "sap.ui.ux3",
	properties : {
		"title" : {type : "string", group : "Misc", defaultValue : null},
		"icon" : {type : "sap.ui.core.URI", group : "Misc", defaultValue : null},
		"iconHover" : {type : "sap.ui.core.URI", group : "Misc", defaultValue : null},
		"iconSelected" : {type : "sap.ui.core.URI", group : "Misc", defaultValue : null}
	},
	defaultAggregation : "content",
	aggregations : {
    	"buttons" : {type : "sap.ui.core.Control", multiple : true, singularName : "button"}, 
    	"content" : {type : "sap.ui.core.Control", multiple : true, singularName : "content"}
	},
	associations : {
		"initialFocus" : {type : "sap.ui.core.Control", multiple : false}
	},
	events : {
		"open" : {}, 
		"close" : {allowPreventDefault : true}, 
		"enter" : {}, 
		"iconChanged" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ui.ux3.ToolPopup with name <code>sClassName</code> 
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
 * @name sap.ui.ux3.ToolPopup.extend
 * @function
 */

sap.ui.ux3.ToolPopup.M_EVENTS = {'open':'open','close':'close','enter':'enter','iconChanged':'iconChanged'};


/**
 * Getter for property <code>title</code>.
 * The title displayed in the pop up window (optional property)
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>title</code>
 * @public
 * @name sap.ui.ux3.ToolPopup#getTitle
 * @function
 */


/**
 * Setter for property <code>title</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ToolPopup#setTitle
 * @function
 */

/**
 * Getter for property <code>icon</code>.
 * The URL to the icon displayed in the tool area which is used to open the ToolPopup.
 * The recommended size is 32x32px, including some transparent border. Therefore, the content will cover about 20x20px.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * @name sap.ui.ux3.ToolPopup#getIcon
 * @function
 */


/**
 * Setter for property <code>icon</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sIcon  new value for property <code>icon</code>
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ToolPopup#setIcon
 * @function
 */

/**
 * Getter for property <code>iconHover</code>.
 * The URL to the icon in hover state, displayed in the tool area which is used to open the pop up.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>iconHover</code>
 * @public
 * @name sap.ui.ux3.ToolPopup#getIconHover
 * @function
 */


/**
 * Setter for property <code>iconHover</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sIconHover  new value for property <code>iconHover</code>
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ToolPopup#setIconHover
 * @function
 */

/**
 * Getter for property <code>iconSelected</code>.
 * The URL to the icon in selected state displayed in the tool area which is used to open the pop up.
 * If no selected icon is given, the hover icon is used.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>iconSelected</code>
 * @public
 * @name sap.ui.ux3.ToolPopup#getIconSelected
 * @function
 */


/**
 * Setter for property <code>iconSelected</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sIconSelected  new value for property <code>iconSelected</code>
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ToolPopup#setIconSelected
 * @function
 */
	
/**
 * Getter for aggregation <code>buttons</code>.<br/>
 * The buttons to appear in the pop up
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.ui.ux3.ToolPopup#getButtons
 * @function
 */

/**
 * Inserts a button into the aggregation named <code>buttons</code>.
 *
 * @param {sap.ui.core.Control}
 *          oButton the button to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the button should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the button is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the button is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ToolPopup#insertButton
 * @function
 */


/**
 * Adds some button <code>oButton</code> 
 * to the aggregation named <code>buttons</code>.
 *
 * @param {sap.ui.core.Control}
 *            oButton the button to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public 
 * @name sap.ui.ux3.ToolPopup#addButton
 * @function
 */


/**
 * Removes an button from the aggregation named <code>buttons</code>.
 *
 * @param {int | string | sap.ui.core.Control} vButton the button to remove or its index or id
 * @return {sap.ui.core.Control} the removed button or null
 * @public
 * @name sap.ui.ux3.ToolPopup#removeButton
 * @function
 */


/**
 * Removes all the controls in the aggregation named <code>buttons</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.ux3.ToolPopup#removeAllButtons
 * @function
 */


/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>buttons</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Control}
 *            oButton the button whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.ux3.ToolPopup#indexOfButton
 * @function
 */


/**
 * Destroys all the buttons in the aggregation 
 * named <code>buttons</code>.
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ToolPopup#destroyButtons
 * @function
 */
	
/**
 * Getter for aggregation <code>content</code>.<br/>
 * The content of the pop up
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.ui.ux3.ToolPopup#getContent
 * @function
 */

/**
 * Inserts a content into the aggregation named <code>content</code>.
 *
 * @param {sap.ui.core.Control}
 *          oContent the content to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the content should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the content is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ToolPopup#insertContent
 * @function
 */


/**
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 *
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public 
 * @name sap.ui.ux3.ToolPopup#addContent
 * @function
 */


/**
 * Removes an content from the aggregation named <code>content</code>.
 *
 * @param {int | string | sap.ui.core.Control} vContent the content to remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 * @name sap.ui.ux3.ToolPopup#removeContent
 * @function
 */


/**
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.ux3.ToolPopup#removeAllContent
 * @function
 */


/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>content</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Control}
 *            oContent the content whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.ux3.ToolPopup#indexOfContent
 * @function
 */


/**
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ToolPopup#destroyContent
 * @function
 */

/**
 * Defines the control that shall get the focus when the ToolPopup is opened.
 *
 * @return {string} Id of the element which is the current target of the <code>initialFocus</code> association, or null
 * @public
 * @name sap.ui.ux3.ToolPopup#getInitialFocus
 * @function
 */


/**
 * Defines the control that shall get the focus when the ToolPopup is opened.
 *
 * @param {string | sap.ui.core.Control} vInitialFocus 
 *    Id of an element which becomes the new target of this <code>initialFocus</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ToolPopup#setInitialFocus
 * @function
 */

/**
 * Event is fired when the pop up opens 
 *
 * @name sap.ui.ux3.ToolPopup#open
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'open' event of this <code>sap.ui.ux3.ToolPopup</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.ToolPopup</code>.<br/> itself. 
 *  
 * Event is fired when the pop up opens 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.ToolPopup</code>.<br/> itself.
 *
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ToolPopup#attachOpen
 * @function
 */


/**
 * Detach event handler <code>fnFunction</code> from the 'open' event of this <code>sap.ui.ux3.ToolPopup</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ToolPopup#detachOpen
 * @function
 */


/**
 * Fire event open to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.ux3.ToolPopup#fireOpen
 * @function
 */

/**
 * Event is fired when the pop up closes because the user pressed Escape or the ToolPopup Button in the Shell. 
 *
 * @name sap.ui.ux3.ToolPopup#close
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'close' event of this <code>sap.ui.ux3.ToolPopup</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.ToolPopup</code>.<br/> itself. 
 *  
 * Event is fired when the pop up closes because the user pressed Escape or the ToolPopup Button in the Shell. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.ToolPopup</code>.<br/> itself.
 *
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ToolPopup#attachClose
 * @function
 */


/**
 * Detach event handler <code>fnFunction</code> from the 'close' event of this <code>sap.ui.ux3.ToolPopup</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ToolPopup#detachClose
 * @function
 */


/**
 * Fire event close to attached listeners.
 *
 * Listeners may prevent the default action of this event using the preventDefault-method on the event object.
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {boolean} whether to prevent the default action
 * @protected
 * @name sap.ui.ux3.ToolPopup#fireClose
 * @function
 */

/**
 * Event is fired whenever the user clicks the Enter or the Return key inside the pop up 
 *
 * @name sap.ui.ux3.ToolPopup#enter
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {object} oControlEvent.getParameters.originalEvent The onsapenter event, received by the pop up
 * @param {sap.ui.core.Control} oControlEvent.getParameters.originalSrcControl The control that was focused when the user pressed the Enter key (may be null)
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'enter' event of this <code>sap.ui.ux3.ToolPopup</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.ToolPopup</code>.<br/> itself. 
 *  
 * Event is fired whenever the user clicks the Enter or the Return key inside the pop up 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.ToolPopup</code>.<br/> itself.
 *
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ToolPopup#attachEnter
 * @function
 */


/**
 * Detach event handler <code>fnFunction</code> from the 'enter' event of this <code>sap.ui.ux3.ToolPopup</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ToolPopup#detachEnter
 * @function
 */


/**
 * Fire event enter to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'originalEvent' of type <code>object</code> The onsapenter event, received by the pop up</li>
 * <li>'originalSrcControl' of type <code>sap.ui.core.Control</code> The control that was focused when the user pressed the Enter key (may be null)</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.ux3.ToolPopup#fireEnter
 * @function
 */

/**
 * Event is fired when one of the icon properties is modified (Note: The icon is not rendered by the ToolPopup).
 * To be used by other controls which want to update the icon in their UI. 
 *
 * @name sap.ui.ux3.ToolPopup#iconChanged
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'iconChanged' event of this <code>sap.ui.ux3.ToolPopup</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.ToolPopup</code>.<br/> itself. 
 *  
 * Event is fired when one of the icon properties is modified (Note: The icon is not rendered by the ToolPopup).
 * To be used by other controls which want to update the icon in their UI. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.ToolPopup</code>.<br/> itself.
 *
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ToolPopup#attachIconChanged
 * @function
 */


/**
 * Detach event handler <code>fnFunction</code> from the 'iconChanged' event of this <code>sap.ui.ux3.ToolPopup</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ToolPopup#detachIconChanged
 * @function
 */


/**
 * Fire event iconChanged to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.ux3.ToolPopup#fireIconChanged
 * @function
 */

/**
 * Returns whether the pop up is currently open
 *
 * @name sap.ui.ux3.ToolPopup.prototype.isOpen
 * @function

 * @type boolean
 * @public
 */


/**
 * Opens the pop up. The method is called by the Shell.
 *
 * @name sap.ui.ux3.ToolPopup.prototype.open
 * @function

 * @type void
 * @public
 */


/**
 * Closes the pop up. Can be called by the Shell when the pop up's button is clicked again; or by the application
 * when the interaction in the pop up has been completed or canceled.
 *
 * @name sap.ui.ux3.ToolPopup.prototype.close
 * @function
 * @param {boolean} 
 *         bPreventRestoreFocus
 *         If set, the focus is NOT restored to the element that had the focus before the ToolPopup was opened. This makes sense when the ToolPopup is closed programmatically from a different area of the application (outside the ToolPopup) and the focus should not move aways from that place.

 * @type void
 * @public
 */


/**
 * Sets the position of the pop up, the same parameters as for sap.ui.core.Popup can be used.
 *
 * @name sap.ui.ux3.ToolPopup.prototype.setPosition
 * @function

 * @type void
 * @public
 */


// Start of sap\ui\ux3\ToolPopup.js
jQuery.sap.require("sap.ui.core.Popup");

sap.ui.ux3.ToolPopup.prototype.init = function() {
	this.oPopup = null;
	this._bPositionSet = false;
};

sap.ui.ux3.ToolPopup.prototype.isOpen = function() {
	if (this.oPopup && this.oPopup.isOpen()) {
		return true;
	}
	return false;
};

sap.ui.ux3.ToolPopup.prototype.willBeClosed = function() {
	var eState = this.oPopup && this.oPopup.getOpenState();
	return eState !== sap.ui.core.OpenState.OPENING && eState !== sap.ui.core.OpenState.OPEN;
};

sap.ui.ux3.ToolPopup.prototype.open = function() {

	// if the popup position has not been (re-)initialized since the last time this was opened, try to apply the default position
	if (!this._bPositionSet) {
		var oParent = this.getParent();
		if (oParent && oParent instanceof sap.ui.ux3.Shell) {
			var oOpener = jQuery.sap.domById(oParent.getId() + "-tool-" + this.getId());
			if (oOpener) {
				this.setPosition(sap.ui.core.Popup.Dock.BeginTop, sap.ui.core.Popup.Dock.EndTop, oOpener, "13 -6", "none");
			}
		}
	}
	this._bPositionSet = false;

	// create popup if required
	this._ensurePopup();

	// Save current focused element to restore the focus after closing the dialog
	this._oPreviousFocus = sap.ui.core.Popup.getCurrentFocusInfo();

	// take care of the initial focus
	var sId = this.getInitialFocus();
	if (sId) {
		this.oPopup.setInitialFocusId(sId);
	}

	// open popup
	this.fireOpen();
	this.oPopup.open(400);

	// position the arrow correctly
	jQuery.sap.byId(this.getId() + "-arrow").attr("class", "sapUiUx3TPArrow sapUiUx3TPArrow" + this._getArrowPosition());

	return this;
};


/**
 * Calculates the desired arrow position from the docking. This only works when "my" and "at" both use the jQuery-based docking
 * which means they are strings like "begin top".
 * The current implementation only recognizes few possible combinations and could be extended.
 *
 * @private
 */
sap.ui.ux3.ToolPopup.prototype._getArrowPosition = function() {
	var pos = "BeginTop";
	// calculate the position of the arrow from the docking of the popup
	var dock = this.oPopup._oLastPosition;
	if (dock && typeof(dock.my) === "string" && typeof(dock.at) === "string") {
		if (dock.my == "begin bottom" && dock.at == "begin top") { // TODO: find algorithm and cover all cases
			pos = "BottomBegin";
		}
	}
	return pos;
};


/**
 * Handles the sapescape event, triggers closing of the ToolPopup.
 *
 * @private
 */
sap.ui.ux3.ToolPopup.prototype.onsapescape = function() {
	if (this.fireClose()) {
		this.close();
	}
};


sap.ui.ux3.ToolPopup.prototype.close = function(bPreventRestoreFocus) {
	if (this.oPopup && this.oPopup.isOpen()) {
		this.oPopup.close(400);
		this.fireEvent("close_always"); // TODO: hack to make sure Shell is notified. Do not use this event!!
		if (!bPreventRestoreFocus) {
			sap.ui.core.Popup.applyFocusInfo(this._oPreviousFocus);
		}
	}
	return this;
};

sap.ui.ux3.ToolPopup.prototype.onsapenter = function(oEvent) {
	this.fireEnter({originalEvent:oEvent,originalSrcControl:oEvent.srcControl});
};

sap.ui.ux3.ToolPopup.prototype._ensurePopup = function() {
	if (!this.oPopup) {
		this.oPopup = new sap.ui.core.Popup(this, false, true, false);
	}
	return this.oPopup;
};

sap.ui.ux3.ToolPopup.prototype.setPosition = function() {
	this._ensurePopup();
	this.oPopup.setPosition.apply(this.oPopup, arguments);
	this._bPositionSet = true;
	return this;
};


sap.ui.ux3.ToolPopup.prototype.setIcon = function(sIcon) {
	this.setProperty("icon", sIcon, true); // rerendering makes no sense, as this icon is not rendered by the ToolPopup
	this.fireIconChanged(); // tell other interested parties to update the icon
	return this;
};
sap.ui.ux3.ToolPopup.prototype.setIconHover = function(sIconHover) {
	this.setProperty("iconHover", sIconHover, true); // rerendering makes no sense, as this icon is not rendered by the ToolPopup
	this.fireIconChanged(); // tell other interested parties to update the icon
	return this;
};
sap.ui.ux3.ToolPopup.prototype.setIconSelected = function(sIconSelected) {
	this.setProperty("iconSelected", sIconSelected, true); // rerendering makes no sense, as this icon is not rendered by the ToolPopup
	this.fireIconChanged(); // tell other interested parties to update the icon
	return this;
};
sap.ui.ux3.ToolPopup.prototype.getIconSelected = function() {
	return this.getProperty("iconSelected") || this.getProperty("iconHover"); // implement the documented fallback
};