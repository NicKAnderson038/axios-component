(function(t){function e(e){for(var i,n,o=e[0],h=e[1],c=e[2],u=0,l=[];u<o.length;u++)n=o[u],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&l.push(s[n][0]),s[n]=0;for(i in h)Object.prototype.hasOwnProperty.call(h,i)&&(t[i]=h[i]);d&&d(e);while(l.length)l.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],i=!0,n=1;n<a.length;n++){var o=a[n];0!==s[o]&&(i=!1)}i&&(r.splice(e--,1),t=h(h.s=a[0]))}return t}var i={},n={app:0},s={app:0},r=[];function o(t){return h.p+"js/"+({comp:"comp",withData:"withData"}[t]||t)+"."+{"chunk-9722edc2":"7f7562de","chunk-210ba6e0":"3d6207e2",comp:"b48301e6",withData:"ad660e8f","chunk-c9df9fec":"f4f9d155"}[t]+".js"}function h(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,h),a.l=!0,a.exports}h.e=function(t){var e=[],a={"chunk-9722edc2":1,"chunk-210ba6e0":1,comp:1,withData:1,"chunk-c9df9fec":1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise((function(e,a){for(var i="css/"+({comp:"comp",withData:"withData"}[t]||t)+"."+{"chunk-9722edc2":"70ca4a03","chunk-210ba6e0":"31a22d38",comp:"9eb3d93b",withData:"997192af","chunk-c9df9fec":"bfae265a"}[t]+".css",s=h.p+i,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var c=r[o],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===i||u===s))return e()}var l=document.getElementsByTagName("style");for(o=0;o<l.length;o++){c=l[o],u=c.getAttribute("data-href");if(u===i||u===s)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var i=e&&e.target&&e.target.src||s,r=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=i,delete n[t],d.parentNode.removeChild(d),a(r)},d.href=s;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){n[t]=0})));var i=s[t];if(0!==i)if(i)e.push(i[2]);else{var r=new Promise((function(e,a){i=s[t]=[e,a]}));e.push(i[2]=r);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,h.nc&&u.setAttribute("nonce",h.nc),u.src=o(t);var l=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(d);var a=s[t];if(0!==a){if(a){var i=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+i+": "+n+")",l.name="ChunkLoadError",l.type=i,l.request=n,a[1](l)}s[t]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},h.m=t,h.c=i,h.d=function(t,e,a){h.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},h.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},h.t=function(t,e){if(1&e&&(t=h(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(h.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)h.d(a,i,function(e){return t[e]}.bind(null,i));return a},h.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return h.d(e,"a",e),e},h.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},h.p="/",h.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=u;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);var i=a("5530"),n=(a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("2b0e")),s=a("750b"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[a("div",{staticClass:"d-flex align-center"},[a("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),a("v-img",{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png",width:"100"}})],1),a("v-spacer"),a("v-btn",{attrs:{href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank",text:""}},[a("span",{staticClass:"mr-2"},[t._v("Latest Release")]),a("v-icon",[t._v("mdi-open-in-new")])],1)],1),a("v-content",[a("v-layout",{attrs:{"justify-center":""}},[a("v-card-actions",[a("v-btn",{attrs:{to:"/withData"}},[a("span",[t._v("WITH DATA")])]),a("v-btn",{attrs:{to:"/comp"}},[t._v("COMPOSITION API")]),a("v-btn",{attrs:{to:"/brews"}},[t._v("BREWS API")]),a("v-btn",{attrs:{to:"/brews-compare"}},[t._v("BREWS GLOBAL REACTIVE STATE")]),a("v-btn",{attrs:{color:"blue",dark:"",to:"/"}},[t._v("HOME")])],1)],1)],1),a("router-view"),a("v-content",[a("HelloWorld")],1)],1)},o=[],h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-row",{staticClass:"text-center"},[i("v-col",{attrs:{cols:"12"}},[i("v-img",{staticClass:"my-3",attrs:{src:a("9b19"),contain:"",height:"100"}})],1),i("v-col",{staticClass:"mb-4"},[i("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Welcome to Vuetify ")]),i("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),i("br"),t._v("please join our online "),i("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])])],1)],1)},c=[],u={name:"HelloWorld",data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/layout/pre-defined"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},l=u,d=a("2877"),f=a("6544"),v=a.n(f),p=a("62ad"),m=a("a523"),y=a("adda"),w=a("0fd9"),k=Object(d["a"])(l,h,c,!1,null,null,null),g=k.exports;v()(k,{VCol:p["a"],VContainer:m["a"],VImg:y["a"],VRow:w["a"]});var b={name:"App",components:{HelloWorld:g},data:function(){return{}}},$=b,_=a("7496"),D=a("40dc"),j=a("8336"),x=a("99d9"),C=a("a75b"),O=a("132d"),T=a("a722"),E=a("2fa4"),P=Object(d["a"])($,r,o,!1,null,null,null),A=P.exports;v()(P,{VApp:_["a"],VAppBar:D["a"],VBtn:j["a"],VCardActions:x["a"],VContent:C["a"],VIcon:O["a"],VImg:y["a"],VLayout:T["a"],VSpacer:E["a"]});var V=a("9483");Object(V["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});a("d3b7");var W=a("8c4f"),S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"})},I=[],L={name:"Home"},R=L,B=Object(d["a"])(R,S,I,!1,null,null,null),N=B.exports;n["a"].use(W["a"]);var q=[{path:"/",name:"Home",component:N},{path:"/withData",name:"WithData",component:function(){return Promise.all([a.e("chunk-9722edc2"),a.e("withData")]).then(a.bind(null,"a5d6"))}},{path:"/comp",name:"Comp",component:function(){return Promise.all([a.e("chunk-9722edc2"),a.e("comp")]).then(a.bind(null,"a8a7"))}},{path:"/brews",name:"Brews",component:function(){return Promise.all([a.e("chunk-9722edc2"),a.e("chunk-210ba6e0")]).then(a.bind(null,"c254"))}},{path:"/brews-compare",name:"BrewsCompare",component:function(){return a.e("chunk-c9df9fec").then(a.bind(null,"1995"))}}],H=new W["a"]({mode:"history",base:"/",routes:q}),F=H,M=a("2f62");n["a"].use(M["a"]);var J=new M["a"].Store({state:{},mutations:{},actions:{},modules:{}}),G=a("d4ec"),K=a("bee2"),Q=a("b85c"),U=(a("96cf"),a("1da1")),z=a("970c"),X=a.n(z),Y=a("bc3a"),Z=a.n(Y),tt=function(){function t(e,a,i){Object(G["a"])(this,t),this.vm=e,this.key=a,this.options=Object.assign({},i),this._skip=!0,this._variables=null,this._pollingInterval=this.options.pollingInterval,this._watchers=[],this._destroyed=!1,this._loading=!1,this._data=null,this._error=null,this._poll=null,this.cancelToken=Y["CancelToken"].source(),this.init(),e.$data.$withData&&!e.$data.$withData.fetchers[a]&&e.$set(e.$data.$withData.fetchers,a,{loading:!1,data:null,error:null,refetch:this.refetch})}return Object(K["a"])(t,[{key:"init",value:function(){"function"===typeof this.options.variables?this.addVariablesWatcher():this._variables=this.options.variables,"function"===typeof this.options.skip?this.addSkipWatcher():this.options.skip?this._skip=!0:(this._skip=!1,this.start())}},{key:"start",value:function(){var t=Object(U["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.error=null,this.loading=!0,t.next=4,this.execute();case 4:this.loading=!1;case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"execute",value:function(){var t=Object(U["a"])(regeneratorRuntime.mark((function t(){var e,a,i,n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=this.vm.$withDataProvider,a=e.client,i=e.onError,n=this.options.onError||i||X.a,t.prev=2,t.next=5,a(this.options.query(this._variables),this.cancelToken.token);case 5:s=t.sent,this.data=s.data,this._pollingInterval&&this.startPolling(),this.options.onComplete&&this.options.onComplete(this.data),t.next=15;break;case 11:t.prev=11,t.t0=t["catch"](2),n(t.t0),this.error=t.t0;case 15:case"end":return t.stop()}}),t,this,[[2,11]])})));function e(){return t.apply(this,arguments)}return e}()},{key:"refetch",value:function(){this._skip||(this.stop(),this.start())}},{key:"startPolling",value:function(){clearTimeout(this._poll);var t=this;this._poll=setTimeout((function(){t.startPolling(),t.execute()}),this._pollingInterval)}},{key:"skipChanged",value:function(t,e){t!==e&&(this.skip=t)}},{key:"addSkipWatcher",value:function(){var t=this;this._skipWatcher=this.vm.$watch((function(){return t.options.skip.call(t.vm,t.vm,t.key)}),this.skipChanged.bind(this),{immediate:!0,deep:this.options.deep})}},{key:"variablesChanged",value:function(t,e){t!==e&&(this.variables=t)}},{key:"addVariablesWatcher",value:function(){var t=this;this._variablesWatcher=this.vm.$watch((function(){return t.options.variables.call(t.vm,t.vm,t.key)}),this.variablesChanged.bind(this),{immediate:!0,deep:this.options.deep})}},{key:"stop",value:function(){clearTimeout(this._poll);var t,e=Object(Q["a"])(this._watchers);try{for(e.s();!(t=e.n()).done;){var a=t.value;a()}}catch(i){e.e(i)}finally{e.f()}}},{key:"destroy",value:function(){this._destroyed||(this._destroyed=!0,this.stop(),this._skipWatcher&&this._skipWatcher(),this._variablesWatcher&&this._variablesWatcher(),this.cancelToken&&this.cancelToken.cancel())}},{key:"skip",set:function(t){t?this.stop():this.start(),this._skip=t}},{key:"variables",set:function(t){this._variables=t,!this._skip&&t&&this.start()}},{key:"loading",get:function(){return this.vm.$data.$withData&&this.vm.$data.$withData.fetchers[this.key]?this.vm.$data.$withData.fetchers[this.key].loading:this._loading},set:function(t){this._loading!==t&&(this._loading=t,this.vm.$data.$withData&&this.vm.$data.$withData.fetchers[this.key]&&(this.vm.$data.$withData.fetchers[this.key].loading=t))}},{key:"data",get:function(){return this.vm.$data.$withData&&this.vm.$data.$withData.fetchers[this.key]?this.vm.$data.$withData.fetchers[this.key].data:this._data},set:function(t){this._data!==t&&(this._data=t,this.vm.$data.$withData&&this.vm.$data.$withData.fetchers[this.key]&&(this.vm.$data.$withData.fetchers[this.key].data=t))}},{key:"error",get:function(){return this.vm.$data.$withData&&this.vm.$data.$withData.fetchers[this.key]?this.vm.$data.$withData.fetchers[this.key].data:this._error},set:function(t){this._error!==t&&(this._error=t,this.vm.$data.$withData&&this.vm.$data.$withData.fetchers[this.key]&&(this.vm.$data.$withData.fetchers[this.key].error=t))}}]),t}(),et=function(){function t(e,a,i){Object(G["a"])(this,t),this.vm=e,this.key=a,this.options=Object.assign({},i),this._variables=null,this._watchers=[],this._destroyed=!1,this._loading=!1,this._data=null,this._error=null,this.cancelToken=Y["CancelToken"].source(),e.$data.$withData&&!e.$data.$withData.senders[a]&&e.$set(e.$data.$withData.senders,a,{loading:!1,data:null,error:null,send:this.send}),this.init()}return Object(K["a"])(t,[{key:"init",value:function(){"function"===typeof this.options.variables?this.addVariablesWatcher():this._variables=this.options.variables}},{key:"start",value:function(){var t=Object(U["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.error=null,this.loading=!0,t.next=4,this.execute();case 4:this.loading=!1;case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"execute",value:function(){var t=Object(U["a"])(regeneratorRuntime.mark((function t(){var e,a,i,n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=this.vm.$withDataProvider,a=e.client,i=e.onError,n=this.options.onError||i||X.a,t.prev=2,t.next=5,a(this.options.query(this._variables),this.cancelToken.token);case 5:s=t.sent,this.data=s.data,this.options.onComplete&&this.options.onComplete(this.data),t.next=14;break;case 10:t.prev=10,t.t0=t["catch"](2),n(t.t0),this.error=t.t0;case 14:case"end":return t.stop()}}),t,this,[[2,10]])})));function e(){return t.apply(this,arguments)}return e}()},{key:"send",value:function(){this._skip||(this.stop(),this.start())}},{key:"variablesChanged",value:function(t,e){console.log("VARIABLES: ",this.value),t!==e&&(this._variables=t)}},{key:"addVariablesWatcher",value:function(){var t=this;this._variablesWatcher=this.vm.$watch((function(){return t.options.variables.call(t.vm,t.vm,t.key)}),this.variablesChanged.bind(this),{immediate:!0,deep:this.options.deep})}},{key:"stop",value:function(){var t,e=Object(Q["a"])(this._watchers);try{for(e.s();!(t=e.n()).done;){var a=t.value;a()}}catch(i){e.e(i)}finally{e.f()}}},{key:"destroy",value:function(){this._destroyed||(this._destroyed=!0,this.stop(),this._variablesWatcher&&this._variablesWatcher(),this.cancelToken&&this.cancelToken.cancel())}},{key:"loading",get:function(){return this.vm.$data.$withData&&this.vm.$data.$withData.senders[this.key]?this.vm.$data.$withData.senders[this.key].loading:this._loading},set:function(t){this._loading!==t&&(this._loading=t,this.vm.$data.$withData&&this.vm.$data.$withData.senders[this.key]&&(this.vm.$data.$withData.senders[this.key].loading=t))}},{key:"data",get:function(){return this.vm.$data.$withData&&this.vm.$data.$withData.senders[this.key]?this.vm.$data.$withData.senders[this.key].data:this._data},set:function(t){this._data!==t&&(this._data=t,this.vm.$data.$withData&&this.vm.$data.$withData.senders[this.key]&&(this.vm.$data.$withData.senders[this.key].data=t))}},{key:"error",get:function(){return this.vm.$data.$withData&&this.vm.$data.$withData.senders[this.key]?this.vm.$data.$withData.senders[this.key].data:this._error},set:function(t){this._error!==t&&(this._error=t,this.vm.$data.$withData&&this.vm.$data.$withData.senders[this.key]&&(this.vm.$data.$withData.senders[this.key].error=t))}}]),t}(),at=function(){function t(e){Object(G["a"])(this,t),this.vm=e,this.fetchers={},this.senders={}}return Object(K["a"])(t,[{key:"addFetcher",value:function(t,e){this.fetchers[t]=new tt(this.vm,t,e,!0)}},{key:"addSender",value:function(t,e){this.senders[t]=new et(this.vm,t,e)}},{key:"destroy",value:function(){for(var t in this.fetchers)this.fetchers[t].destroy()}}]),t}();function it(){var t=this.$options,e=t.withDataProvider;e?this.$withDataProvider=e:t.parent&&t.parent.$withDataProvider&&(this.$withDataProvider=t.parent.$withDataProvider)}function nt(){if(!this._isLaunched){this._isLaunched=!0;var t=this.$options.withData;if(t){if(t.fetchers)for(var e in t.fetchers){var a=t.fetchers[e];this.$withData.addFetcher(e,a)}if(t.senders)for(var i in t.senders){var n=t.senders[i];this.$withData.addSender(i,n)}}}}function st(){this.$_withData&&this.$_withData.destroy()}function rt(t){t.mixin({data:function(){return{$withData:{fetchers:{},senders:{}}}},beforeCreate:function(){it.call(this)},created:nt,destroyed:st})}function ot(t){ot.installed||(ot.installed=!0,Object.defineProperty(t.prototype,"$withData",{get:function(){return console.log("active"),this.$_withData||(this.$_withData=new at(this)),this.$_withData}}),rt(t))}var ht=ot,ct=function t(e){Object(G["a"])(this,t),this.client=e.client,this.onError=e.onError},ut=a("f309");n["a"].use(ut["a"]);var lt=new ut["a"]({});n["a"].config.productionTip=!1,n["a"].use(s["b"]);var dt=new ct({client:function(t,e){return console.log(t),Z()(Object(i["a"])({},t,{headers:{"Content-Type":"application/json"},cancelToken:e}))},onError:function(t){console.log(t.message)}});n["a"].use(ht),new n["a"]({router:F,store:J,withDataProvider:dt,vuetify:lt,render:function(t){return t(A)}}).$mount("#app")},"9b19":function(t,e,a){t.exports=a.p+"img/logo.63a7d78d.svg"}});
//# sourceMappingURL=app.415c2251.js.map