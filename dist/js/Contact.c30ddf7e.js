(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Contact"],{1682:function(t,e,i){},"1e42":function(t,e,i){"use strict";var s=i("7f71"),a=i.n(s);a.a},"7f71":function(t,e,i){},8099:function(t,e,i){},b8fa:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("router-link",{staticClass:"button-pill button-pill--icon m-medium close",attrs:{to:{name:"home"}}},[i("svg",{staticClass:"icon-cross",attrs:{"data-v-4fdd230d":"",width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{"data-v-4fdd230d":"",d:"M0.146484 9.14722L9.14722 0.146484L9.85433 0.853591L0.853591 9.85433L0.146484 9.14722Z","fill-rule":"evenodd","clip-rule":"evenodd",fill:"black"}}),i("path",{attrs:{"data-v-4fdd230d":"",d:"M0.853637 0.14712L9.85361 9.14706L9.1465 9.85417L0.146531 0.854228L0.853637 0.14712Z","fill-rule":"evenodd","clip-rule":"evenodd",fill:"black"}})])]),t.enter?i("loadingCom"):t._e(),t.enter?t._e():i("div",{staticClass:"columns opacity-none"},[i("Contacts",{ref:"contacts"}),i("About",{ref:"about"})],1),t.enter?t._e():i("div",{staticClass:"columns-footer"},[i("div",{staticClass:"columns-footer__menu"},[i("div",{staticClass:"columns-footer__menu-item",on:{click:function(e){return t.activeColumn("one",e)}}},[i("div",{staticClass:"button-pill active",attrs:{"data-column":"one"}},[t._v("About")])]),i("div",{staticClass:"columns-footer__menu-item",on:{click:function(e){return t.activeColumn("two",e)}}},[i("div",{staticClass:"button-pill",attrs:{"data-column":"two"}},[t._v("Contacts")])])])])],1)},a=[],n=(i("96cf"),i("3b8d")),o=i("cebc"),l=i("2939"),c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"contacts",staticClass:"column",attrs:{"data-size":"1","data-column":"two"}},[i("a",{ref:"button",staticClass:"enlarge button-pill"},[t._v("Studio")]),t._m(0),t._m(1),t._m(2),i("Footer"),i("AuthPortal",{attrs:{visibilePortal:t.visibilePortal}})],1)},r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"flex f-space-between column-head"},[i("div",{staticClass:"items__title"},[i("span",[t._v("Contacts")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"information__text"},[i("div",[i("p",[t._v("Mobile: "),i("b",[t._v("00201156565910")])]),i("p",[t._v("Mobile: "),i("b",[t._v("00201553733394")])]),i("p",[t._v("Email: "),i("b",[t._v("amsstudio.e@gmail.com")])]),i("p",[t._v("Address: "),i("b",[t._v("1 Main st, cairo. Egypt")])])]),i("div",[i("p",[i("b",[t._v("Follow Us")])]),i("p",[i("a",{attrs:{href:""}},[t._v("LinkedIn")])]),i("p",[i("a",{attrs:{href:""}},[t._v("Dev")])]),i("p",[i("a",{attrs:{href:""}},[t._v("Facebook")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"logo"},[s("img",{attrs:{src:i("dccb"),alt:"logo"}})])}],u=i("7f21"),d=i("2f62"),f=i("8292"),v=i("4f9e"),h={name:"Projetcs",data:function(){return{visibilePortal:!1}},components:{Footer:u["a"],AuthPortal:f["a"]},computed:Object(o["a"])({},Object(d["d"])(["two","one"])),mounted:function(){this.$emit("created",{col:"studio"})},methods:{openmail:function(){this.visibilePortal=!0,document.getElementById("subscription").classList.add("show"),document.querySelector("body").classList.add("portal-pane--show")},opensearch:function(){document.querySelector("body").classList.add("search-pane--show")},shrink:function(){v["b"]({one:{right:66.6,left:33.3},two:{right:33.3,left:66.6}}),v["d"]()},expand:function(){v["b"]({one:{right:95,left:5},two:{right:90,left:10}})}}},m=h,p=(i("e8f9"),i("2877")),b=Object(p["a"])(m,c,r,!1,null,null,null),_=b.exports,w=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"about",staticClass:"column active",attrs:{"data-column":"one",id:"colOne","data-size":"1"}},[i("a",{ref:"button",staticClass:"enlarge button-pill"},[t._v("About")]),i("div",{staticClass:"flex f-space-between column-head"},[i("div",{staticClass:"items__title",class:[{flex:!t.activefilters},{none:t.activefilters}]},[i("span",[t._v("About")])])]),t._m(0)])},g=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"information__text"},[i("p",[t._v("What does it mean to elevate the human experience?")]),i("p",[t._v("AMSaad is a software and digital resources studio based in Egypt with a timeless approach that fosters connection.")]),i("p",[t._v("Every detail is thoughtfully considered, coalescing in work that forges new ground while remaining true to our philosophy and vision.")])])}],C=i("1157"),j={name:"Articles",data:function(){return{activefilters:!1,allarticles:[]}},computed:Object(o["a"])({},Object(d["d"])(["one","two","colWidth","categories"]),Object(d["d"])("studio",["fetching","filtredArticles"]),Object(d["c"])("studio",["filterArticle"])),props:["articles"],mounted:function(){this.$emit("created",{col:"articles"})},created:function(){this.allarticles=this.articles},methods:{shrink:function(){v["b"]({one:{right:66.6,left:33.3},two:{right:33.3,left:66.6}}),v["d"]()},filter:function(t,e){C(".filters__filter-set .button-pill").removeClass("active"),C(e.target).addClass("active"),this.filterArticle(t)}},watch:{filtredArticles:function(t){this.allarticles=t},articles:function(t){this.allarticles=t}}},k=j,x=(i("bc20"),Object(p["a"])(k,w,g,!1,null,"0cbcce84",null)),L=x.exports,y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"projects",staticClass:"column active",attrs:{"data-column":"two","data-size":"1"}},[i("a",{ref:"button",staticClass:"enlarge button-pill",on:{click:function(e){return t.expand()}}},[t._v("Projects")]),i("div",{staticClass:"flex f-space-between column-head"},[i("div",{staticClass:"items__title",class:[{flex:!t.activefilters},{none:t.activefilters}]},[i("span",{on:{click:function(e){return t.expand()}}},[t._v("Projects")]),i("span",[i("i",{staticClass:"fas fa-times",on:{click:function(e){return t.shrink()}}})])]),i("div",{staticClass:"filters",staticStyle:{right:"124px"}},[i("div",{class:[{none:!t.activefilters},{filters__filters:t.activefilters}]},[i("div",{staticClass:"filters__filter-set"},[i("a",{staticClass:"button-pill button-pill--small active all",on:{click:function(e){return t.filter("all",e)}}},[t._v("All")]),t._l(t.categories,function(e){return i("a",{key:e._id,staticClass:"button-pill button-pill--small",attrs:{"data-project-id":e.name},on:{click:function(i){return t.filter(e.name,i)}}},[t._v(t._s(e.name))])})],2)]),i("div",{staticClass:"filters__toggle"},[i("div",{staticClass:"button-extend button-extend--small button-extend--with-hover show"},[i("div",{staticClass:"button-extend__icon",on:{click:function(e){t.activefilters=!t.activefilters}}},[t.activefilters?t._e():i("svg",{staticClass:"icon-filter",attrs:{width:"7",height:"5",viewBox:"0 0 7 5",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{d:"M0 4.5H7",stroke:"black"}}),i("path",{attrs:{d:"M0 0.5H7",stroke:"black"}})]),t.activefilters?i("svg",{staticClass:"icon-cross",attrs:{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M0.146484 9.14722L9.14722 0.146484L9.85433 0.853591L0.853591 9.85433L0.146484 9.14722Z",fill:"black"}}),i("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M0.853637 0.14712L9.85361 9.14706L9.1465 9.85417L0.146531 0.854228L0.853637 0.14712Z",fill:"black"}})]):t._e()])])])])]),i("div",{staticClass:"items"},t._l(t.allProjects,function(t){return i("Project",{key:t._id,attrs:{project:t}})}),1)])},P=[],O=i("bb09"),$=i("1157"),A={name:"Projetcs",data:function(){return{left:null,right:null,activefilters:!1,allProjects:[]}},components:{Project:O["a"]},props:["projects"],computed:Object(o["a"])({},Object(d["d"])(["one","two","colWidth","categories"]),Object(d["d"])("studio",["fetching","filtredProjects"]),Object(d["c"])("studio",["filterProject"])),mounted:function(){this.$emit("created",{col:"projects"})},created:function(){this.allProjects=this.projects},methods:{shrink:function(){v["b"]({one:{right:66.6,left:33.3},two:{right:33.3,left:66.6}}),v["d"]()},expand:function(){v["b"]({one:{right:95,left:5},two:{right:5,left:95}})},filter:function(t,e){$(".filters__filter-set .button-pill").removeClass("active"),$(e.target).addClass("active"),this.filterProject(t)}},watch:{filtredProjects:function(t){this.allProjects=t},projects:function(t){this.allProjects=t}}},E=A,M=Object(p["a"])(E,y,P,!1,null,null,null),R=M.exports,W=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.loading?t._e():i("div",{staticClass:"rails"},[i("LeftRail",{attrs:{colone:this.refs.services,coltwo:this.refs.projects}}),i("RightRail",{attrs:{coltwo:this.refs.projects,colthree:this.refs.studio}})],1)},S=[],q=i("62ce"),F=i("a446"),z={name:"Rails",data:function(){return{}},components:{RightRail:F["a"],LeftRail:q["a"]},props:["loading","refs"],mounted:function(){},methods:{}},B=z,Z=Object(p["a"])(B,W,S,!1,null,null,null),H=Z.exports,I=i("1157"),J={name:"Contact",data:function(){return{windowWidth:window.innerWidth,shiftX:null,shiftY:null,loading:!0,enter:!0}},components:{Contacts:_,About:L,People:R,Rails:H,loadingCom:l["a"]},computed:Object(o["a"])({},Object(d["d"])(["one","two","colWidth"]),Object(d["d"])("studio",["articles","projects","ready"])),mounted:function(){var t=this;this.start(),this.loading=!1,window.addEventListener("resize",function(){t.windowWidth=window.innerWidth})},created:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}},t)}));function e(){return t.apply(this,arguments)}return e}(),methods:{start:function(){v["d"](),this.enter=!1},checkFiltertion:function(){var t=this.$route.query.type,e=this.$route.params.category;t&&e&&("article"===t?(this.$refs.articles.activefilters=!0,document.querySelector('a[data-article-id="'.concat(e,'"]')).click(),this.$refs.articles.expand()):(this.$refs.projects.activefilters=!0,document.querySelector('a[data-project-id="'.concat(e,'"]')).click(),this.$refs.projects.expand()))},activeColumn:function(t){I(".column").addClass("none"),I("[data-column]").removeClass("active"),I(".column").removeClass("none"),I('[data-column="'.concat(t,'"]')).addClass("active")}},watch:{windowWidth:function(){v["a"]()},ready:function(t){var e=this;2==t&&setTimeout(function(){e.start()},2e3)}}},D=J,T=(i("1e42"),Object(p["a"])(D,s,a,!1,null,"783c7e40",null));e["default"]=T.exports},bc20:function(t,e,i){"use strict";var s=i("8099"),a=i.n(s);a.a},e8f9:function(t,e,i){"use strict";var s=i("1682"),a=i.n(s);a.a}}]);
//# sourceMappingURL=Contact.c30ddf7e.js.map