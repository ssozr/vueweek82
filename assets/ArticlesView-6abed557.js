import{P as p}from"./PaginationView-a2a21932.js";import{_ as u,R as m,r as l,o as n,c as d,b as t,F as f,h as v,d as x,n as b,i as D,w as P,t as c}from"./index-ac0620ce.js";const{VITE_PATH:y,VITE_URL:w}={VITE_PATH:"ssozr",VITE_URL:"https://vue3-course-api.hexschool.io/",BASE_URL:"/vueweek82/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},R={data(){return{articleData:[],pagination:{}}},components:{Pagination:p,RouterLink:m},methods:{getArticleData(s=1){this.$http.get(`${w}/v2/api/${y}/articles/?page=${s}`).then(e=>{this.articleData=e.data.articles,this.pagination=e.data.pagination}).catch(e=>{alert(e.data.message).error(e)})},time(s){const e=new Date(s*1e3),i={year:"numeric",month:"numeric",day:"numeric",hour12:!1};return e.toLocaleString("zh-TW",i)},changePage(s){this.getClassData(s)}},mounted(){this.getArticleData()}},k={class:"articles","data-aos":"fade-right"},E={class:"container my-15"},L={class:"row"},V={class:"card mb-3 p-0"},T={class:"row g-0"},A={class:"col-md-4"},C=["src"],B={class:"col-md-8"},S={class:"card-body d-flex flex-column justify-content-between"},I={class:"mb-3"},$={class:"card-title"},z={class:"card-text"},U={class:"d-flex justify-content-between"},j={class:"card-text mb-0 d-flex align-items-end"},F={class:"text-muted"},H=t("button",{type:"button",class:"btn btn-primary"},"閱讀全文",-1);function N(s,e,i,O,o,r){const _=l("RouterLink"),h=l("Pagination");return n(),d("div",k,[t("div",E,[t("div",L,[(n(!0),d(f,null,v(o.articleData,(a,g)=>(n(),D(_,{to:`/article/${a.id}`,key:g},{default:P(()=>[t("div",V,[t("div",T,[t("div",A,[t("img",{src:a.image,alt:"文章示意圖片"},null,8,C)]),t("div",B,[t("div",S,[t("div",I,[t("h5",$,c(a.title),1),t("p",z,c(a.description),1)]),t("div",U,[t("p",j,[t("small",F,c(r.time(a.create_at)),1)]),H])])])])])]),_:2},1032,["to"]))),128))]),x(h,{class:b({"d-none":o.pagination.total_pages===1}),pages:o.pagination,onChangePage:r.changePage},null,8,["class","pages","onChangePage"])])])}const q=u(R,[["render",N]]);export{q as default};
