"use strict";(self.webpackChunkfeatured_component=self.webpackChunkfeatured_component||[]).push([[22],{22:function(e,t,n){n.r(t),n.d(t,{createSwipeBackGesture:function(){return a}});var r=n(811),u=n(507),i=n(909),a=function(e,t,n,a,o){var c=e.ownerDocument.defaultView,f=(0,u.i)(e),s=function(e){return f?-e.deltaX:e.deltaX};return(0,i.createGesture)({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(e){return function(e){var t=e.startX;return f?t>=c.innerWidth-50:t<=50}(e)&&t()},onStart:n,onMove:function(e){var t=s(e)/c.innerWidth;a(t)},onEnd:function(e){var t=s(e),n=c.innerWidth,u=t/n,i=function(e){return f?-e.velocityX:e.velocityX}(e),a=i>=0&&(i>.2||t>n/2),d=(a?1-u:u)*n,h=0;if(d>5){var l=d/Math.abs(i);h=Math.min(l,540)}o(a,u<=0?.01:(0,r.h)(0,u,.9999),h)}})}}}]);
//# sourceMappingURL=22.8428527e.chunk.js.map