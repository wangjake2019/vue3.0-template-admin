var i=Object.defineProperty,e=Object.defineProperties,l=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,o=(e,l,c)=>l in e?i(e,l,{enumerable:!0,configurable:!0,writable:!0,value:c}):e[l]=c,n=(i,e)=>{for(var l in e||(e={}))a.call(e,l)&&o(i,l,e[l]);if(c)for(var l of c(e))t.call(e,l)&&o(i,l,e[l]);return i},s=(i,c)=>e(i,l(c));import{u as r,a as d}from"./index.85afc891.js";import{d as u,y as m,r as f,b as p,A as g,k as b,e as h,c as k,s as v,q as y,g as w,F as _,t as C,n as V,p as S,f as z,aR as x,G as E,I as j,J as M,i as O,v as q,K as I}from"./vendor.b380b2be.js";import{c as R}from"./index.5bee2ba3.js";var U=u({name:"Icon",props:{msg:{type:String,required:!1,default:""}},emits:["success"],setup:(i,{emit:e})=>{const l=m({icons:["ic ic-accessory","ic ic-activity","ic ic-activity-fill","ic ic-add","ic ic-addition-fill","ic ic-addition","ic ic-addpeople-fill","ic ic-addpeople","ic ic-addressbook-fill","ic ic-addressbook","ic ic-barrage-fill","ic ic-barrage","ic ic-browse-fill","ic ic-browse","ic ic-brush","ic ic-brush-fill","ic ic-businesscard-fill","ic ic-businesscard","ic ic-camera-fill","ic ic-camera","ic ic-clock-fill","ic ic-clock","ic ic-close","ic ic-collection-fill","ic ic-collection","ic ic-computer-fill","ic ic-computer","ic ic-coordinates-fill","ic ic-coordinates","ic ic-coupons-fill","ic ic-coupons","ic ic-createtask-fill","ic ic-createtask","ic ic-customerservice-fill","ic ic-customerservice","ic ic-delete-fill","ic ic-delete","ic ic-document","ic ic-document-fill","ic ic-dynamic ic-fill","ic ic-dynamic","ic ic-editor","ic ic-eit","ic ic-emoji-fill","ic ic-emoji","ic ic-empty","ic ic-empty-fill","ic ic-enter","ic ic-enterinto","ic ic-enterinto-fill","ic ic-feedback-fill","ic ic-feedback","ic ic-flag-fill","ic ic-flag","ic ic-flashlight","ic ic-flashlight-fill","ic ic-flip","ic ic-flip-fill","ic ic-fullscreen","ic ic-group","ic ic-group-fill","ic ic-headlines-fill","ic ic-headlines","ic ic-homepage-fill","ic ic-homepage","ic ic-integral-fill","ic ic-integral","ic ic-interactive-fill","ic ic-interactive","ic ic-keyboard","ic ic-label","ic ic-label-fill","ic ic-like-fill","ic ic-like","ic ic-live-fill","ic ic-live","ic ic-lock-fill","ic ic-lock","ic ic-mail","ic ic-mail-fill","ic ic-manage-fill","ic ic-manage","ic ic-message","ic ic-message-fill","ic ic-mine","ic ic-mine-fill","ic ic-mobilephone-fill","ic ic-mobilephone","ic ic-more","ic ic-narrow","ic ic-offline-fill","ic ic-offline","ic ic-order-fill","ic ic-order","ic ic-other","ic ic-people-fill","ic ic-people","ic ic-picture-fill","ic ic-picture","ic ic-play","ic ic-play-fill","ic ic-playon-fill","ic ic-playon","ic ic-praise-fill","ic ic-praise","ic ic-prompt-fill","ic ic-prompt","ic ic-qrcode-fill","ic ic-qrcode","ic ic-redpacket-fill","ic ic-redpacket","ic ic-refresh","ic ic-remind-fill","ic ic-remind","ic ic-return","ic ic-right","ic ic-scan","ic ic-select-fill","ic ic-select","ic ic-send","ic ic-service-fill","ic ic-service","ic ic-setup-fill","ic ic-setup","ic ic-share-fill","ic ic-share","ic ic-shielding-fill","ic ic-shielding","ic ic-smallscreen-fill","ic ic-smallscreen","ic ic-stealth-fill","ic ic-stealth","ic ic-success-fill","ic ic-success","ic ic-suspend","ic ic-switch","ic ic-systemprompt-fill","ic ic-systemprompt","ic ic-tailor","ic ic-task","ic ic-task-fill","ic ic-tasklist-fill","ic ic-tasklist","ic ic-text","ic ic-time-fill","ic ic-time","ic ic-translation-fill","ic ic-translation","ic ic-trash","ic ic-trash-fill","ic ic-undo","ic ic-unlock-fill","ic ic-unlock","ic ic-video","ic ic-video-fill","ic ic-warning-fill","ic ic-warning","ic ic-workbench-fill","ic ic-workbench","ic ic-search","ic ic-searchfill","ic ic-publishgoods-fill","ic ic-shop-fill","ic ic-transaction-fill","ic ic-packup","ic ic-unfold","ic ic-wangwang","ic ic-financial-fill","ic ic-marketing-fill","ic ic-shake","ic ic-decoration-fill","ic ic-questions","ic ic-supply","ic ic-tools","ic ic-int","ic ic-commodity","ic ic-zhtn"],data:[""],key:""}),c=f(0);return p((()=>{l.data=l.icons})),s(n({count:c},g(l)),{search:()=>{const{key:i}=l,{icons:e}=l;l.data=i?e.filter((i=>e=>e.toLowerCase().indexOf(i.toLowerCase())>0)(i)):e},selected:i=>{e("success",i)}})}});const A=i=>(S("data-v-57f84410"),i=i(),z(),i),P={class:"icon-panel"},F=A((()=>w("br",null,null,-1))),D=A((()=>w("br",null,null,-1))),L=["onClick"],Z=A((()=>w("br",null,null,-1)));U.render=function(i,e,l,c,a,t){const o=b("el-button"),n=b("el-input");return h(),k("div",P,[v(n,{modelValue:i.key,"onUpdate:modelValue":e[1]||(e[1]=e=>i.key=e),placeholder:"搜索图标",onInput:i.search},{default:y((()=>[v(o,{icon:"el-icon-search",onClick:e[0]||(e[0]=e=>i.search())})])),_:1},8,["modelValue","onInput"]),F,D,w("section",null,[(h(!0),k(_,null,C(i.data,(e=>(h(),k("span",{key:e,class:"icon-items",onClick:l=>i.selected(e)},[w("i",{class:V(e)},null,2),Z],8,L)))),128))])])},U.__scopeId="data-v-57f84410";const $=/^(\/[a-zA-Z][0-9a-zA-Z]+)+$/,B=(i,e,l)=>{$.test(e)?l():l(new Error("必须输入正确的路径"))};var T=u({name:"MenuNew",components:{Icons:U},emits:["success"],setup(i,{emit:e}){const l={"meta.title":[{required:!0,message:"请输入菜单名称",trigger:"blur"},{min:2,max:10,message:"长度在 2 到 10 个字符",trigger:"blur"}],"meta.icon":[{required:!0,message:"请输入菜单图标",trigger:"blur"}],path:[{required:!0,message:"请输入菜单路径",trigger:"blur"},{min:2,message:"至少2个字符",trigger:"blur"},{validator:B,trigger:"blur"}]},c=f(),a=m({form:{path:"",meta:{title:"",icon:""}},modal:!1,loading:!1});return s(n({},g(a)),{formRef:c,rules:l,onSuccess:i=>{console.log("val is ",i),a.modal=!1,a.form.meta.icon=i},submitForm:()=>{c.value.validate((i=>!!i&&(console.log(a.form),e("success",a.form),!0)))},handleClickChoose:()=>{a.modal=!a.modal,console.log(" state.modal",a.modal)}})}});const N={class:"new"},G=j("选择图标"),J=w("i",{class:"fa fa-plus"},null,-1),K=j(" 确认修改 ");T.render=function(i,e,l,c,a,t){const o=b("el-input"),n=b("el-form-item"),s=b("el-button"),r=b("icons"),d=b("el-popover"),u=b("el-row"),m=b("el-form"),f=x("loading");return E((h(),k("div",N,[v(m,{ref:"formRef",model:i.form,rules:i.rules,"label-position":"right","label-width":"100px"},{default:y((()=>[v(n,{label:"菜单名称",prop:"meta.title"},{default:y((()=>[v(o,{modelValue:i.form.meta.title,"onUpdate:modelValue":e[0]||(e[0]=e=>i.form.meta.title=e),placeholder:"请输入菜单名称"},null,8,["modelValue"])])),_:1}),v(n,{label:"菜单图标",prop:"meta.icon"},{default:y((()=>[v(o,{modelValue:i.form.meta.icon,"onUpdate:modelValue":e[1]||(e[1]=e=>i.form.meta.icon=e),placeholder:"请选择菜单图标",style:{width:"60%"}},null,8,["modelValue"]),v(s,{disabled:"disabled"},{default:y((()=>[w("i",{class:V(i.form.meta.icon)},null,2)])),_:1}),v(d,{visible:i.modal,placement:"bottom",width:"80vw",title:"请选择图标"},{reference:y((()=>[v(s,{icon:"el-icon-search",onClick:i.handleClickChoose},{default:y((()=>[G])),_:1},8,["onClick"])])),default:y((()=>[v(r,{onSuccess:i.onSuccess},null,8,["onSuccess"])])),_:1},8,["visible"])])),_:1}),v(n,{label:"菜单路径",prop:"path"},{default:y((()=>[v(o,{modelValue:i.form.path,"onUpdate:modelValue":e[2]||(e[2]=e=>i.form.path=e),placeholder:"请输入菜单路径"},null,8,["modelValue"])])),_:1}),v(u,{class:"btn-container"},{default:y((()=>[v(s,{size:"mini",type:"primary",onClick:e[3]||(e[3]=e=>i.submitForm())},{default:y((()=>[J,K])),_:1})])),_:1})])),_:1},8,["model","rules"])],512)),[[f,i.loading]])};const H=/^(\/[a-zA-Z][0-9a-zA-Z]+)+$/,Q=(i,e,l)=>{H.test(e)?l():l(new Error("必须输入正确的路径"))};var W=u({name:"MenuEdit",components:{Icons:U},props:{currentMenu:{type:Object,default:null}},emits:["success"],setup(i,{emit:e}){const l=M(i,"currentMenu");console.log(l);const c={"meta.title":[{required:!0,message:"请输入菜单名称",trigger:"blur"},{min:2,max:10,message:"长度在 2 到 10 个字符",trigger:"blur"}],"meta.icon":[{required:!0,message:"请输入菜单图标",trigger:"blur"}],path:[{required:!0,message:"请输入菜单路径",trigger:"blur"},{min:2,message:"至少2个字符",trigger:"blur"},{validator:Q,trigger:"blur"}]},a=f(),t=m({form:l,modal:!1,loading:!1});return s(n({},g(t)),{formRef:a,rules:c,onSuccess:i=>{console.log("val is ",i),t.modal=!1,t.form.meta.icon=i},submitForm:()=>{a.value.validate((i=>!!i&&(console.log(t.form),e("success",t.form),!0)))},handleClickChoose:()=>{t.modal=!t.modal,console.log(" state.modal",t.modal)}})}});const X={class:"new"},Y=j("选择图标"),ii=w("i",{class:"fa fa-plus"},null,-1),ei=j(" 确认修改 ");W.render=function(i,e,l,c,a,t){const o=b("el-input"),n=b("el-form-item"),s=b("el-button"),r=b("icons"),d=b("el-popover"),u=b("el-row"),m=b("el-form"),f=x("loading");return E((h(),k("div",X,[v(m,{ref:"formRef",model:i.form,rules:i.rules,"label-position":"right","label-width":"100px"},{default:y((()=>[v(n,{label:"菜单名称",prop:"meta.title"},{default:y((()=>[v(o,{modelValue:i.form.meta.title,"onUpdate:modelValue":e[0]||(e[0]=e=>i.form.meta.title=e),placeholder:"请输入菜单名称"},null,8,["modelValue"])])),_:1}),v(n,{label:"菜单图标",prop:"meta.icon"},{default:y((()=>[v(o,{modelValue:i.form.meta.icon,"onUpdate:modelValue":e[1]||(e[1]=e=>i.form.meta.icon=e),placeholder:"请选择菜单图标",style:{width:"60%"}},null,8,["modelValue"]),v(s,{disabled:"disabled"},{default:y((()=>[w("i",{class:V(i.form.meta.icon)},null,2)])),_:1}),v(d,{visible:i.modal,placement:"bottom",width:"80vw",title:"请选择图标"},{reference:y((()=>[v(s,{icon:"el-icon-search",onClick:i.handleClickChoose},{default:y((()=>[Y])),_:1},8,["onClick"])])),default:y((()=>[v(r,{onSuccess:i.onSuccess},null,8,["onSuccess"])])),_:1},8,["visible"])])),_:1}),v(n,{label:"菜单路径",prop:"path"},{default:y((()=>[v(o,{modelValue:i.form.path,"onUpdate:modelValue":e[2]||(e[2]=e=>i.form.path=e),placeholder:"请输入菜单路径"},null,8,["modelValue"])])),_:1}),v(u,{class:"btn-container"},{default:y((()=>[v(s,{size:"mini",type:"primary",onClick:e[3]||(e[3]=e=>i.submitForm())},{default:y((()=>[ii,ei])),_:1})])),_:1})])),_:1},8,["model","rules"])],512)),[[f,i.loading]])};var li=u({name:"Menu",components:{MenuNew:T,MenuEdit:W},setup(){const i=r(),e=O((()=>i.getters["settingsModule/getLangState"])),l=m({url:{c:"/menu/add",r:"/menu/list",u:"/menu/update",d:"/menu/delete"},param:{limit:10,page:1},data:[{path:"/",redirect:"/home",meta:{title:"首页",icon:"el-icon-s-home"},children:[{path:"/home",name:"home",component:()=>d((()=>import("./home.a220047e.js")),["assets/home.a220047e.js","assets/home.2f28bf9a.css","assets/index.85afc891.js","assets/index.bd70e704.css","assets/vendor.b380b2be.js","assets/index.16a9c541.js"]),meta:{title:"首页",icon:"home"}}]}],total:1,loading:!1,addVisible:!1,editVisible:!1,detailVisible:!1,posted:{menu:{path:"",meta:{title:"",icon:""}}}}),c=O((()=>i.state.permissionModule.accessRoutes)),a=i=>{console.log(i)};return p((()=>{(()=>{const i=c.value.filter((i=>{var e;return!0!==(null==(e=null==i?void 0:i.meta)?void 0:e.hidden)}));l.data=i})()})),s(n({},g(l)),{onError:()=>{},lang:e,onAddSuccess:()=>{l.addVisible=!1,a()},onEditSuccess:()=>{console.log("on edit success"),l.editVisible=!1},onDelete:(i,e)=>{console.log(e),(i=>{console.log(i),R.ElMessageBox.confirm("此操作将永久删除该数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{R.ElMessage({type:"success",message:"删除成功"})})).catch((()=>{R.ElMessage({type:"info",message:"已取消删除"})}))})(i)},onCurrentChange:i=>{a(i)},onSizeChange:i=>{l.param.limit=i,a(i)},onCreate:()=>{l.addVisible=!0},onRefresh:()=>{a()},onEdit:(i,e)=>{console.log("row,",e,i),l.posted.menu=e,l.editVisible=!0}})}});const ci=j("新增"),ai=j("刷新"),ti={class:"pagination"};li.render=function(i,e,l,c,a,t){const o=b("el-button"),n=b("el-col"),s=b("el-table-column"),r=b("el-tag"),d=b("el-tooltip"),u=b("el-table"),m=b("el-pagination"),f=b("el-row"),p=b("el-card"),g=b("menu-new"),C=b("el-dialog"),S=b("menu-edit"),z=x("loading");return h(),k("div",null,[v(p,{class:"card-ctrl"},{default:y((()=>[v(f,null,{default:y((()=>[v(n,null,{default:y((()=>[v(n,null,{default:y((()=>[v(o,{type:"primary",icon:"el-icon-plus",size:"small",onClick:i.onCreate},{default:y((()=>[ci])),_:1},8,["onClick"]),v(o,{type:"success",icon:"el-icon-refresh",size:"small",onClick:i.onRefresh},{default:y((()=>[ai])),_:1},8,["onClick"])])),_:1}),E(v(u,{data:i.data,stripe:"",class:"table"},{default:y((()=>[v(s,{label:"菜单名称",align:"center"},{default:y((e=>[w("span",null,q(e.row.meta.title[i.lang]),1)])),_:1}),v(s,{label:"图标",align:"center"},{default:y((i=>[w("i",{class:V(i.row.meta.icon)},null,2)])),_:1}),v(s,{label:"路径",align:"center"},{default:y((i=>[v(r,{size:"mini",type:"info"},{default:y((()=>[j(q(i.row.path),1)])),_:2},1024)])),_:1}),v(s,{label:"操作",align:"center"},{default:y((e=>[0!=e.row.state?(h(),k(_,{key:0},[v(d,{class:"item",effect:"dark",content:"修改",placement:"bottom"},{default:y((()=>[v(o,{circle:"",plain:"",type:"primary",icon:"el-icon-edit",size:"mini",onClick:l=>i.onEdit(e.$index,e.row)},null,8,["onClick"])])),_:2},1024),v(d,{class:"item",effect:"dark",content:"删除",placement:"bottom"},{default:y((()=>[v(o,{circle:"",plain:"",type:"danger",icon:"el-icon-minus",size:"mini",onClick:l=>i.onDelete(e.$index,e.row)},null,8,["onClick"])])),_:2},1024)],64)):I("",!0)])),_:1})])),_:1},8,["data"]),[[z,i.loading]]),w("div",ti,[v(m,{"current-page":i.param.page,"page-size":i.param.limit,layout:"sizes,prev,pager,next,total","page-sizes":[5,10,20],total:i.total,background:"",onCurrentChange:i.onCurrentChange,onSizeChange:i.onSizeChange},null,8,["current-page","page-size","total","onCurrentChange","onSizeChange"])])])),_:1})])),_:1})])),_:1}),v(C,{modelValue:i.addVisible,"onUpdate:modelValue":e[0]||(e[0]=e=>i.addVisible=e),width:"632px",title:"新增菜单"},{default:y((()=>[v(g,{onSuccess:i.onAddSuccess},null,8,["onSuccess"])])),_:1},8,["modelValue"]),v(C,{modelValue:i.editVisible,"onUpdate:modelValue":e[1]||(e[1]=e=>i.editVisible=e),center:"",width:"632px",title:i.posted.menu.meta.title},{default:y((()=>[v(S,{"current-menu":i.posted.menu,onSuccess:i.onEditSuccess},null,8,["current-menu","onSuccess"])])),_:1},8,["modelValue","title"])])};export{li as default};
