(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{345:function(e,a,s){},429:function(e,a,s){"use strict";s(345)},457:function(e,a,s){"use strict";s.r(a);s(366);var t=s(454),i=s(472),r=s(455),c=s(452),n={components:{ImageViewer:t.a,BrowseIcon:c.a,Popup:i.a,TImage:r.a},props:{images:{type:Array,default:()=>[]}},computed:{resolveImages(){return this.images.map(e=>this.$withBase(e))}}},o=(s(429),s(15)),p=Object(o.a)(n,(function(){var e=this,a=e._self._c;return a("Popup",{attrs:{content:"点击可以预览哟~",placement:"left"}},[a("ImageViewer",{attrs:{images:e.resolveImages,"image-scale":{min:.5,max:5,step:.5}},scopedSlots:e._u([{key:"trigger",fn:function({open:s}){return[a("div",{staticClass:"gcp-image_preview__image gcp-image_preview__base"},[a("TImage",{staticClass:"gcp-image_preview__image--img",attrs:{src:e.resolveImages[0]}}),e._v(" "),a("div",{staticClass:"gcp-image_preview__image--hover",on:{click:s}},[a("span",{staticClass:"icon"},[a("BrowseIcon",{attrs:{size:"1.4em"}}),e._v("  预览")],1)])],1)]}}])})],1)}),[],!1,null,"058f2a3c",null);a.default=p.exports}}]);