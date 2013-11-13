window.JSON||(window.JSON={}),function(){function f(a){return a<10?"0"+a:a}function quote(a){return escapable.lastIndex=0,escapable.test(a)?'"'+a.replace(escapable,function(a){var b=meta[a];return typeof b=="string"?b:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function str(a,b){var c,d,e,f,g=gap,h,i=b[a];i&&typeof i=="object"&&typeof i.toJSON=="function"&&(i=i.toJSON(a)),typeof rep=="function"&&(i=rep.call(b,a,i));switch(typeof i){case"string":return quote(i);case"number":return isFinite(i)?String(i):"null";case"boolean":case"null":return String(i);case"object":if(!i){return"null"}gap+=indent,h=[];if(Object.prototype.toString.apply(i)==="[object Array]"){f=i.length;for(c=0;c<f;c+=1){h[c]=str(c,i)||"null"}return e=h.length===0?"[]":gap?"[\n"+gap+h.join(",\n"+gap)+"\n"+g+"]":"["+h.join(",")+"]",gap=g,e}if(rep&&typeof rep=="object"){f=rep.length;for(c=0;c<f;c+=1){d=rep[c],typeof d=="string"&&(e=str(d,i),e&&h.push(quote(d)+(gap?": ":":")+e))}}else{for(d in i){Object.hasOwnProperty.call(i,d)&&(e=str(d,i),e&&h.push(quote(d)+(gap?": ":":")+e))}}return e=h.length===0?"{}":gap?"{\n"+gap+h.join(",\n"+gap)+"\n"+g+"}":"{"+h.join(",")+"}",gap=g,e}}"use strict",typeof Date.prototype.toJSON!="function"&&(Date.prototype.toJSON=function(a){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(a){return this.valueOf()});var JSON=window.JSON,cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;typeof JSON.stringify!="function"&&(JSON.stringify=function(a,b,c){var d;gap="",indent="";if(typeof c=="number"){for(d=0;d<c;d+=1){indent+=" "}}else{typeof c=="string"&&(indent=c)}rep=b;if(!b||typeof b=="function"||typeof b=="object"&&typeof b.length=="number"){return str("",{"":a})}throw new Error("JSON.stringify")}),typeof JSON.parse!="function"&&(JSON.parse=function(text,reviver){function walk(a,b){var c,d,e=a[b];if(e&&typeof e=="object"){for(c in e){Object.hasOwnProperty.call(e,c)&&(d=walk(e,c),d!==undefined?e[c]=d:delete e[c])}}return reviver.call(a,b,e)}var j;text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){return j=eval("("+text+")"),typeof reviver=="function"?walk({"":j},""):j}throw new SyntaxError("JSON.parse")})}(),function(c,d){var a=c.History=c.History||{},b=c.jQuery;if(typeof a.Adapter!="undefined"){throw new Error("History.js Adapter has already been loaded...")}a.Adapter={bind:function(f,g,e){b(f).bind(g,e)},trigger:function(f,g,e){b(f).trigger(g,e)},extractEventData:function(e,f,g){var h=f&&f.originalEvent&&f.originalEvent[e]||g&&g[e]||d;return h},onDomLoad:function(e){b(e)}},typeof a.init!="undefined"&&a.init()}(window),function(e,f){var g=e.document,a=e.setTimeout||a,b=e.clearTimeout||b,c=e.setInterval||c,d=e.History=e.History||{};if(typeof d.initHtml4!="undefined"){throw new Error("History.js HTML4 Support has already been loaded...")}d.initHtml4=function(){if(typeof d.initHtml4.initialized!="undefined"){return !1}d.initHtml4.initialized=!0,d.enabled=!0,d.savedHashes=[],d.isLastHash=function(i){var j=d.getHashByIndex(),h;return h=i===j,h},d.saveHash=function(h){return d.isLastHash(h)?!1:(d.savedHashes.push(h),!0)},d.getHashByIndex=function(h){var i=null;return typeof h=="undefined"?i=d.savedHashes[d.savedHashes.length-1]:h<0?i=d.savedHashes[d.savedHashes.length+h]:i=d.savedHashes[h],i},d.discardedHashes={},d.discardedStates={},d.discardState=function(h,j,i){var k=d.getHashByState(h),l;return l={discardedState:h,backState:i,forwardState:j},d.discardedStates[k]=l,!0},d.discardHash=function(i,j,k){var h={discardedHash:i,backState:k,forwardState:j};return d.discardedHashes[i]=h,!0},d.discardedState=function(i){var j=d.getHashByState(i),h;return h=d.discardedStates[j]||!1,h},d.discardedHash=function(h){var i=d.discardedHashes[h]||!1;return i},d.recycleState=function(h){var i=d.getHashByState(h);return d.discardedState(h)&&delete d.discardedStates[i],!0},d.emulated.hashChange&&(d.hashChangeInit=function(){d.checkerFunction=null;var h="",k,i,j,l;return d.isInternetExplorer()?(k="historyjs-iframe",i=g.createElement("iframe"),i.setAttribute("id",k),i.style.display="none",g.body.appendChild(i),i.contentWindow.document.open(),i.contentWindow.document.close(),j="",l=!1,d.checkerFunction=function(){if(l){return !1}l=!0;var n=d.getHash()||"",m=d.unescapeHash(i.contentWindow.document.location.hash)||"";return n!==h?(h=n,m!==n&&(j=m=n,i.contentWindow.document.open(),i.contentWindow.document.close(),i.contentWindow.document.location.hash=d.escapeHash(n)),d.Adapter.trigger(e,"hashchange")):m!==j&&(j=m,d.setHash(m,!1)),l=!1,!0}):d.checkerFunction=function(){var m=d.getHash();return m!==h&&(h=m,d.Adapter.trigger(e,"hashchange")),!0},d.intervalList.push(c(d.checkerFunction,d.options.hashChangeInterval)),!0},d.Adapter.onDomLoad(d.hashChangeInit)),d.emulated.pushState&&(d.onHashChange=function(h){var j=h&&h.newURL||g.location.href,k=d.getHashByUrl(j),l=null,m=null,i=null,n;return d.isLastHash(k)?(d.busy(!1),!1):(d.doubleCheckComplete(),d.saveHash(k),k&&d.isTraditionalAnchor(k)?(d.Adapter.trigger(e,"anchorchange"),d.busy(!1),!1):(l=d.extractState(d.getFullUrl(k||g.location.href,!1),!0),d.isLastSavedState(l)?(d.busy(!1),!1):(m=d.getHashByState(l),n=d.discardedState(l),n?(d.getHashByIndex(-2)===d.getHashByState(n.forwardState)?d.back(!1):d.forward(!1),!1):(d.pushState(l.data,l.title,l.url,!1),!0))))},d.Adapter.bind(e,"hashchange",d.onHashChange),d.pushState=function(u,v,h,i){if(d.getHashByUrl(h)){throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).")}if(i!==!1&&d.busy()){return d.pushQueue({scope:d,callback:d.pushState,args:arguments,queue:i}),!1}d.busy(!0);var j=d.createStateObject(u,v,h),k=d.getHashByState(j),l=d.getState(!1),m=d.getHashByState(l),n=d.getHash();return d.storeState(j),d.expectedStateId=j.id,d.recycleState(j),d.setTitle(j),k===m?(d.busy(!1),!1):k!==n&&k!==d.getShortUrl(g.location.href)?(d.setHash(k,!1),!1):(d.saveState(j),d.Adapter.trigger(e,"statechange"),d.busy(!1),!0)},d.replaceState=function(n,k,h,i){if(d.getHashByUrl(h)){throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).")}if(i!==!1&&d.busy()){return d.pushQueue({scope:d,callback:d.replaceState,args:arguments,queue:i}),!1}d.busy(!0);var j=d.createStateObject(n,k,h),l=d.getState(!1),m=d.getStateByIndex(-2);return d.discardState(l,j,m),d.pushState(j.data,j.title,j.url,!1),!0}),d.emulated.pushState&&d.getHash()&&!d.emulated.hashChange&&d.Adapter.onDomLoad(function(){d.Adapter.trigger(e,"hashchange")})},typeof d.init!="undefined"&&d.init()}(window),function(d,f){var g=d.console||f,h=d.document,i=d.navigator,j=d.sessionStorage||!1,k=d.setTimeout,l=d.clearTimeout,m=d.setInterval,n=d.clearInterval,a=d.JSON,b=d.alert,c=d.History=d.History||{},e=d.history;a.stringify=a.stringify||a.encode,a.parse=a.parse||a.decode;if(typeof c.init!="undefined"){throw new Error("History.js Core has already been loaded...")}c.init=function(){return typeof c.Adapter=="undefined"?!1:(typeof c.initCore!="undefined"&&c.initCore(),typeof c.initHtml4!="undefined"&&c.initHtml4(),!0)},c.initCore=function(){if(typeof c.initCore.initialized!="undefined"){return !1}c.initCore.initialized=!0,c.options=c.options||{},c.options.hashChangeInterval=c.options.hashChangeInterval||100,c.options.safariPollInterval=c.options.safariPollInterval||500,c.options.doubleCheckInterval=c.options.doubleCheckInterval||500,c.options.storeInterval=c.options.storeInterval||1000,c.options.busyDelay=c.options.busyDelay||250,c.options.debug=c.options.debug||!1,c.options.initialTitle=c.options.initialTitle||h.title,c.intervalList=[],c.clearAllIntervals=function(){var q,r=c.intervalList;if(typeof r!="undefined"&&r!==null){for(q=0;q<r.length;q++){n(r[q])}c.intervalList=null}},c.debug=function(){(c.options.debug||!1)&&c.log.apply(c,arguments)},c.log=function(){var v=typeof g!="undefined"&&typeof g.log!="undefined"&&typeof g.log.apply!="undefined",x=h.getElementById("log"),t,u,w,q,r;v?(q=Array.prototype.slice.call(arguments),t=q.shift(),typeof g.debug!="undefined"?g.debug.apply(g,[t,q]):g.log.apply(g,[t,q])):t="\n"+arguments[0]+"\n";for(u=1,w=arguments.length;u<w;++u){r=arguments[u];if(typeof r=="object"&&typeof a!="undefined"){try{r=a.stringify(r)}catch(s){}}t+="\n"+r+"\n"}return x?(x.value+=t+"\n-----\n",x.scrollTop=x.scrollHeight-x.clientHeight):v||b(t),!0},c.getInternetExplorerMajorVersion=function(){var q=c.getInternetExplorerMajorVersion.cached=typeof c.getInternetExplorerMajorVersion.cached!="undefined"?c.getInternetExplorerMajorVersion.cached:function(){var s=3,t=h.createElement("div"),r=t.getElementsByTagName("i");while((t.innerHTML="<!--[if gt IE "+ ++s+"]><i></i><![endif]-->")&&r[0]){}return s>4?s:!1}();return q},c.isInternetExplorer=function(){var q=c.isInternetExplorer.cached=typeof c.isInternetExplorer.cached!="undefined"?c.isInternetExplorer.cached:Boolean(c.getInternetExplorerMajorVersion());return q},c.emulated={pushState:!Boolean(d.history&&d.history.pushState&&d.history.replaceState&&!/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(i.userAgent)&&!/AppleWebKit\/5([0-2]|3[0-2])/i.test(i.userAgent)),hashChange:Boolean(!("onhashchange" in d||"onhashchange" in h)||c.isInternetExplorer()&&c.getInternetExplorerMajorVersion()<8)},c.enabled=!c.emulated.pushState,c.bugs={setHash:Boolean(!c.emulated.pushState&&i.vendor==="Apple Computer, Inc."&&/AppleWebKit\/5([0-2]|3[0-3])/.test(i.userAgent)),safariPoll:Boolean(!c.emulated.pushState&&i.vendor==="Apple Computer, Inc."&&/AppleWebKit\/5([0-2]|3[0-3])/.test(i.userAgent)),ieDoubleCheck:Boolean(c.isInternetExplorer()&&c.getInternetExplorerMajorVersion()<8),hashEscape:Boolean(c.isInternetExplorer()&&c.getInternetExplorerMajorVersion()<7)},c.isEmptyObject=function(q){for(var r in q){return !1}return !0},c.cloneObject=function(r){var s,q;return r?(s=a.stringify(r),q=a.parse(s)):q={},q},c.getRootUrl=function(){var q=h.location.protocol+"//"+(h.location.hostname||h.location.host);if(h.location.port||!1){q+=":"+h.location.port}return q+="/",q},c.getBaseHref=function(){var r=h.getElementsByTagName("base"),s=null,q="";return r.length===1&&(s=r[0],q=s.href.replace(/[^\/]+$/,"")),q=q.replace(/\/+$/,""),q&&(q+="/"),q},c.getBaseUrl=function(){var q=c.getBaseHref()||c.getBasePageUrl()||c.getRootUrl();return q},c.getPageUrl=function(){var r=c.getState(!1,!1),s=(r||{}).url||h.location.href,q;return q=s.replace(/\/+$/,"").replace(/[^\/]+$/,function(u,v,t){return/\./.test(u)?u:u+"/"}),q},c.getBasePageUrl=function(){var q=h.location.href.replace(/[#\?].*/,"").replace(/[^\/]+$/,function(s,t,r){return/[^\/]$/.test(s)?"":s}).replace(/\/+$/,"")+"/";return q},c.getFullUrl=function(s,t){var q=s,r=s.substring(0,1);return t=typeof t=="undefined"?!0:t,/[a-z]+\:\/\//.test(s)||(r==="/"?q=c.getRootUrl()+s.replace(/^\/+/,""):r==="#"?q=c.getPageUrl().replace(/#.*/,"")+s:r==="?"?q=c.getPageUrl().replace(/[\?#].*/,"")+s:t?q=c.getBaseUrl()+s.replace(/^(\.\/)+/,""):q=c.getBasePageUrl()+s.replace(/^(\.\/)+/,"")),q.replace(/\#$/,"")},c.getShortUrl=function(s){var t=s,q=c.getBaseUrl(),r=c.getRootUrl();return c.emulated.pushState&&(t=t.replace(q,"")),t=t.replace(r,"/"),c.isTraditionalAnchor(t)&&(t="./"+t),t=t.replace(/^(\.\/)+/g,"./").replace(/\#$/,""),t},c.store={},c.idToState=c.idToState||{},c.stateToId=c.stateToId||{},c.urlToId=c.urlToId||{},c.storedStates=c.storedStates||[],c.savedStates=c.savedStates||[],c.normalizeStore=function(){c.store.idToState=c.store.idToState||{},c.store.urlToId=c.store.urlToId||{},c.store.stateToId=c.store.stateToId||{}},c.getState=function(r,s){typeof r=="undefined"&&(r=!0),typeof s=="undefined"&&(s=!0);var q=c.getLastSavedState();return !q&&s&&(q=c.createStateObject()),r&&(q=c.cloneObject(q),q.url=q.cleanUrl||q.url),q},c.getIdByState=function(r){var s=c.extractId(r.url),q;if(!s){q=c.getStateString(r);if(typeof c.stateToId[q]!="undefined"){s=c.stateToId[q]}else{if(typeof c.store.stateToId[q]!="undefined"){s=c.store.stateToId[q]}else{for(;;){s=(new Date).getTime()+String(Math.random()).replace(/\D/g,"");if(typeof c.idToState[s]=="undefined"&&typeof c.store.idToState[s]=="undefined"){break}}c.stateToId[q]=s,c.idToState[s]=r}}}return s},c.normalizeState=function(r){var s,q;if(!r||typeof r!="object"){r={}}if(typeof r.normalized!="undefined"){return r}if(!r.data||typeof r.data!="object"){r.data={}}s={},s.normalized=!0,s.title=r.title||"",s.url=c.getFullUrl(c.unescapeString(r.url||h.location.href)),s.hash=c.getShortUrl(s.url),s.data=c.cloneObject(r.data),s.id=c.getIdByState(s),s.cleanUrl=s.url.replace(/\??\&_suid.*/,""),s.url=s.cleanUrl,q=!c.isEmptyObject(s.data);if(s.title||q){s.hash=c.getShortUrl(s.url).replace(/\??\&_suid.*/,""),/\?/.test(s.hash)||(s.hash+="?"),s.hash+="&_suid="+s.id}return s.hashedUrl=c.getFullUrl(s.hash),(c.emulated.pushState||c.bugs.safariPoll)&&c.hasUrlDuplicate(s)&&(s.url=s.hashedUrl),s},c.createStateObject=function(s,t,q){var r={data:s,title:t,url:q};return r=c.normalizeState(r),r},c.getStateById=function(r){r=String(r);var q=c.idToState[r]||c.store.idToState[r]||f;return q},c.getStateString=function(s){var t,q,r;return t=c.normalizeState(s),q={data:t.data,title:s.title,url:s.url},r=a.stringify(q),r},c.getStateId=function(r){var s,q;return s=c.normalizeState(r),q=s.id,q},c.getHashByState=function(r){var s,q;return s=c.normalizeState(r),q=s.hash,q},c.extractId=function(s){var t,q,r;return q=/(.*)\&_suid=([0-9]+)$/.exec(s),r=q?q[1]||s:s,t=q?String(q[2]||""):"",t||!1},c.isTraditionalAnchor=function(q){var r=!/[\/\?\.]/.test(q);return r},c.extractState=function(t,u){var q=null,r,s;return u=u||!1,r=c.extractId(t),r&&(q=c.getStateById(r)),q||(s=c.getFullUrl(t),r=c.getIdByUrl(s)||!1,r&&(q=c.getStateById(r)),!q&&u&&!c.isTraditionalAnchor(t)&&(q=c.createStateObject(null,null,s))),q},c.getIdByUrl=function(r){var q=c.urlToId[r]||c.store.urlToId[r]||f;return q},c.getLastSavedState=function(){return c.savedStates[c.savedStates.length-1]||f},c.getLastStoredState=function(){return c.storedStates[c.storedStates.length-1]||f},c.hasUrlDuplicate=function(r){var s=!1,q;return q=c.extractState(r.url),s=q&&q.id!==r.id,s},c.storeState=function(q){return c.urlToId[q.url]=q.id,c.storedStates.push(c.cloneObject(q)),q},c.isLastSavedState=function(t){var u=!1,q,r,s;return c.savedStates.length&&(q=t.id,r=c.getLastSavedState(),s=r.id,u=q===s),u},c.saveState=function(q){return c.isLastSavedState(q)?!1:(c.savedStates.push(c.cloneObject(q)),!0)},c.getStateByIndex=function(q){var r=null;return typeof q=="undefined"?r=c.savedStates[c.savedStates.length-1]:q<0?r=c.savedStates[c.savedStates.length+q]:r=c.savedStates[q],r},c.getHash=function(){var q=c.unescapeHash(h.location.hash);return q},c.unescapeString=function(s){var q=s,r;for(;;){r=d.unescape(q);if(r===q){break}q=r}return q},c.unescapeHash=function(q){var r=c.normalizeHash(q);return r=c.unescapeString(r),r},c.normalizeHash=function(q){var r=q.replace(/[^#]*#/,"").replace(/#.*/,"");return r},c.setHash=function(t,u){var q,r,s;return u!==!1&&c.busy()?(c.pushQueue({scope:c,callback:c.setHash,args:arguments,queue:u}),!1):(q=c.escapeHash(t),c.busy(!0),r=c.extractState(t,!0),r&&!c.emulated.pushState?c.pushState(r.data,r.title,r.url,!1):h.location.hash!==q&&(c.bugs.setHash?(s=c.getPageUrl(),c.pushState(null,null,s+"#"+q,!1)):h.location.hash=q),c)},c.escapeHash=function(r){var q=c.normalizeHash(r);return q=d.escape(q),c.bugs.hashEscape||(q=q.replace(/\%21/g,"!").replace(/\%26/g,"&").replace(/\%3D/g,"=").replace(/\%3F/g,"?")),q},c.getHashByUrl=function(q){var r=String(q).replace(/([^#]*)#?([^#]*)#?(.*)/,"$2");return r=c.unescapeHash(r),r},c.setTitle=function(s){var t=s.title,q;t||(q=c.getStateByIndex(0),q&&q.url===s.url&&(t=q.title||c.options.initialTitle));try{h.getElementsByTagName("title")[0].innerHTML=t.replace("<","&lt;").replace(">","&gt;").replace(" & "," &amp; ")}catch(r){}return h.title=t,c},c.queues=[],c.busy=function(q){typeof q!="undefined"?c.busy.flag=q:typeof c.busy.flag=="undefined"&&(c.busy.flag=!1);if(!c.busy.flag){l(c.busy.timeout);var r=function(){var u,s,t;if(c.busy.flag){return}for(u=c.queues.length-1;u>=0;--u){s=c.queues[u];if(s.length===0){continue}t=s.shift(),c.fireQueueItem(t),c.busy.timeout=k(r,c.options.busyDelay)}};c.busy.timeout=k(r,c.options.busyDelay)}return c.busy.flag},c.busy.flag=!1,c.fireQueueItem=function(q){return q.callback.apply(q.scope||c,q.args||[])},c.pushQueue=function(q){return c.queues[q.queue||0]=c.queues[q.queue||0]||[],c.queues[q.queue||0].push(q),c},c.queue=function(q,r){return typeof q=="function"&&(q={callback:q}),typeof r!="undefined"&&(q.queue=r),c.busy()?c.pushQueue(q):c.fireQueueItem(q),c},c.clearQueue=function(){return c.busy.flag=!1,c.queues=[],c},c.stateChanged=!1,c.doubleChecker=!1,c.doubleCheckComplete=function(){return c.stateChanged=!0,c.doubleCheckClear(),c},c.doubleCheckClear=function(){return c.doubleChecker&&(l(c.doubleChecker),c.doubleChecker=!1),c},c.doubleCheck=function(q){return c.stateChanged=!1,c.doubleCheckClear(),c.bugs.ieDoubleCheck&&(c.doubleChecker=k(function(){return c.doubleCheckClear(),c.stateChanged||q(),!0},c.options.doubleCheckInterval)),c},c.safariStatePoll=function(){var r=c.extractState(h.location.href),q;if(!c.isLastSavedState(r)){q=r}else{return}return q||(q=c.createStateObject()),c.Adapter.trigger(d,"popstate"),c},c.back=function(q){return q!==!1&&c.busy()?(c.pushQueue({scope:c,callback:c.back,args:arguments,queue:q}),!1):(c.busy(!0),c.doubleCheck(function(){c.back(!1)}),e.go(-1),!0)},c.forward=function(q){return q!==!1&&c.busy()?(c.pushQueue({scope:c,callback:c.forward,args:arguments,queue:q}),!1):(c.busy(!0),c.doubleCheck(function(){c.forward(!1)}),e.go(1),!0)},c.go=function(r,s){var q;if(r>0){for(q=1;q<=r;++q){c.forward(s)}}else{if(!(r<0)){throw new Error("History.go: History.go requires a positive or negative integer passed.")}for(q=-1;q>=r;--q){c.back(s)}}return c};if(c.emulated.pushState){var o=function(){};c.pushState=c.pushState||o,c.replaceState=c.replaceState||o}else{c.onPopState=function(v,q){var r=!1,s=!1,t,u;return c.doubleCheckComplete(),t=c.getHash(),t?(u=c.extractState(t||h.location.href,!0),u?c.replaceState(u.data,u.title,u.url,!1):(c.Adapter.trigger(d,"anchorchange"),c.busy(!1)),c.expectedStateId=!1,!1):(r=c.Adapter.extractEventData("state",v,q)||!1,r?s=c.getStateById(r):c.expectedStateId?s=c.getStateById(c.expectedStateId):s=c.extractState(h.location.href),s||(s=c.createStateObject(null,null,h.location.href)),c.expectedStateId=!1,c.isLastSavedState(s)?(c.busy(!1),!1):(c.storeState(s),c.saveState(s),c.setTitle(s),c.Adapter.trigger(d,"statechange"),c.busy(!1),!0))},c.Adapter.bind(d,"popstate",c.onPopState),c.pushState=function(u,q,r,s){if(c.getHashByUrl(r)&&c.emulated.pushState){throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).")}if(s!==!1&&c.busy()){return c.pushQueue({scope:c,callback:c.pushState,args:arguments,queue:s}),!1}c.busy(!0);var t=c.createStateObject(u,q,r);return c.isLastSavedState(t)?c.busy(!1):(c.storeState(t),c.expectedStateId=t.id,e.pushState(t.id,t.title,t.url),c.Adapter.trigger(d,"popstate")),!0},c.replaceState=function(u,q,r,s){if(c.getHashByUrl(r)&&c.emulated.pushState){throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).")}if(s!==!1&&c.busy()){return c.pushQueue({scope:c,callback:c.replaceState,args:arguments,queue:s}),!1}c.busy(!0);var t=c.createStateObject(u,q,r);return c.isLastSavedState(t)?c.busy(!1):(c.storeState(t),c.expectedStateId=t.id,e.replaceState(t.id,t.title,t.url),c.Adapter.trigger(d,"popstate")),!0}}if(j){try{c.store=a.parse(j.getItem("History.store"))||{}}catch(p){c.store={}}c.normalizeStore()}else{c.store={},c.normalizeStore()}c.Adapter.bind(d,"beforeunload",c.clearAllIntervals),c.Adapter.bind(d,"unload",c.clearAllIntervals),c.saveState(c.storeState(c.extractState(h.location.href,!0))),j&&(c.onUnload=function(){var r,s;try{r=a.parse(j.getItem("History.store"))||{}}catch(q){r={}}r.idToState=r.idToState||{},r.urlToId=r.urlToId||{},r.stateToId=r.stateToId||{};for(s in c.idToState){if(!c.idToState.hasOwnProperty(s)){continue}r.idToState[s]=c.idToState[s]}for(s in c.urlToId){if(!c.urlToId.hasOwnProperty(s)){continue}r.urlToId[s]=c.urlToId[s]}for(s in c.stateToId){if(!c.stateToId.hasOwnProperty(s)){continue}r.stateToId[s]=c.stateToId[s]}c.store=r,c.normalizeStore(),j.setItem("History.store",a.stringify(r))},c.intervalList.push(m(c.onUnload,c.options.storeInterval)),c.Adapter.bind(d,"beforeunload",c.onUnload),c.Adapter.bind(d,"unload",c.onUnload));if(!c.emulated.pushState){c.bugs.safariPoll&&c.intervalList.push(m(c.safariStatePoll,c.options.safariPollInterval));if(i.vendor==="Apple Computer, Inc."||(i.appCodeName||"")==="Mozilla"){c.Adapter.bind(d,"hashchange",function(){c.Adapter.trigger(d,"popstate")}),c.getHash()&&c.Adapter.onDomLoad(function(){c.Adapter.trigger(d,"hashchange")})}}},c.init()}(window);