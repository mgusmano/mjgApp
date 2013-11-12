(function(b){b.fn.swipe=function(M){if(!this){return false}var E={fingers:1,threshold:75,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,click:null,triggerOnTouchEnd:true,allowPageScroll:"auto"};var C="left";var D="right";var L="up";var w="down";var F="none";var a="horizontal";var y="vertical";var A="auto";var J="start";var G="move";var H="end";var B="cancel";var v="ontouchstart" in window,N=v?"touchstart":"mousedown",z=v?"touchmove":"mousemove",I=v?"touchend":"mouseup",x="touchcancel";var K="start";if(M.allowPageScroll==undefined&&(M.swipe!=undefined||M.swipeStatus!=undefined)){M.allowPageScroll=F}if(M){b.extend(E,M)}return this.each(function(){var r=this;var s=b(this);var g=null;var l=0;var t={x:0,y:0};var k={x:0,y:0};var c={x:0,y:0};var q=0;function m(Q){var R=v?Q.touches[0]:Q;K=J;if(v){l=Q.touches.length}distance=0;direction=null;if(l==E.fingers||!v){t.x=k.x=R.pageX;t.y=k.y=R.pageY;q=k.x;if(E.swipeStatus){f(Q,K,t,k)}}else{u(Q)}r.addEventListener(z,e,false);r.addEventListener(I,i,false)}function e(Q){if(K==H||K==B){return}var R=v?Q.touches[0]:Q;k.x=R.pageX;k.y=R.pageY;direction=h();q=k.x;if(v){l=Q.touches.length}K=G;j(Q,direction);if(l==E.fingers||!v){distance=p();if(E.swipeStatus){f(Q,K,t,k,direction,distance)}if(!E.triggerOnTouchEnd){if(distance>=E.threshold){K=H;f(Q,K,t,k);u(Q)}}}else{K=B;f(Q,K,t,k);u(Q)}}function i(P){P.preventDefault();distance=p();if(E.triggerOnTouchEnd){K=H;if((l==E.fingers||!v)&&k.x!=0){if(distance>=E.threshold){f(P,K,t,k);u(P)}else{K=B;f(P,K,t,k);u(P)}}else{K=B;f(P,K,t,k);u(P)}}else{if(K==G){K=B;f(P,K,t,k);u(P)}}r.removeEventListener(z,e,false);r.removeEventListener(I,i,false)}function u(P){l=0;t.x=0;t.y=0;k.x=0;k.y=0;c.x=0;c.y=0}function f(T,U,S,V){if(E.swipeStatus){E.swipeStatus.call(s,T,U,S,V,direction||null,distance||0)}if(U==B){if(E.click&&(l==1||!v)&&(isNaN(distance)||distance==0)){E.click.call(s,T,T.target)}}if(U==H){if(E.swipe){E.swipe.call(s,T,direction,distance)}switch(direction){case C:if(E.swipeLeft){E.swipeLeft.call(s,T,direction,distance)}break;case D:if(E.swipeRight){E.swipeRight.call(s,T,direction,distance)}break;case L:if(E.swipeUp){E.swipeUp.call(s,T,direction,distance)}break;case w:if(E.swipeDown){E.swipeDown.call(s,T,direction,distance)}break}}}function j(T,S){if(E.allowPageScroll==F){T.preventDefault()}else{var R=E.allowPageScroll==A;switch(S){case C:if((E.swipeLeft&&R)||(!R&&E.allowPageScroll!=a)){T.preventDefault()}break;case D:if((E.swipeRight&&R)||(!R&&E.allowPageScroll!=a)){T.preventDefault()}break;case L:if((E.swipeUp&&R)||(!R&&E.allowPageScroll!=y)){T.preventDefault()}break;case w:if((E.swipeDown&&R)||(!R&&E.allowPageScroll!=y)){T.preventDefault()}break}}}function p(){return Math.round(Math.abs(k.x-t.x))}function n(){var S=t.x-k.x;var T=k.y-t.y;var V=Math.atan2(T,S);var U=Math.round(V*180/Math.PI);if(U<0){U=360-Math.abs(U)}return U}function o(){var P=n();if((P<=45)&&(P>=0)){return C}else{if((P<=360)&&(P>=315)){return C}else{if((P>=135)&&(P<=225)){return D}else{if((P>45)&&(P<135)){return w}else{return L}}}}}function h(){var P;if(k.x<q){P=C}else{if(k.x>q){P=D}else{P=L}}return P}try{this.addEventListener(N,m,false);this.addEventListener(x,u)}catch(d){}})}})(jQuery);