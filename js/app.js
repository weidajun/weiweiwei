(function(t){function e(e){for(var i,a,s=e[0],u=e[1],c=e[2],f=0,h=[];f<s.length;f++)a=s[f],r[a]&&h.push(r[a][0]),r[a]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(t[i]=u[i]);l&&l(e);while(h.length)h.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,s=1;s<n.length;s++){var u=n[s];0!==r[u]&&(i=!1)}i&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},r={app:0},o=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var l=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("64a9"),r=n.n(i);r.a},"56d7":function(t,e,n){"use strict";n.r(e);var i=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("canvas",{ref:"canvas"})])},o=[],a=(n("ac6a"),{name:"app",data:function(){return{ctx:null,isRun:!0,moveItems:[{text:"〇",fillStyle:"#148acf",x:0,y:0,vx:7,vy:7},{text:"喂",fillStyle:"#16c6d8",x:0,y:0,vx:5,vy:7},{text:"喂",fillStyle:"#16c6d8",x:0,y:0,vx:5.5,vy:6.5},{text:"喂",fillStyle:"#16c6d8",x:0,y:0,vx:6,vy:6},{text:"喂",fillStyle:"#16c6d8",x:0,y:0,vx:6.5,vy:5.5},{text:"喂",fillStyle:"#16c6d8",x:0,y:0,vx:7,vy:5}]}},mounted:function(){this.init(),this.start(),window.app=this},methods:{init:function(){var t=this;this.ctx=this.$refs.canvas.getContext("2d"),this.resize(),this.resize=this.resize.bind(this),window.addEventListener("resize",this.resize),this.$once("hook:beforeDestroy",function(){window.removeEventListener("resize",t.resize),t.isRun=!1}),this.moveItems.forEach(function(t){t.vx=Math.random()*t.vx,t.vy=Math.random()*t.vy})},resize:function(){var t=this.$refs.canvas,e=this.$el;t.setAttribute("width",e.clientWidth+"px"),t.setAttribute("height",e.clientHeight+"px"),this.ctx.width=e.clientWidth,this.ctx.height=e.clientHeight},start:function(){this.isRun=!0,this.draw77()},draw77:function(t){var e=this,n=this.ctx||t;n.clearRect(0,0,n.width,n.height),n.font="48px serif",this.moveItems.forEach(function(t){n.fillStyle=t.fillStyle,n.fillText(t.text,t.x,t.y),t.x+=t.vx,t.y+=t.vy,t.x>n.width?t.vx=-Math.abs(t.vx):t.x<0&&(t.vx=Math.abs(t.vx)),t.y>n.height?t.vy=-Math.abs(t.vy):t.y<0&&(t.vy=Math.abs(t.vy))}),requestAnimationFrame(function(){e.isRun&&e.draw77()})}}}),s=a,u=(n("034f"),n("2877")),c=Object(u["a"])(s,r,o,!1,null,null,null),l=c.exports,f=n("2f62");i["a"].use(f["a"]);var h=new f["a"].Store({state:{},mutations:{},actions:{}});i["a"].config.productionTip=!1,new i["a"]({store:h,render:function(t){return t(l)}}).$mount("#app")},"64a9":function(t,e,n){}});