/*! 
 * WeX5 v3 (http://www.justep.com) 
 * Copyright 2015 Justep, Inc.
 * Licensed under Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0) 
 */
define(function(require) {
	// var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var url = require.normalizeName("./stbplayer");
	var ComponentConfig = require("./stbplayer.config");
	require("res!../../config");
	
	require('css!./designer/css/stbplayer').load();

	var WindowDialog = require("$UI/system/components/justep/windowDialog/windowDialog");
	
	var Stbplayer = justep.BindComponent.extend({
		getConfig : function() {
			return ComponentConfig;
		},
		// 构造函数
		constructor : function(options) {
			this.callParent(options);
			this.url = "";
		},
		// 动态创建组件
		buildTemplate : function(config) {
		},
		// 初始化
		doInit : function(value, bindingContext, allBindings) {
			debugger
			this.callParent(value, bindingContext, allBindings);
			var playBtn=$("a",this.$domNode[0]);
			var self = this;
			playBtn.click(function(){
				self.openWindowDialog();
			});		
		},
		//打开对话框
		openWindowDialog:function(){
			var self=this;
			var videoUrl=require.toUrl(this.url);
			var windowDialog=new WindowDialog({
				status:"maximize",
				src:"$UI/comp/stbplayer/components/stbplayer/player/playpage.w",
				parentNode:this.domNode
			},this);
			windowDialog.open({params:{url:videoUrl}});
		},
		doUpdate : function(value, bindingContext, allBindings) {
			this.callParent(value, bindingContext, allBindings);
		},
		
		

		propertyChangedHandler : function(key, oldVal, value) {		
				this.callParent(key, oldVal, value);
		}

	});

	justep.Component.register(url, Stbplayer);
	return Stbplayer;
});