/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

//Provides default renderer for the sap.ui.ux3.Shell
jQuery.sap.declare("sap.ui.ux3.ShellRenderer");

/**
 * @class GoldReflectionPageLayout renderer.
 * @static
 */
sap.ui.ux3.ShellRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRenderManager the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.ui.ux3.ShellRenderer.render = function(oRenderManager, oControl) {
	// convenience variable
	var rm = oRenderManager;
	var bPaneOpen = oControl.isPaneOpen();
	var iPaneWidthPlus = oControl.getPaneWidth() + sap.ui.ux3.Shell._PANE_OUTER_DISTANCE; // width of pane plus how far it is from the edge
	var bRtl = sap.ui.getCore().getConfiguration().getRTL();

	if (sap.ui.ux3.Shell.FIRST_RENDERING) {
		document.body.style.margin = "0"; // does not seem to work in initial onBeforeRendering
	}

	// write the root HTML element  TODO: this should use the existing <body>! But where is the staticarea, then?
	rm.write("<div class='sapUiUx3Shell'");
	rm.writeControlData(oControl);
	rm.write(">");

	var sId = oControl.getId(); // TODO: escape


	// write header
	rm.write("<img id='" + oControl.getId() + "-hdrImg' class='sapUiUx3ShellHeaderImg' src='");
	rm.write(sap.ui.resource('sap.ui.core', 'themes/base/img/1x1.gif'));
	rm.write("' />");
	rm.write("<header id='" + oControl.getId() + "-hdr' class='sapUiUx3ShellHeader' role='banner'>");
	sap.ui.ux3.ShellRenderer.renderHeader(rm, oControl);
	rm.write("</header>   <!-- end of sapUiUx3ShellHeader -->");



	// write page background
	rm.write("<div id='", oControl.getId(), "-bg' class='sapUiUx3ShellBg'></div>");
	rm.write("<img id='", oControl.getId(), "-bgImg' class='sapUiUx3ShellBgImg' src='" + sap.ui.resource('sap.ui.core', 'themes/base/img/1x1.gif') + "'/>");


	// write workset items
	var wsMargin = bPaneOpen ? " style='margin-" + (bRtl ? "left" : "right") + ":" + (iPaneWidthPlus + 22) + "px'" : "";
	rm.write("<div id='", oControl.getId(), "-wBar'" + wsMargin + " class='sapUiUx3ShellWorksetBar'>");
	var aItems = oControl.getWorksetItems();
	oControl._oWorksetBar.setAssociatedItems(aItems);
	if (!oControl._oWorksetBar.isSelectedItemValid() && (aItems.length > 0)) {
		oControl.setAssociation("selectedWorksetItem", aItems[0], true); // set the first item as being selected if there is no item selected
		oControl._oWorksetBar.setSelectedItem(aItems[0]); // set the first item as being selected if there is no item selected
	}
	rm.renderControl(oControl._oWorksetBar);
	rm.write("</div>   <!--  end of worksetBar -->");



	// write tool palette area
	rm.write("<section id='" + oControl.getId() + "-tp' class='sapUiUx3ShellToolPaletteArea' role='complementary'>");
	sap.ui.ux3.ShellRenderer.renderToolPalette(rm, oControl);
	rm.write("</section> <!-- end of toolPaletteArea -->");



	// write page canvas and content
	var paneExtraStyle = bPaneOpen ? " style='" + (bRtl ? "left" : "right") + ":" + iPaneWidthPlus + "px'" : "";
	rm.write("<div class='sapUiUx3ShellCanvas'" + paneExtraStyle + " id='" + sId + "-canvas'>");

	var oSelectedWsi = sap.ui.getCore().byId(oControl.getSelectedWorksetItem()); // by now it is guaranteed that the association is properly initialized
	if (oSelectedWsi) {

		// if parent is also a NavigationItem, the selected one is a second-level item and we need to go up one level
		var parent = oSelectedWsi.getParent();
		if (parent && parent instanceof sap.ui.ux3.NavigationItem) {
			oSelectedWsi = parent;
		}

		var aSubItems = oSelectedWsi.getSubItems();
		oControl._oFacetBar.setAssociatedItems(aSubItems);
		if (!oControl._oFacetBar.isSelectedItemValid() && (aSubItems.length > 0)) {
			oControl._oFacetBar.setSelectedItem(aSubItems[0]); // set the first item as being selected if there is no item selected
		}
	}
	rm.renderControl(oControl._oFacetBar);

	rm.write("<article class='sapUiUx3ShellContent' id='" + sId + "-content' role='main'>");
	var aContent = oControl.getContent();
	for (var i = 0; i < aContent.length; i++) {
		rm.renderControl(aContent[i]);
	}
	rm.write("</article></div>");



	// write pane bar
	rm.write("<aside id='" + sId + "-paneBar' class='sapUiUx3ShellPaneBar" + (bPaneOpen ? " sapUiUx3ShellPaneBarOpen" : "") + "' role='complementary'>");
	rm.write("<section id='" + sId + "-paneContent' style='width:" + oControl.getPaneWidth() + "px;' class='sapUiUx3ShellPaneBarContent' role='tabpanel'>");
	var aPaneContent = oControl.getPaneContent();
	for (var i = 0; i < aPaneContent.length; i++) {
		rm.renderControl(aPaneContent[i]);
	}
	rm.write("</section>");

	rm.write("<div class='sapUiUx3ShellPaneBarRight'><ul class='sapUiUx3ShellPaneEntries' role='tablist'>");
	sap.ui.ux3.ShellRenderer.renderPaneBarItems(rm, oControl);
	rm.write("</ul></div></aside>   <!-- end of paneBar -->");



	// write the purely visual background
	rm.write("<div class='sapUiUx3ShellCanvasBackground " + (bPaneOpen ? "sapUiUx3ShellCanvasBackgroundOpen" : "sapUiUx3ShellCanvasBackgroundClosed") 
			+ "' id='" + sId + "-canvasBackground'" + paneExtraStyle + ">");
	rm.write("<div class='sapUiUx3ShellCanvasBackgroundRight'></div>");
	rm.write("</div>");


	// render closing tag for root element
	rm.write("</div>");
};



sap.ui.ux3.ShellRenderer.renderHeader = function(rm, oControl) {
	var rb = sap.ui.getCore().getLibraryResourceBundle("sap.ui.ux3");

	var appIcon = oControl.getAppIcon();
	rm.write("<hr id='" + oControl.getId() + "-hdrLine'/><img id='" + oControl.getId() + "-logoImg' src='");
	if (appIcon) {
		rm.writeEscaped(oControl.getAppIcon());
	} else {
		rm.write(sap.ui.resource('sap.ui.core', 'themes/base/img/1x1.gif'));
	}
	rm.write("'");

	var iconTooltip = oControl.getAppIconTooltip() || rb.getText("SHELL_LOGO");
	rm.writeAttribute("alt", iconTooltip);
	rm.writeAttribute("title", iconTooltip);

	rm.write("><h1>");

	rm.writeEscaped(oControl.getAppTitle());

	rm.write("</h1><span class='sapUiUx3ShellHeaderTitleRight'>");

	// header-right-items
	var aHeaderItems = oControl.getHeaderItems();
	for (var i = 0; i < aHeaderItems.length; i++) {
		// ensure correct styling of the menu if there is a MenuButton
		if (aHeaderItems[i] instanceof sap.ui.commons.MenuButton) { // TODO: improve this
			if (aHeaderItems[i].getMenu()) {
				aHeaderItems[i].getMenu().addStyleClass("sapUiMnuTop", true); // multiple calls are ignored, so there is no check whether the class is already there
			}
		}

		// render the header item
		rm.renderControl(aHeaderItems[i]);

		if ((i < (aHeaderItems.length-1)) || (oControl.getShowLogoutButton())) {
			rm.write("<span class='sapUiUx3ShellHeaderSep'></span>");
		}
	}

	// logout button
	if (oControl.getShowLogoutButton()) {
		rm.write("<a id='" + oControl.getId() + "-logout' title='" + rb.getText("SHELL_LOGOUT") + "' tabindex='0' role='button' class='sapUiUx3ShellHeaderButton sapUiUx3ShellHeader-logout'></a>");
	}
	rm.write("</span>");
};




/**
 * Renders the inner HTML of the left-side tool palette.
 *
 * @param oControl the Shell control
 * @private
 */
sap.ui.ux3.ShellRenderer.renderToolPalette = function(rm, oControl) {
	var rb = sap.ui.getCore().getLibraryResourceBundle("sap.ui.ux3");
	var sId = oControl.getId();

	// write standard tools
	var sAccDescr = rb.getText("SHELL_TOOLPANE_GENERIC"),
		bStandardToolPresent = false,
		bFirstTool = true,
		sStandardToolsHtml = "";
	if (oControl.getShowSearchTool()) {
		bStandardToolPresent = true;
		//sStandardToolsHtml += "<a id='" + sId + sap.ui.ux3.Shell.TOOL_PREFIX + sId + "-searchTool' title='" + rb.getText("SHELL_SEARCH") + "' class='sapUiUx3ShellTool sapUiUx3ShellTool-search' tabindex='0' role='button' aria-pressed='false'></a>";
		sStandardToolsHtml += "<a id='" + sId + sap.ui.ux3.Shell.TOOL_PREFIX + sId + "-searchTool' title='Search' class='sapUiUx3ShellTool sapUiUx3ShellTool-search' tabindex='0' role='button' aria-pressed='false'></a>";
		if (bFirstTool) {
			bFirstTool = false;
		} else {
			sAccDescr += ",";
		}
		//sAccDescr += " " + rb.getText("SHELL_SEARCH");
		sAccDescr += "Search";
	}
	if (oControl.getShowInspectorTool()) {
		bStandardToolPresent = true;
		sStandardToolsHtml += "<a id='" + sId + sap.ui.ux3.Shell.TOOL_PREFIX + sId + "-inspectorTool' title='" + rb.getText("SHELL_TI") + "' class='sapUiUx3ShellTool sapUiUx3ShellTool-inspector' tabindex='0' role='button' aria-pressed='false'></a>";
		if (bFirstTool) {
			bFirstTool = false;
		} else {
			sAccDescr += ",";
		}
		sAccDescr += " " + rb.getText("SHELL_TI");
	}
	if (oControl.getShowFeederTool()) {
		bStandardToolPresent = true;
		sStandardToolsHtml += "<a id='" + sId + sap.ui.ux3.Shell.TOOL_PREFIX + sId + "-feederTool' title='" + rb.getText("SHELL_FEEDER") + "' class='sapUiUx3ShellTool sapUiUx3ShellTool-feeder' tabindex='0' role='button' aria-pressed='false'></a>";
		if (bFirstTool) {
			bFirstTool = false;
		} else {
			sAccDescr += ",";
		}
		sAccDescr += " " + rb.getText("SHELL_FEEDER");
	}

	if (bStandardToolPresent) {
		rm.write("<div role='toolbar'aria-describedby='" + sId + "-genericToolsDescr'>");
		rm.write("<span id='" + sId + "-genericToolsDescr' style='display:none;'>" + sAccDescr + "</span>");
		rm.write(sStandardToolsHtml + "</div>");
	}

	var aToolItems = oControl.getToolPopups();

	// write separator between standard tools and app tools, if required
	if (bStandardToolPresent && (aToolItems.length > 0)) {
		rm.write("<hr class='sapUiUx3ShellToolSep'></hr>");
	}

	// write app tools
	if (aToolItems.length > 0) {
		rm.write("<div role='toolbar' aria-describedby='" + sId + "-appToolsDescr'>");
		rm.write("<span id='" + sId + "-appToolsDescr' style='display:none;'>" + rb.getText("SHELL_TOOLPANE_APP") + "</span>");
		for (var i = 0; i < aToolItems.length; i++) {
			var oToolItem = aToolItems[i];
			if (oToolItem instanceof sap.ui.core.SeparatorItem) { // TODO: not possible
				rm.write("<hr class='sapUiUx3ShellToolSep'></hr>");
			} else {
				// regular item
				rm.write("<a id='" + sId + "-tool-" + oToolItem.getId() + "' class='sapUiUx3ShellTool'");
				var sTooltip = oToolItem.getTooltip_AsString();
				if (!sTooltip) {
					sTooltip = oToolItem.getTitle();
				}
				if (sTooltip) {
					rm.write(" title='");
					rm.writeEscaped(sTooltip);
					rm.write("' ");
				}
				rm.write(" tabindex='0' role='button' aria-pressed='false'><img src='");
				rm.writeEscaped(oToolItem.getIcon());
				rm.write("' alt='' role='presentation'/></a>");
			}
		}
		rm.write("</div>");
	}
};

sap.ui.ux3.ShellRenderer.renderPaneBarItems = function(rm, oControl) {
	var sId = oControl.getId();
	var aPaneBarItems = oControl.getPaneBarItems();
	for (var i = 0; i < aPaneBarItems.length; i++) {
		var itemId = aPaneBarItems[i].getId();
		rm.write("<li id='" + oControl.getId() + "-pb_" + itemId + "' role='tab' aria-controls='" + sId + "-paneContent' tabindex='-1' class='sapUiUx3ShellPaneEntry");
		if (oControl._sOpenPaneId === itemId) { // mark pane item if opened
			rm.write(" sapUiUx3ShellPaneEntrySelected");
		}
		rm.write("'>");
		rm.writeEscaped(aPaneBarItems[i].getText().toUpperCase());
		rm.write("</li>");
	}
};
