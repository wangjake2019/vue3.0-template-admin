!function(){var e=document.createElement("style");e.innerHTML=".editorWrapper[data-v-44db0bca]{margin-top:20px}.editorWrapper[data-v-44db0bca] .w-e-text-container{text-align:left}.editorWrapper .info[data-v-44db0bca]{text-align:left;padding-left:20px;margin-bottom:20px;font-size:12px}.editorWrapper .section[data-v-44db0bca]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center}.editorWrapper .el-row[data-v-44db0bca]{margin-bottom:20px}\n",document.head.appendChild(e),System.register(["./richEditor-legacy.9eeb4fe4.js","./vendor-legacy.e2c28588.js"],(function(e){"use strict";var t,n,a,r,o,d,i,l,u,c,f,p;return{setters:[function(e){t=e._},function(e){n=e.d,a=e.r,r=e.k,o=e.e,d=e.c,i=e.g,l=e.s,u=e.q,c=e.I,f=e.p,p=e.f}],execute:function(){var s=e("default",n({components:{RichEditor:t},setup:function(){var e=a("默认数据"),t=a();setTimeout((function(){e.value="3秒后的数据"}),3e3);return{handleUpdateValue:function(e){console.log(e),t.value=e},editorValue:e}}})),v=function(e){return f("data-v-44db0bca"),e=e(),p(),e},b={class:"editorWrapper"},g={class:"info"},m=c("富文本编辑器"),x=v((function(){return i("span",{style:{"text-align":"left"}},"富文本编辑器编辑场景。",-1)})),y={class:"grid-content bg-purple-dark"},h={style:{"text-align":"left"}},_=v((function(){return i("span",null,"富文本编辑器",-1)}));s.render=function(e,t,n,a,c,f){var p=r("el-divider"),s=r("RichEditor",!0),v=r("el-card"),V=r("el-col"),W=r("el-row");return o(),d("div",b,[i("div",g,[l(p,{"content-position":"left"},{default:u((function(){return[m]})),_:1}),x]),i("div",null,[l(W,null,{default:u((function(){return[l(V,{offset:1,span:22},{default:u((function(){return[i("div",y,[l(v,{class:"box-card"},{default:u((function(){return[i("div",h,[_,l(p)]),l(s,{"model-value":e.editorValue,"onUpdate:modelValue":e.handleUpdateValue},null,8,["model-value","onUpdate:modelValue"])]})),_:1})])]})),_:1})]})),_:1})])])},s.__scopeId="data-v-44db0bca"}}}))}();
