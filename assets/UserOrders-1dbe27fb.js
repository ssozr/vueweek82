import{L as k}from"./index-ea877dd1.js";import{S as m}from"./sweetalert2.all-f808f091.js";import{_ as D,M as g,r as b,o as d,c as n,a as t,F as h,g as u,b as f,t as l,d as C}from"./index-dc8851fb.js";import{p as L}from"./PaginationView-1bbfc838.js";const{VITE_URL:_,VITE_PATH:p}={VITE_PATH:"ssozr",VITE_URL:"https://vue3-course-api.hexschool.io/",BASE_URL:"/vueweek8/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},O={data(){return{isLoading:!1,orders:[],delModal:"",delModalId:"",orderModal:"",orderModalId:"",orderData:"",pagination:{},page:""}},components:{pagination:L,Loading:k},methods:{getOrders(s=1){this.$http.get(`${_}/v2/api/${p}/admin/orders/?page=${s}`).then(e=>{console.log(e),this.isLoading=!1,this.orders=e.data.orders,this.pagination=e.data.pagination}).catch(e=>{console.log(e)})},opDelModal(s){this.delModalId=s,this.delModal.show()},deleteOrder(){const s=this.delModalId;this.$http.delete(`${_}/v2/api/${p}/admin/order/${s}`).then(e=>{m.fire(`${e.data.message}`),this.getOrders(),this.delModal.hide()}).catch(e=>{console.log(e)})},opOrderModal(s){this.orderModal.show(),this.orderData={...s}},upDataPaid(s){const e={is_paid:!s.is_paid};this.$http.put(`${_}/v2/api/${p}/admin/order/${s.id}`,{data:e}).then(i=>{m.fire(`${i.data.message}`),this.getOrders()}).catch(i=>{console.log(i)})},changePage(s){this.getOrders(s)},time(s){const e=new Date(s*1e3),i={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"};return e.toLocaleString("zh-TW",i)}},mounted(){this.isLoading=!0,this.getOrders(),this.delModal=new g(this.$refs.delModal),this.orderModal=new g(this.$refs.orderModal)}},w={class:"table"},E=t("thead",null,[t("tr",null,[t("th",null,"購買時間"),t("th",null,"Email"),t("th",null,"購買款項"),t("th",null,"應付金額"),t("th",null,"是否付款"),t("th",null,"編輯")])],-1),I={class:"list-unstyled"},P={class:"form-check form-switch"},V=["checked","onClick"],x=["for"],S={key:0},T={key:1},$=["onClick"],R=["onClick"],U={class:"modal",tabindex:"-1",id:"delModal",ref:"delModal"},B={class:"modal-dialog"},A={class:"modal-content"},N=t("div",{class:"modal-header"},[t("h5",{class:"modal-title"},"確認刪除?"),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),q={class:"modal-body"},z={class:"modal-footer"},F=t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"取消",-1),H={class:"modal",tabindex:"-1",id:"orderModal",ref:"orderModal"},W={class:"modal-dialog"},j={class:"modal-content"},G={class:"modal-header"},J={class:"modal-title"},K=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),Q={class:"modal-body"},X={key:0};function Y(s,e,i,Z,a,r){const y=b("pagination"),v=b("loading");return d(),n(h,null,[t("table",w,[E,t("tbody",null,[(d(!0),n(h,null,u(a.orders,o=>(d(),n("tr",{key:o.id},[t("td",null,l(r.time(o.create_at)),1),t("td",null,l(o.user.email),1),t("td",null,[t("ul",I,[(d(!0),n(h,null,u(o.products,(c,M)=>(d(),n("li",{key:M},l(c.product.title)+"*"+l(c.qty)+"="+l(c.total),1))),128))])]),t("td",null,l(o.total),1),t("td",null,[t("div",P,[t("input",{class:"form-check-input",type:"checkbox",role:"switch",id:"item.id",checked:o.is_paid,onClick:c=>r.upDataPaid(o)},null,8,V),t("label",{class:"form-check-label",for:o.id},[o.is_paid?(d(),n("p",S,"已付款")):(d(),n("p",T,"未付款"))],8,x)])]),t("td",null,[t("button",{type:"button",class:"btn btn-outline-primary",onClick:c=>r.opOrderModal(o)},"檢視",8,$),t("button",{type:"button",class:"btn btn-outline-primary",onClick:c=>r.opDelModal(o.id)},"刪除",8,R)])]))),128))])]),f(y,{pages:a.pagination,onChangePage:r.changePage},null,8,["pages","onChangePage"]),f(v,{active:a.isLoading,"onUpdate:active":e[0]||(e[0]=o=>a.isLoading=o)},null,8,["active"]),t("div",U,[t("div",B,[t("div",A,[N,t("div",q,[t("p",null,"訂單編號:"+l(a.delModalId),1)]),t("div",z,[F,t("button",{type:"button",onClick:e[1]||(e[1]=o=>r.deleteOrder()),class:"btn btn-primary"},"確定刪除")])])])],512),t("div",H,[t("div",W,[t("div",j,[t("div",G,[t("h5",J,"訂單編號"+l(a.orderData.id),1),K]),t("div",Q,[t("ul",null,[(d(!0),n(h,null,u(a.orderData.products,o=>(d(),n("li",{key:o.id},l(o.product.title)+" 數量:"+l(o.qty),1))),128))]),a.orderData?(d(),n("ul",X,[t("li",null,"訂單人姓名"+l(a.orderData.user.name),1),t("li",null,"信箱"+l(a.orderData.user.email),1),t("li",null,"電話"+l(a.orderData.user.tel),1),t("li",null,"備註"+l(a.orderData.user.address),1)])):C("",!0)])])])],512)],64)}const lt=D(O,[["render",Y]]);export{lt as default};
