/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

// Provides encoding functions for JavaScript.
jQuery.sap.declare("jquery.sap.encoder", false);

(function(){

	/*
	 * Encoding according to the Secure Programming Guide
	 * https://wiki.wdf.sap.corp/wiki/display/NWCUIAMSIM/XSS+Secure+Programming+Guide
	 */

	/**
	 * Create hex and pad to length
	 * @private
	 */
	function hex(iChar, iLength) {
		var sHex = iChar.toString(16);
		if (iLength) {
			while (iLength > sHex.length) {
				sHex = "0" + sHex;
			}
		}
		return sHex;
	}

	/**
	 * RegExp and escape function for HTML escaping
	 */
	var rHtml = /[\x00-\x2b\x2f\x3a-\x40\x5b-\x5e\x60\x7b-\uffff]/g,
		rHtmlReplace = /[\x00-\x08\x0b\x0c\x0e-\x1f\x7f-\x9f]/,
		mHtmlLookup = {
			"<": "&lt;",
			">": "&gt;",
			"&": "&amp;",
			"\"": "&quot;"
		};

	var fHtml = function(sChar) {
		var sEncoded = mHtmlLookup[sChar];
		if (!sEncoded) {
			if (rHtmlReplace.test(sChar)) {
				sEncoded = "&#xfffd;";
			}
			else {
				sEncoded = "&#x" + hex(sChar.charCodeAt(0)) + ";";
			}
			mHtmlLookup[sChar] = sEncoded;
		}
		return sEncoded;
	};

	/**
	 * Encode the string for inclusion into HTML content/attribute
	 *
	 * @param {string} sString The string to be escaped
	 * @return The escaped string
	 * @type {string}
	 * @public
	 * @SecValidate {0|return|XSS} validates the given string for HTML contexts
	 */
	jQuery.sap.encodeHTML = function(sString) {
		return sString.replace(rHtml, fHtml);
	};

	/**
	 * Encode the string for inclusion into XML content/attribute
	 *
	 * @param {string} sString The string to be escaped
	 * @return The escaped string
	 * @type {string}
	 * @public
	 * @SecValidate {0|return|XSS} validates the given string for XML contexts
	 */
	jQuery.sap.encodeXML = function(sString) {
		return sString.replace(rHtml, fHtml);
	};

	/**
	 * Encode the string for inclusion into HTML content/attribute.
	 * Old name "escapeHTML" kept for backward compatibility
	 *
	 * @param {string} sString The string to be escaped
	 * @return The escaped string
	 * @type {string}
	 * @public
	 * @deprecated Has been renamed, use {@link jQuery.sap.encodeHTML} instead.
	 */
	jQuery.sap.escapeHTML = function(sString) {
		return sString.replace(rHtml, fHtml);
	};

	/**
	 * RegExp and escape function for JS escaping
	 */
	var rJS = /[\x00-\x2b\x2d\x2f\x3a-\x40\x5b-\x5e\x60\x7b-\uffff]/g,
		mJSLookup = {};

	var fJS = function(sChar) {
		var sEncoded = mJSLookup[sChar];
		if (!sEncoded) {
			var iChar = sChar.charCodeAt(0);
			if (iChar < 256) {
				sEncoded = "\\x" + hex(iChar, 2);
			}
			else {
				sEncoded = "\\u" + hex(iChar, 4);
			}
			mJSLookup[sChar] = sEncoded;
		}
		return sEncoded;
	};

	/**
	 * Encode the string for inclusion into a JS string literal
	 *
	 * @param {string} sString The string to be escaped
	 * @return The escaped string
	 * @type {string}
	 * @public
	 * @SecValidate {0|return|XSS} validates the given string for a JavaScript contexts
	 */
	jQuery.sap.encodeJS = function(sString) {
		return sString.replace(rJS, fJS);
	};

	/**
	 * Encode the string for inclusion into a JS string literal.
	 * Old name "escapeJS" kept for backward compatibility
	 *
	 * @param {string} sString The string to be escaped
	 * @return The escaped string
	 * @type {string}
	 * @public
	 * @deprecated Since 1.3.0. Has been renamed, use {@link jQuery.sap.encodeJS} instead.
	 */
	jQuery.sap.escapeJS = function(sString) {
		return sString.replace(rJS, fJS);
	};

	/**
	 * RegExp and escape function for URL escaping
	 */
	var rURL = /[\x00-\x29\x2b\x2c\x2f\x3a-\x40\x5b-\x5e\x60\x7b-\uffff]/g,
		mURLLookup = {};

	var fURL = function(sChar) {
		var sEncoded = mURLLookup[sChar];
		if (!sEncoded) {
			var iChar = sChar.charCodeAt(0);
			if (iChar < 128) {
				sEncoded = "%" + hex(iChar, 2);
			}
			else if (iChar < 2048) {
				sEncoded = "%" + hex((iChar >> 6) | 192, 2) +
						   "%" + hex((iChar & 63) | 128, 2);
			}
			else {
				sEncoded = "%" + hex((iChar >> 12) | 224, 2) +
						   "%" + hex(((iChar >> 6) & 63) | 128, 2) +
						   "%" + hex((iChar & 63) | 128, 2);
			}
			mURLLookup[sChar] = sEncoded;
		}
		return sEncoded;
	};

	/**
	 * Encode the string for inclusion into an URL parameter
	 *
	 * @param {string} sString The string to be escaped
	 * @return The escaped string
	 * @type {string}
	 * @public
	 * @SecValidate {0|return|XSS} validates the given string for a URL context
	 */
	jQuery.sap.encodeURL = function(sString) {
		return sString.replace(rURL, fURL);
	};

	/**
	 * RegExp and escape function for CSS escaping
	 */
	var rCSS = /[\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\uffff][0-9A-Fa-f]?/g;

	var fCSS = function(sChar) {
		var iChar = sChar.charCodeAt(0);
		if (sChar.length == 1) {
			return "\\" + hex(iChar);
		}
		else {
			return "\\" + hex(iChar) + " " + sChar.substr(1);
		}
	};

	/**
	 * Encode the string for inclusion into CSS string literals or identifiers
	 *
	 * @param {string} sString The string to be escaped
	 * @return The escaped string
	 * @type {string}
	 * @public
	 * @SecValidate {0|return|XSS} validates the given string for a CSS context
	 */
	jQuery.sap.encodeCSS = function(sString) {
		return sString.replace(rCSS, fCSS);
	};

	/**
	 * WhitelistEntry object
	 * @param {string} protocol The protocol of the URL
	 * @param {string} host The host of the URL
	 * @param {string} port The port of the URL
	 * @param {string} path the path of the URL
	 * @public
	 */
	function WhitelistEntry(protocol, host, port, path){
		if (protocol) {
			this.protocol = protocol.toUpperCase();
		}
		if (host) {
			this.host = host.toUpperCase();
		}
		this.port = port;
		this.path = path;
	}

	var aWhitelist = new Array();

	/**
	 * clears the whitelist for URL valiadtion
	 *
	 * @public
	 */
	jQuery.sap.clearUrlWhitelist = function() {

		aWhitelist.splice(0,aWhitelist.length);

	};

	/**
	 * Adds a whitelist entry for URL valiadtion
	 *
	 * @param {string} protocol The protocol of the URL
	 * @param {string} host The host of the URL
	 * @param {string} port The port of the URL
	 * @param {string} path the path of the URL
	 * @public
	 */
	jQuery.sap.addUrlWhitelist = function(protocol, host, port, path) {
		var oEntry = new WhitelistEntry(protocol, host, port, path);
		var iIndex = aWhitelist.length;
		aWhitelist[iIndex] = oEntry;
	};

	/**
	 * Removes a whitelist entry for URL valiadtion
	 *
	 * @param {int} iIndex index of entry
	 * @public
	 */
	jQuery.sap.removeUrlWhitelist = function(iIndex) {
		aWhitelist.splice(iIndex,1)
	};

	/**
	 * Gets the whitelist for URL valiadtion
	 *
	 * @return {string[]} whitelist
	 * @public
	 */
	jQuery.sap.getUrlWhitelist = function() {
		return aWhitelist.slice();
	};

	/**
	 * Validates an URL. Check if it's not a script or other security issue.
	 *
	 * @param {string} sUrl
	 * @return true if valid, false if not valid
	 * @public
	 */
	jQuery.sap.validateUrl = function(sUrl) {

		var result = /(?:([^:\/?#]+):)?(?:\/\/([^\/?#:]*)(?::([0-9]+))?)?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/.exec(sUrl);
		if (!result) {
			return result;
		}

		var sProtocol = result[1],
			sHost = result[2],
			sPort = result[3],
			sPath = result[4],
			sQuery = result[5],
			sHash = result[6];

		var rCheck = /[\x00-\x24\x26-\x29\x2b\x2c\x2f\x3a-\x40\x5b-\x5e\x60\x7b-\uffff]/;

		// protocol
		if (sProtocol) {
			sProtocol = sProtocol.toUpperCase();
			if (aWhitelist.length <= 0) {
				// no whitelist -> check for default protocols
				if (!/^(https?|ftp)/i.test(sProtocol)) {
					return false;
				}
			}
		}

		// Host -> whitelist + character check (TBD)
		if (sHost) {
			sHost = sHost.toUpperCase();
		}

		// Path -> split for "/" and check if forbidden characters exist
		if (sPath) {
			var aComponents = sPath.split("/");
			for ( var i = 0; i < aComponents.length; i++) {
				var bCheck = rCheck.test(aComponents[i]);
				if (bCheck) {
					// forbidden character found
					return false;
				}
			}
		}

		// query -> Split on & and = and check if forbidden characters exist
		if (sQuery) {
			var aComponents = sQuery.split("&");
			for ( var i = 0; i < aComponents.length; i++) {
				var iPos = aComponents[i].search("=");
				if (iPos != -1) {
					var sPart1 = aComponents[i].substring(0,iPos);
					var sPart2 = aComponents[i].substring(iPos+1);
					var bCheck1 = rCheck.test(sPart1);
					var bCheck2 = rCheck.test(sPart2);
					if (bCheck1 || bCheck2) {
						// forbidden character found
						return false;
					}
				}
			}
		}

		// hash
		if (sHash) {
			if (rCheck.test(sHash)) {
				// forbidden character found
				return false;
			}
		}

		//filter whitelist
		if (aWhitelist.length > 0) {
			var bFound = false;
			for(var i=0; i<aWhitelist.length; i++){
				jQuery.sap.assert(aWhitelist[i] instanceof WhitelistEntry, "whitelist entry type wrong");
				if (!sProtocol || !aWhitelist[i].protocol || sProtocol == aWhitelist[i].protocol) {
					// protocol OK
					var bOk = false;
					if (sHost && aWhitelist[i].host && /^\*/.test(aWhitelist[i].host)) {
						// check for wildcard search at begin
						var sHostEscaped = aWhitelist[i].host.slice(1).replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
						var rFilter = RegExp(sHostEscaped + "$");
						if (rFilter.test(sHost)) {
							bOk = true;
						}
					}else if (!sHost || !aWhitelist[i].host || sHost == aWhitelist[i].host){
						bOk = true;
					}
					if (bOk){
						// host OK
						if (!aWhitelist[i].port || sPort == aWhitelist[i].port) {
							// port OK
							if (aWhitelist[i].path && /\*$/.test(aWhitelist[i].path)) {
								// check for wildcard search at end
								var sPathEscaped = aWhitelist[i].path.slice(0,-1).replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
								var rFilter = RegExp("^"+sPathEscaped);
								if (rFilter.test(sPath)) {
									bFound = true;
								}
							} else if (!aWhitelist[i].path || sPath == aWhitelist[i].path) {
								// path OK
								bFound = true;
							}
						}
					}
				}
				if (bFound) {
					break;
				}
			}
			if (!bFound) {
				return bFound;
			}
		}

		return true;
	};

}());