/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/*
 * Provides methods to store and retrieve data based on Web Storage API.
 */
jQuery.sap.declare("jquery.sap.storage", false);

(function() {
	//ensure not to initialize twice
	if(jQuery.sap.storage) {
		return;
	}

	/**
	 * Check whether the current environment (either provided by browser or by some JS library) supports JSON.parse and JSON stringify.
	 * @private
	 */
	var bSupportJSON = !!(window.JSON && JSON.parse && JSON.stringify);
	/**
	 * Prefix added to all storage keys (typically IDs) passed by the applications
	 * when they are calling state storage methods. The goal of such prefix is to
	 * leave space for saving data (with the same key) also scenarios other than
	 * state saving.
	 * @private
	 */
	var sStateStorageKeyPrefix = "state.key_";

	/**
	 * @interface A Storage API for JavaScript.
	 *
	 * Provides methods to store data on the client using Web Storage API support by the browser. The data
	 * received by this API must be already serialized, in string format. Similarly, the API returns the retrieved
	 * data in serialized string format, so it is the responsibility of the caller to de-serialize it, if applicable.
	 *
	 * One can get access to the 'default' storage by using {@link jQuery.sap.storage} directly
	 * or alternatively via factory functionality available as <code>jQuery.sap.storage(jQuery.sap.storage.Type.session)</code>
	 * returning an object implementing this interface.
	 *
	 * A typical intended usage of this API is the storage of a string representing the state of a control.
	 * In such usage, the data is stored in the browser session, and
	 * the methods to be used are {@link #put} and {@link #get}.
	 * The method {@link #remove} can be used to delete the previously saved state.
	 *
	 * In sake of completeness, the method {@link #clear} is available.
	 * However, it should be called only in very particular situations,
	 * when a global erasing of data is required.
	 *
	 * @author SAP AG
	 * @version 1.5.0-SNAPSHOT
	 * @since 0.11.0
	 * @public
	 * @name jQuery.sap.storage.Storage
	 */

	/**
	 * Constructor for an instance of jQuery.sap.storage.Storage
	 *
	 * @param {jQuery.sap.storage.Type || Storage} [pStorage=jQuery.sap.storage.Type.session] the type this storage should be of or an Object implementing the typical Storage API for direct usage.
	 * @param {String} [sStorageKeyPrefix=state.key_] the prefix to use in this storage.
	 *
	 * @private
	 */
	var fStorage = /** @lends jQuery.sap.storage.Storage */ function(pStorage, sStorageKeyPrefix){
		var sType = "unknown";
		var sPrefix = sStorageKeyPrefix || sStateStorageKeyPrefix;
		var oStorage;

		if(!oStorage || typeof(pStorage) === "string") {
			sType = pStorage || "session";
			try{
				oStorage = window[sType + "Storage"];
			}catch(e){
				oStorage = null;
			}
		} else if(typeof(pStorage) === Object) {
			sType = pStorage.getType ? pStorage.getType() : "unknown";
			oStorage = pStorage;
		}
		var bStorageAvailable = !!oStorage;

		/**
		 * Stores the passed state string in the session, under the key
		 * sStateStorageKeyPrefix + sId
		 *
		 * @param {String} sId Id for the state to store
		 * @param {String} sStateToStore content to store
		 * @return {boolean} true if the data were successfully stored, false otherwise
		 * @public
		 */
		this.put = function(sId, sStateToStore) {
			//precondition: non-empty sId and available storage feature
			if (bStorageAvailable && sId && sId.length>0) {
				try {
					oStorage.setItem(sPrefix+sId, bSupportJSON?JSON.stringify(sStateToStore):sStateToStore);
					return true;
				} catch(e) {
					return false;
				}
			} else {
				return false;
			}
		};

		/**
		 * Retrieves the state string stored in the session under the key
		 * sStateStorageKeyPrefix + sId
		 *
		 * @param {String} sId Id for the state to retrieve
		 * @return {String} the string from the storage, if the retrieval
		 * was successfull, and null otherwise
		 * @public
		 */
		this.get = function(sId) {
			//precondition: non-empty sId and available storage feature
			if (bStorageAvailable && sId && sId.length>0) {
				try {
					var sItem=oStorage.getItem(sPrefix+sId);
					return bSupportJSON?JSON.parse(sItem):sItem;
				} catch(e) {
					return null;
				}
			} else {
				return null;
			}
		};

		/**
		 * Deletes the state string stored in the session under the key
		 * sStateStorageKeyPrefix + sId
		 *
		 * @param {String} sId Id for the state to delete
		 * @return {boolean} true if the deletion
		 * was successfull or the data doesn't exist under the specified key,
		 * and false if the feature is unavailable or a problem occured
		 * @public
		 */
		this.remove = function(sId) {
			//precondition: non-empty sId and available storage feature
			if (bStorageAvailable && sId && sId.length>0) {
				try {
					oStorage.removeItem(sPrefix+sId);
					return true;
				} catch(e) {
					return false;
				}
			} else {
				return false;
			}
		};

		/**
		 * Deletes all the entries saved in the session.
		 * CAUTION: This method should be called only in very particular situations,
		 * when a global erasing of data is required. Given that the method deletes
		 * the data saved under any ID, it should not be called when managing data
		 * for specific controls.
		 *
		 * @return {boolean} true if execution of removal
		 * was successful or the data to remove doesn't exist,
		 * and false if the feature is unavailable or a problem occured
		 * @public
		 */
		this.clear = function() {
			//precondition: available storage feature
			if (bStorageAvailable) {
				try {
					oStorage.clear();
					return true;
				} catch(e) {
					return false;
				}
			} else {
				return false;
			}
		};

		/**
		 * Returns the type of the storage.
		 * @returns {jQuery.sap.storage.Type || String} the type of the storage or "unknown"
		 * @public
		 */
		this.getType = function(){
			return sType;
		};
	};


	/**
	 * A map holding instances of different 'standard' storages.
	 * Used to limit number of created storage objects.
	 * @private
	 */
	var mStorages = {};

	/**
	 * Returns an instance of jQuery.sap.storage.Storage providing access to the storage
	 * of the given {@link jQuery.sap.storage.Type} or the given oStorage object
	 * implementing the browser's Storage API.
	 * <i>Remark:</i> For convenience reasons, {@link #.storage} is not only a function but
	 * also provides access to the default storage (i.e. session).
	 * It can be used via {@link jQuery.sap.storage.put} etc.
	 *
	 * Whenever one is interested in storing data in another scope than provided by the session, one can simply use
	 * <code>jQuery.sap.storage(jQuery.sap.storage.Type.local).[put|get|remove|clear](...)</code>.
	 *
	 *
	 * @see jQuery.sap.storage.Storage more details.
	 *
	 * @param {jQuery.sap.storage.Type |
	 *            Storage} oStorage the type specifying the storage to use or an
	 *            object implementing the browser's Storage API.
	 * @returns {jQuery.sap.storage.Storage}
	 * @version 1.5.0-SNAPSHOT
	 * @since 0.11.0
	 * @public
	 */
	jQuery.sap.storage = function(oStorage){
		// if nothing or the default was passed in, simply return ourself
		if(!oStorage) {
			oStorage = jQuery.sap.storage.Type.session;
		}

		if(typeof(oStorage) === "string" && jQuery.sap.storage.Type[oStorage]) {
			return mStorages[oStorage] || (mStorages[oStorage] = new fStorage(oStorage));
		}

		// OK, tough but probably good for issue identification. As something was passed in, let's at least ensure our used API is fulfilled.
		jQuery.sap.assert(oStorage instanceof Object && oStorage.clear && oStorage.setItem && oStorage.getItem && oStorage.removeItem, "storage: duck typing the storage");
		return new fStorage(oStorage);
	};

	/**
	 * jQuery.sap.storage provides a dualism for access to storage functionality in browsers.
	 *
	 * <ul>
	 * <li>On the one hand side, it offers access to the default storage (i.e. {@link jQuery.sap.storage.Type.session}) via e.g. {@link jQuery.sap.storage#get} and {@link jQuery.sap.storage#put}.</li>
	 * <li>On the other hand side, it offers means for creation of access means to other storage types via e.g. <code>jQuery.sap.storage(jQuery.sap.storage.Type.local)</code>
	 * returning an object implementing {@link jQuery.sap.storage.Storage}.</li>
	 * </ul>
	 * @see jQuery.sap#.storage for information on how to create storages different from the default one.
	 *
	 * @name jQuery.sap.storage
	 * @borrows jQuery.sap.storage.Storage.get as get
	 * @borrows jQuery.sap.storage.Storage.put as put
	 * @borrows jQuery.sap.storage.Storage.remove as remove
	 * @borrows jQuery.sap.storage.Storage.clear as clear
	 * @borrows jQuery.sap.storage.Storage.getType as getType
	 *
	 * @version 1.5.0-SNAPSHOT
	 * @since 0.9.0
	 * @namespace
	 */

	/**
	 * Namespace holding constants for specification of different storages supported by {@link jQuery.sap.storage.Storage}
	 * @version 1.5.0-SNAPSHOT
	 * @since 0.11.0
	 * @namespace
	 * @public
	 */
	jQuery.sap.storage.Type = {
			/**
			 * Indicates usage of the browser's localStorage feature
			 * @public
			 */
			local: "local",
			/**
			 * Indicates usage of the browser's sessionStorage feature
			 * @public
			 */
			session: "session",
			/**
			 * Indicates usage of the browser's globalStorage feature
			 * @public
			 */
			global: "global"
	};

	// ensure the storage constructor applied to our storage object
	fStorage.apply(jQuery.sap.storage);
	mStorages[jQuery.sap.storage.Type.session] = jQuery.sap.storage;

// end of anonymous function creating the storage instance and its methods
}());