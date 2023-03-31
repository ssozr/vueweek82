import{L as P}from"./index-ad8fdb5e.js";import{S as b}from"./sweetalert2.all-f808f091.js";import{P as k}from"./PaginationView-a26942de.js";import{_ as w,M as _,r as g,o as n,c as r,a as t,F as f,g as v,b as y,m as d,p as i,d as x,u as I,f as L,t as h}from"./index-8201d654.js";const{VITE_URL:u,VITE_PATH:p}={VITE_PATH:"ssozr",VITE_URL:"https://vue3-course-api.hexschool.io/",BASE_URL:"/vueweek82/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},V={data(){return{images:"",isLoading:!1,products:[],delModal:"",delId:"",editId:"",changeModal:!0,productModal:"",showImageUrl:0,pagination:{},page:"",modal:{title:"",category:"",unit:"",origin_price:"",price:"",description:"",content:"",is_enabled:0,imageUrl:"",imagesUrl:[]}}},components:{Pagination:k,Loading:P},methods:{getProducts(l=1){this.$http.get(`${u}/v2/api/${p}/admin/products/?page=${l}`).then(e=>{this.isLoading=!1,this.products=e.data.products,this.pagination=e.data.pagination}).catch(e=>{alert(e.data.message).error(e)})},openDeleteModal(l){this.delModal.show(),this.delId=l},openProductModal(){this.changeModal=!0,this.showImageUrl=0,this.modal={imagesUrl:[]},this.productModal.show()},editProductModal(l,e){this.changeModal=!1,this.modal={...l};const c=this.modal.imagesUrl;Boolean(c)===!1&&(this.modal.imagesUrl=[]),this.editId=e,this.productModal.show()},addImageUrl(){if(this.showImageUrl>3){alert("新增圖片最多4張");return}this.modal.imagesUrl.push(this.images),this.showImageUrl++,this.images=""},removeImageUrl(l){this.modal.imagesUrl.splice(l,1),this.showImageUrl--},deleteProduct(){this.isLoading=!0;const l=this.delId;this.$http.delete(`${u}/v2/api/${p}/admin/product/${l}`).then(e=>{b.fire(`${e.data.message}`),this.delId="",this.delModal.hide(),this.getProducts()}).catch(e=>{alert(e.data.message).error(e),this.delId="",this.delModal.hide()})},addPorduct(){if(this.isLoading=!0,this.changeModal===!0){const l={...this.modal};this.$http.post(`${u}/v2/api/${p}/admin/product`,{data:l}).then(e=>{this.productModal.hide(),b.fire(`${e.data.message}`),this.getProducts()}).catch(e=>{alert(e.data.message)})}else{const l=this.editId,e={...this.modal};this.$http.put(`${u}/v2/api/${p}/admin/product/${l}`,{data:e}).then(c=>{this.productModal.hide(),b.fire(`${c.data.message}`),this.getProducts()}).catch(c=>{alert(c.data.message)})}},changePage(l){this.getProducts(l)}},mounted(){this.isLoading=!0,this.getProducts(),this.delModal=new _(this.$refs.delProductModal),this.productModal=new _(this.$refs.productModal)}},C={id:"app"},E={class:"container"},D={class:"text-end mt-4"},S={class:"table mt-4"},T=t("thead",null,[t("tr",null,[t("th",{width:"120"}," 分類 "),t("th",null,"產品名稱"),t("th",{width:"120"}," 原價 "),t("th",{width:"120"}," 售價 "),t("th",{width:"100"}," 是否啟用 "),t("th",{width:"120"}," 編輯 ")])],-1),B={class:"text-end"},R={class:"text-end"},N={key:0,class:"text-success"},A={key:1},F={class:"btn-group"},H=["onClick"],O=["onClick"],z={id:"productModal",ref:"productModal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},j={class:"modal-dialog modal-xl"},q={class:"modal-content border-0"},G=t("div",{class:"modal-header bg-dark text-white"},[t("h5",{id:"productModalLabel",class:"modal-title"},[t("span",null,"新增產品")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),J={class:"modal-body"},K={class:"row"},Q={class:"col-sm-4"},W={class:"mb-2"},X={class:"mb-3"},Y=t("label",{for:"imageUrl",class:"form-label"},"輸入圖片網址",-1),Z=["src"],$={key:0},tt=["src"],et=["onClick"],ot={class:"col-sm-8"},st={class:"mb-3"},lt=t("label",{for:"title",class:"form-label"},"標題",-1),dt={class:"row"},it={class:"mb-3 col-md-6"},at=t("label",{for:"category",class:"form-label"},"分類",-1),nt={class:"mb-3 col-md-6"},rt=t("label",{for:"price",class:"form-label"},"導師姓名",-1),ct={class:"row"},mt={class:"mb-3 col-md-6"},ht=t("label",{for:"origin_price",class:"form-label"},"課程堂數",-1),ut={class:"mb-3 col-md-6"},pt=t("label",{for:"price",class:"form-label"},"售價",-1),bt=t("hr",null,null,-1),_t={class:"mb-3"},gt=t("label",{for:"description",class:"form-label"},"產品描述",-1),ft={class:"mb-3"},vt=t("label",{for:"content",class:"form-label"},"說明內容",-1),yt={class:"mb-3"},Ut={class:"form-check"},Mt=t("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),Pt={class:"modal-footer"},kt=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1),wt={id:"delProductModal",ref:"delProductModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},xt={class:"modal-dialog"},It={class:"modal-content border-0"},Lt=L('<div class="modal-header bg-danger text-white"><h5 id="delProductModalLabel" class="modal-title"><span>刪除產品</span></h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body"> 是否刪除 <strong class="text-danger"></strong> 商品(刪除後將無法恢復)。 </div>',2),Vt={class:"modal-footer"},Ct=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function Et(l,e,c,Dt,s,a){const U=g("Pagination"),M=g("Loading");return n(),r("div",C,[t("div",E,[t("div",D,[t("button",{class:"btn btn-primary",onClick:e[0]||(e[0]=o=>a.openProductModal())}," 建立新的產品 ")]),t("table",S,[T,t("tbody",null,[(n(!0),r(f,null,v(s.products,o=>(n(),r("tr",{key:o.id},[t("td",null,h(o.category),1),t("td",null,h(o.title),1),t("td",B,h(o.origin_price),1),t("td",R,h(o.price),1),t("td",null,[o.is_enabled?(n(),r("span",N,"啟用")):(n(),r("span",A,"未啟用"))]),t("td",null,[t("div",F,[t("button",{onClick:m=>a.editProductModal(o,o.id),type:"button",class:"btn btn-outline-primary btn-sm"}," 編輯 ",8,H),t("button",{onClick:m=>a.openDeleteModal(o.id),type:"button",class:"btn btn-outline-danger btn-sm"}," 刪除 ",8,O)])])]))),128))])]),y(U,{pages:s.pagination,onChangePage:a.changePage},null,8,["pages","onChangePage"]),y(M,{active:s.isLoading,"onUpdate:active":e[1]||(e[1]=o=>s.isLoading=o)},null,8,["active"])]),t("div",z,[t("div",j,[t("div",q,[G,t("div",J,[t("div",K,[t("div",Q,[t("div",W,[t("div",X,[Y,d(t("input",{type:"text",class:"form-control",placeholder:"請輸入圖片連結","onUpdate:modelValue":e[2]||(e[2]=o=>s.modal.imageUrl=o)},null,512),[[i,s.modal.imageUrl]])]),t("img",{class:"img-fluid",src:s.modal.imageUrl,alt:""},null,8,Z)]),t("div",null,[d(t("input",{type:"text","onUpdate:modelValue":e[3]||(e[3]=o=>s.images=o)},null,512),[[i,s.images]]),t("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[4]||(e[4]=o=>a.addImageUrl())}," 新增圖片 ")]),s.showImageUrl?(n(),r("div",$,[(n(!0),r(f,null,v(s.modal.imagesUrl,(o,m)=>(n(),r("div",{key:m},[t("img",{class:"img-fluid",src:o,alt:""},null,8,tt),t("button",{onClick:St=>a.removeImageUrl(m),class:"btn btn-outline-danger btn-sm d-block w-100"}," 刪除圖片 ",8,et)]))),128))])):x("",!0)]),t("div",ot,[t("div",st,[lt,d(t("input",{"onUpdate:modelValue":e[5]||(e[5]=o=>s.modal.title=o),id:"title",type:"text",class:"form-control",placeholder:"請輸入標題"},null,512),[[i,s.modal.title]])]),t("div",dt,[t("div",it,[at,d(t("input",{"onUpdate:modelValue":e[6]||(e[6]=o=>s.modal.category=o),id:"category",type:"text",class:"form-control",placeholder:"請輸入分類"},null,512),[[i,s.modal.category]])]),t("div",nt,[rt,d(t("input",{"onUpdate:modelValue":e[7]||(e[7]=o=>s.modal.unit=o),id:"unit",type:"text",class:"form-control",placeholder:"請輸入單位"},null,512),[[i,s.modal.unit]])])]),t("div",ct,[t("div",mt,[ht,d(t("input",{"onUpdate:modelValue":e[8]||(e[8]=o=>s.modal.origin_price=o),id:"origin_price",type:"number",min:"0",class:"form-control",placeholder:"請輸入原價"},null,512),[[i,s.modal.origin_price]])]),t("div",ut,[pt,d(t("input",{"onUpdate:modelValue":e[9]||(e[9]=o=>s.modal.price=o),id:"price",type:"number",min:"0",class:"form-control",placeholder:"請輸入售價"},null,512),[[i,s.modal.price]])])]),bt,t("div",_t,[gt,d(t("textarea",{"onUpdate:modelValue":e[10]||(e[10]=o=>s.modal.description=o),id:"description",type:"text",class:"form-control",placeholder:"請輸入產品描述"},`\r
                  `,512),[[i,s.modal.description]])]),t("div",ft,[vt,d(t("textarea",{"onUpdate:modelValue":e[11]||(e[11]=o=>s.modal.content=o),id:"description",type:"text",class:"form-control",placeholder:"請輸入說明內容"},`\r
                  `,512),[[i,s.modal.content]])]),t("div",yt,[t("div",Ut,[d(t("input",{id:"is_enabled",class:"form-check-input",type:"checkbox","onUpdate:modelValue":e[12]||(e[12]=o=>s.modal.is_enabled=o),"true-value":1,"false-value":0},null,512),[[I,s.modal.is_enabled]]),Mt])])])])]),t("div",Pt,[kt,t("button",{onClick:e[13]||(e[13]=o=>a.addPorduct()),type:"button",class:"btn btn-primary"}," 確認 ")])])])],512),t("div",wt,[t("div",xt,[t("div",It,[Lt,t("div",Vt,[Ct,t("button",{type:"button",class:"btn btn-danger",onClick:e[14]||(e[14]=o=>a.deleteProduct(l.id))}," 確認刪除 ")])])])],512)])}const At=w(V,[["render",Et]]);export{At as default};
