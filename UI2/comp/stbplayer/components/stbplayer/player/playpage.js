define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	
	var MediaPlayer = window['MediaPlayer']; 
	var Model = function(){
		this.callParent();
	};

	Model.prototype.modelLoad = function(event){
		this.initPlayer();		
	};
	
	//初始化播放器
	Model.prototype.initPlayer=function(){
		window.test = this;
		this.mp=new MediaPlayer();
		var mediaUrl = this.modelParamsReceive();
		this.instanceId=this.mp.getNativePlayerInstanceID();
//		var mediaURL="http://192.168.1.125:8080/x5/UI2/tvplayer/birds22222.mp4";
//		http://192.168.1.125:8080/x5/UI2/abchuawei/VSP/video.mp4
		var mediaURL=mediaUrl;
		var mediacode="123456";
		var mediaType=2;
		var streamType=3;
		this.mp.setVideoDisplayMode(1); //按设置的区域大小显示 
		//this.mp.setVideoDisplayArea(0, 0, 300,300);  //设置显示区域大小
		var mediaStr= {"mediaURL":mediaURL,
				"mediaCode":mediacode,
				"mediaType":mediaType,
				"streamType":streamType};
		this.mp.setSingleMedia(JSON.stringify(mediaStr));
		this.mp.refreshVideoDisplay(); //刷新设置的显示方式和区域大小
		this.mp.playFromStart();
		
		
		/*
		var mp=new MediaPlayer();
		var instanceId=mp.getNativePlayerInstanceID();
		
		mp.setVideoDisplayMode(0); //按设置的区域大小显示 
		mp.setVideoDisplayArea(0, 0, 300,300);  //设置显示区域大小
		var mediaStr = '{"mediaURL":"http://192.168.1.125:8080/x5//UI2/demo/VSP/birds.mp4","mediaCode":"123456","mediaType":13,"streamType":3}';
		mp.setSingleMedia(mediaStr);
		mp.refreshVideoDisplay(); //刷新设置的显示方式和区域大小
		
		mp.playFromStart();*/
	};
	
	//播放
	Model.prototype.playClick = function(event){
		this.mp.playFromStart();
	};
	
	//暂停	
	Model.prototype.pauseClick = function(event){
		this.mp.pause();
	};
	
	
	//关闭对话框
	Model.prototype.closeClick = function(event){
		if(justep.Browser.isX5App){
			this.mp.releaseMediaPlayer(this.instanceId);
		}else{
			$('body>video').remove();
			
		}
		this.close();
	};
	
	
	//接收参数
	Model.prototype.modelParamsReceive = function(event){
		return this.params.url;
	};
	
	
	
	return Model;
});