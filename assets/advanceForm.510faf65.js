import{d as e,h as l,y as a,r as o,b as d,E as t,k as n,e as i,c as r,g as s,s as u,q as c,v as m,m as p,I as f,p as y,f as b}from"./vendor.67cd59db.js";var v=e({name:"AdvanceForm",setup(){const e=l(),n=a([{province:"上海市",city:"浦东新区",name:"王小虎1",address:"上海市普陀区金沙江路 1518 弄",edit:!1},{province:"上海市",city:"浦东新区",name:"王小虎2",address:"上海市普陀区金沙江路 1517 弄",edit:!1},{province:"上海市",city:"浦东新区",name:"王小虎3",address:"上海市普陀区金沙江路 1519 弄",edit:!1},{province:"上海市",city:"浦东新区",name:"王小虎4",address:"上海市普陀区金沙江路 1516 弄",edit:!0}]),i=a({name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}),r=o();d((()=>{console.log("show sizeFormRef.value",r.value)}));return{handleAddRecord:()=>{n.push({province:"",city:"",name:"",address:"",edit:!0})},handleEdit:(e,l)=>{console.log(e,l),n[e].edit=!0},handleSave:(e,l)=>(console.log(e,l),(e=>Object.keys(e).some((l=>""===e[l])))(l)?(t.warning("保存前请完善信息！"),!1):(n[e].edit=!1,n[e]=l,t({type:"success",message:"保存成功"}),!0)),handleDelete:(e,l)=>{console.log(e,l),n.splice(e,1)},tableData:n,handleBack:()=>{e.go(-1)},sizeForm:i,activityForm:r,submitForm:()=>{r.value.validate((e=>e?(t({type:"success",message:"创建成功"}),!0):(console.log("error submit!!"),!1)))},resetForm:()=>{r.value.resetFields()}}}});const _=e=>(y("data-v-444d9465"),e=e(),b(),e),w={class:"FormInfo"},V={class:"info"},h=f("高级表单"),g=_((()=>s("span",{style:{"text-align":"left"}},"高级表单常见于一次性输入和提交大批量数据的场景。",-1))),k={class:"grid-content bg-purple-dark"},F={class:"card-header"},z=_((()=>s("i",{class:"el-icon-arrow-left"},null,-1))),x=f("返回"),U=_((()=>s("span",null,"表单信息",-1))),C=_((()=>s("div",null,null,-1))),D={style:{"text-align":"left"}},j=_((()=>s("span",null,"记录管理",-1))),A={key:1,class:"name-wrapper"},E={key:1},I={key:1},R={key:1},$=f("保存"),B=f("编辑"),S=f("删除"),q={style:{margin:"5px"}},O=f("+ 新增记录"),G={class:"grid-content bg-purple-dark"},H={style:{"text-align":"left"}},J=_((()=>s("span",null,"活动管理",-1))),K=f("-"),L=f("立即创建"),M=f("取消");v.render=function(e,l,a,o,d,t){const y=n("el-divider"),b=n("el-button"),v=n("el-input"),_=n("el-tag"),N=n("el-popover"),P=n("el-table-column"),Q=n("el-popconfirm"),T=n("el-table"),W=n("el-card"),X=n("el-col"),Y=n("el-row"),Z=n("el-form-item"),ee=n("el-option"),le=n("el-select"),ae=n("el-date-picker"),oe=n("el-time-picker"),de=n("el-checkbox-button"),te=n("el-checkbox-group"),ne=n("el-radio"),ie=n("el-radio-group"),re=n("el-form");return i(),r("div",w,[s("div",V,[u(y,{"content-position":"left"},{default:c((()=>[h])),_:1}),g]),u(Y,null,{default:c((()=>[u(X,{offset:1,span:22},{default:c((()=>[s("div",k,[u(W,{class:"box-card"},{header:c((()=>[s("div",F,[u(b,{class:"button",type:"text",onClick:e.handleBack},{default:c((()=>[z,x])),_:1},8,["onClick"]),U,C])])),default:c((()=>[s("div",D,[j,u(y)]),u(T,{data:e.tableData,style:{width:"100%"}},{default:c((()=>[u(P,{label:"姓名",width:"180"},{default:c((e=>[u(N,{effect:"light",trigger:"hover",placement:"top"},{default:c((()=>[s("p",null,"姓名: "+m(e.row.name),1),s("p",null,"住址: "+m(e.row.address),1)])),reference:c((()=>[e.row.edit?(i(),p(v,{key:0,modelValue:e.row.name,"onUpdate:modelValue":l=>e.row.name=l},null,8,["modelValue","onUpdate:modelValue"])):(i(),r("div",A,[u(_,{size:"medium"},{default:c((()=>[f(m(e.row.name),1)])),_:2},1024)]))])),_:2},1024)])),_:1}),u(P,{prop:"province",label:"省份",width:"120"},{default:c((e=>[e.row.edit?(i(),p(v,{key:0,modelValue:e.row.province,"onUpdate:modelValue":l=>e.row.province=l},null,8,["modelValue","onUpdate:modelValue"])):(i(),r("span",E,m(e.row.province),1))])),_:1}),u(P,{prop:"city",label:"市区",width:"120"},{default:c((e=>[e.row.edit?(i(),p(v,{key:0,modelValue:e.row.city,"onUpdate:modelValue":l=>e.row.city=l},null,8,["modelValue","onUpdate:modelValue"])):(i(),r("span",I,m(e.row.city),1))])),_:1}),u(P,{prop:"address",label:"详细地址"},{default:c((e=>[e.row.edit?(i(),p(v,{key:0,modelValue:e.row.address,"onUpdate:modelValue":l=>e.row.address=l},null,8,["modelValue","onUpdate:modelValue"])):(i(),r("span",R,m(e.row.address),1))])),_:1}),u(P,{label:"操作",width:"200"},{default:c((l=>[l.row.edit?(i(),p(b,{key:0,size:"mini",type:"success",icon:"el-icon-check",onClick:a=>e.handleSave(l.$index,l.row)},{default:c((()=>[$])),_:2},1032,["onClick"])):(i(),p(b,{key:1,size:"mini",icon:"el-icon-edit",onClick:a=>e.handleEdit(l.$index,l.row)},{default:c((()=>[B])),_:2},1032,["onClick"])),u(Q,{"confirm-button-text":"确定","cancel-button-text":"取消",icon:"el-icon-info","icon-color":"red",title:"确定删除该条记录吗？",onConfirm:a=>e.handleDelete(l.$index,l.row)},{reference:c((()=>[u(b,{size:"mini",icon:"el-icon-delete",type:"danger"},{default:c((()=>[S])),_:1})])),_:2},1032,["onConfirm"])])),_:1})])),_:1},8,["data"]),s("div",q,[u(b,{onClick:e.handleAddRecord},{default:c((()=>[O])),_:1},8,["onClick"])])])),_:1})])])),_:1})])),_:1}),u(Y,null,{default:c((()=>[u(X,{offset:1,span:22},{default:c((()=>[s("div",G,[u(W,{class:"box-card"},{default:c((()=>[s("div",H,[J,u(y)]),u(re,{ref:"activityForm",style:{"text-align":"left"},model:e.sizeForm,"label-width":"80px",size:"mini"},{default:c((()=>[u(Z,{label:"活动名称"},{default:c((()=>[u(v,{modelValue:e.sizeForm.name,"onUpdate:modelValue":l[0]||(l[0]=l=>e.sizeForm.name=l)},null,8,["modelValue"])])),_:1}),u(Z,{label:"活动区域"},{default:c((()=>[u(le,{modelValue:e.sizeForm.region,"onUpdate:modelValue":l[1]||(l[1]=l=>e.sizeForm.region=l),placeholder:"请选择活动区域"},{default:c((()=>[u(ee,{label:"区域一",value:"shanghai"}),u(ee,{label:"区域二",value:"beijing"})])),_:1},8,["modelValue"])])),_:1}),u(Z,{label:"活动时间"},{default:c((()=>[u(X,{span:11},{default:c((()=>[u(ae,{modelValue:e.sizeForm.date1,"onUpdate:modelValue":l[2]||(l[2]=l=>e.sizeForm.date1=l),type:"date",placeholder:"选择日期",style:{width:"100%"}},null,8,["modelValue"])])),_:1}),u(X,{class:"line",span:2},{default:c((()=>[K])),_:1}),u(X,{span:11},{default:c((()=>[u(oe,{modelValue:e.sizeForm.date2,"onUpdate:modelValue":l[3]||(l[3]=l=>e.sizeForm.date2=l),placeholder:"选择时间",style:{width:"100%"}},null,8,["modelValue"])])),_:1})])),_:1}),u(Z,{label:"活动性质"},{default:c((()=>[u(te,{modelValue:e.sizeForm.type,"onUpdate:modelValue":l[4]||(l[4]=l=>e.sizeForm.type=l)},{default:c((()=>[u(de,{label:"美食/餐厅线上活动",name:"type"}),u(de,{label:"地推活动",name:"type"}),u(de,{label:"线下主题活动",name:"type"})])),_:1},8,["modelValue"])])),_:1}),u(Z,{label:"特殊资源"},{default:c((()=>[u(ie,{modelValue:e.sizeForm.resource,"onUpdate:modelValue":l[5]||(l[5]=l=>e.sizeForm.resource=l),size:"medium"},{default:c((()=>[u(ne,{border:"",label:"线上品牌商赞助"}),u(ne,{border:"",label:"线下场地免费"})])),_:1},8,["modelValue"])])),_:1}),u(Z,{size:"large"},{default:c((()=>[u(b,{type:"primary",onClick:e.submitForm},{default:c((()=>[L])),_:1},8,["onClick"]),u(b,null,{default:c((()=>[M])),_:1})])),_:1})])),_:1},8,["model"])])),_:1})])])),_:1})])),_:1})])},v.__scopeId="data-v-444d9465";export{v as default};
