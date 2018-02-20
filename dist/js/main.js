"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"undefined"!=typeof module&&module.exports?module.exports=e(require("jquery")):e(jQuery)}(function(e){function t(t){return!t.nodeName||-1!==e.inArray(t.nodeName.toLowerCase(),["iframe","#document","html","body"])}function o(t){return e.isFunction(t)||e.isPlainObject(t)?t:{top:t,left:t}}var n=e.scrollTo=function(t,o,n){return e(window).scrollTo(t,o,n)};return n.defaults={axis:"xy",duration:0,limit:!0},e.fn.scrollTo=function(i,r,c){"object"===(void 0===r?"undefined":_typeof(r))&&(c=r,r=0),"function"==typeof c&&(c={onAfter:c}),"max"===i&&(i=9e9),c=e.extend({},n.defaults,c),r=r||c.duration;var s=c.queue&&1<c.axis.length;return s&&(r/=2),c.offset=o(c.offset),c.over=o(c.over),this.each(function(){function u(t){var o=e.extend({},c,{queue:!0,duration:r,complete:t&&function(){t.call(a,m,c)}});d.animate(p,o)}if(null!==i){var f,l=t(this),a=l?this.contentWindow||window:this,d=e(a),m=i,p={};switch(void 0===m?"undefined":_typeof(m)){case"number":case"string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(m)){m=o(m);break}m=l?e(m):e(m,a);case"object":if(0===m.length)return;(m.is||m.style)&&(f=(m=e(m)).offset())}var h=e.isFunction(c.offset)&&c.offset(a,m)||c.offset;e.each(c.axis.split(""),function(e,t){var o="x"===t?"Left":"Top",i=o.toLowerCase(),r="scroll"+o,y=d[r](),g=n.max(a,t);f?(p[r]=f[i]+(l?0:y-d.offset()[i]),c.margin&&(p[r]-=parseInt(m.css("margin"+o),10)||0,p[r]-=parseInt(m.css("border"+o+"Width"),10)||0),p[r]+=h[i]||0,c.over[i]&&(p[r]+=m["x"===t?"width":"height"]()*c.over[i])):(o=m[i],p[r]=o.slice&&"%"===o.slice(-1)?parseFloat(o)/100*g:o),c.limit&&/^\d+$/.test(p[r])&&(p[r]=0>=p[r]?0:Math.min(p[r],g)),!e&&1<c.axis.length&&(y===p[r]?p={}:s&&(u(c.onAfterFirst),p={}))}),u(c.onAfter)}})},n.max=function(o,n){var i="scroll"+(r="x"===n?"Width":"Height");if(!t(o))return o[i]-e(o)[r.toLowerCase()]();var r="client"+r,c=(s=o.ownerDocument||o.document).documentElement,s=s.body;return Math.max(c[i],s[i])-Math.min(c[r],s[r])},e.Tween.propHooks.scrollLeft=e.Tween.propHooks.scrollTop={get:function(t){return e(t.elem)[t.prop]()},set:function(t){var o=this.get(t);if(t.options.interrupt&&t._last&&t._last!==o)return e(t.elem).stop();var n=Math.round(t.now);o!==n&&(e(t.elem)[t.prop](n),t._last=this.get(t))}},n}),$(document).on("DOMContentLoaded",function(){$(".burger").click(function(){$(".menu").toggleClass("show-menu")}),$(".burger").click(function(){$(".burger__item").toggleClass("cross"),$(".menu__item").each(function(e){$(this).delay(300*e).fadeIn().animate({opacity:"1",marginLeft:"0"})})}),$(".description__btn").click(function(){$(this).parent().find(".description__read-more").slideToggle(500),$(this).text(function(e,t){return"Read More"===t?"Read Less":"Read More"})}),jQuery(function(e){e(".menu__item").click(function(){e(".menu").toggleClass("show-menu"),e(".burger__item").toggleClass("cross")}),e("#homeLink").click(function(){e.scrollTo(e("#banner"),500)}),e("#aboutLink").click(function(){e.scrollTo(e("#about"),700)}),e("#projectsLink").click(function(){e.scrollTo(e("#projects"),1e3)}),e("#contactLink").click(function(){e.scrollTo(e("#contact"),1200)})})});