(function(e){function t(t){for(var a,o,s=t[0],c=t[1],u=t[2],l=0,p=[];l<s.length;l++)o=s[l],i[o]&&p.push(i[o][0]),i[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);d&&d(t);while(p.length)p.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(a=!1)}a&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},i={app:0},r=[];function o(e){return s.p+"js/"+({filestack:"filestack","pdfjs-dist":"pdfjs-dist",pdfjsWorker:"pdfjsWorker"}[e]||e)+"."+{filestack:"600f9c05","pdfjs-dist":"a7a05ace",pdfjsWorker:"286105f3"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=i[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise(function(t,a){n=i[e]=[t,a]});t.push(n[2]=a);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=o(e),r=function(t){c.onerror=c.onload=null,clearTimeout(u);var n=i[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+a+": "+r+")");o.type=a,o.request=r,n[1](o)}i[e]=void 0}};var u=setTimeout(function(){r({type:"timeout",target:c})},12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/vue-pdfjs-demo/",s.oe=function(e){throw console.error(e),e};var c=this["webpackJsonp"]=this["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=u;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"032b":function(e,t,n){"use strict";var a=n("3ed4"),i=n.n(a);i.a},"034f":function(e,t,n){"use strict";var a=n("64a9"),i=n.n(a);i.a},"2f02":function(e,t,n){"use strict";var a=n("7e37"),i=n.n(a);i.a},3337:function(e,t,n){"use strict";var a=n("f793"),i=n.n(a);i.a},"3ed4":function(e,t,n){},"54c5":function(e,t){var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100"}},[n("path",{attrs:{d:"M93.2 84.8L70.6 62.3c4.3-6 6.8-13.3 6.8-21.2C77.4 21 61.2 4.8 41.1 4.8 21 4.8 4.8 21 4.8 41.1S21 77.4 41.1 77.4c7.8 0 15.1-2.5 21-6.7l22.6 22.6c2 2 5.4 2 7.4 0l1.1-1.1c2-2 2-5.3 0-7.4zM41.1 66.6c-14.1 0-25.5-11.4-25.5-25.5S27 15.6 41.1 15.6 66.6 27 66.6 41.1 55.2 66.6 41.1 66.6z"}}),n("path",{attrs:{d:"M29 36.5c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5h24.2c2.5 0 4.5-2 4.5-4.5s-2-4.5-4.5-4.5H29z"}})])},a=function(){return"/home/circleci/rossta/vue-pdfjs-demo/src/assets/icon-zoom-out.svg"};e.exports={render:n,toString:a}},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a,i=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("PDFViewer",e._b({on:{"document-errored":e.onDocumentErrored}},"PDFViewer",{url:e.url},!1),[e.enableUploader?n("PDFUploader",{staticClass:"header-item",attrs:{slot:"header",documentError:e.documentError},on:{updated:e.urlUpdated},slot:"header"}):e._e()],1)],1)},o=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"pdf-uploader form"},[n("a",{staticClass:"btn",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.openPicker(t)}}},[e._v("Upload")]),n("span",[e._v("or")]),n("label",{staticClass:"url"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.url,expression:"url"}],attrs:{placeholder:"Enter a PDF url"},domProps:{value:e.url},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.validateUrl(t)},blur:e.validateUrl,input:function(t){t.target.composing||(e.url=t.target.value)}}})]),e.error?n("p",{staticClass:"error"},[e._v("\n    "+e._s(e.error)+"\n  ")]):e._e()])},c=[],u=n("768b"),l=n("795b"),d=n.n(l);function p(){return a?d.a.resolve(a):n.e("filestack").then(n.bind(null,"6f87")).then(function(e){var t=e.default;return t.init(Object({NODE_ENV:"production",VUE_APP_PDF_URL:"https://cdn.filestackcontent.com/wcrjf9qPTCKXV3hMXDwK",BASE_URL:"/vue-pdfjs-demo/"}).VUE_APP_FILESTACK_KEY)})}var h={props:{documentError:{type:String,default:""}},data:function(){return{url:void 0,urlError:void 0}},watch:{},computed:{error:function(){return this.documentError||this.urlError}},methods:{openPicker:function(){var e=this;p().then(function(t){t.pick({fromSources:["local_file_system","imagesearch","facebook","instagram","dropbox"],accept:[".pdf"],maxFiles:1,maxSize:1024e4}).then(function(t){return e.onFilestack(t)})})},onFilestack:function(e){if(e.filesUploaded.length>0){var t=Object(u["a"])(e.filesUploaded,1),n=t[0];this.url=n.url,this.$emit("updated",this.url)}},validateUrl:function(){var e=/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&\/\/=]*)/;e.exec(this.url)?(this.urlError=void 0,this.$emit("updated",this.url)):this.urlError="Please enter a valid url"}}},f=h,g=(n("64cb"),n("2877")),m=Object(g["a"])(f,s,c,!1,null,"4532bb32",null),v=m.exports,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pdf-viewer"},[n("header",{staticClass:"pdf-viewer__header box-shadow"},[n("div",{staticClass:"pdf-preview-toggle"},[n("a",{staticClass:"icon",on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.togglePreview(t)}}},[n("PreviewIcon")],1)]),n("PDFZoom",{staticClass:"header-item",attrs:{scale:e.scale},on:{change:e.updateScale,fit:e.updateFit}}),n("PDFPaginator",{staticClass:"header-item",attrs:{pageCount:e.pageCount},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}}),e._t("header")],2),n("PDFData",{staticClass:"pdf-viewer__main",attrs:{url:e.url},on:{"page-count":e.updatePageCount,"page-focus":e.updateCurrentPage,"document-rendered":e.onDocumentRendered,"document-errored":e.onDocumentErrored},scopedSlots:e._u([{key:"preview",fn:function(t){var a=t.pages;return[n("PDFPreview",e._b({directives:[{name:"show",rawName:"v-show",value:e.isPreviewEnabled,expression:"isPreviewEnabled"}],staticClass:"pdf-viewer__preview"},"PDFPreview",{pages:a,scale:e.scale,currentPage:e.currentPage,pageCount:e.pageCount,isPreviewEnabled:e.isPreviewEnabled},!1))]}},{key:"document",fn:function(t){var a=t.pages;return[n("PDFDocument",e._b({staticClass:"pdf-viewer__document",class:{"preview-enabled":e.isPreviewEnabled},on:{"scale-change":e.updateScale}},"PDFDocument",{pages:a,scale:e.scale,optimalScale:e.optimalScale,fit:e.fit,currentPage:e.currentPage,pageCount:e.pageCount,isPreviewEnabled:e.isPreviewEnabled},!1))]}}])})],1)},P=[],w=n("c593"),_=n.n(w),y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ScrollingDocument",e._b({staticClass:"pdf-document",attrs:{"enable-page-jump":!0},on:{"page-jump":e.onPageJump,"pages-fetch":e.onPagesFetch,"pages-reset":e.fitWidth},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.page,i=t.isPageFocused,r=t.isElementFocused;return[n("PDFPage",e._b({on:{"page-rendered":e.onPageRendered,"page-errored":e.onPageErrored,"page-focus":e.onPageFocused}},"PDFPage",{scale:e.scale,optimalScale:e.optimalScale,page:a,isPageFocused:i,isElementFocused:r},!1))]}}])},"ScrollingDocument",{pages:e.pages,pageCount:e.pageCount,currentPage:e.currentPage},!1))},E=[],F=(n("c5f6"),window.devicePixelRatio||1),D=.98,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"scroll",rawName:"v-scroll.immediate",value:e.updateScrollBounds,expression:"updateScrollBounds",modifiers:{immediate:!0}}],staticClass:"scrolling-document"},[e._l(e.pages,function(t){return n("ScrollingPage",e._b({key:t.pageNumber,on:{"page-jump":e.onPageJump},scopedSlots:e._u([{key:"default",fn:function(a){var i=a.isPageFocused,r=a.isElementFocused;return[n("div",{staticClass:"scrolling-page"},[e._t("default",null,null,{page:t,isPageFocused:i,isElementFocused:r})],2)]}}],!0)},"ScrollingPage",{page:t,clientHeight:e.clientHeight,scrollTop:e.scrollTop,focusedPage:e.focusedPage,enablePageJump:e.enablePageJump},!1))}),n("div",{directives:[{name:"visible",rawName:"v-visible",value:e.fetchPages,expression:"fetchPages"}],staticClass:"observer"})],2)},$=[],x=n("0f32"),C=n.n(x);function k(e,t){var n=t.value;t.modifiers.immediate&&n();var a=C()(n,300);e.addEventListener("scroll",a,!0)}var j={inserted:k},T=n("1b81"),O=n.n(T),N=(n("5abe"),n("34eb")),z=n.n(N),A=z()("app:directives/visible"),H=new O.a;function M(e,t,n,a){var i=new IntersectionObserver(function(t){var r=t[0];r.isIntersecting&&(a(),n.once&&V(i,e))});return t.context.$nextTick(function(){return i.observe(e)}),i}function V(e,t){A("Disconnecting observer",t),e&&e.disconnect()}function B(e,t,n){var a=t.value,i=t.modifiers;if(A("Binding element",e),"undefined"===typeof window.IntersectionObserver)A("IntersectionObserver API is not available in your browser.");else{var r=M(e,n,i,function(){A("Element is visible",e);var t=a;"function"===typeof t&&t()});H.set(e,{observer:r})}}function R(e,t,n){var a=t.value,i=t.oldValue;if(a!==i){var r=H.get(e),o=r.observer;V(o,e),B(e,{value:a},n)}}function U(e){if(H.has(e)){var t=H.get(e),n=t.observer;V(n,e),H.delete(e)}}var I,L,W={bind:B,update:R,unbind:U},q={name:"ScrollingPage",props:{page:{type:Object,required:!0},focusedPage:{type:Number,default:void 0},scrollTop:{type:Number,default:0},clientHeight:{type:Number,default:0},enablePageJump:{type:Boolean,default:!1}},data:function(){return{elementTop:0,elementHeight:0}},computed:{isPageFocused:function(){return this.page.pageNumber===this.focusedPage},isElementFocused:function(){var e=this.elementTop,t=this.bottom,n=this.elementHeight,a=this.scrollTop,i=this.clientHeight;if(n){var r=n/2,o=i/2,s=n>=o?o:r,c=a+s;return e<c&&t>=c}},bottom:function(){return this.elementTop+this.elementHeight},scrollBottom:function(){return this.scrollTop+this.clientHeight}},methods:{jumpToPage:function(){this.enablePageJump&&!this.isElementFocused&&this.isPageFocused&&this.$emit("page-jump",this.elementTop)},updateElementBounds:function(){var e=this.$el,t=e.offsetTop,n=e.offsetHeight;this.elementTop=t,this.elementHeight=n}},watch:{scrollTop:"updateElementBounds",clientHeight:"updateElementBounds",isPageFocused:"jumpToPage"},created:function(){this.$on("update-visibility",this.updateElementBounds)},mounted:function(){this.updateElementBounds()},render:function(){var e=this.isPageFocused,t=this.isElementFocused;return this.$scopedSlots.default({isPageFocused:e,isElementFocused:t})}},J=q,Z=Object(g["a"])(J,I,L,!1,null,null,null),K=Z.exports,X={components:{ScrollingPage:K},directives:{visible:W,scroll:j},props:{pages:{required:!0},enablePageJump:{type:Boolean,default:!1},currentPage:{type:Number,default:1},isParentVisible:{default:!0}},data:function(){return{focusedPage:void 0,scrollTop:0,clientHeight:0}},computed:{pagesLength:function(){return this.pages.length}},methods:{fetchPages:function(e){this.$emit("pages-fetch",e)},onPageJump:function(e){this.$emit("page-jump",e)},updateScrollBounds:function(){var e=this.$el,t=e.scrollTop,n=e.clientHeight;this.scrollTop=t,this.clientHeight=n}},watch:{isParentVisible:"updateScrollBounds",pagesLength:function(e,t){var n=this;0===t&&this.$emit("pages-reset"),this.$nextTick(function(){n.focusedPage=n.currentPage})},currentPage:function(e){e>this.pages.length?this.fetchPages(e):this.focusedPage=e}}},Y=X,G=Object(g["a"])(Y,S,$,!1,null,null,null),Q=G.exports,ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("canvas",e._b({directives:[{name:"visible",rawName:"v-visible.once",value:e.drawPage,expression:"drawPage",modifiers:{once:!0}}]},"canvas",e.canvasAttrs,!1))},te=[],ne=z()("app:components/PDFPage"),ae={name:"PDFPage",props:{page:{type:Object,required:!0},scale:{type:Number,required:!0},optimalScale:{type:Number,required:!0},isPageFocused:{type:Boolean,default:!1},isElementFocused:{type:Boolean,default:!1}},directives:{visible:W},computed:{actualSizeViewport:function(){return this.viewport.clone({scale:this.scale})},canvasStyle:function(){var e=this.actualSizeViewport,t=e.width,n=e.height,a=[t,n].map(function(e){return Math.ceil(e/F)}),i=Object(u["a"])(a,2),r=i[0],o=i[1];return"width: ".concat(r,"px; height: ").concat(o,"px;")},canvasAttrs:function(){var e=this.viewport,t=e.width,n=e.height,a=[t,n].map(function(e){return Math.ceil(e)}),i=Object(u["a"])(a,2);t=i[0],n=i[1];var r=this.canvasStyle;return{width:t,height:n,style:r,class:"pdf-page box-shadow"}},pageNumber:function(){return this.page.pageNumber}},methods:{focusPage:function(){this.isPageFocused||this.$emit("page-focus",this.pageNumber)},drawPage:function(){var e=this;if(!this.renderTask){var t=this.viewport,n=this.$el.getContext("2d"),a={canvasContext:n,viewport:t};this.renderTask=this.page.render(a),this.renderTask.then(function(){e.$emit("page-rendered",{page:e.page,text:"Rendered page ".concat(e.pageNumber)})}).catch(function(t){e.destroyRenderTask(),e.$emit("page-errored",{response:t,page:e.page,text:"Failed to render page ".concat(e.pageNumber)})})}},updateVisibility:function(){this.$parent.$emit("update-visibility")},destroyPage:function(e){e&&e._destroy(),this.destroyRenderTask()},destroyRenderTask:function(){this.renderTask&&(this.renderTask.cancel(),delete this.renderTask)}},watch:{scale:"updateVisibility",page:function(e,t){this.destroyPage(t)},isElementFocused:function(e){e&&this.focusPage()}},created:function(){this.viewport=this.page.getViewport(this.optimalScale)},mounted:function(){ne("Page ".concat(this.pageNumber," mounted"))},beforeDestroy:function(){this.destroyPage(this.page)}},ie=ae,re=(n("3337"),Object(g["a"])(ie,ee,te,!1,null,null,null)),oe=re.exports,se={name:"PDFDocument",components:{ScrollingDocument:Q,PDFPage:oe},props:{pages:{required:!0},pageCount:{type:Number,default:0},scale:{type:Number,default:1},optimalScale:{type:Number},fit:{type:String},currentPage:{type:Number,default:1},isPreviewEnabled:{default:!1}},computed:{defaultViewport:function(){if(!this.pages.length)return{width:0,height:0};var e=Object(u["a"])(this.pages,1),t=e[0];return t.getViewport(1)},isPortrait:function(){var e=this.defaultViewport,t=e.width,n=e.height;return t<=n}},methods:{pageWidthScale:function(){var e=this.defaultViewport,t=this.$el;return e.width?t.clientWidth*F*D/e.width:0},pageHeightScale:function(){var e=this.defaultViewport,t=this.$el;return e.height?t.clientHeight*F*D/e.height:0},fitWidth:function(){var e=this.pageWidthScale();this.updateScale(e,{isOptimal:!this.optimalScale})},fitHeight:function(){var e=this.isPortrait?this.pageHeightScale():this.pageWidthScale();this.updateScale(e)},fitAuto:function(){var e=Math.min(this.pageWidthScale(),this.pageHeightScale());this.updateScale(e)},updateScale:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.isOptimal,a=void 0!==n&&n;e&&this.$emit("scale-change",{scale:e,isOptimal:a})},onPageJump:function(e){this.$el.scrollTop=e},onPagesFetch:function(e){this.$parent.$emit("pages-fetch",e)},onPageFocused:function(e){this.$parent.$emit("page-focus",e)},onPageRendered:function(e){this.$parent.$emit("page-rendered",e)},onPageErrored:function(e){this.$parent.$emit("page-errored",e)}},watch:{fit:function(e){switch(e){case"width":this.fitWidth();break;case"auto":this.fitAuto();break;default:break}},pageCount:"fitWidth",isPreviewEnabled:"fitWidth"}},ce=se,ue=(n("032b"),Object(g["a"])(ce,y,E,!1,null,null,null)),le=ue.exports,de=n("75fc"),pe=n("5176"),he=n.n(pe),fe=(n("ac6a"),n("5df3"),n("5a3a")),ge=n.n(fe),me=z()("app:components/PDFData");function ve(e){return n.e("pdfjs-dist").then(n.t.bind(null,"fba4",7)).then(function(t){return t.getDocument(e)})}function be(e,t,n){var a=ge()(t,n+1).map(function(t){return e.getPage(t)});return d.a.all(a)}var Pe=10;function we(){return{pages:[],cursor:0}}var _e,ye,Ee={name:"PDFData",props:{url:{type:String,required:!0}},data:function(){return he()(we(),{pdf:void 0})},watch:{url:{handler:function(e){var t=this;ve(e).then(function(e){return t.pdf=e}).catch(function(e){t.$emit("document-errored",{text:"Failed to retrieve PDF",response:e}),me("Failed to retrieve PDF",e)})},immediate:!0},pdf:function(e,t){e&&(t&&he()(this,we()),this.$emit("page-count",this.pageCount),this.fetchPages())}},computed:{pageCount:function(){return this.pdf?this.pdf.numPages:0}},methods:{fetchPages:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(this.pdf&&!(this.pageCount>0&&this.pages.length===this.pageCount)){var n=this.pages.length;if(!(this.cursor>n)){var a=n+1,i=Math.min(Math.max(t,n+Pe),this.pageCount);this.cursor=i,me("Fetching pages ".concat(a," to ").concat(i)),be(this.pdf,a,i).then(function(t){var a,i=0;return(a=e.pages).splice.apply(a,[n,i].concat(Object(de["a"])(t))),e.pages}).catch(function(t){e.$emit("document-errored",{text:"Failed to retrieve pages",response:t}),me("Failed to retrieve pages",t)})}}},onPageRendered:function(e){var t=e.text,n=e.page;me(t,n)},onPageErrored:function(e){var t=e.text,n=e.response,a=e.page;me("Error!",t,n,a)}},created:function(){this.$on("page-rendered",this.onPageRendered),this.$on("page-errored",this.onPageErrored),this.$on("pages-fetch",this.fetchPages)},render:function(e){return e("div",[this.$scopedSlots.preview({pages:this.pages}),this.$scopedSlots.document({pages:this.pages})])}},Fe=Ee,De=Object(g["a"])(Fe,_e,ye,!1,null,null,null),Se=De.exports,$e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pdf-paginator"},[e.pageCount?[n("input",{attrs:{min:"1",max:e.pageCount,type:"number"},domProps:{value:e.value},on:{input:e.input}}),e._v(" / "),n("span",[e._v(e._s(e.pageCount))])]:n("input",{attrs:{type:"number"}})],2)},xe=[],Ce=n("e814"),ke=n.n(Ce),je={name:"PDFPaginator",props:{value:Number,pageCount:Number},methods:{input:function(e){this.$emit("input",ke()(e.target.value,10))}},watch:{pageCount:function(){this.$emit("input",1)}}},Te=je,Oe=(n("ac8d"),Object(g["a"])(Te,$e,xe,!1,null,null,null)),Ne=Oe.exports,ze=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ScrollingDocument",e._b({staticClass:"pdf-preview",attrs:{"is-parent-visible":e.isPreviewEnabled},on:{"pages-fetch":e.onPagesFetch},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.page,i=t.isPageFocused;return[n("PDFThumbnail",e._b({on:{"thumbnail-rendered":e.onThumbnailRendered,"thumbnail-errored":e.onThumbnailErrored,"page-focus":e.onPageFocused}},"PDFThumbnail",{scale:e.scale,page:a,isPageFocused:i},!1))]}}])},"ScrollingDocument",{pages:e.pages,pageCount:e.pageCount,currentPage:e.currentPage},!1))},Ae=[],He=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"visible",rawName:"v-visible.once",value:e.drawPage,expression:"drawPage",modifiers:{once:!0}}],staticClass:"pdf-thumbnail",class:{focused:e.isPageFocused},on:{click:e.focusPage}},[e.src?n("img",{staticClass:"box-shadow",attrs:{src:e.src}}):n("div",{staticClass:"placeholder box-shadow"},[n("div",{staticClass:"content"},[e._v("\n      Loading\n    ")])]),n("span",{staticClass:"page-number"},[e._v(e._s(e.pageNumber))])])},Me=[],Ve=z()("app:components/PDFThumbnail"),Be={name:"PDFThumbnail",props:{page:{type:Object,required:!0},scale:{required:!0},isPageFocused:{type:Boolean,default:!1}},directives:{visible:W},data:function(){return{src:void 0}},computed:{viewport:function(){return this.page.getViewport(1)},pageNumber:function(){return this.page.pageNumber}},methods:{focusPage:function(){this.$emit("page-focus",this.pageNumber)},drawPage:function(){var e=this;if(!this.renderTask){var t=this.viewport,n=document.createElement("canvas"),a=n.getContext("2d"),i={canvasContext:a,viewport:t};n.height=t.height,n.width=t.width,this.renderTask=this.page.render(i),this.renderTask.then(function(){e.src=n.toDataURL(),n.width=0,n.height=0}).then(function(){e.$emit("thumbnail-rendered",{page:e.page,text:"Rendered thumbnail ".concat(e.pageNumber)})}).catch(function(t){e.destroyRenderTask(),e.$emit("thumbnail-errored",{response:t,page:e.page,text:"Failed to render thumbnail ".concat(e.pageNumber)})})}},destroyPage:function(e,t){t&&t._destroy(),this.destroyRenderTask()},destroyRenderTask:function(){this.renderTask&&(this.renderTask.cancel(),delete this.renderTask)},updateVisibility:function(){this.$parent.$emit("update-visibility")}},watch:{page:"destroyPage",src:"updateVisibility",scale:"updateVisibility"},mounted:function(){Ve("Page ".concat(this.pageNumber," mounted"))},beforeDestroy:function(){this.destroyPage(void 0,this.page)}},Re=Be,Ue=(n("8996"),Object(g["a"])(Re,He,Me,!1,null,"bb1e52da",null)),Ie=Ue.exports,Le={name:"PDFPreview",components:{ScrollingDocument:Q,PDFThumbnail:Ie},props:{pages:{required:!0},pageCount:{type:Number,default:0},scale:{type:Number,default:1},currentPage:{type:Number,default:1},isPreviewEnabled:{default:!1}},methods:{onPagesFetch:function(e){this.$parent.$emit("pages-fetch",e)},onPageFocused:function(e){this.$parent.$emit("page-focus",e)},onThumbnailRendered:function(e){this.$el.dispatchEvent(new Event("scroll")),this.$parent.$emit("thumbnail-rendered",e)},onThumbnailErrored:function(e){this.$parent.$emit("thumbnail-errored",e)}}},We=Le,qe=(n("5cc6"),Object(g["a"])(We,ze,Ae,!1,null,"38be731e",null)),Je=qe.exports,Ze=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pdf-zoom"},[n("a",{staticClass:"icon",attrs:{disabled:e.isDisabled},on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.zoomIn(t)}}},[n("ZoomInIcon")],1),n("a",{staticClass:"icon",attrs:{disabled:e.isDisabled},on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.zoomOut(t)}}},[n("ZoomOutIcon")],1),n("a",{staticClass:"icon",attrs:{disabled:e.isDisabled},on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.fitWidth(t)}}},[n("ExpandIcon")],1),n("a",{staticClass:"icon",attrs:{disabled:e.isDisabled},on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.fitAuto(t)}}},[n("ShrinkIcon")],1)])},Ke=[],Xe=n("bae7"),Ye=n.n(Xe),Ge=n("54c5"),Qe=n.n(Ge),et=n("efa8"),tt=n.n(et),nt=n("c568"),at=n.n(nt),it={name:"PDFZoom",components:{ZoomInIcon:Ye.a,ZoomOutIcon:Qe.a,ExpandIcon:tt.a,ShrinkIcon:at.a},props:{scale:{type:Number},increment:{type:Number,default:.25}},computed:{isDisabled:function(){return!this.scale}},methods:{zoomIn:function(){this.updateScale(this.scale+this.increment)},zoomOut:function(){this.scale<=this.increment||this.updateScale(this.scale-this.increment)},updateScale:function(e){this.$emit("change",{scale:e})},fitWidth:function(){this.$emit("fit","width")},fitAuto:function(){this.$emit("fit","auto")}}},rt=it,ot=(n("2f02"),Object(g["a"])(rt,Ze,Ke,!1,null,null,null)),st=ot.exports;function ct(e,t){var n=Math.pow(10,t||0);return Math.floor(e*n)/n}var ut={name:"PDFViewer",components:{PDFDocument:le,PDFData:Se,PDFPaginator:Ne,PDFPreview:Je,PDFZoom:st,PreviewIcon:_.a},props:{url:String},data:function(){return{scale:void 0,optimalScale:void 0,fit:void 0,currentPage:1,pageCount:void 0,isPreviewEnabled:!1}},methods:{onDocumentRendered:function(){this.$emit("document-errored",this.url)},onDocumentErrored:function(e){this.$emit("document-errored",e)},updateScale:function(e){var t=e.scale,n=e.isOptimal,a=void 0!==n&&n,i=ct(t,2);a&&(this.optimalScale=i),this.scale=i},updateFit:function(e){this.fit=e},updatePageCount:function(e){this.pageCount=e},updateCurrentPage:function(e){this.currentPage=e},togglePreview:function(){this.isPreviewEnabled=!this.isPreviewEnabled}},watch:{url:function(){this.currentPage=void 0}},mounted:function(){document.body.classList.add("overflow-hidden")}},lt=ut,dt=(n("8020"),Object(g["a"])(lt,b,P,!1,null,"7d2c27b6",null)),pt=dt.exports,ht={name:"app",components:{PDFUploader:v,PDFViewer:pt},data:function(){return{url:"https://cdn.filestackcontent.com/wcrjf9qPTCKXV3hMXDwK",documentError:void 0,enableUploader:"true"===Object({NODE_ENV:"production",VUE_APP_PDF_URL:"https://cdn.filestackcontent.com/wcrjf9qPTCKXV3hMXDwK",BASE_URL:"/vue-pdfjs-demo/"}).VUE_APP_UPLOAD_ENABLED}},methods:{urlUpdated:function(e){this.documentError=void 0,this.url=e},onDocumentErrored:function(e){this.documentError=e.text}}},ft=ht,gt=(n("034f"),Object(g["a"])(ft,r,o,!1,null,null,null)),mt=gt.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(mt)}}).$mount("#app")},"5cc6":function(e,t,n){"use strict";var a=n("ca21"),i=n.n(a);i.a},"64a9":function(e,t,n){},"64cb":function(e,t,n){"use strict";var a=n("d3df"),i=n.n(a);i.a},"7e37":function(e,t,n){},8020:function(e,t,n){"use strict";var a=n("e1a4"),i=n.n(a);i.a},8996:function(e,t,n){"use strict";var a=n("f9dd"),i=n.n(a);i.a},ac8d:function(e,t,n){"use strict";var a=n("daa6"),i=n.n(a);i.a},bae7:function(e,t){var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100"}},[n("path",{attrs:{d:"M93.2 84.8L70.6 62.3c4.3-6 6.8-13.3 6.8-21.2C77.4 21 61.2 4.8 41.1 4.8 21 4.8 4.8 21 4.8 41.1S21 77.4 41.1 77.4c7.8 0 15.1-2.5 21-6.7l22.6 22.6c2 2 5.4 2 7.4 0l1.1-1.1c2-2 2-5.3 0-7.4zM41.1 66.6c-14.1 0-25.5-11.4-25.5-25.5S27 15.6 41.1 15.6 66.6 27 66.6 41.1 55.2 66.6 41.1 66.6z"}}),n("path",{attrs:{d:"M53.1 36.5h-7.6v-7.6c0-2.5-2-4.5-4.5-4.5s-4.5 2-4.5 4.5v7.6H29c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5h7.6v7.6c0 2.5 2 4.5 4.5 4.5s4.5-2 4.5-4.5v-7.6h7.6c2.5 0 4.5-2 4.5-4.5s-2.1-4.5-4.6-4.5z"}})])},a=function(){return"/home/circleci/rossta/vue-pdfjs-demo/src/assets/icon-zoom-in.svg"};e.exports={render:n,toString:a}},c568:function(e,t){var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"}},[n("path",{attrs:{d:"M15 7H9V1h2v4h4zm-8 8H5v-4H1V9h6zm3-8a.999.999 0 0 1-.707-1.707l5-5a.999.999 0 1 1 1.414 1.414l-5 5A.997.997 0 0 1 10 7zm-9 9a.999.999 0 0 1-.707-1.707l5-5a.999.999 0 1 1 1.414 1.414l-5 5A.997.997 0 0 1 1 16z"}})])},a=function(){return"/home/circleci/rossta/vue-pdfjs-demo/src/assets/icon-shrink.svg"};e.exports={render:n,toString:a}},c593:function(e,t){var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"}},[n("path",{attrs:{d:"M31 14H13a1 1 0 0 1 0-2h18a1 1 0 1 1 0 2zM31 17H13a1 1 0 0 1 0-2h18a1 1 0 1 1 0 2zM26 20H13a1 1 0 1 1 0-2h13a1 1 0 1 1 0 2zM31 25H13a1 1 0 1 1 0-2h18a1 1 0 1 1 0 2zM31 28H13a1 1 0 1 1 0-2h18a1 1 0 1 1 0 2zM17 31h-4a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2zM31 3H13a1 1 0 0 1 0-2h18a1 1 0 1 1 0 2zM31 6H13a1 1 0 0 1 0-2h18a1 1 0 1 1 0 2zM22 9h-9a1 1 0 0 1 0-2h9a1 1 0 1 1 0 2zM7.504 10H2.496A2.5 2.5 0 0 1 0 7.504V2.496A2.5 2.5 0 0 1 2.496 0h5.008A2.5 2.5 0 0 1 10 2.496v5.008A2.5 2.5 0 0 1 7.504 10zM2.496 2A.497.497 0 0 0 2 2.496v5.008c0 .273.223.496.496.496h5.008A.497.497 0 0 0 8 7.504V2.496A.497.497 0 0 0 7.504 2H2.496zM7.504 21H2.496A2.5 2.5 0 0 1 0 18.504v-5.008A2.5 2.5 0 0 1 2.496 11h5.008A2.5 2.5 0 0 1 10 13.496v5.008A2.5 2.5 0 0 1 7.504 21zm-5.008-8a.497.497 0 0 0-.496.496v5.008c0 .273.223.496.496.496h5.008A.497.497 0 0 0 8 18.504v-5.008A.497.497 0 0 0 7.504 13H2.496zM7.504 32H2.496A2.5 2.5 0 0 1 0 29.504v-5.008A2.5 2.5 0 0 1 2.496 22h5.008A2.5 2.5 0 0 1 10 24.496v5.008A2.5 2.5 0 0 1 7.504 32zm-5.008-8a.497.497 0 0 0-.496.496v5.008c0 .273.223.496.496.496h5.008A.497.497 0 0 0 8 29.504v-5.008A.497.497 0 0 0 7.504 24H2.496z"}})])},a=function(){return"/home/circleci/rossta/vue-pdfjs-demo/src/assets/icon-preview.svg"};e.exports={render:n,toString:a}},ca21:function(e,t,n){},d3df:function(e,t,n){},daa6:function(e,t,n){},e1a4:function(e,t,n){},efa8:function(e,t){var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"}},[n("path",{attrs:{d:"M6 16H0v-6h2v4h4zM16 6h-2V2h-4V0h6zM1 16a.999.999 0 0 1-.707-1.707l5-5a.999.999 0 1 1 1.414 1.414l-5 5A.997.997 0 0 1 1 16zm9-9a.999.999 0 0 1-.707-1.707l5-5a.999.999 0 1 1 1.414 1.414l-5 5A.997.997 0 0 1 10 7z"}})])},a=function(){return"/home/circleci/rossta/vue-pdfjs-demo/src/assets/icon-expand.svg"};e.exports={render:n,toString:a}},f793:function(e,t,n){},f9dd:function(e,t,n){}});
//# sourceMappingURL=app.2bc7f1e7.js.map