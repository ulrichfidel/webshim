(function(a){var b=window.Modernizr,e=a.webshims;e.capturingEventPrevented=function(b){if(!b._isPolyfilled){var e=b.isDefaultPrevented,d=b.preventDefault;b.preventDefault=function(){clearTimeout(a.data(b.target,b.type+"DefaultPrevented"));a.data(b.target,b.type+"DefaultPrevented",setTimeout(function(){a.removeData(b.target,b.type+"DefaultPrevented")},30));return d.apply(this,arguments)};b.isDefaultPrevented=function(){return!(!e.apply(this,arguments)&&!a.data(b.target,b.type+"DefaultPrevented"))};
b._isPolyfilled=!0}};if(b.formvalidation&&!e.bugs.bustedValidity){var d=a('<form action="#" style="width: 1px; height: 1px; overflow: hidden;"><select /><input type="date" required name="a" /><input type="submit" /></form>');b.bugfreeformvalidation=b.requiredSelect=!!("required"in a("select",d)[0]);if(window.opera||a.browser.webkit||window.testGoodWithFix){var i=a("input",d).eq(0),o,p=function(m){var l=["form-extend","form-message","form-native-fix"];m&&(m.preventDefault(),m.stopImmediatePropagation());
clearTimeout(o);setTimeout(function(){d&&(d.remove(),d=i=null)},9);if(!b.bugfreeformvalidation||!b.requiredSelect)e.addPolyfill("form-native-fix",{f:"forms",d:["form-extend"]}),e.modules["form-extend"].test=a.noop;e.isReady("form-number-date-api")&&l.push("form-number-date-api");e.reTest(l);if(a.browser.opera||window.testGoodWithFix)e.loader.loadList(["dom-extend"]),e.ready("dom-extend",function(){var d=function(a){a.preventDefault()};["form","input","textarea","select"].forEach(function(b){var k=
e.defineNodeNameProperty(b,"checkValidity",{prop:{value:function(){e.fromSubmit||a(this).bind("invalid.checkvalidity",d);e.fromCheckValidity=!0;var b=k.prop._supvalue.apply(this,arguments);e.fromSubmit||a(this).unbind("invalid.checkvalidity",d);e.fromCheckValidity=!1;return b}}})});b.input.list&&!(a("<datalist><select><option></option></select></datalist>").prop("options")||[]).length&&e.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var b=this.options||[];if(!b.length){var d=
a("select",this);if(d[0]&&d[0].options&&d[0].options.length)b=d[0].options}return b}}})})};d.appendTo("head");if(window.opera||window.testGoodWithFix){e.bugs.validationMessage=!i.prop("validationMessage");if((b.inputtypes||{}).date){try{i.prop("valueAsNumber",0)}catch(s){}e.bugs.valueAsNumberSet="1970-01-01"!=i.prop("value")}i.prop("value","")}d.bind("submit",function(a){b.bugfreeformvalidation=!1;p(a)});o=setTimeout(function(){d&&d.triggerHandler("submit")},9);e.capturingEvents(["input"]);e.capturingEvents(["invalid"],
!0);a("input, select",d).bind("invalid",p).filter('[type="submit"]').bind("click",function(a){a.stopImmediatePropagation()}).trigger("click")}else e.capturingEvents(["input"]),e.capturingEvents(["invalid"],!0)}})(jQuery);
jQuery.webshims.register("form-core",function(a,b,e,d,i,o){var p={radio:1},s={checkbox:1,radio:1},m=a([]),l=function(c){var c=a(c),b,f;b=m;if(p[c[0].type])f=c.prop("form"),b=(b=c[0].name)?f?a(f[b]):a(d.getElementsByName(b)).filter(function(){return!a.prop(this,"form")}):c,b=b.filter('[type="radio"]');return b},v=b.getContentValidationMessage=function(c,g){var f=c.getAttribute("x-moz-errormessage")||c.getAttribute("data-errormessage")||"";if(f&&-1!=f.indexOf("{")){try{f=jQuery.parseJSON(f)}catch(d){return f}"object"==
typeof f&&(g=g||a.prop(c,"validity")||{valid:1},g.valid||a.each(g,function(a,c){if(c&&"valid"!=a&&f[a])return f=f[a],!1}));b.data(c,"contentErrorMessage",f);if("object"==typeof f)f=f.defaultMessage}return f||""},u={number:1,range:1,date:1,time:1,"datetime-local":1,datetime:1,month:1,week:1};a.extend(a.expr.filters,{"valid-element":function(c){return!(!a.prop(c,"willValidate")||!(a.prop(c,"validity")||{valid:1}).valid)},"invalid-element":function(c){return!(!a.prop(c,"willValidate")||(a.prop(c,"validity")||
{valid:1}).valid)},"required-element":function(c){return!(!a.prop(c,"willValidate")||!a.prop(c,"required"))},"optional-element":function(c){return!!(a.prop(c,"willValidate")&&!1===a.prop(c,"required"))},"in-range":function(c){if(!u[a.prop(c,"type")]||!a.prop(c,"willValidate"))return!1;c=a.prop(c,"validity");return!(!c||c.rangeOverflow||c.rangeUnderflow)},"out-of-range":function(c){if(!u[a.prop(c,"type")]||!a.prop(c,"willValidate"))return!1;c=a.prop(c,"validity");return!(!c||!c.rangeOverflow&&!c.rangeUnderflow)}});
["valid","invalid","required","optional"].forEach(function(c){a.expr.filters[c]=a.expr.filters[c+"-element"]});var k=a.event.customEvent||{},w=a.prop,x={selectedIndex:1,value:1,checked:1,disabled:1,readonly:1};a.prop=function(c,b,f){var d=w.apply(this,arguments);if(c&&"form"in c&&x[b]&&f!==i&&a(c).hasClass("form-ui-invalid")&&(a.prop(c,"validity")||{valid:1}).valid)a(c).getShadowElement().removeClass("form-ui-invalid"),"checked"==b&&f&&l(c).not(c).removeClass("form-ui-invalid").removeAttr("aria-invalid");
return d};var y=function(c,b){var f;a.each(c,function(c,d){if(d)return f="customError"==c?a.prop(b,"validationMessage"):c,!1});return f};a(d).bind("focusout change refreshvalidityui",function(c){if(c.target&&"submit"!=c.target.type&&a.prop(c.target,"willValidate")){var b=a.data(c.target,"webshimsswitchvalidityclass");b&&clearTimeout(b);a.data(c.target,"webshimsswitchvalidityclass",setTimeout(function(){var b=a(c.target).getNativeElement()[0],d=a.prop(b,"validity"),g=a(b).getShadowElement(),e,n,t,
q;d.valid?g.hasClass("form-ui-valid")||(e="form-ui-valid",n="form-ui-invalid",q="changedvaliditystate",t="changedvalid",s[b.type]&&b.checked&&l(b).not(b).removeClass(n).addClass(e).removeAttr("aria-invalid"),a.removeData(b,"webshimsinvalidcause")):(d=y(d,b),a.data(b,"webshimsinvalidcause")!=d&&(a.data(b,"webshimsinvalidcause",d),q="changedvaliditystate"),g.hasClass("form-ui-invalid")||(e="form-ui-invalid",n="form-ui-valid",s[b.type]&&!b.checked&&l(b).not(b).removeClass(n).addClass(e),t="changedinvalid"));
e&&(g.addClass(e).removeClass(n),setTimeout(function(){a(b).trigger(t)},0));q&&setTimeout(function(){a(b).trigger(q)},0);a.removeData(c.target,"webshimsswitchvalidityclass")},9))}});k.changedvaliditystate=!0;k.changedvalid=!0;k.changedinvalid=!0;k.refreshvalidityui=!0;b.triggerInlineForm=function(c,b){a(c).trigger(b)};b.modules["form-core"].getGroupElements=l;k=function(){b.scrollRoot=a.browser.webkit||"BackCompat"==d.compatMode?a(d.body):a(d.documentElement)};k();b.ready("DOM",k);b.getRelOffset=
function(c,b){var c=a(c),d=a(b).offset(),e;a.swap(a(c)[0],{visibility:"hidden",display:"inline-block",left:0,top:0},function(){e=c.offset()});d.top-=e.top;d.left-=e.left;return d};b.validityAlert=function(){var c=!a.browser.msie||7<parseInt(a.browser.version,10)?"span":"label",g,f=!1,j=!1,k,h={hideDelay:5E3,showFor:function(c,b,d,l){h._create();var c=a(c),r=a(c).getShadowElement(),i=h.getOffsetFromBody(r);h.clear();l?this.hide():(this.getMessage(c,b),this.position(r,i),g.css({fontSize:c.css("fontSize"),
fontFamily:c.css("fontFamily")}),this.show(),this.hideDelay&&(f=setTimeout(k,this.hideDelay)),a(e).bind("resize.validityalert orientationchange.validityalert emchange.validityalert",function(){clearTimeout(j);j=setTimeout(function(){h.position(r)},9)}));d||this.setFocus(r,i)},getOffsetFromBody:function(a){return b.getRelOffset(g,a)},setFocus:function(e,f){var j=a(e).getShadowFocusElement(),h=b.scrollRoot.scrollTop(),i=(f||j.offset()).top-30,l;b.getID&&"label"==c&&g.attr("for",b.getID(j));h>i&&(b.scrollRoot.animate({scrollTop:i-
5},{queue:!1,duration:Math.max(Math.min(600,1.5*(h-i)),80)}),l=!0);try{j[0].focus()}catch(m){}l&&(b.scrollRoot.scrollTop(h),setTimeout(function(){b.scrollRoot.scrollTop(h)},0));setTimeout(function(){a(d).bind("focusout.validityalert",k)},10)},getMessage:function(c,b){a("span.va-box",g).text(b||v(c[0])||c.prop("validationMessage"))},position:function(c,b){b=b?a.extend({},b):h.getOffsetFromBody(c);b.top+=c.outerHeight();g.css(b)},show:function(){"none"===g.css("display")&&g.css({opacity:0}).show();
g.addClass("va-visible").fadeTo(400,1)},hide:function(){g.removeClass("va-visible").fadeOut()},clear:function(){clearTimeout(!1);clearTimeout(f);a(d).unbind(".validityalert");a(e).unbind(".validityalert");g.stop().removeAttr("for")},_create:function(){if(!g)g=h.errorBubble=a("<"+c+' class="validity-alert-wrapper" role="alert"><span  class="validity-alert"><span class="va-arrow"><span class="va-arrow-box"></span></span><span class="va-box"></span></span></'+c+">").css({position:"absolute",display:"none"}),
b.ready("DOM",function(){g.appendTo("body");a.fn.bgIframe&&a.browser.msie&&7>parseInt(a.browser.version,10)&&g.bgIframe()})}};k=a.proxy(h,"hide");return h}();(function(){var c,b=[],e;a(d).bind("invalid",function(j){if(!j.wrongWebkitInvalid){var i=a(j.target),h=i.getShadowElement();h.hasClass("form-ui-invalid")||(h.addClass("form-ui-invalid").removeClass("form-ui-valid"),setTimeout(function(){a(j.target).trigger("changedinvalid").trigger("changedvaliditystate")},0));if(!c)c=a.Event("firstinvalid"),
c.isInvalidUIPrevented=j.isDefaultPrevented,h=a.Event("firstinvalidsystem"),a(d).triggerHandler(h,{element:j.target,form:j.target.form,isInvalidUIPrevented:j.isDefaultPrevented}),i.trigger(c);c&&c.isDefaultPrevented()&&j.preventDefault();b.push(j.target);j.extraData="fix";clearTimeout(e);e=setTimeout(function(){var d={type:"lastinvalid",cancelable:!1,invalidlist:a(b)};c=!1;b=[];a(j.target).trigger(d,d)},9);h=i=null}})})();o.replaceValidationUI&&b.ready("DOM",function(){a(d).bind("firstinvalid",function(b){b.isInvalidUIPrevented()||
(b.preventDefault(),a.webshims.validityAlert.showFor(b.target,a(b.target).prop("customValidationMessage")))})})});
