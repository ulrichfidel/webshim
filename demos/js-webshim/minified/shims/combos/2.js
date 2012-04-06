(function(a){var b=window.Modernizr,k=a.webshims;k.capturingEventPrevented=function(b){if(!b._isPolyfilled){var d=b.isDefaultPrevented,f=b.preventDefault;b.preventDefault=function(){clearTimeout(a.data(b.target,b.type+"DefaultPrevented"));a.data(b.target,b.type+"DefaultPrevented",setTimeout(function(){a.removeData(b.target,b.type+"DefaultPrevented")},30));return f.apply(this,arguments)};b.isDefaultPrevented=function(){return!(!d.apply(this,arguments)&&!a.data(b.target,b.type+"DefaultPrevented"))};
b._isPolyfilled=!0}};if(b.formvalidation&&!k.bugs.bustedValidity){var i=a('<form action="#" style="width: 1px; height: 1px; overflow: hidden;"><select /><input type="date" required name="a" /><input type="submit" /></form>');b.bugfreeformvalidation=b.requiredSelect=!!("required"in a("select",i)[0]);if(window.opera||a.browser.webkit||window.testGoodWithFix){var r=a("input",i).eq(0),f,d=function(d){var j=["form-extend","form-message","form-native-fix"];d&&(d.preventDefault(),d.stopImmediatePropagation());
clearTimeout(f);setTimeout(function(){i&&(i.remove(),i=r=null)},9);if(!b.bugfreeformvalidation||!b.requiredSelect)k.addPolyfill("form-native-fix",{f:"forms",d:["form-extend"]}),k.modules["form-extend"].test=a.noop;k.isReady("form-number-date-api")&&j.push("form-number-date-api");k.reTest(j);if(a.browser.opera||window.testGoodWithFix)k.loader.loadList(["dom-extend"]),k.ready("dom-extend",function(){var d=function(a){a.preventDefault()};["form","input","textarea","select"].forEach(function(b){var h=
k.defineNodeNameProperty(b,"checkValidity",{prop:{value:function(){k.fromSubmit||a(this).bind("invalid.checkvalidity",d);k.fromCheckValidity=!0;var b=h.prop._supvalue.apply(this,arguments);k.fromSubmit||a(this).unbind("invalid.checkvalidity",d);k.fromCheckValidity=!1;return b}}})});b.input.list&&!(a("<datalist><select><option></option></select></datalist>").prop("options")||[]).length&&k.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var b=this.options||[];if(!b.length){var d=
a("select",this);if(d[0]&&d[0].options&&d[0].options.length)b=d[0].options}return b}}})})};i.appendTo("head");if(window.opera||window.testGoodWithFix){k.bugs.validationMessage=!r.prop("validationMessage");if((b.inputtypes||{}).date){try{r.prop("valueAsNumber",0)}catch(j){}k.bugs.valueAsNumberSet="1970-01-01"!=r.prop("value")}r.prop("value","")}i.bind("submit",function(a){b.bugfreeformvalidation=!1;d(a)});f=setTimeout(function(){i&&i.triggerHandler("submit")},9);k.capturingEvents(["input"]);k.capturingEvents(["invalid"],
!0);a("input, select",i).bind("invalid",d).filter('[type="submit"]').bind("click",function(a){a.stopImmediatePropagation()}).trigger("click")}else k.capturingEvents(["input"]),k.capturingEvents(["invalid"],!0)}})(jQuery);
jQuery.webshims.register("form-core",function(a,b,k,i,r,f){var d={radio:1},j={checkbox:1,radio:1},n=a([]),q=function(s){var s=a(s),c,b;c=n;if(d[s[0].type])b=s.prop("form"),c=(c=s[0].name)?b?a(b[c]):a(i.getElementsByName(c)).filter(function(){return!a.prop(this,"form")}):s,c=c.filter('[type="radio"]');return c},w=b.getContentValidationMessage=function(c,g){var l=c.getAttribute("x-moz-errormessage")||c.getAttribute("data-errormessage")||"";if(l&&-1!=l.indexOf("{")){try{l=jQuery.parseJSON(l)}catch(d){return l}"object"==
typeof l&&(g=g||a.prop(c,"validity")||{valid:1},g.valid||a.each(g,function(a,c){if(c&&"valid"!=a&&l[a])return l=l[a],!1}));b.data(c,"contentErrorMessage",l);if("object"==typeof l)l=l.defaultMessage}return l||""},m={number:1,range:1,date:1,time:1,"datetime-local":1,datetime:1,month:1,week:1};a.extend(a.expr.filters,{"valid-element":function(c){return!(!a.prop(c,"willValidate")||!(a.prop(c,"validity")||{valid:1}).valid)},"invalid-element":function(c){return!(!a.prop(c,"willValidate")||(a.prop(c,"validity")||
{valid:1}).valid)},"required-element":function(c){return!(!a.prop(c,"willValidate")||!a.prop(c,"required"))},"optional-element":function(c){return!!(a.prop(c,"willValidate")&&!1===a.prop(c,"required"))},"in-range":function(c){if(!m[a.prop(c,"type")]||!a.prop(c,"willValidate"))return!1;c=a.prop(c,"validity");return!(!c||c.rangeOverflow||c.rangeUnderflow)},"out-of-range":function(c){if(!m[a.prop(c,"type")]||!a.prop(c,"willValidate"))return!1;c=a.prop(c,"validity");return!(!c||!c.rangeOverflow&&!c.rangeUnderflow)}});
["valid","invalid","required","optional"].forEach(function(c){a.expr.filters[c]=a.expr.filters[c+"-element"]});var h=a.event.customEvent||{},u=a.prop,p={selectedIndex:1,value:1,checked:1,disabled:1,readonly:1};a.prop=function(c,b,l){var d=u.apply(this,arguments);if(c&&"form"in c&&p[b]&&l!==r&&a(c).hasClass("form-ui-invalid")&&(a.prop(c,"validity")||{valid:1}).valid)a(c).getShadowElement().removeClass("form-ui-invalid"),"checked"==b&&l&&q(c).not(c).removeClass("form-ui-invalid").removeAttr("aria-invalid");
return d};var c=function(c,b){var l;a.each(c,function(c,s){if(s)return l="customError"==c?a.prop(b,"validationMessage"):c,!1});return l};a(i).bind("focusout change refreshvalidityui",function(b){if(b.target&&"submit"!=b.target.type&&a.prop(b.target,"willValidate")){var g=a.data(b.target,"webshimsswitchvalidityclass");g&&clearTimeout(g);a.data(b.target,"webshimsswitchvalidityclass",setTimeout(function(){var g=a(b.target).getNativeElement()[0],d=a.prop(g,"validity"),h=a(g).getShadowElement(),f,o,t,
v;d.valid?h.hasClass("form-ui-valid")||(f="form-ui-valid",o="form-ui-invalid",v="changedvaliditystate",t="changedvalid",j[g.type]&&g.checked&&q(g).not(g).removeClass(o).addClass(f).removeAttr("aria-invalid"),a.removeData(g,"webshimsinvalidcause")):(d=c(d,g),a.data(g,"webshimsinvalidcause")!=d&&(a.data(g,"webshimsinvalidcause",d),v="changedvaliditystate"),h.hasClass("form-ui-invalid")||(f="form-ui-invalid",o="form-ui-valid",j[g.type]&&!g.checked&&q(g).not(g).removeClass(o).addClass(f),t="changedinvalid"));
f&&(h.addClass(f).removeClass(o),setTimeout(function(){a(g).trigger(t)},0));v&&setTimeout(function(){a(g).trigger(v)},0);a.removeData(b.target,"webshimsswitchvalidityclass")},9))}});h.changedvaliditystate=!0;h.changedvalid=!0;h.changedinvalid=!0;h.refreshvalidityui=!0;b.triggerInlineForm=function(c,b){a(c).trigger(b)};b.modules["form-core"].getGroupElements=q;h=function(){b.scrollRoot=a.browser.webkit||"BackCompat"==i.compatMode?a(i.body):a(i.documentElement)};h();b.ready("DOM",h);b.getRelOffset=
function(c,b){var c=a(c),d=a(b).offset(),f;a.swap(a(c)[0],{visibility:"hidden",display:"inline-block",left:0,top:0},function(){f=c.offset()});d.top-=f.top;d.left-=f.left;return d};b.validityAlert=function(){var c=!a.browser.msie||7<parseInt(a.browser.version,10)?"span":"label",g,d=!1,f=!1,h,n={hideDelay:5E3,showFor:function(c,b,s,i){n._create();var c=a(c),j=a(c).getShadowElement(),m=n.getOffsetFromBody(j);n.clear();i?this.hide():(this.getMessage(c,b),this.position(j,m),g.css({fontSize:c.css("fontSize"),
fontFamily:c.css("fontFamily")}),this.show(),this.hideDelay&&(d=setTimeout(h,this.hideDelay)),a(k).bind("resize.validityalert orientationchange.validityalert emchange.validityalert",function(){clearTimeout(f);f=setTimeout(function(){n.position(j)},9)}));s||this.setFocus(j,m)},getOffsetFromBody:function(a){return b.getRelOffset(g,a)},setFocus:function(o,t){var d=a(o).getShadowFocusElement(),f=b.scrollRoot.scrollTop(),l=(t||d.offset()).top-30,n;b.getID&&"label"==c&&g.attr("for",b.getID(d));f>l&&(b.scrollRoot.animate({scrollTop:l-
5},{queue:!1,duration:Math.max(Math.min(600,1.5*(f-l)),80)}),n=!0);try{d[0].focus()}catch(j){}n&&(b.scrollRoot.scrollTop(f),setTimeout(function(){b.scrollRoot.scrollTop(f)},0));setTimeout(function(){a(i).bind("focusout.validityalert",h)},10)},getMessage:function(c,b){a("span.va-box",g).text(b||w(c[0])||c.prop("validationMessage"))},position:function(c,b){b=b?a.extend({},b):n.getOffsetFromBody(c);b.top+=c.outerHeight();g.css(b)},show:function(){"none"===g.css("display")&&g.css({opacity:0}).show();
g.addClass("va-visible").fadeTo(400,1)},hide:function(){g.removeClass("va-visible").fadeOut()},clear:function(){clearTimeout(!1);clearTimeout(d);a(i).unbind(".validityalert");a(k).unbind(".validityalert");g.stop().removeAttr("for")},_create:function(){if(!g)g=n.errorBubble=a("<"+c+' class="validity-alert-wrapper" role="alert"><span  class="validity-alert"><span class="va-arrow"><span class="va-arrow-box"></span></span><span class="va-box"></span></span></'+c+">").css({position:"absolute",display:"none"}),
b.ready("DOM",function(){g.appendTo("body");a.fn.bgIframe&&a.browser.msie&&7>parseInt(a.browser.version,10)&&g.bgIframe()})}};h=a.proxy(n,"hide");return n}();(function(){var c,b=[],d;a(i).bind("invalid",function(f){if(!f.wrongWebkitInvalid){var n=a(f.target),h=n.getShadowElement();h.hasClass("form-ui-invalid")||(h.addClass("form-ui-invalid").removeClass("form-ui-valid"),setTimeout(function(){a(f.target).trigger("changedinvalid").trigger("changedvaliditystate")},0));if(!c)c=a.Event("firstinvalid"),
c.isInvalidUIPrevented=f.isDefaultPrevented,h=a.Event("firstinvalidsystem"),a(i).triggerHandler(h,{element:f.target,form:f.target.form,isInvalidUIPrevented:f.isDefaultPrevented}),n.trigger(c);c&&c.isDefaultPrevented()&&f.preventDefault();b.push(f.target);f.extraData="fix";clearTimeout(d);d=setTimeout(function(){var o={type:"lastinvalid",cancelable:!1,invalidlist:a(b)};c=!1;b=[];a(f.target).trigger(o,o)},9);h=n=null}})})();f.replaceValidationUI&&b.ready("DOM",function(){a(i).bind("firstinvalid",function(c){c.isInvalidUIPrevented()||
(c.preventDefault(),a.webshims.validityAlert.showFor(c.target,a(c.target).prop("customValidationMessage")))})})});
jQuery.webshims.register("form-message",function(a,b,k,i,r,f){var d=b.validityMessages,k=f.overrideMessages||f.customMessages?["customValidationMessage"]:[];d.en=d.en||d["en-US"]||{typeMismatch:{email:"Please enter an email address.",url:"Please enter a URL.",number:"Please enter a number.",date:"Please enter a date.",time:"Please enter a time.",range:"Invalid input.","datetime-local":"Please enter a datetime."},rangeUnderflow:{defaultMessage:"Value must be greater than or equal to {%min}."},rangeOverflow:{defaultMessage:"Value must be less than or equal to {%max}."},
stepMismatch:"Invalid input.",tooLong:"Please enter at most {%maxlength} character(s). You entered {%valueLen}.",patternMismatch:"Invalid input. {%title}",valueMissing:{defaultMessage:"Please fill out this field.",checkbox:"Please check this box if you want to proceed."}};["select","radio"].forEach(function(a){d.en.valueMissing[a]="Please select an option."});["date","time","datetime-local"].forEach(function(a){d.en.rangeUnderflow[a]="Value must be at or after {%min}."});["date","time","datetime-local"].forEach(function(a){d.en.rangeOverflow[a]=
"Value must be at or before {%max}."});d["en-US"]=d["en-US"]||d.en;d[""]=d[""]||d["en-US"];d.de=d.de||{typeMismatch:{email:"{%value} ist keine zul\u00e4ssige E-Mail-Adresse",url:"{%value} ist keine zul\u00e4ssige Webadresse",number:"{%value} ist keine Nummer!",date:"{%value} ist kein Datum",time:"{%value} ist keine Uhrzeit",range:"{%value} ist keine Nummer!","datetime-local":"{%value} ist kein Datum-Uhrzeit Format."},rangeUnderflow:{defaultMessage:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen k\u00f6nnen."},
rangeOverflow:{defaultMessage:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen k\u00f6nnen."},stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zul\u00e4ssig. Hier sind nur bestimmte Werte zul\u00e4ssig. {%title}",tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Zeichen eingegeben, dabei sind {%maxlength} das Maximum.",patternMismatch:"{%value} hat f\u00fcr dieses Eingabefeld ein falsches Format! {%title}",valueMissing:{defaultMessage:"Bitte geben Sie einen Wert ein",
checkbox:"Bitte aktivieren Sie das K\u00e4stchen"}};["select","radio"].forEach(function(a){d.de.valueMissing[a]="Bitte w\u00e4hlen Sie eine Option aus"});["date","time","datetime-local"].forEach(function(a){d.de.rangeUnderflow[a]="{%value} ist zu fr\u00fch. {%min} ist die fr\u00fcheste Zeit, die Sie benutzen k\u00f6nnen."});["date","time","datetime-local"].forEach(function(a){d.de.rangeOverflow[a]="{%value} ist zu sp\u00e4t. {%max} ist die sp\u00e4teste Zeit, die Sie benutzen k\u00f6nnen."});var j=
d[""];b.createValidationMessage=function(b,d){var f=j[d];f&&"string"!==typeof f&&(f=f[a.prop(b,"type")]||f[(b.nodeName||"").toLowerCase()]||f.defaultMessage);f&&"value,min,max,title,maxlength,label".split(",").forEach(function(d){if(-1!==f.indexOf("{%"+d)){var h=("label"==d?a.trim(a('label[for="'+b.id+'"]',b.form).text()).replace(/\*$|:$/,""):a.attr(b,d))||"";f=f.replace("{%"+d+"}",h);"value"==d&&(f=f.replace("{%valueLen}",h.length))}});return f||""};(b.bugs.validationMessage||!Modernizr.formvalidation||
b.bugs.bustedValidity)&&k.push("validationMessage");b.activeLang({langObj:d,module:"form-core",callback:function(a){j=a}});Modernizr.input.list&&!(a("<datalist><select><option></option></select></datalist>").prop("options")||[]).length&&b.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var b=this.options||[];if(!b.length){var d=a("select",this);if(d[0]&&d[0].options&&d[0].options.length)b=d[0].options}return b}}});k.forEach(function(d){b.defineNodeNamesProperty(["fieldset",
"output","button"],d,{prop:{value:"",writeable:!1}});["input","select","textarea"].forEach(function(f){var j=b.defineNodeNameProperty(f,d,{prop:{get:function(){var d=this,f="";if(!a.prop(d,"willValidate"))return f;var i=a.prop(d,"validity")||{valid:1};if(i.valid||(f=b.getContentValidationMessage(d,i)))return f;if(i.customError&&d.nodeName&&(f=Modernizr.formvalidation&&!b.bugs.bustedValidity&&j.prop._supget?j.prop._supget.call(d):b.data(d,"customvalidationMessage")))return f;a.each(i,function(a,c){if("valid"!=
a&&c&&(f=b.createValidationMessage(d,a)))return!1});return f||""},writeable:!1}})})})});
(!Modernizr.formvalidation||jQuery.webshims.bugs.bustedValidity)&&jQuery.webshims.register("form-extend",function(a,b,k,i){b.inputTypes=b.inputTypes||{};var r=b.cfg.forms,f,d=b.inputTypes,j={radio:1,checkbox:1};b.addInputType=function(a,b){d[a]=b};var n={customError:!1,typeMismatch:!1,rangeUnderflow:!1,rangeOverflow:!1,stepMismatch:!1,tooLong:!1,patternMismatch:!1,valueMissing:!1,valid:!0},q={valueMissing:function(c,d,g){if(!c.prop("required"))return!1;var f=!1;if(!("type"in g))g.type=(c[0].getAttribute("type")||
c[0].type||"").toLowerCase();if("select"==g.nodeName){if(d=!d)if(!(d=0>c[0].selectedIndex))c=c[0],d="select-one"==c.type&&2>c.size?!!a("> option:first-child",c).prop("selected"):!1;c=d}else c=j[g.type]?"checkbox"==g.type?!c.is(":checked"):!b.modules["form-core"].getGroupElements(c).filter(":checked")[0]:!d;return c},tooLong:function(){return!1},typeMismatch:function(a,b,g){if(""===b||"select"==g.nodeName)return!1;var f=!1;if(!("type"in g))g.type=(a[0].getAttribute("type")||a[0].type||"").toLowerCase();
d[g.type]&&d[g.type].mismatch&&(f=d[g.type].mismatch(b,a));return f},patternMismatch:function(a,d,g){if(""===d||"select"==g.nodeName)return!1;a=a.attr("pattern");if(!a)return!1;try{a=RegExp("^(?:"+a+")$")}catch(f){b.error('invalid pattern value: "'+a+'" | '+f),a=!1}return!a?!1:!a.test(d)}};b.addValidityRule=function(a,b){q[a]=b};a.event.special.invalid={add:function(){a.event.special.invalid.setup.call(this.form||this)},setup:function(){var c=this.form||this;if(!a.data(c,"invalidEventShim")&&(a(c).data("invalidEventShim",
!0).bind("submit",a.event.special.invalid.handler),b.moveToFirstEvent(c,"submit"),b.bugs.bustedValidity&&a.nodeName(c,"form"))){var d=c.getAttribute("novalidate");c.setAttribute("novalidate","novalidate");b.data(c,"bustedNoValidate",null==d?null:d)}},teardown:a.noop,handler:function(c){if(!("submit"!=c.type||c.testedValidity||!c.originalEvent||!a.nodeName(c.target,"form")||a.prop(c.target,"noValidate"))){f=!0;c.testedValidity=!0;if(!a(c.target).checkValidity())return c.stopImmediatePropagation(),
f=!1;f=!1}}};a(i).bind("invalid",a.noop);a.event.special.submit=a.event.special.submit||{setup:function(){return!1}};var w=a.event.special.submit.setup;a.extend(a.event.special.submit,{setup:function(){a.nodeName(this,"form")?a(this).bind("invalid",a.noop):a("form",this).bind("invalid",a.noop);return w.apply(this,arguments)}});b.addInputType("email",{mismatch:function(){var a=r.emailReg||/^[a-zA-Z0-9.!#$%&'*+-\/=?\^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;return function(b){return!a.test(b)}}()});
b.addInputType("url",{mismatch:function(){var a=r.urlReg||/^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
return function(b){return!a.test(b)}}()});b.defineNodeNameProperty("input","type",{prop:{get:function(){var a=(this.getAttribute("type")||"").toLowerCase();return b.inputTypes[a]?a:this.type}}});b.defineNodeNamesProperties(["button","fieldset","output"],{checkValidity:{value:function(){return!0}},willValidate:{value:!1},setCustomValidity:{value:a.noop},validity:{writeable:!1,get:function(){return a.extend({},n)}}},"prop");var m=function(c){var d,g=a.prop(c,"validity");if(g)a.data(c,"cachedValidity",
g);else return!0;if(!g.valid){d=a.Event("invalid");var l=a(c).trigger(d);if(f&&!m.unhandledInvalids&&!d.isDefaultPrevented())b.validityAlert.showFor(l),m.unhandledInvalids=!0}a.removeData(c,"cachedValidity");return g.valid};b.defineNodeNameProperty("form","checkValidity",{prop:{value:function(){var c=!0,d=a("input,textarea,select",this).filter(function(){var a=b.data(this,"shadowData");return!a||!a.nativeElement||a.nativeElement===this});m.unhandledInvalids=!1;for(var g=0,f=d.length;g<f;g++)m(d[g])||
(c=!1);return c}}});b.defineNodeNamesProperties(["input","textarea","select"],{checkValidity:{value:function(){m.unhandledInvalids=!1;return m(a(this).getNativeElement()[0])}},setCustomValidity:{value:function(c){a.removeData(this,"cachedValidity");b.data(this,"customvalidationMessage",""+c)}},willValidate:{set:a.noop,get:function(){var c={button:1,reset:1,hidden:1,image:1};return function(){var b=a(this).getNativeElement()[0];return!(b.disabled||b.readOnly||c[b.type]||b.form&&a.prop(b.form,"noValidate"))}}()},
validity:{set:a.noop,get:function(){var c=a(this).getNativeElement(),d=c[0],g=a.data(d,"cachedValidity");if(g)return g;g=a.extend({},n);if(!a.prop(d,"willValidate")||"submit"==d.type)return g;var f=c.val(),h={nodeName:d.nodeName.toLowerCase()};g.customError=!!b.data(d,"customvalidationMessage");if(g.customError)g.valid=!1;a.each(q,function(a,b){if(b(c,f,h))g[a]=!0,g.valid=!1});a(this).getShadowFocusElement().attr("aria-invalid",g.valid?"false":"true");d=c=null;return g}}},"prop");b.defineNodeNamesBooleanProperty(["input",
"textarea","select"],"required",{set:function(c){a(this).getShadowFocusElement().attr("aria-required",!!c+"")},initAttr:!a.browser.msie||7<b.browserVersion});b.reflectProperties(["input"],["pattern"]);if(!("maxLength"in i.createElement("textarea"))){var h=function(){var c,b=0,d=a([]),f=1E9,h=function(){var a=d.prop("value"),c=a.length;c>b&&c>f&&(c=Math.max(b,f),d.prop("value",a.substr(0,c)));b=c},j=function(){clearTimeout(c);d.unbind(".maxlengthconstraint")};return function(i,o){j();if(-1<o)f=o,b=
a.prop(i,"value").length,d=a(i),d.bind("keydown.maxlengthconstraint keypress.maxlengthconstraint paste.maxlengthconstraint cut.maxlengthconstraint",function(){setTimeout(h,0)}),d.bind("keyup.maxlengthconstraint",h),d.bind("blur.maxlengthconstraint",j),c=setInterval(h,200)}}();h.update=function(c,b){c===i.activeElement&&(null==b&&(b=a.prop(c,"maxlength")),h(e.target,b))};a(i).bind("focusin",function(c){var b;"TEXTAREA"==c.target.nodeName&&-1<(b=a.prop(c.target,"maxlength"))&&h(c.target,b)});b.defineNodeNameProperty("textarea",
"maxlength",{attr:{set:function(a){this.setAttribute("maxlength",""+a);h.update(this)},get:function(){var a=this.getAttribute("maxlength");return null==a?void 0:a}},prop:{set:function(a){if("number"==typeof a||a&&a==1*a){if(0>a)throw"INDEX_SIZE_ERR";a=parseInt(a,10);this.setAttribute("maxlength",a);h.update(this,a)}else this.setAttribute("maxlength","0"),h.update(this,0)},get:function(){var a=this.getAttribute("maxlength");return("number"==typeof a||a&&a==1*a)&&0<=a?parseInt(a,10):-1}}});b.defineNodeNameProperty("textarea",
"maxLength",{prop:{set:function(c){a.prop(this,"maxlength",c)},get:function(){return a.prop(this,"maxlength")}}})}var u={submit:1,button:1,image:1},p={};[{name:"enctype",limitedTo:{"application/x-www-form-urlencoded":1,"multipart/form-data":1,"text/plain":1},defaultProp:"application/x-www-form-urlencoded",proptype:"enum"},{name:"method",limitedTo:{get:1,post:1},defaultProp:"get",proptype:"enum"},{name:"action",proptype:"url"},{name:"target"},{name:"novalidate",propName:"noValidate",proptype:"boolean"}].forEach(function(c){var b=
"form"+(c.propName||c.name).replace(/^[a-z]/,function(a){return a.toUpperCase()}),d="form"+c.name,f=c.name,h="click.webshimssubmittermutate"+f,j=function(){if("form"in this&&u[this.type]){var o=a.prop(this,"form");if(o){var t=a.attr(this,d);if(null!=t&&(!c.limitedTo||t.toLowerCase()===a.prop(this,b))){var h=a.attr(o,f);a.attr(o,f,t);setTimeout(function(){if(null!=h)a.attr(o,f,h);else try{a(o).removeAttr(f)}catch(c){o.removeAttribute(f)}},9)}}}};switch(c.proptype){case "url":var k=i.createElement("form");
p[b]={prop:{set:function(c){a.attr(this,d,c)},get:function(){var c=a.attr(this,d);if(null==c)return"";k.setAttribute("action",c);return k.action}}};break;case "boolean":p[b]={prop:{set:function(c){c?a.attr(this,"formnovalidate","formnovalidate"):a(this).removeAttr("formnovalidate")},get:function(){return null!=a.attr(this,"formnovalidate")}}};break;case "enum":p[b]={prop:{set:function(c){a.attr(this,d,c)},get:function(){var b=a.attr(this,d);return!b||(b=b.toLowerCase())&&!c.limitedTo[b]?c.defaultProp:
b}}};break;default:p[b]={prop:{set:function(c){a.attr(this,d,c)},get:function(){var c=a.attr(this,d);return null!=c?c:""}}}}p[d]||(p[d]={});p[d].attr={set:function(c){p[d].attr._supset.call(this,c);a(this).unbind(h).bind(h,j)},get:function(){return p[d].attr._supget.call(this)}};p[d].initAttr=!0;p[d].removeAttr={value:function(){a(this).unbind(h);p[d].removeAttr._supvalue.call(this)}}});b.defineNodeNamesProperties(["input","button"],p);!a.support.getSetAttribute&&null==a("<form novalidate></form>").attr("novalidate")?
b.defineNodeNameProperty("form","novalidate",{attr:{set:function(a){this.setAttribute("novalidate",""+a)},get:function(){var a=this.getAttribute("novalidate");return null==a?void 0:a}}}):b.bugs.bustedValidity&&b.defineNodeNameProperty("form","novalidate",{attr:{set:function(a){b.data(this,"bustedNoValidate",""+a)},get:function(){var a=b.data(this,"bustedNoValidate");return null==a?void 0:a}},removeAttr:{value:function(){b.data(this,"bustedNoValidate",null)}}});b.defineNodeNameProperty("form","noValidate",
{prop:{set:function(c){c?a.attr(this,"novalidate","novalidate"):a(this).removeAttr("novalidate")},get:function(){return null!=a.attr(this,"novalidate")}}});b.addReady(function(c,b){var d;a("form",c).add(b.filter("form")).bind("invalid",a.noop);try{if(c==i&&!("form"in(i.activeElement||{})))(d=a("input[autofocus], select[autofocus], textarea[autofocus]",c).eq(0).getShadowFocusElement()[0])&&d.offsetHeight&&d.offsetWidth&&d.focus()}catch(f){}});(function(){Modernizr.textareaPlaceholder=!!("placeholder"in
a("<textarea />")[0]);if(!Modernizr.input.placeholder||!Modernizr.textareaPlaceholder){var c="over"==b.cfg.forms.placeholderType,d=["textarea"];Modernizr.input.placeholder||d.push("input");var f=function(a){if(a.setSelectionRange)return a.setSelectionRange(0,0),!0;if(a)return a=a.createTextRange(),a.collapse(!0),a.moveEnd("character",0),a.moveStart("character",0),a.select(),!0},h=function(b,d,h,j){!1===h&&(h=a.prop(b,"value"));if(!c&&"password"!=b.type){if(!h&&j&&f(b)){var i;a(b).bind("keydown.placeholderremove keypress.placeholderremove paste.placeholderremove input.placeholderremove",
function(){b.value=a.prop(b,"value");d.box.removeClass("placeholder-visible");clearTimeout(i);a(b).unbind(".placeholderremove")}).bind("mousedown.placeholderremove drag.placeholderremove select.placeholderremove",function(){f(b);clearTimeout(i);i=setTimeout(function(){f(b)},9)}).bind("blur.placeholderremove",function(){clearTimeout(i);a(b).unbind(".placeholderremove")});return}b.value=h}else if(!h&&j){a(b).bind("keydown.placeholderremove keypress.placeholderremove paste.placeholderremove input.placeholderremove",
function(){d.box.removeClass("placeholder-visible");a(b).unbind(".placeholderremove")}).bind("blur.placeholderremove",function(){a(b).unbind(".placeholderremove")});return}d.box.removeClass("placeholder-visible")},j=function(b,d,f,g,j){if(!g&&(g=a.data(b,"placeHolder"),!g))return;a(b).unbind(".placeholderremove");if("focus"==j||!j&&b===i.activeElement)("password"==b.type||c||a(b).hasClass("placeholder-visible"))&&h(b,g,"",!0);else if(!1===d&&(d=a.prop(b,"value")),d)h(b,g,d);else if(!1===f&&(f=a.attr(b,
"placeholder")||""),f&&!d){d=g;!1===f&&(f=a.prop(b,"placeholder"));if(!c&&"password"!=b.type)b.value=f;d.box.addClass("placeholder-visible")}else h(b,g,d)},n=function(b){var b=a(b),c=b.prop("id"),d=!(!b.prop("title")&&!b.attr("aria-labeledby"));!d&&c&&(d=!!a('label[for="'+c+'"]',b[0].form)[0]);d||(c||(c=a.webshims.getID(b)),d=!!a("label #"+c)[0]);return a(d?'<span class="placeholder-text"></span>':'<label for="'+c+'" class="placeholder-text"></label>')},m=function(){var d={text:1,search:1,url:1,email:1,
password:1,tel:1};return{create:function(b){var d=a.data(b,"placeHolder");if(d)return d;d=a.data(b,"placeHolder",{});a(b).bind("focus.placeholder blur.placeholder",function(a){j(this,!1,!1,d,a.type);d.box["focus"==a.type?"addClass":"removeClass"]("placeholder-focused")});b.form&&a(b.form).bind("reset.placeholder",function(a){setTimeout(function(){j(b,!1,!1,d,a.type)},0)});if("password"==b.type||c){d.text=n(b);d.box=a(b).wrap('<span class="placeholder-box placeholder-box-'+(b.nodeName||"").toLowerCase()+
'" />').parent();d.text.insertAfter(b).bind("mousedown.placeholder",function(){j(this,!1,!1,d,"focus");try{setTimeout(function(){b.focus()},0)}catch(a){}return!1});a.each(["Left","Top"],function(c,f){var g=(parseInt(a.curCSS(b,"padding"+f),10)||0)+Math.max(parseInt(a.curCSS(b,"margin"+f),10)||0,0)+(parseInt(a.curCSS(b,"border"+f+"Width"),10)||0);d.text.css("padding"+f,g)});a.curCSS(b,"lineHeight");var f={width:a(b).width(),height:a(b).height()},g=a.curCSS(b,"float");a.each(["lineHeight","fontSize",
"fontFamily","fontWeight"],function(c,f){var g=a.curCSS(b,f);d.text.css(f)!=g&&d.text.css(f,g)});f.width&&f.height&&d.text.css(f);"none"!==g&&d.box.addClass("placeholder-box-"+g)}else f=function(c){a(b).hasClass("placeholder-visible")&&(h(b,d,""),c&&"submit"==c.type&&setTimeout(function(){c.isDefaultPrevented()&&j(b,!1,!1,d)},9))},a(k).bind("beforeunload",f),d.box=a(b),b.form&&a(b.form).submit(f);return d},update:function(c,f){if(!d[a.prop(c,"type")]&&!a.nodeName(c,"textarea"))b.warn("placeholder not allowed on type: "+
a.prop(c,"type"));else{var g=m.create(c);g.text&&g.text.text(f);j(c,!1,f,g)}}}}();a.webshims.publicMethods={pHolder:m};d.forEach(function(a){b.defineNodeNameProperty(a,"placeholder",{attr:{set:function(a){b.contentAttr(this,"placeholder",a);m.update(this,a)},get:function(){return b.contentAttr(this,"placeholder")}},reflect:!0,initAttr:!0})});d.forEach(function(c){var d={},f;["attr","prop"].forEach(function(c){d[c]={set:function(d){var g=b.contentAttr(this,"placeholder");a.removeData(this,"cachedValidity");
var h=f[c]._supset.call(this,d);g&&"value"in this&&j(this,d,g);return h},get:function(){return a(this).hasClass("placeholder-visible")?"":f[c]._supget.call(this)}}});f=b.defineNodeNameProperty(c,"value",d)})}})()});
jQuery.webshims.ready("dom-support",function(a,b,k,i){(function(){if(!("value"in i.createElement("output"))){b.defineNodeNameProperty("output","value",{prop:{set:function(b){var d=a.data(this,"outputShim");d||(d=k(this));d(b)},get:function(){return b.contentAttr(this,"value")||a(this).text()||""}}});b.onNodeNamesPropertyModify("input","value",function(b,d,j){"removeAttr"!=j&&(d=a.data(this,"outputShim"))&&d(b)});var k=function(f){if(!f.getAttribute("aria-live")){var f=a(f),d=(f.text()||"").trim(),
j=f.attr("id"),k=f.attr("for"),q=a('<input class="output-shim" type="text" disabled name="'+(f.attr("name")||"")+'" value="'+d+'" style="display: none !important;" />').insertAfter(f),r=q[0].form||i,m=function(a){q[0].value=a;a=q[0].value;f.text(a);b.contentAttr(f[0],"value",a)};f[0].defaultValue=d;b.contentAttr(f[0],"value",d);f.attr({"aria-live":"polite"});j&&(q.attr("id",j),f.attr("aria-labeldby",b.getID(a('label[for="'+j+'"]',r))));k&&(j=b.getID(f),k.split(" ").forEach(function(a){(a=i.getElementById(a))&&
a.setAttribute("aria-controls",j)}));f.data("outputShim",m);q.data("outputShim",m);return m}};b.addReady(function(b,d){a("output",b).add(d.filter("output")).each(function(){k(this)})})}})();(function(){var k={updateInput:1,input:1},f={radio:1,checkbox:1,submit:1,button:1,image:1,reset:1,file:1,color:1},d=function(a){var d,f=a.prop("value"),i=function(d){if(a){var c=a.prop("value");c!==f&&(f=c,(!d||!k[d.type])&&b.triggerInlineForm&&b.triggerInlineForm(a[0],"input"))}},m,h=function(){clearTimeout(m);
m=setTimeout(i,9)},u=function(){a.unbind("focusout",u).unbind("keyup keypress keydown paste cut",h).unbind("input change updateInput",i);clearInterval(d);setTimeout(function(){i();a=null},1)};clearInterval(d);d=setInterval(i,99);h();a.bind("keyup keypress keydown paste cut",h).bind("focusout",u).bind("input updateInput change",i)};if(a.event.customEvent)a.event.customEvent.updateInput=!0;a(i).bind("focusin",function(b){b.target&&b.target.type&&!b.target.readOnly&&!b.target.disabled&&"input"==(b.target.nodeName||
"").toLowerCase()&&!f[b.target.type]&&d(a(b.target))})})();b.isReady("form-output",!0)});
