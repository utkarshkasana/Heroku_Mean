!function(e,n){"use strict";function o(e,o,t){function i(e,t,i){var s,u;i=i||{},u=i.expires,s=n.isDefined(i.path)?i.path:r,n.isUndefined(t)&&(u="Thu, 01 Jan 1970 00:00:00 GMT",t=""),n.isString(u)&&(u=new Date(u));var c=encodeURIComponent(e)+"="+encodeURIComponent(t);c+=s?";path="+s:"",c+=i.domain?";domain="+i.domain:"",c+=u?";expires="+u.toUTCString():"",c+=i.secure?";secure":"",c+=i.samesite?";samesite="+i.samesite:"";var a=c.length+1;return a>4096&&o.warn("Cookie '"+e+"' possibly not set or overflowed because it was too large ("+a+" > 4096 bytes)!"),c}var r=t.baseHref(),s=e[0];return function(e,n,o){s.cookie=i(e,n,o)}}n.module("ngCookies",["ng"]).info({angularVersion:"1.7.4"}).provider("$cookies",[function(){function e(e){return e?n.extend({},o,e):o}var o=this.defaults={};this.$get=["$$cookieReader","$$cookieWriter",function(o,t){return{get:function(e){return o()[e]},getObject:function(e){var o=this.get(e);return o?n.fromJson(o):o},getAll:function(){return o()},put:function(n,o,i){t(n,o,e(i))},putObject:function(e,o,t){this.put(e,n.toJson(o),t)},remove:function(n,o){t(n,void 0,e(o))}}}]}]),o.$inject=["$document","$log","$browser"],n.module("ngCookies").provider("$$cookieWriter",function(){this.$get=o})}(window,window.angular);