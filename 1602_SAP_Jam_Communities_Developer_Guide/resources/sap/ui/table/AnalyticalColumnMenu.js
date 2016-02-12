/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP SE or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.table.AnalyticalColumnMenu");jQuery.sap.require("sap.ui.table.library");jQuery.sap.require("sap.ui.table.ColumnMenu");sap.ui.table.ColumnMenu.extend("sap.ui.table.AnalyticalColumnMenu",{metadata:{library:"sap.ui.table"}});
sap.ui.table.AnalyticalColumnMenu.prototype.init=function(){sap.ui.table.ColumnMenu.prototype.init.apply(this)};
sap.ui.table.AnalyticalColumnMenu.prototype._addMenuItems=function(){sap.ui.table.ColumnMenu.prototype._addMenuItems.apply(this);if(this._oColumn){this._addSumMenuItem()}};
sap.ui.table.AnalyticalColumnMenu.prototype._addGroupMenuItem=function(){var c=this._oColumn,t=this._oTable,b=t.getBinding("rows"),r=b&&b.getAnalyticalQueryResult();if(t&&r&&r.findDimensionByPropertyName(c.getLeadingProperty())&&jQuery.inArray(c.getLeadingProperty(),b.getSortablePropertyNames())>-1&&jQuery.inArray(c.getLeadingProperty(),b.getFilterablePropertyNames())>-1){this._oGroupIcon=this._createMenuItem("group","TBL_GROUP",c.getGrouped()?"accept":null,jQuery.proxy(function(e){var m=e.getSource(),g=c.getGrouped();c.setGrouped(!g);m.setIcon(!g?"sap-icon://accept":null)},this));this.addItem(this._oGroupIcon)}};
sap.ui.table.AnalyticalColumnMenu.prototype._addSumMenuItem=function(){var c=this._oColumn,t=this._oTable,b=t.getBinding("rows"),r=b&&b.getAnalyticalQueryResult();if(t&&r&&r.findMeasureByPropertyName(c.getLeadingProperty())){this._oSumItem=this._createMenuItem("total","TBL_TOTAL",c.getSummed()?"accept":null,jQuery.proxy(function(e){var m=e.getSource(),s=c.getSummed();c.setSummed(!s);m.setIcon(!s?"sap-icon://accept":null)},this));this.addItem(this._oSumItem)}};
sap.ui.table.AnalyticalColumnMenu.prototype.open=function(){sap.ui.table.ColumnMenu.prototype.open.apply(this,arguments);var c=this._oColumn;this._oSumItem&&this._oSumItem.setIcon(c.getSummed()?"sap-icon://accept":null);this._oGroupIcon&&this._oGroupIcon.setIcon(c.getGrouped()?"sap-icon://accept":null);this._oGroupIcon&&this._oGroupIcon.setVisible(!c._isLastGroupableLeft)};
