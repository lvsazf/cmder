/*! 
 * WeX5 v3 (http://www.justep.com) 
 * Copyright 2015 Justep, Inc.
 * Licensed under Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0) 
 */
define(function(require) {
	// var $ = require("jquery");
	//var justep = require("$UI/system/lib/justep");
	var Stbplayer = require("../stbplayer");
	require('css!./css/stbplayer').load();
	
	var _Stbplayer = Stbplayer.extend({
//		doInit : function(value, bindingContext, allBindings) {
//
//		},
		propertyChangedHandler : function(key, oldVal, value) {		
				this.callParent(key, oldVal, value);
		}
	});
	var quickIdeEx = {
		"$UI/comp/stbplayer/components/stbplayer/stbplayer" : {
			properties : [ "xid","url"]
		}
	};

	return {
		'$UI/comp/stbplayer/components/stbplayer/stbplayer' : _Stbplayer,
		quickIdeEx : quickIdeEx
	};
});