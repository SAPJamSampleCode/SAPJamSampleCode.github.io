/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* -----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ----------------------------------------------------------------------------------- */

/**
 * Initialization Code and shared classes of library sap.ui.ux3 (1.5.0-SNAPSHOT)
 */
jQuery.sap.declare("sap.ui.ux3.library");
jQuery.sap.require("sap.ui.core.Core");
/**
 * SAPUI5 library with controls that implement the SAP User Experience (UX) Guidelines 3.0
 *
 * @namespace
 * @name sap.ui.ux3
 * @public
 */


// library dependencies
jQuery.sap.require("sap.ui.core.library");
jQuery.sap.require("sap.ui.commons.library");

// delegate further initialization of this library to the Core
sap.ui.getCore().initLibrary({
  name : "sap.ui.ux3",
  dependencies : ["sap.ui.core","sap.ui.commons"],
  types: [
    "sap.ui.ux3.FeederType",
    "sap.ui.ux3.FollowActionState"
  ],
  interfaces: [
    "sap.ui.ux3.DataSetView"
  ],
  controls: [
    "sap.ui.ux3.DataSet",
    "sap.ui.ux3.DataSetSimpleView",
    "sap.ui.ux3.Exact",
    "sap.ui.ux3.ExactArea",
    "sap.ui.ux3.ExactBrowser",
    "sap.ui.ux3.ExactList",
    "sap.ui.ux3.Feed",
    "sap.ui.ux3.FeedChunk",
    "sap.ui.ux3.Feeder",
    "sap.ui.ux3.NavigationBar",
    "sap.ui.ux3.Overlay",
    "sap.ui.ux3.OverlayContainer",
    "sap.ui.ux3.Shell",
    "sap.ui.ux3.ThingInspector",
    "sap.ui.ux3.ToolPopup"
  ],
  elements: [
    "sap.ui.ux3.DataSetItem",
    "sap.ui.ux3.ExactAttribute",
    "sap.ui.ux3.NavigationItem",
    "sap.ui.ux3.ThingAction",
    "sap.ui.ux3.ThingGroup"
  ],
  version: "1.5.0-SNAPSHOT"});

/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.ui.ux3.FeederType.
jQuery.sap.declare("sap.ui.ux3.FeederType");

/**
 * @class Type of an Feeder.
 *
 * @version 1.5.0-SNAPSHOT
 * @static
 * @public
 * @experimental Since version 1.2. 
 * The whole Feed/Feeder API is still under discussion, significant changes are likely. Especially text presentation (e.g. @-references and formatted text) is not final. Also the Feed model topic is still open.
 */
sap.ui.ux3.FeederType = {
  
    /**
     * large Feeder 
     * @public
     */
    Large : "Large",

    /**
     * medium feeder 
     * @public
     */
    Medium : "Medium",

    /**
     * comment feeder (small) 
     * @public
     */
    Comment : "Comment"

  };
  
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.ui.ux3.FollowActionState.
jQuery.sap.declare("sap.ui.ux3.FollowActionState");

/**
 * @class Defines the states of the follow action
 *
 * @version 1.5.0-SNAPSHOT
 * @static
 * @public
 */
sap.ui.ux3.FollowActionState = {
  
    /**
     * follow state 
     * @public
     */
    Follow : "Follow",

    /**
     * hold state 
     * @public
     */
    Hold : "Hold",

    /**
     * default state 
     * @public
     */
    Default : "Default"

  };
  
