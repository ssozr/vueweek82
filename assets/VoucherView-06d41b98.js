import{L as k}from"./index-75b985b5.js";import{S as r}from"./sweetalert2.all-55c61ecb.js";import{P as V}from"./PaginationView-a2a21932.js";import{_ as L,M as m,r as b,o as i,c as d,b as t,F as g,h as w,d as f,f as D,t as l,j as c,u,e as x,C as P}from"./index-ac0620ce.js";const{VITE_PATH:p,VITE_URL:h}={VITE_PATH:"ssozr",VITE_URL:"https://vue3-course-api.hexschool.io/",BASE_URL:"/vueweek82/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},E={data(){return{isLoading:!1,modal:!0,coupons:"",couponModal:"",delCouponModal:"",editDate:"",editId:"",delId:"",pagination:{},couponData:{title:"",code:"",due_date:"",percent:"",is_enabled:0}}},methods:{getCoupons(e=1){this.$http.get(`${h}/v2/api/${p}/admin/coupons?page=${e}`).then(o=>{this.coupons=o.data,this.pagination=o.data.pagination,this.isLoading=!1}).catch(o=>{alert(o.data.message)})},openCouponMadl(){this.modal=!0,this.couponData={},this.couponData.is_enabled=0,this.couponModal.show()},openEdit(e){this.couponData={},this.modal=!1,this.couponData={...e},this.editId=e.id,this.editDate=this.couponData.due_date,this.couponData.due_date=this.couponData.due_date*1e3,this.couponModal.show()},newCoupon(){if(this.isLoading=!0,this.couponData.percent<=0||this.couponData.percent>=100){alert("折扣不得大於100%或是負數"),this.couponModal.hide(),this.isLoading=!1;return}if(this.modal===!1){this.timeChange();const e={...this.couponData};this.$http.put(`${h}/v2/api/${p}/admin/coupon/${this.editId}`,{data:e}).then(o=>{this.getCoupons(),r.fire(`${o.data.message}`),this.couponModal.hide()}).catch(o=>{alert(o.data.message)})}else{this.timeChange();const e={...this.couponData};this.$http.post(`${h}/v2/api/${p}/admin/coupon`,{data:e}).then(o=>{r.fire(`${o.data.message}`),this.getCoupons(),this.couponModal.hide()}).catch(o=>{alert(o.data.message)})}},timeChange(){const e=new Date(this.couponData.due_date);e.setHours(0,0,0,0);const o=e.getTime()/1e3;this.couponData.due_date=o},time(e){const o=new Date(e*1e3),_={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"};return o.toLocaleString("zh-TW",_)},openDelCoupon(e){this.couponData={...e},this.delCouponModal.show(),this.delId=e.id},delCoupon(){this.loading=!0,this.$http.delete(`${h}/v2/api/${p}/admin/coupon/${this.delId}`).then(e=>{r.fire(`${e.data.message}`),this.getCoupons(),this.delCouponModal.hide()}).catch(e=>{alert(e.data.message)})},changePage(e){this.getCoupons(e)}},components:{Pagination:V,Loading:k},mounted(){this.isLoading=!0,this.getCoupons(),this.couponModal=new m(this.$refs.couponModal),this.delCouponModal=new m(this.$refs.delCouponModal)}},I={class:"text-end my-4"},T={class:"table"},U=t("thead",null,[t("tr",null,[t("th",null,"名稱"),t("th",null,"折扣百分比"),t("th",null,"到期日"),t("th",null,"是否啟用"),t("th",null,"編輯")])],-1),S={key:0},R={key:1},B=["onClick"],N=["onClick"],A={class:"modal",tabindex:"-1",ref:"couponModal",id:"couponModal"},H={class:"modal-dialog"},z={class:"modal-content"},F={class:"modal-header"},O=t("h5",{class:"modal-title"},"建立優惠券",-1),$=t("button",{type:"button",class:"btn-cslose","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),j={class:"modal-body"},W={class:"mb-3"},q=t("label",{for:"title",class:"form-label"},"優惠券名稱",-1),G={class:"mb-3"},J=t("label",{for:"coupon_code",class:"form-label"},"優惠碼",-1),K={class:"mb-3"},Q=t("label",{for:"due_date",class:"form-label"},"到期日",-1),X={key:0,class:"py-0 my-0"},Y=t("br",null,null,-1),Z={class:"mb-3"},tt=t("label",{for:"percent",class:"form-label"},"折扣百分比",-1),ot={class:"mb-3"},et={class:"form-check"},st=t("label",{for:"is_enabled",class:"form-label"},"是否啟用",-1),nt={class:"modal-footer"},at=t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"取消",-1),lt={class:"modal",tabindex:"-1",ref:"delCouponModal"},it={class:"modal-dialog"},dt={class:"modal-content"},ct={class:"modal-header"},ut={class:"modal-title"},pt=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),ht=t("div",{class:"modal-body"},[t("p",null,"是否確認刪除此優惠券?")],-1),rt={class:"modal-footer"},_t=t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close",-1);function mt(e,o,_,bt,n,a){const v=b("Pagination"),C=b("loading");return i(),d(g,null,[t("div",I,[t("button",{type:"button",class:"btn btn-primary",onClick:o[0]||(o[0]=s=>a.openCouponMadl())},"建立優惠券")]),t("table",T,[U,t("tbody",null,[(i(!0),d(g,null,w(n.coupons.coupons,(s,y)=>(i(),d("tr",{key:y},[t("td",null,l(s.title),1),t("td",null,l(s.percent),1),t("td",null,l(a.time(s.due_date)),1),t("td",null,[s.is_enabled?(i(),d("p",S,"已啟用")):(i(),d("p",R,"未啟用"))]),t("button",{type:"button",class:"btn btn-outline-primary",onClick:M=>a.openEdit(s)},"編輯",8,B),t("button",{type:"button",class:"btn btn-outline-danger",onClick:M=>a.openDelCoupon(s)},"刪除",8,N)]))),128))])]),f(v,{pages:n.pagination,onChangePage:a.changePage},null,8,["pages","onChangePage"]),f(C,{active:n.isLoading,"onUpdate:active":o[1]||(o[1]=s=>n.isLoading=s)},null,8,["active"]),t("div",A,[t("div",H,[D(l(n.couponData)+" ",1),t("div",z,[t("div",F,[O,D(" "+l(n.couponData.due_date)+" ",1),$]),t("div",j,[t("div",W,[q,c(t("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":o[2]||(o[2]=s=>n.couponData.title=s)},null,512),[[u,n.couponData.title]])]),t("div",G,[J,c(t("input",{type:"text",class:"form-control",id:"coupon_code","onUpdate:modelValue":o[3]||(o[3]=s=>n.couponData.code=s)},null,512),[[u,n.couponData.code]])]),t("div",K,[Q,n.modal?x("",!0):(i(),d("p",X,"目前到期日"+l(a.time(n.editDate)),1)),Y,c(t("input",{type:"date",class:"form-control",id:"due_date","onUpdate:modelValue":o[4]||(o[4]=s=>n.couponData.due_date=s)},null,512),[[u,n.couponData.due_date]])]),t("div",Z,[tt,c(t("input",{type:"number",class:"form-control",id:"percent","onUpdate:modelValue":o[5]||(o[5]=s=>n.couponData.percent=s)},null,512),[[u,n.couponData.percent]])]),t("div",ot,[t("div",et,[st,c(t("input",{type:"checkbox",class:"form-check-input","true-value":1,"false-value":0,id:"is_enabled","onUpdate:modelValue":o[6]||(o[6]=s=>n.couponData.is_enabled=s)},null,512),[[P,n.couponData.is_enabled]])])])]),t("div",nt,[at,t("button",{type:"button",class:"btn btn-primary",onClick:o[7]||(o[7]=s=>a.newCoupon())},"確定編輯")])])])],512),t("div",lt,[t("div",it,[t("div",dt,[t("div",ct,[t("h5",ut,l(n.couponData.title),1),pt]),ht,t("div",rt,[_t,t("button",{type:"button",class:"btn btn-primary",onClick:o[8]||(o[8]=s=>a.delCoupon())},"確認刪除")])])])],512)],64)}const Ct=L(E,[["render",mt]]);export{Ct as default};
