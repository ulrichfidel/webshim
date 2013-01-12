jQuery.webshims.register("mediaelement-jaris",function(e,t,n,r,i,s){"use strict";var o=t.mediaelement,u=n.swfmini,a=Modernizr.audio&&Modernizr.video,f=u.hasFlashPlayerVersion("9.0.115"),l=0,c={paused:!0,ended:!1,currentSrc:"",duration:n.NaN,readyState:0,networkState:0,videoHeight:0,videoWidth:0,error:null,buffered:{start:function(e){if(e){t.error("buffered index size error");return}return 0},end:function(e){if(e){t.error("buffered index size error");return}return 0},length:0}},h=Object.keys(c),p={currentTime:0,volume:1,muted:!1},d=Object.keys(p),v=e.extend({isActive:"html5",activating:"html5",wasSwfReady:!1,_bufferedEnd:0,_bufferedStart:0,currentTime:0,_ppFlag:i,_calledMeta:!1,lastDuration:0},c,p),m=/^jarisplayer-/,g=function(e){var n=r.getElementById(e.replace(m,""));if(!n)return;var i=t.data(n,"mediaelement");return i.isActive=="third"?i:null},y=function(e){try{e.nodeName}catch(n){return null}var r=t.data(e,"mediaelement");return r&&r.isActive=="third"?r:null},b=function(t,n){n=e.Event(n),n.preventDefault(),e.event.trigger(n,i,t)},w=s.playerPath||t.cfg.basePath+"swf/"+(s.playerName||"JarisFLVPlayer.swf");t.extendUNDEFProp(s.params,{allowscriptaccess:"always",allowfullscreen:"true",wmode:"transparent",allowNetworking:"all"}),t.extendUNDEFProp(s.vars,{controltype:"1",jsapi:"1"}),t.extendUNDEFProp(s.attrs,{bgcolor:"#000000"});var E=function(e,t){e<3&&clearTimeout(t._canplaythroughTimer),e>=3&&t.readyState<3&&(t.readyState=e,b(t._elem,"canplay"),t.paused||b(t._elem,"playing"),clearTimeout(t._canplaythroughTimer),t._canplaythroughTimer=setTimeout(function(){E(4,t)},4e3)),e>=4&&t.readyState<4&&(t.readyState=e,b(t._elem,"canplaythrough")),t.readyState=e};e.extend(e.event.customEvent,{updatemediaelementdimensions:!0,flashblocker:!0,swfstageresize:!0,mediaelementapichange:!0}),o.jarisEvent={};var S,x={onPlayPause:function(e,t,n){var r,i;if(n==null)try{r=t.api.api_get("isPlaying")}catch(s){}else r=n;r==t.paused&&(t.paused=!r,i=t.paused?"pause":"play",t._ppFlag=!0,b(t._elem,i),t.readyState<3&&E(3,t),t.paused||b(t._elem,"playing"))},onNotBuffering:function(e,t){E(3,t)},onDataInitialized:function(e,t){var n=t.duration,r;t.duration=e.duration;if(n==t.duration||isNaN(t.duration))return;if(t._calledMeta&&(r=Math.abs(t.lastDuration-t.duration))<2)return;t.videoHeight=e.height,t.videoWidth=e.width,t.networkState||(t.networkState=2),t.readyState<1&&E(1,t),clearTimeout(t._durationChangeTimer),t._calledMeta&&t.duration?t._durationChangeTimer=setTimeout(function(){t.lastDuration=t.duration,b(t._elem,"durationchange")},r>50?0:r>9?9:99):(t.lastDuration=t.duration,t.duration&&b(t._elem,"durationchange"),t._calledMeta||b(t._elem,"loadedmetadata")),t._calledMeta=!0},onBuffering:function(e,t){t.ended&&(t.ended=!1),E(1,t),b(t._elem,"waiting")},onTimeUpdate:function(e,t){t.ended&&(t.ended=!1),t.readyState<3&&(E(3,t),b(t._elem,"playing")),b(t._elem,"timeupdate")},onProgress:function(t,n){n.ended&&(n.ended=!1);if(!n.duration||isNaN(n.duration))return;var r=t.loaded/t.total;r>.02&&r<.2?E(3,n):r>.2&&(r>.99&&(n.networkState=1),E(4,n)),n._bufferedEnd&&n._bufferedEnd>r&&(n._bufferedStart=n.currentTime||0),n._bufferedEnd=r,n.buffered.length=1,e.event.trigger("progress",i,n._elem,!0)},onPlaybackFinished:function(e,t){t.readyState<4&&E(4,t),t.ended=!0,b(t._elem,"ended")},onVolumeChange:function(e,t){if(t.volume!=e.volume||t.muted!=e.mute)t.volume=e.volume,t.muted=e.mute,b(t._elem,"volumechange")},ready:function(){var n=function(e){var t=!0;try{e.api.api_get("volume")}catch(n){t=!1}return t};return function(r,i){var s=0,o=function(){if(s>9){i.tryedReframeing=0;return}s++,i.tryedReframeing++,n(i)?(i.wasSwfReady=!0,i.tryedReframeing=0,N(i),T(i)):i.tryedReframeing<6?i.tryedReframeing<3?(i.reframeTimer=setTimeout(o,9),i.shadowElem.css({overflow:"visible"}),setTimeout(function(){i.shadowElem.css({overflow:"hidden"})},1)):(i.shadowElem.css({overflow:"hidden"}),e(i._elem).mediaLoad()):(clearTimeout(i.reframeTimer),t.error("reframing error"))};if(!i||!i.api)return;i.tryedReframeing||(i.tryedReframeing=0),clearTimeout(S),clearTimeout(i.reframeTimer),i.shadowElem.removeClass("flashblocker-assumed"),s?i.reframeTimer=setTimeout(o,9):o()}}()};x.onMute=x.onVolumeChange;var T=function(e){var n=e.actionQueue.length,r=0,i;if(n&&e.isActive=="third")while(e.actionQueue.length&&n>r){r++,i=e.actionQueue.shift();try{e.api[i.fn].apply(e.api,i.args)}catch(s){t.warn(s)}}e.actionQueue.length&&(e.actionQueue=[])},N=function(t){if(!t)return;(t._ppFlag===i&&e.prop(t._elem,"autoplay")||!t.paused)&&setTimeout(function(){if(t.isActive=="third"&&(t._ppFlag===i||!t.paused))try{e(t._elem).play(),t._ppFlag=!0}catch(n){}},1),t.muted&&e.prop(t._elem,"muted",!0),t.volume!=1&&e.prop(t._elem,"volume",t.volume)},C=e.noop;if(a){var k={play:1,playing:1},L=["play","pause","playing","canplay","progress","waiting","ended","loadedmetadata","durationchange","emptied"],A=L.map(function(e){return e+".webshimspolyfill"}).join(" "),O=function(n){var r=t.data(n.target,"mediaelement");if(!r)return;var i=n.originalEvent&&n.originalEvent.type===n.type;i==(r.activating=="third")&&(n.stopImmediatePropagation(),k[n.type]&&r.isActive!=r.activating&&e(n.target).pause())};C=function(n){e(n).off(A).on(A,O),L.forEach(function(e){t.moveToFirstEvent(n,e)})},C(r)}o.setActive=function(n,r,i){i||(i=t.data(n,"mediaelement"));if(!i||i.isActive==r)return;r!="html5"&&r!="third"&&t.warn("wrong type for mediaelement activating: "+r);var s=t.data(n,"shadowData");i.activating=r,e(n).pause(),i.isActive=r,r=="third"?(s.shadowElement=s.shadowFocusElement=i.shadowElem[0],e(n).addClass("swf-api-active nonnative-api-active").hide().getShadowElement().show()):(e(n).removeClass("swf-api-active nonnative-api-active").show().getShadowElement().hide(),s.shadowElement=s.shadowFocusElement=!1),e(n).trigger("mediaelementapichange")};var M=function(){var e=["_calledMeta","lastDuration","_bufferedEnd","_bufferedStart","_ppFlag","currentSrc","currentTime","duration","ended","networkState","paused","videoHeight","videoWidth"],t=e.length;return function(n){if(!n)return;var r=t,i=n.networkState;E(0,n),clearTimeout(n._durationChangeTimer);while(--r>-1)delete n[e[r]];n.actionQueue=[],n.buffered.length=0,i&&b(n._elem,"emptied")}}(),_=function(t,n){var r=t._elem,i=t.shadowElem;e(r)[n?"addClass":"removeClass"]("webshims-controls"),t._elemNodeName=="audio"&&!n?i.css({width:0,height:0}):i.css({width:r.style.width||e(r).width(),height:r.style.height||e(r).height()})};o.createSWF=function(n,r,i){if(!f){setTimeout(function(){e(n).mediaLoad()},1);return}l<1?l=1:l++;var c=r.type=="audio/rtmp"||r.type=="video/rtmp",h=e.extend({},s.vars,{poster:e.attr(n,"poster")&&e.prop(n,"poster")||"",source:r.streamId||r.srcProp,server:r.server||""}),p=e(n).data("vars")||{};i||(i=t.data(n,"mediaelement"));var d=e.prop(n,"controls"),m="jarisplayer-"+t.getID(n),g=e.extend({},s.params,e(n).data("params")),y=n.nodeName.toLowerCase(),b=e.extend({},s.attrs,{name:m,id:m},e(n).data("attrs")),E;i&&i.swfCreated?(o.setActive(n,"third",i),i.currentSrc=r.srcProp,i.shadowElem.html('<div id="'+m+'">'),i.api=!1,i.actionQueue=[],E=i.shadowElem,M(i)):(E=e('<div class="polyfill-'+y+' polyfill-mediaelement" id="wrapper-'+m+'"><div id="'+m+'"></div>').css({position:"relative",overflow:"hidden"}),i=t.data(n,"mediaelement",t.objectCreate(v,{actionQueue:{value:[]},shadowElem:{value:E},_elemNodeName:{value:y},_elem:{value:n},currentSrc:{value:r.srcProp},swfCreated:{value:!0},id:{value:m.replace(/-/g,"")},buffered:{value:{start:function(e){if(e>=i.buffered.length){t.error("buffered index size error");return}return 0},end:function(e){if(e>=i.buffered.length){t.error("buffered index size error");return}return(i.duration-i._bufferedStart)*i._bufferedEnd+i._bufferedStart},length:0}}})),_(i,d),E.insertBefore(n),a&&e.extend(i,{volume:e.prop(n,"volume"),muted:e.prop(n,"muted"),paused:e.prop(n,"paused")}),t.addShadowDom(n,E),C(n),o.setActive(n,"third",i),e(n).on("updatemediaelementdimensions updateshadowdom",function(){_(i,e.prop(n,"controls"))})),o.jarisEvent[i.id]||(o.jarisEvent[i.id]=function(e){e.type=="ready"?i.api?x[e.type](e,i):setTimeout(function(){x[e.type](e,i)},9):(i.currentTime=e.position,i.api&&(!i._calledMeta&&isNaN(e.duration)&&i.duration!=e.duration&&isNaN(i.duration)&&x.onDataInitialized(e,i),!i._ppFlag&&e.type!="onPlayPause"&&x.onPlayPause(e,i),x[e.type]&&x[e.type](e,i)),i.duration=e.duration)}),e.extend(h,{id:m,evtId:i.id,controls:""+d,autostart:"false",nodename:y},p),c?h.streamtype="rtmp":r.type=="audio/mpeg"||r.type=="audio/mp3"?(h.type="audio",h.streamtype="file"):r.type=="video/youtube"&&(h.streamtype="youtube"),s.changeSWF(h,n,r,i,"embed"),clearTimeout(i.flashBlock),u.embedSWF(w,m,"100%","100%","9.0.0",!1,h,g,b,function(r){r.success&&(i.api=r.ref,d||e(r.ref).attr("tabindex","-1").css("outline","none"),i.flashBlock=setTimeout(function(){if(!r.ref.parentNode&&E[0].parentNode||r.ref.style.display=="none")E.addClass("flashblocker-assumed"),e(n).trigger("flashblocker"),t.warn("flashblocker assumed");e(r.ref).css({minHeight:"2px",minWidth:"2px",display:"block"})},9),S||(clearTimeout(S),S=setTimeout(function(){var n=e(r.ref);n[0].offsetWidth>1&&n[0].offsetHeight>1&&location.protocol.indexOf("file:")===0?t.error("Add your local development-directory to the local-trusted security sandbox:  http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html"):(n[0].offsetWidth<2||n[0].offsetHeight<2)&&t.warn("JS-SWF connection can't be established on hidden or unconnected flash objects"),n=null},8e3)))})};var D=function(e,t,n,r){return r=r||y(e),r?(r.api&&r.api[t]?r.api[t].apply(r.api,n||[]):(r.actionQueue.push({fn:t,args:n}),r.actionQueue.length>10&&setTimeout(function(){r.actionQueue.length>5&&r.actionQueue.shift()},99)),r):!1};["audio","video"].forEach(function(n){var r={},i,s=function(e){if(n=="audio"&&(e=="videoHeight"||e=="videoWidth"))return;r[e]={get:function(){var t=y(this);return t?t[e]:a&&i[e].prop._supget?i[e].prop._supget.apply(this):v[e]},writeable:!1}},o=function(e,t){s(e),delete r[e].writeable,r[e].set=t};o("volume",function(e){var n=y(this);if(n)e*=1,isNaN(e)||((e<0||e>1)&&t.error("volume greater or less than allowed "+e/100),D(this,"api_volume",[e],n),n.volume!=e&&(n.volume=e,b(n._elem,"volumechange")),n=null);else if(i.volume.prop._supset)return i.volume.prop._supset.apply(this,arguments)}),o("muted",function(e){var t=y(this);if(t)e=!!e,D(this,"api_muted",[e],t),t.muted!=e&&(t.muted=e,b(t._elem,"volumechange")),t=null;else if(i.muted.prop._supset)return i.muted.prop._supset.apply(this,arguments)}),o("currentTime",function(e){var t=y(this);if(t)e*=1,isNaN(e)||D(this,"api_seek",[e],t);else if(i.currentTime.prop._supset)return i.currentTime.prop._supset.apply(this,arguments)}),["play","pause"].forEach(function(e){r[e]={value:function(){var t=y(this);if(t)t.stopPlayPause&&clearTimeout(t.stopPlayPause),D(this,e=="play"?"api_play":"api_pause",[],t),t._ppFlag=!0,t.paused!=(e!="play")&&(t.paused=e!="play",b(t._elem,e));else if(i[e].prop._supvalue)return i[e].prop._supvalue.apply(this,arguments)}}}),h.forEach(s),t.onNodeNamesPropertyModify(n,"controls",function(t,r){var i=y(this);e(this)[r?"addClass":"removeClass"]("webshims-controls"),i&&(n=="audio"&&_(i,r),D(this,"api_controls",[r],i))}),i=t.defineNodeNameProperties(n,r,"prop")});if(f){var P=e.cleanData,H=e.browser.msie&&t.browserVersion<9,B={object:1,OBJECT:1};e.cleanData=function(e){var t,n,r;if(e&&(n=e.length)&&l)for(t=0;t<n;t++)if(B[e[t].nodeName]){if("api_pause"in e[t]){l--;try{e[t].api_pause()}catch(i){}}if(H)try{for(r in e[t])typeof e[t][r]=="function"&&(e[t][r]=null)}catch(i){}}return P.apply(this,arguments)}}a||(["poster","src"].forEach(function(e){t.defineNodeNamesProperty(e=="src"?["audio","video","source"]:["video"],e,{reflect:!0,propType:"src"})}),["autoplay","controls"].forEach(function(e){t.defineNodeNamesBooleanProperty(["audio","video"],e)}),t.defineNodeNamesProperties(["audio","video"],{HAVE_CURRENT_DATA:{value:2},HAVE_ENOUGH_DATA:{value:4},HAVE_FUTURE_DATA:{value:3},HAVE_METADATA:{value:1},HAVE_NOTHING:{value:0},NETWORK_EMPTY:{value:0},NETWORK_IDLE:{value:1},NETWORK_LOADING:{value:2},NETWORK_NO_SOURCE:{value:3}},"prop"))});