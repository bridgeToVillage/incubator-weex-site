(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{199:function(t,i,n){},266:function(t,i,n){"use strict";var e=n(199);n.n(e).a},318:function(t,i,n){"use strict";n.r(i);n(91),n(72),n(29);var e="https://editor.weex.alibaba-inc.com";function s(t,i){var n=[];for(var e in i)Object.prototype.hasOwnProperty.call(i,e)&&i[e]&&n.push({name:e,value:i[e]});return t&&n.length&&(t+="?"+n.map(function(t){return"".concat(t.name,"=").concat(t.value)}).join("&")),t}var a={props:["hash","file","line","mode","buttons"],data:function(){return{url:this.createURL(),showControls:!1,height:"auto"}},created:function(){this.line&&(this.height=this.calculateHeight()+"px")},methods:{createURL:function(){var t=this.src?this.src:"".concat(e,"/source/").concat(this.hash);return this.file&&(t+="/".concat(this.file)),s(t,{line:this.line})},onLoad:function(){"none"!==this.buttons&&(this.showControls=!0)},calculateHeight:function(){if(this.line){var t=this.line.split(/\-|\~/i),i=parseInt(t[0],10);return 19*((parseInt(t[1],10)||i)-i+1)+20}},openURL:function(){try{var t=s("".concat(e,"/vue/").concat(this.hash),{file:this.file,line:this.line});window.open(t)}catch(t){}}}},o=(n(266),n(1)),c=Object(o.a)(a,function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"wrapper"},[i("iframe",{ref:"iframe",staticClass:"iframe",style:{height:this.height},attrs:{src:this.url,frameborder:"0"},on:{load:this.onLoad}}),this.showControls?i("div",{staticClass:"controls"},[i("div",{staticClass:"btn",on:{click:this.openURL}},[i("span",{staticClass:"btn-text"},[this._v("Open")])])]):this._e()])},[],!1,null,"ea420976",null);i.default=c.exports}}]);