(function(e){function t(t){for(var r,i,s=t[0],c=t[1],u=t[2],l=0,p=[];l<s.length;l++)i=s[l],o[i]&&p.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(p.length)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={2:0},a=[];function i(e){return s.p+"js/"+({1:"pdfjs-dist"}[e]||e)+"."+{1:"6a59d1e0"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=o[e]=[t,r]});t.push(n[2]=r);var a,c=document.getElementsByTagName("head")[0],u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=i(e),a=function(t){u.onerror=u.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");i.type=r,i.request=a,n[1](i)}o[e]=void 0}};var l=setTimeout(function(){a({type:"timeout",target:u})},12e4);u.onerror=u.onload=a,c.appendChild(u)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var c=this["webpackJsonp"]=this["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=u;a.push([7,0]),n()})({"2pwl":function(e,t,n){"use strict";var r=n("O7jP"),o=n.n(r);o.a},7:function(e,t,n){e.exports=n("Vtdi")},"95qj":function(e,t,n){},DtXK:function(e,t,n){},EDI0:function(e,t,n){},O7jP:function(e,t,n){},VKSG:function(e,t,n){"use strict";var r=n("95qj"),o=n.n(r);o.a},VMW6:function(e,t){var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100"}},[n("path",{attrs:{d:"M93.2 84.8L70.6 62.3c4.3-6 6.8-13.3 6.8-21.2C77.4 21 61.2 4.8 41.1 4.8 21 4.8 4.8 21 4.8 41.1S21 77.4 41.1 77.4c7.8 0 15.1-2.5 21-6.7l22.6 22.6c2 2 5.4 2 7.4 0l1.1-1.1c2-2 2-5.3 0-7.4zM41.1 66.6c-14.1 0-25.5-11.4-25.5-25.5S27 15.6 41.1 15.6 66.6 27 66.6 41.1 55.2 66.6 41.1 66.6z"}}),n("path",{attrs:{d:"M29 36.5c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5h24.2c2.5 0 4.5-2 4.5-4.5s-2-4.5-4.5-4.5H29z"}})])},r=function(){return"/Users/ross/dev/rossta/vue-pdfjs-demo/src/assets/icon-zoom-out.svg"};e.exports={render:n,toString:r}},Vtdi:function(e,t,n){"use strict";n.r(t);n("VRzm");var r,o=n("Kw5r"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("PDFViewer",e._b({on:{"document-errored":e.documentErrored}},"PDFViewer",{url:e.url},!1),[e.enableUploader?n("PDFUploader",{staticClass:"header-item",attrs:{slot:"header",documentError:e.documentError},on:{updated:e.urlUpdated},slot:"header"}):e._e()],1)],1)},i=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"pdf-uploader form"},[n("a",{staticClass:"btn",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.openPicker(t)}}},[e._v("Upload")]),n("span",[e._v("or")]),n("label",{staticClass:"url"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.url,expression:"url"}],attrs:{placeholder:"Enter a PDF url"},domProps:{value:e.url},on:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.validateUrl(t):null},blur:e.validateUrl,input:function(t){t.target.composing||(e.url=t.target.value)}}})]),e.error?n("p",{staticClass:"error"},[e._v("\n    "+e._s(e.error)+"\n  ")]):e._e()])},c=[],u=n("k5N+");function l(){return r?Promise.resolve(r):n.e(0).then(n.bind(null,"b4d3")).then(function(e){var t=e.default;return t.init(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_FILESTACK_KEY)})}var d,p,h={props:{documentError:{type:String,default:""}},data:function(){return{url:void 0,urlError:void 0}},watch:{},computed:{error:function(){return this.documentError||this.urlError}},methods:{openPicker:function(){var e=this;l().then(function(t){t.pick({fromSources:["local_file_system","imagesearch","facebook","instagram","dropbox"],accept:[".pdf"],maxFiles:1,maxSize:1024e4}).then(function(t){return e.handleFilestack(t)})})},handleFilestack:function(e){if(e.filesUploaded.length>0){var t=Object(u["a"])(e.filesUploaded,1),n=t[0];this.url=n.url,this.$emit("updated",this.url)}},validateUrl:function(){var e=/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/;e.exec(this.url)?(this.urlError=void 0,this.$emit("updated",this.url)):this.urlError="Please enter a valid url"}}},f=h,g=(n("aZ0v"),n("KHd+")),m=Object(g["a"])(f,s,c,!1,null,"26476ab9",null),v=m.exports,P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pdf-viewer"},[n("header",{staticClass:"box-shadow"},[n("PDFZoom",{staticClass:"header-item",attrs:{scale:e.scale},on:{change:e.scaleChanged}}),n("PDFPaginator",{staticClass:"header-item",attrs:{pageCount:e.pageCount},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}}),e._t("header")],2),n("PDFDocumentProxy",{attrs:{url:e.url},on:{"page-count":e.updatePageCount,"document-rendered":e.documentRendered,"document-errored":e.documentErrored},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.pages;t.pageCount;return n("PDFDocument",e._b({on:{"scale-change":e.scaleChanged,"page-focus":e.pageFocused}},"PDFDocument",{pages:r,scale:e.scale,currentPage:e.currentPage},!1))}}])})],1)},b=[],w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pdf-document"},e._l(e.pages,function(t){return n("PDFPage",e._b({key:t.pageNumber,attrs:{page:t,isFocusedPage:t.pageNumber===e.focusedPage,containerBounds:e.elementBounds},on:{"page-top":e.handlePageTop,"page-focus":e.handlePageFocus,"page-rendered":e.pageRendered,"page-errored":e.pageErrored}},"PDFPage",{scale:e.scale},!1))}))},y=[],E=(n("xfY5"),n("oyJW")),_=n("NOtv"),x=n.n(_),C=n("DzJC"),F=n.n(C),D=window.devicePixelRatio||1,$=x()("app:vue_features/documents/components/PDFPage"),j={props:{page:{type:Object,required:!0},scale:{type:Number,required:!0},containerBounds:{type:Object,default:function(){return{}}},isFocusedPage:{type:Boolean,default:!1}},computed:{actualSizeViewport:function(){return this.viewport.clone({scale:this.scale})},canvasStyle:function(){var e=this.actualSizeViewport,t=e.width,n=e.height,r=[t,n].map(function(e){return Math.ceil(e/D)}),o=Object(u["a"])(r,2),a=o[0],i=o[1];return"width: ".concat(a,"px; height: ").concat(i,"px;")},canvasAttrs:function(){var e=this.viewport,t=e.width,n=e.height,r=[t,n].map(function(e){return Math.ceil(e)}),o=Object(u["a"])(r,2);t=o[0],n=o[1];var a=this.canvasStyle;return{width:t,height:n,style:a,class:"pdf-page box-shadow"}},pageNumber:function(){return this.page.pageNumber}},methods:{focusPage:function(){this.isElementFocused()&&(this.logBoundaries("focused"),this.$emit("page-focus",this.pageNumber)),this.isElementVisible()&&!this.renderTask&&this.drawPage()},drawPage:function(){var e=this;this.cancelRenderTask(),this.renderTask=this.page.render(this.getRenderContext()),this.renderTask.then(function(){return e.$emit("page-rendered",e.page)}).catch(function(t){e.$emit("page-errored",{response:t,page:e.page,text:"Failed to render page ".concat(e.pageNumber)})})},destroyPage:function(e){e&&(e._destroy(),this.cancelRenderTask())},getRenderContext:function(){var e=this.viewport,t=this.$el.getContext("2d");return{canvasContext:t,viewport:e}},getElementBounds:function(){var e=this.$el;return{top:e.offsetTop,bottom:e.offsetTop+e.clientHeight,height:e.clientHeight}},isElementFocused:function(){var e=this.containerBounds.top,t=this.getElementBounds(),n=t.top,r=t.height,o=r/2;return n>=e-o&&n<e+o},isElementVisible:function(){var e=this.containerBounds,t=e.top,n=e.bottom,r=this.getElementBounds(),o=r.top,a=r.bottom;return!(a<t&&o<t||o>n&&a>n)},logBoundaries:function(e){var t=this.containerBounds,n=t.top,r=t.bottom,o=this.getElementBounds(),a=o.top,i=o.bottom;$("Page ".concat(this.pageNumber),e,{top:a,bottom:i},{containerTop:n,containerBottom:r})},cancelRenderTask:function(){this.renderTask&&(this.renderTask.cancel(),delete this.renderTask)}},watch:{page:function(e,t){this.destroyPage(t)},isFocusedPage:function(e){if(e&&!this.isElementFocused()){var t=this.getElementBounds(),n=t.top;this.$emit("page-top",n)}},containerBounds:function(){this.focusPage()},scale:function(){this.focusPage()}},created:function(){this.viewport=this.page.getViewport(this.scale)},mounted:function(){$("Page ".concat(this.pageNumber," mounted")),this.focusPage()},beforeDestroy:function(){this.destroyPage(this.page)},render:function(e){var t=this.canvasAttrs;return e("canvas",{attrs:t})}},O=j,S=(n("pN7y"),Object(g["a"])(O,d,p,!1,null,null,null)),k=S.exports,T=x()("app:components/PDFDocument");function z(){var e,t=480,n=768,r=1024,o=(e={},Object(E["a"])(e,r,.95),Object(E["a"])(e,n,.85),Object(E["a"])(e,t,.75),e),a=document.body.clientWidth;return a>t?o[t]:a>n?o[n]:o[r]}var B={components:{PDFPage:k},props:{pages:{required:!0},pageCount:{type:Number,default:0},scale:{type:Number,default:1},currentPage:{type:Number,default:1}},data:function(){return{focusedPage:void 0,elementBounds:{}}},watch:{pages:function(){var e=this;this.updateScale(),this.$nextTick(function(){e.focusedPage=e.currentPage})},currentPage:function(e){e>=this.pages.length?this.fetchPages(e):this.focusedPage=e}},methods:{handlePageTop:function(e){this.$el.scrollTop=e},handlePageFocus:function(e){this.$emit("page-focus",e)},handleScroll:function(){this.elementBounds=this.getElementBounds(),this.isBottomVisible()&&this.fetchPages()},handleResize:function(){this.updateScale()},updateScale:function(){if(this.pages.length){var e=Object(u["a"])(this.pages,1),t=e[0],n=this.$el.clientWidth,r=t.getViewport(1),o=n*D*z()/r.width;T("calculating initial scale",n,r.width,o),this.$emit("scale-change",o)}},pageRendered:function(e){this.$parent.$emit("page-rendered",e)},pageErrored:function(e){this.$parent.$emit("page-errored",e)},getElementBounds:function(){var e=this.$el;return{top:e.scrollTop,bottom:e.scrollTop+e.clientHeight}},isBottomVisible:function(){var e=this.$el,t=e.scrollTop,n=e.clientHeight,r=e.scrollHeight;return t+n>=r||n>=r},fetchPages:function(e){this.pages.length!==this.pageCount&&this.$parent.$emit("fetch-pages",e)}},mounted:function(){this.handleScroll(),this.throttledScroll=F()(this.handleScroll,300),window.addEventListener("scroll",this.throttledScroll,!0),this.throttledResize=F()(this.handleResize,300),window.addEventListener("resize",this.handleResize,!0)},beforeDestroy:function(){this.throttledScroll&&window.removeEventListener("scroll",this.throttledScroll,!0),this.throttledResize&&window.removeEventListener("resize",this.throttledResize,!0)}},N=B,V=(n("yJHj"),Object(g["a"])(N,w,y,!1,null,null,null)),R=V.exports,M=n("iv4g"),U=(n("rGqo"),n("yt8O"),n("WjpJ")),Z=n.n(U),K=x()("app:components/PDFDocumentProxy");function I(e){return Promise.all([n.e(0),n.e(1)]).then(n.t.bind(null,"+6Tl",7)).then(function(t){return t.getDocument(e)})}function L(e,t,n){var r=Z()(t,n+1).map(function(t){return e.getPage(t)});return Promise.all(r)}var H,q,A=3,J={props:{url:{type:String,required:!0}},data:function(){return{pdf:void 0,pages:[],cursor:0}},watch:{url:{handler:function(e){var t=this;I(e).then(function(e){return t.pdf=e}).catch(function(e){t.$emit("document-errored",{text:"Failed to retrieve PDF",response:e}),K("Failed to retrieve PDF",e)})},immediate:!0},pdf:function(e,t){e&&(t&&(this.pages=[]),this.$emit("page-count",this.pageCount),this.fetchPages())}},computed:{pageCount:function(){return this.pdf&&this.pdf.numPages}},methods:{fetchPages:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(this.pdf&&this.pages.length!==this.pageCount){var n=this.pages.length;if(!(this.cursor>n)){var r=n+1,o=Math.min(Math.max(t,n+A),this.pageCount);this.cursor=o,K("Fetching pages ".concat(r," to ").concat(o)),L(this.pdf,r,o).then(function(t){var r,o=0;return(r=e.pages).splice.apply(r,[n,o].concat(Object(M["a"])(t))),e.pages}).catch(function(t){e.$emit("document-errored",{text:"Failed to retrieve pages",response:t}),K("Failed to retrieve pages",t)})}}},pageRendered:function(e){K("Page ".concat(e.pageNumber," rendered"))},pageErrored:function(e){var t=e.text,n=e.response,r=e.page;K(t,n,r)}},created:function(){this.$on("page-rendered",this.pageRendered),this.$on("page-errored",this.pageErrored),this.$on("fetch-pages",this.fetchPages)},render:function(){return this.$scopedSlots.default({pages:this.pages})}},W=J,G=Object(g["a"])(W,H,q,!1,null,null,null),X=G.exports,Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pdf-paginator"},[n("input",{attrs:{min:"1",max:e.pageCount,type:"number"},domProps:{value:e.value},on:{input:e.input}}),e._v(" / "),n("span",[e._v(e._s(e.pageCount))])])},Q=[],ee={props:{value:Number,pageCount:Number},methods:{input:function(e){this.$emit("input",parseInt(e.target.value,10))}},watch:{pageCount:function(){this.$emit("input",1)}}},te=ee,ne=(n("2pwl"),Object(g["a"])(te,Y,Q,!1,null,null,null)),re=ne.exports,oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pdf-zoom"},[n("a",{staticClass:"icon",on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.zoomIn(t)}}},[n("ZoomInIcon")],1),n("a",{staticClass:"icon",on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.zoomOut(t)}}},[n("ZoomOutIcon")],1)])},ae=[],ie=n("uud7"),se=n.n(ie),ce=n("VMW6"),ue=n.n(ce),le={components:{ZoomInIcon:se.a,ZoomOutIcon:ue.a},props:{scale:{type:Number,default:1},increment:{type:Number,default:.25}},methods:{zoomIn:function(){this.$emit("change",this.scale+this.increment)},zoomOut:function(){this.scale<=this.increment||this.$emit("change",this.scale-this.increment)}}},de=le,pe=(n("cTUT"),Object(g["a"])(de,oe,ae,!1,null,null,null)),he=pe.exports;function fe(e,t){var n=Math.pow(10,t||0);return Math.round(e*n)/n}var ge={name:"PDFViewer",components:{PDFDocument:R,PDFDocumentProxy:X,PDFZoom:he,PDFPaginator:re},props:{url:String},data:function(){return{scale:void 0,currentPage:void 0,pageCount:void 0,rendered:!1,force:!1}},methods:{documentRendered:function(){this.renderPromise.resolve()},documentErrored:function(e){this.$emit("document-errored",e)},scaleChanged:function(e){this.scale=fe(e,1)},updatePageCount:function(e){this.pageCount=e},pageFocused:function(e){this.currentPage=e}}},me=ge,ve=(n("VKSG"),Object(g["a"])(me,P,b,!1,null,"0991d082",null)),Pe=ve.exports,be={name:"app",components:{PDFUploader:v,PDFViewer:Pe},data:function(){return{url:"https://cdn.filestackcontent.com/5qOCEpKzQldoRsVatUPS",documentError:void 0,enableUploader:!1}},methods:{urlUpdated:function(e){this.url=e},documentErrored:function(e){this.documentError=e.text}}},we=be,ye=(n("ZL7j"),Object(g["a"])(we,a,i,!1,null,null,null)),Ee=ye.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(Ee)}}).$mount("#app")},ZL7j:function(e,t,n){"use strict";var r=n("EDI0"),o=n.n(r);o.a},aZ0v:function(e,t,n){"use strict";var r=n("sfdK"),o=n.n(r);o.a},cTUT:function(e,t,n){"use strict";var r=n("DtXK"),o=n.n(r);o.a},nfMK:function(e,t,n){},o0dZ:function(e,t,n){},pN7y:function(e,t,n){"use strict";var r=n("o0dZ"),o=n.n(r);o.a},sfdK:function(e,t,n){},uud7:function(e,t){var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100"}},[n("path",{attrs:{d:"M93.2 84.8L70.6 62.3c4.3-6 6.8-13.3 6.8-21.2C77.4 21 61.2 4.8 41.1 4.8 21 4.8 4.8 21 4.8 41.1S21 77.4 41.1 77.4c7.8 0 15.1-2.5 21-6.7l22.6 22.6c2 2 5.4 2 7.4 0l1.1-1.1c2-2 2-5.3 0-7.4zM41.1 66.6c-14.1 0-25.5-11.4-25.5-25.5S27 15.6 41.1 15.6 66.6 27 66.6 41.1 55.2 66.6 41.1 66.6z"}}),n("path",{attrs:{d:"M53.1 36.5h-7.6v-7.6c0-2.5-2-4.5-4.5-4.5s-4.5 2-4.5 4.5v7.6H29c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5h7.6v7.6c0 2.5 2 4.5 4.5 4.5s4.5-2 4.5-4.5v-7.6h7.6c2.5 0 4.5-2 4.5-4.5s-2.1-4.5-4.6-4.5z"}})])},r=function(){return"/Users/ross/dev/rossta/vue-pdfjs-demo/src/assets/icon-zoom-in.svg"};e.exports={render:n,toString:r}},yJHj:function(e,t,n){"use strict";var r=n("nfMK"),o=n.n(r);o.a}});
//# sourceMappingURL=app.6389bb31.js.map