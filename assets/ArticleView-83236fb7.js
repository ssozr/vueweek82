import{_ as f,M as v,o as i,c as d,b as t,F as _,h as g,f as y,t as r,v as o,y as n,B as k}from"./index-738e7cfd.js";const{VITE_PATH:h,VITE_URL:u}={VITE_PATH:"ssozr",VITE_URL:"https://vue3-course-api.hexschool.io/",BASE_URL:"/vueweek82/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},x={data(){return{date:"",modal:!0,ariticleData:{},articleModal:"",dataId:"",data:{title:"",description:"",image:"",tag:"",create_at:"",author:"",isPublic:!1,content:""}}},methods:{getAriticle(){this.$http.get(`${u}/v2/api/${h}/admin/articles`).then(l=>{this.ariticleData=l.data}).catch(l=>{alert(l.data.message).error(l)})},openEditModla(l){this.modal=!1,this.date=l.create_at,this.articleModal.show(),this.data={...l},this.data.create_at=this.time(l.create_at),this.dataId=l.id},openModal(){this.modal=!0,this.articleModal.show()},newArticle(){if(this.modal===!0){this.timeChange();const l={...this.data};this.$http.post(`${u}/v2/api/${h}/admin/article`,{data:l}).then(()=>{this.data={},this.getAriticle(),this.articleModal.hide()}).catch(e=>{alert(e.data.message).error(e)})}else{this.timeChange();const l={...this.data};this.$http.put(`${u}/v2/api/${h}/admin/article/${this.dataId}`,{data:l}).then(()=>{this.data={},this.getAriticle(),this.articleModal.hide()}).catch(e=>{alert(e.data.message).error(e)})}},timeChange(){const l=new Date(this.data.create_at);l.setHours(0,0,0,0);const e=l.getTime()/1e3;this.data.create_at=e},time(l){const e=new Date(l*1e3),m={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"};return e.toLocaleString("zh-TW",m)},delArticle(l){this.$http.delete(`${u}/v2/api/${h}/admin/article/${l}`).then(()=>{this.getAriticle()}).catch(e=>{alert(e.data.message).error(e)})}},mounted(){this.getAriticle(),this.articleModal=new v(this.$refs.articleModal)}},M={class:"container"},V={class:"text-end mt-4"},w={class:"table mt-4"},A=t("thead",null,[t("tr",null,[t("th",null,"文章名稱"),t("th",null," 日期 "),t("th",null," 作者 "),t("th",null," 是否啟用 "),t("th",null," 編輯 ")])],-1),U={key:0,class:"text-success"},C={key:1},D={class:"btn-group"},E=["onClick"],T=["onClick"],I={id:"productModal",ref:"articleModal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},L={class:"modal-dialog modal-xl"},P={class:"modal-content border-0"},B=t("div",{class:"modal-header bg-dark text-white"},[t("h5",{id:"productModalLabel",class:"modal-title"},[t("span",null,"新增產品")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),R={class:"modal-body"},S={class:"row"},H={class:"col-sm-4"},z={class:"mb-2"},F={class:"mb-3"},N=t("label",{for:"imageUrl",class:"form-label"},"輸入圖片網址",-1),O=t("img",{class:"img-fluid",src:"",alt:""},null,-1),W=t("div",null,[t("button",{class:"btn btn-outline-primary btn-sm d-block w-100"}," 新增圖片 ")],-1),j={class:"col-sm-8"},q={class:"mb-3"},G=t("label",{for:"title",class:"form-label"},"標題",-1),J={class:"row"},K={class:"mb-3 col-md-6"},Q=t("label",{for:"category",class:"form-label"},"作者",-1),X={class:"row"},Y={class:"mb-3 col-md-6"},Z=t("label",{for:"origin_price",class:"form-label"},"標籤",-1),$={class:"mb-3 col-md-6"},tt={key:0,for:"date",class:"form-label"},et={key:1,for:"date"},st=t("hr",null,null,-1),lt={class:"mb-3"},at=t("label",{for:"description",class:"form-label"},"文章描述",-1),ot={class:"mb-3"},it=t("label",{for:"content",class:"form-label"},"這是內容",-1),dt={class:"mb-3"},nt={class:"form-check"},ct=t("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),rt={class:"modal-footer"},ht=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function ut(l,e,m,mt,a,c){return i(),d(_,null,[t("div",M,[t("div",V,[t("button",{class:"btn btn-primary",onClick:e[0]||(e[0]=s=>c.openModal())}," 建立新的文章 ")]),t("table",w,[A,t("tbody",null,[(i(!0),d(_,null,g(a.ariticleData.articles,(s,b)=>(i(),d("tr",{key:b},[t("td",null,r(s.title),1),t("td",null,r(c.time(s.create_at)),1),t("td",null,r(s.author),1),t("td",null,[s.isPublic?(i(),d("span",U,"啟用")):(i(),d("span",C,"未啟用"))]),t("td",null,[t("div",D,[t("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:p=>c.openEditModla(s)}," 編輯 ",8,E),t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:p=>c.delArticle(s.id)}," 刪除 ",8,T)])])]))),128))])])]),t("div",I,[t("div",L,[t("div",P,[B,t("div",R,[y(r(a.data)+" ",1),t("div",S,[t("div",H,[t("div",z,[t("div",F,[N,o(t("input",{type:"text",class:"form-control",placeholder:"請輸入圖片連結","onUpdate:modelValue":e[1]||(e[1]=s=>a.data.image=s)},null,512),[[n,a.data.image]])]),O]),W]),t("div",j,[t("div",q,[G,o(t("input",{id:"title",type:"text",class:"form-control",placeholder:"請輸入標題","onUpdate:modelValue":e[2]||(e[2]=s=>a.data.title=s)},null,512),[[n,a.data.title]])]),t("div",J,[t("div",K,[Q,o(t("input",{id:"category",type:"text",class:"form-control","onUpdate:modelValue":e[3]||(e[3]=s=>a.data.author=s),placeholder:"請輸入作者"},null,512),[[n,a.data.author]])])]),t("div",X,[t("div",Y,[Z,o(t("input",{id:"origin_price",type:"text",min:"0",class:"form-control",placeholder:"請輸入標籤","onUpdate:modelValue":e[4]||(e[4]=s=>a.data.tag=s)},null,512),[[n,a.data.tag]])]),t("div",$,[a.date?(i(),d("label",et,"發布日期:"+r(c.time(a.date)),1)):(i(),d("label",tt,"日期")),o(t("input",{id:"date",type:"date",min:"0",class:"form-control","onUpdate:modelValue":e[5]||(e[5]=s=>a.data.create_at=s),placeholder:"請輸入日期"},null,512),[[n,a.data.create_at]])])]),st,t("div",lt,[at,o(t("textarea",{id:"description",type:"text",class:"form-control","onUpdate:modelValue":e[6]||(e[6]=s=>a.data.description=s),placeholder:"請輸入產品 描述"},`\r
                    `,512),[[n,a.data.description]])]),t("div",ot,[it,o(t("textarea",{id:"description",type:"text",class:"form-control","onUpdate:modelValue":e[7]||(e[7]=s=>a.data.content=s),placeholder:"請輸入說明內容"},`\r
                    `,512),[[n,a.data.content]])]),t("div",dt,[t("div",nt,[o(t("input",{type:"checkbox",class:"form-check-input",id:"is_enabled","onUpdate:modelValue":e[8]||(e[8]=s=>a.data.isPublic=s)},null,512),[[k,a.data.isPublic]]),ct])])])])]),t("div",rt,[ht,t("button",{type:"button",class:"btn btn-primary",onClick:e[9]||(e[9]=s=>c.newArticle())}," 確認 ")])])])],512)],64)}const bt=f(x,[["render",ut]]);export{bt as default};
