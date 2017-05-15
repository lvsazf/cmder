<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window"
  design="device:m;">
  <style>
  	video{
		z-index:65535!important;	
	}
  </style>  
  <div component="$UI/system/components/justep/model/model" xid="model" onLoad="modelLoad" onParamsReceive="modelParamsReceive"/>  
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"
    xid="panel1"> 
    <div class="x-panel-content" xid="content1"/>  
    <div class="x-panel-bottom" xid="bottom1">
      <div component="$UI/system/components/justep/button/buttonGroup" class="btn-group"
        tabbed="true" xid="buttonGroup1" style="margin-bottom:50px;"> 
        <a component="$UI/system/components/justep/button/button" class="btn btn-default x-focusable"
          label="播放" xid="play" onClick="playClick"> 
          <i xid="i1"/>  
          <span xid="span1">播放</span>
        </a>  
        <a component="$UI/system/components/justep/button/button" class="btn btn-default x-focusable"
          label="暂停" xid="pause" onClick="pauseClick"> 
          <i xid="i2"/>  
          <span xid="span2">暂停</span>
        </a> 
      <a component="$UI/system/components/justep/button/button" class="btn btn-default x-focusable" label="关闭" xid="close" onClick="closeClick">
   <i xid="i3"></i>
   <span xid="span3">关闭</span></a></div>
    </div>
  </div>
</div>
