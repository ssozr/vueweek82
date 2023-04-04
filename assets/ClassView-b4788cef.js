import{c as H}from"./cart-963fb706.js";import{k as F,l as j,p as et,_ as J,S as at,q as st,R as ot,P as nt,r as A,o as q,i as G,w as B,c as K,h as rt,d as Q,b as a,t as $,F as tt,m as X,f as U}from"./index-ac0620ce.js";import"./sweetalert2.all-55c61ecb.js";function lt({swiper:t,extendParams:l,on:e,emit:i,params:n}){t.autoplay={running:!1,paused:!1,timeLeft:0},l({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let c,f,d=n&&n.autoplay?n.autoplay.delay:3e3,m=n&&n.autoplay?n.autoplay.delay:3e3,s,r=new Date().getTime,p,g,S,k,T,b;function h(o){!t||t.destroyed||!t.wrapperEl||o.target===t.wrapperEl&&(t.wrapperEl.removeEventListener("transitionend",h),_())}const L=()=>{if(t.destroyed||!t.autoplay.running)return;t.autoplay.paused?p=!0:p&&(m=s,p=!1);const o=t.autoplay.paused?s:r+m-new Date().getTime();t.autoplay.timeLeft=o,i("autoplayTimeLeft",o,o/d),f=requestAnimationFrame(()=>{L()})},w=()=>{let o;return t.virtual&&t.params.virtual.enabled?o=t.slides.filter(y=>y.classList.contains("swiper-slide-active"))[0]:o=t.slides[t.activeIndex],o?parseInt(o.getAttribute("data-swiper-autoplay"),10):void 0},x=o=>{if(t.destroyed||!t.autoplay.running)return;cancelAnimationFrame(f),L();let E=typeof o>"u"?t.params.autoplay.delay:o;d=t.params.autoplay.delay,m=t.params.autoplay.delay;const y=w();!Number.isNaN(y)&&y>0&&typeof o>"u"&&(E=y,d=y,m=y),s=E;const V=t.params.speed,z=()=>{!t||t.destroyed||(t.params.autoplay.reverseDirection?!t.isBeginning||t.params.loop||t.params.rewind?(t.slidePrev(V,!0,!0),i("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(t.slides.length-1,V,!0,!0),i("autoplay")):!t.isEnd||t.params.loop||t.params.rewind?(t.slideNext(V,!0,!0),i("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(0,V,!0,!0),i("autoplay")),t.params.cssMode&&(r=new Date().getTime(),requestAnimationFrame(()=>{x()})))};return E>0?(clearTimeout(c),c=setTimeout(()=>{z()},E)):requestAnimationFrame(()=>{z()}),E},u=()=>{t.autoplay.running=!0,x(),i("autoplayStart")},D=()=>{t.autoplay.running=!1,clearTimeout(c),cancelAnimationFrame(f),i("autoplayStop")},v=(o,E)=>{if(t.destroyed||!t.autoplay.running)return;clearTimeout(c),o||(b=!0);const y=()=>{i("autoplayPause"),t.params.autoplay.waitForTransition?t.wrapperEl.addEventListener("transitionend",h):_()};if(t.autoplay.paused=!0,E){T&&(s=t.params.autoplay.delay),T=!1,y();return}s=(s||t.params.autoplay.delay)-(new Date().getTime()-r),!(t.isEnd&&s<0&&!t.params.loop)&&(s<0&&(s=0),y())},_=()=>{t.isEnd&&s<0&&!t.params.loop||t.destroyed||!t.autoplay.running||(r=new Date().getTime(),b?(b=!1,x(s)):x(),t.autoplay.paused=!1,i("autoplayResume"))},C=()=>{if(t.destroyed||!t.autoplay.running)return;const o=F();o.visibilityState==="hidden"&&(b=!0,v(!0)),o.visibilityState==="visible"&&_()},O=o=>{o.pointerType==="mouse"&&(b=!0,v(!0))},M=o=>{o.pointerType==="mouse"&&t.autoplay.paused&&_()},I=()=>{t.params.autoplay.pauseOnMouseEnter&&(t.el.addEventListener("pointerenter",O),t.el.addEventListener("pointerleave",M))},N=()=>{t.el.removeEventListener("pointerenter",O),t.el.removeEventListener("pointerleave",M)},R=()=>{F().addEventListener("visibilitychange",C)},P=()=>{F().removeEventListener("visibilitychange",C)};e("init",()=>{t.params.autoplay.enabled&&(I(),R(),r=new Date().getTime(),u())}),e("destroy",()=>{N(),P(),t.autoplay.running&&D()}),e("beforeTransitionStart",(o,E,y)=>{t.destroyed||!t.autoplay.running||(y||!t.params.autoplay.disableOnInteraction?v(!0,!0):D())}),e("sliderFirstMove",()=>{if(!(t.destroyed||!t.autoplay.running)){if(t.params.autoplay.disableOnInteraction){D();return}g=!0,S=!1,b=!1,k=setTimeout(()=>{b=!0,S=!0,v(!0)},200)}}),e("touchEnd",()=>{if(!(t.destroyed||!t.autoplay.running||!g)){if(clearTimeout(k),clearTimeout(c),t.params.autoplay.disableOnInteraction){S=!1,g=!1;return}S&&t.params.cssMode&&_(),S=!1,g=!1}}),e("slideChange",()=>{t.destroyed||!t.autoplay.running||(T=!0)}),Object.assign(t.autoplay,{start:u,stop:D,pause:v,resume:_})}function it(t){const{effect:l,swiper:e,on:i,setTranslate:n,setTransition:c,overwriteParams:f,perspective:d,recreateShadows:m,getEffectParams:s}=t;i("beforeInit",()=>{if(e.params.effect!==l)return;e.classNames.push(`${e.params.containerModifierClass}${l}`),d&&d()&&e.classNames.push(`${e.params.containerModifierClass}3d`);const p=f?f():{};Object.assign(e.params,p),Object.assign(e.originalParams,p)}),i("setTranslate",()=>{e.params.effect===l&&n()}),i("setTransition",(p,g)=>{e.params.effect===l&&c(g)}),i("transitionEnd",()=>{if(e.params.effect===l&&m){if(!s||!s().slideShadows)return;e.slides.forEach(p=>{p.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(g=>g.remove())}),m()}});let r;i("virtualUpdate",()=>{e.params.effect===l&&(e.slides.length||(r=!0),requestAnimationFrame(()=>{r&&e.slides&&e.slides.length&&(n(),r=!1)}))})}function ct(t,l){const e=j(l);return e!==l&&(e.style.backfaceVisibility="hidden",e.style["-webkit-backface-visibility"]="hidden"),e}function Y(t,l,e){const i=`swiper-slide-shadow${e?`-${e}`:""}`,n=j(l);let c=n.querySelector(`.${i}`);return c||(c=et("div",`swiper-slide-shadow${e?`-${e}`:""}`),n.append(c)),c}function dt({swiper:t,extendParams:l,on:e}){l({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}}),it({effect:"coverflow",swiper:t,on:e,setTranslate:()=>{const{width:c,height:f,slides:d,slidesSizesGrid:m}=t,s=t.params.coverflowEffect,r=t.isHorizontal(),p=t.translate,g=r?-p+c/2:-p+f/2,S=r?s.rotate:-s.rotate,k=s.depth;for(let T=0,b=d.length;T<b;T+=1){const h=d[T],L=m[T],w=h.swiperSlideOffset,x=(g-w-L/2)/L,u=typeof s.modifier=="function"?s.modifier(x):x*s.modifier;let D=r?S*u:0,v=r?0:S*u,_=-k*Math.abs(u),C=s.stretch;typeof C=="string"&&C.indexOf("%")!==-1&&(C=parseFloat(s.stretch)/100*L);let O=r?0:C*u,M=r?C*u:0,I=1-(1-s.scale)*Math.abs(u);Math.abs(M)<.001&&(M=0),Math.abs(O)<.001&&(O=0),Math.abs(_)<.001&&(_=0),Math.abs(D)<.001&&(D=0),Math.abs(v)<.001&&(v=0),Math.abs(I)<.001&&(I=0);const N=`translate3d(${M}px,${O}px,${_}px)  rotateX(${v}deg) rotateY(${D}deg) scale(${I})`,R=ct(s,h);if(R.style.transform=N,h.style.zIndex=-Math.abs(Math.round(u))+1,s.slideShadows){let P=r?h.querySelector(".swiper-slide-shadow-left"):h.querySelector(".swiper-slide-shadow-top"),o=r?h.querySelector(".swiper-slide-shadow-right"):h.querySelector(".swiper-slide-shadow-bottom");P||(P=Y(s,h,r?"left":"top")),o||(o=Y(s,h,r?"right":"bottom")),P&&(P.style.opacity=u>0?u:0),o&&(o.style.opacity=-u>0?-u:0)}}},setTransition:c=>{t.slides.map(d=>j(d)).forEach(d=>{d.style.transitionDuration=`${c}ms`,d.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(m=>{m.style.transitionDuration=`${c}ms`})})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}const ut={props:["otherClassData"],components:{Swiper:at,SwiperSlide:st,RouterLink:ot},setup(){return{modules:[dt,nt,lt]}}},ft={class:"card h-100 bg-primary border-0 pt-4"},mt={class:"d-flex justify-content-center"},pt={class:"d-flex justify-content-center align-items-center border rounded-circle border-secondary"},ht=["src"],yt={class:"card-body text-center p-0 mt-5"},gt={class:"card-title fs-4"},_t={class:"mt-8 mb-6"},bt={class:"card-text fs-6"},vt=a("div",{class:"card-footer text-center bg-secondary text-white"}," 詳細介紹 ",-1);function Et(t,l,e,i,n,c){const f=A("RouterLink"),d=A("swiper-slide"),m=A("swiper");return q(),G(m,{effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",autoplay:{delay:2e3,disableOnInteraction:!1},coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},pagination:!0,modules:i.modules,class:"mySwiper"},{default:B(()=>[(q(!0),K(tt,null,rt(e.otherClassData,(s,r)=>(q(),G(d,{key:r},{default:B(()=>[Q(f,{to:`/class/${s.id}`},{default:B(()=>[a("div",ft,[a("div",mt,[a("div",pt,[a("img",{src:s.imageUrl,class:"card-img-top rounded-circle card-img p-5",alt:"導師照片"},null,8,ht)])]),a("div",yt,[a("h2",gt,$(s.title),1),a("div",_t,[a("p",bt,$(s.description),1)])]),vt])]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1},8,["modules"])}const St=J(ut,[["render",Et]]),{VITE_PATH:W,VITE_URL:Z}={VITE_PATH:"ssozr",VITE_URL:"https://vue3-course-api.hexschool.io/",BASE_URL:"/vueweek82/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},Tt={data(){return{classData:{},otherClassData:[],id:"",goCart:!1,category:""}},components:{SwiperClassVue:St},methods:{getClassData(){this.$http.get(`${Z}/v2/api/${W}/product/${this.id}`).then(t=>{console.log(t),this.classData=t.data.product,this.category=t.data.product.category,this.getOtherClassData()}).catch(t=>{alert(t.data.message).error(t)})},getOtherClassData(){console.log(12132),this.$http.get(`${Z}v2/api/${W}/products/?category=${this.category}`).then(t=>{this.otherClassData=t.data.products}).catch(t=>{alert(t.data.message).error(t)})},...X(H,["addCart"]),...X(H,["changeGoCart"]),formatNumber(t){if(t)return t.toLocaleString()}},mounted(){const{id:t}=this.$route.params;this.id=t,this.getClassData()}},Dt={class:"container mb-15 teacher","data-aos":"fade-right"},Ct={class:"row"},$t={class:"text-center p-0 mb-10 col-8 offset-2"},xt=["src"],Lt={class:"mb-10"},Ot={class:"border-bottom border-primary border-3 pb-3"},Mt={class:"fs-6 mt-lg-0 mt-3 ps-lg-5 d-inline-block"},Pt={class:"row flex-lg-row-reverse"},It={class:"col-lg-4 text-center"},Vt=["src"],kt={class:"mb-6 mb-lg-0"},At={class:"col-lg-8 d-flex flex-column justify-content-between"},qt={class:"fs-4 mb-lg-15 mb-8"},wt={class:"d-lg-flex text-lg-start text-center justify-content-between align-items-end"},Nt={class:"p-0 m-0"},Rt={class:"fs-4"},Ft={class:"ms-4"},Bt={class:"fs-4 m-0"},Ut={class:"ms-4"},jt={class:"d-lg-flex mt-3"},zt={class:"my-15 my-md-30 container","data-aos":"fade-right"},Ht=a("h2",{class:"border-bottom border-primary border-3 pb-3"},"相關課程",-1);function Gt(t,l,e,i,n,c){const f=A("SwiperClassVue");return q(),K(tt,null,[a("div",Dt,[a("div",Ct,[a("div",$t,[a("img",{src:n.classData.imagesUrl,class:"imgI",alt:"課程示意圖"},null,8,xt)]),a("div",Lt,[a("h2",Ot,[U($(n.classData.title)+" ",1),a("span",Mt,$(n.classData.description),1)])]),a("div",Pt,[a("div",It,[a("img",{src:n.classData.imageUrl,alt:"",class:"card-img rounded-circle mb-4"},null,8,Vt),a("h3",kt,"授課老師:"+$(n.classData.unit),1)]),a("div",At,[a("p",qt,$(n.classData.content),1),a("div",wt,[a("ul",Nt,[a("li",null,[a("p",Rt,[U("課程堂數:"),a("span",Ft,$(n.classData.origin_price)+"堂",1)])]),a("li",null,[a("p",Bt,[U("課程總額:"),a("span",Ut,"NT$"+$(c.formatNumber(n.classData.price)),1)])])]),a("div",jt,[a("button",{type:"button",class:"btn btn-primary",onClick:l[0]||(l[0]=d=>t.addCart(n.classData))},"加入購物車"),a("button",{to:"/cart",type:"button",class:"btn btn-primary ms-6",onClick:l[1]||(l[1]=d=>t.changeGoCart(n.classData))},"立即上課")])])])])])]),a("div",zt,[Ht,Q(f,{"other-class-data":n.otherClassData},null,8,["other-class-data"])])],64)}const Zt=J(Tt,[["render",Gt]]);export{Zt as default};
