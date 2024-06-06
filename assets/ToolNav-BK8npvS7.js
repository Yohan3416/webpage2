import{M as x}from"./MxadropDown-YUw2Qk2I.js";import{_ as v,j as c,o as r,c as d,b as t,F as b,q as I,n as _,e as s,w as m,f as y,t as h,p as g,a as w}from"./index-BxxWntIH.js";const M={name:"MxaNav",props:{menuItems:{type:Array,default:()=>[]},isDark:{type:Boolean,default:!1},isVertical:{type:Boolean,default:!1}},data(){return{activeItem:null}},mounted(){this.menuItems.length>0&&(this.activeItem=this.menuItems[0])},methods:{handleClick(n){this.activeItem=n,console.log(`Navigating to: ${n.link}`)}}},N=["onClick"];function C(n,k,i,f,l,p){const u=c("router-link");return r(),d("div",{class:_(["navigation-menu",{"dark-mode":i.isDark,vertical:i.isVertical}])},[t("ul",null,[(r(!0),d(b,null,I(i.menuItems,(e,a)=>(r(),d("li",{key:a,onClick:R=>p.handleClick(e),class:_({active:e===l.activeItem||!l.activeItem&&a===0,"dark-mode-item":i.isDark&&(e===l.activeItem||!l.activeItem&&a===0)})},[s(u,{to:e.link,class:_({"active-link":e===l.activeItem})},{default:m(()=>[y(h(e.title),1)]),_:2},1032,["to","class"])],10,N))),128))])],2)}const D=v(M,[["render",C],["__scopeId","data-v-942a1e2d"]]),V={components:{MxadropDown:x,MxaNav:D},data(){return{codeLength:0,code1:`
<MxaNav 
  :menuItems="[
      { title: 'Home', link: '/tool/nav/home' },
      { title: 'About', link: '/tool/nav/about' },
      { title: 'Contact', link: '/tool/nav/contact' }
    ]"
  :isDark="true"
  :isVertical="false"
/>
  `,code2:`
<MxaNav 
  :menuItems="[
      { title: 'Home', link: '/tool/nav/home' },
      { title: 'About', link: '/tool/nav/about' },
      { title: 'Contact', link: '/tool/nav/contact' }
    ]"
  :isDark="false"
  :isVertical="true"
/>
    `}},methods:{handleClick(){alert("Button clicked!")}}},o=n=>(g("data-v-0d100319"),n=n(),w(),n),B={class:"content"},A=o(()=>t("h2",null,"MxaNav",-1)),S=o(()=>t("h3",null,"描述",-1)),H=o(()=>t("p",null,"MxaNav可以根据您传递的菜单项目进行渲染，支持暗黑模式和垂直布局。",-1)),T=o(()=>t("hr",null,null,-1)),z=o(()=>t("h3",null,"使用示例",-1)),F={style:{"margin-left":"30px","background-color":"aliceblue",border:"1px",width:"187px",opacity:"0.8","border-radius":"5px"}},L={style:{display:"flex"}},W={class:"code-box"},j={style:{"font-weight":"bold","font-size":"16px"}},q=o(()=>t("hr",null,null,-1)),E={style:{"margin-left":"30px","background-color":"aliceblue",border:"1px",width:"187px","border-radius":"5px"}},P={style:{display:"flex"}},$={class:"code-box"},G={style:{"font-weight":"bold","font-size":"16px"}},J=o(()=>t("hr",null,null,-1)),K=o(()=>t("h3",null,"Props参数",-1)),O=o(()=>t("ul",null,[t("li",null,"menuItems (Array): 菜单项目数组，每个项目应该包含title和link属性。"),t("li",null,"isDark (Boolean): 是否启用暗黑模式，默认为false。"),t("li",null,"isVertical (Boolean): 是否垂直排列菜单项，默认为false。")],-1));function Q(n,k,i,f,l,p){const u=c("router-view"),e=c("MxaNav"),a=c("MxadropDown");return r(),d("div",B,[A,S,H,T,z,s(u),t("div",F,[t("div",L,[s(e,{menuItems:[{title:"Home",link:"/tool/nav/home"},{title:"About",link:"/tool/nav/about"},{title:"Contact",link:"/tool/nav/contact"}],isDark:!0,isVertical:!1})]),s(a,{dropdownMaxWidth:"1000px",buttonText:"展开代码",buttonStyle:"info"},{default:m(()=>[t("div",W,[t("pre",j,"        "+h(l.code1)+`
  `,1)])]),_:1})]),q,t("div",E,[t("div",P,[s(e,{menuItems:[{title:"Home",link:"/tool/nav/home"},{title:"About",link:"/tool/nav/about"},{title:"Contact",link:"/tool/nav/contact"}],isDark:!1,isVertical:!0})]),s(a,{dropdownMaxWidth:"1000px",buttonText:"展开代码",buttonStyle:"info"},{default:m(()=>[t("div",$,[t("pre",G,"        "+h(l.code2)+`
  `,1)])]),_:1})]),J,K,O])}const Y=v(V,[["render",Q],["__scopeId","data-v-0d100319"]]);export{Y as default};
