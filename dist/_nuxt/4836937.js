(window.webpackJsonp=window.webpackJsonp||[]).push([[13,3,4,5],{320:function(t,e,n){t.exports={}},321:function(t,e,n){"use strict";n.r(e);var r=n(30),component=Object(r.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("footer",{staticClass:"bg-purple-progress py-20 text-white text-lg"},[e("div",{staticClass:"container mx-auto"},[e("div",{staticClass:"sm:flex mb-4"},[e("div",{staticClass:"sm:w-1/2 sm:mt-0 mt-8 h-auto"},[e("img",{staticClass:"mb-2",attrs:{src:"/logo_senabung_fix.svg",alt:""}}),t._v(" "),e("p",{staticClass:"font-light"},[t._v("\n          Sedekah lebih mudah Terpercaya "),e("br"),t._v("dan Amanah\n        ")])]),t._v(" "),e("div",{staticClass:"sm:w-1/4 h-auto"},[e("div",{staticClass:"mb-8 font-bold"},[t._v("Explorasi")]),t._v(" "),e("ul",{staticClass:"font-light"},[e("li",{staticClass:"mb-3"},[t._v("Pelayanan Kami")]),t._v(" "),e("li",{staticClass:"mb-3"},[t._v("Sistem Ekuitas")]),t._v(" "),e("li",{staticClass:"mb-3"},[t._v("Pengembalian dana")]),t._v(" "),e("li",{staticClass:"mb-3"},[t._v("Pemegang saham")])])]),t._v(" "),e("div",{staticClass:"sm:w-1/4 h-auto"},[e("div",{staticClass:"mb-8 font-bold"},[t._v("Investor")]),t._v(" "),e("ul",{staticClass:"font-light"},[e("li",{staticClass:"mb-3"},[t._v("Akun Saya")]),t._v(" "),e("li",{staticClass:"mb-3"},[t._v("Program Teratas")]),t._v(" "),e("li",{staticClass:"mb-3"},[t._v("Tutorial Cara nya")]),t._v(" "),e("li",{staticClass:"mb-3"},[t._v("Penarikan")])])]),t._v(" "),e("div",{staticClass:"sm:w-1/4 h-auto"},[e("div",{staticClass:"mb-8 font-bold"},[t._v("Office")]),t._v(" "),e("ul",{staticClass:"font-light"},[e("li",{staticClass:"mb-3"},[t._v("+6289651801742")]),t._v(" "),e("li",{staticClass:"mb-3"},[t._v("KBP, Serang")]),t._v(" "),e("li",{staticClass:"mb-3"},[t._v("RT.01 RW.08 Kebaharan")]),t._v(" "),e("li",{staticClass:"mb-3"},[t._v("support@senabungserang.id")])])])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Footer:n(321).default})},322:function(t,e,n){"use strict";n(320)},323:function(t,e,n){"use strict";n.r(e);n(31);var r=n(7),l=(n(37),{methods:{logout:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:case"end":return e.stop()}}),e)})))()}}}),o=(n(322),n(30)),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("header",{staticClass:"flex items-center"},[t._m(0),t._v(" "),e("ul",{staticClass:"items-center lg:flex hidden"},[e("li",[e("nuxt-link",{staticClass:"text-white hover:text-teal-500 text-lg px-4 py-3",attrs:{to:"/"}},[t._v("\n        Home\n      ")])],1),t._v(" "),e("li",[e("nuxt-link",{staticClass:"text-white hover:text-teal-500 text-lg px-4 py-3",attrs:{to:"#"}},[t._v("\n        Project\n      ")])],1),t._v(" "),e("li",[e("nuxt-link",{staticClass:"text-white hover:text-teal-500 text-lg px-4 py-3",attrs:{to:"#"}},[t._v("\n        Features\n      ")])],1),t._v(" "),e("li",[e("nuxt-link",{staticClass:"text-white hover:text-teal-500 text-lg px-4 py-3",attrs:{to:"#"}},[t._v("\n        Success Stories\n      ")])],1)]),t._v(" "),this.$store.state.auth.loggedIn?e("div",{staticClass:"flex ml-auto"},[e("div",{staticClass:"dropdown inline-block relative z-10"},[e("button",{staticClass:"bg-white text-gray-700 font-semibold py-4 px-6 rounded inline-flex items-center"},[this.$store.state.auth.user.image_url?e("img",{staticClass:"h-8 rounded-full mr-2",attrs:{src:t.$axios.defaults.baseURL+"/"+t.$store.state.auth.user.image_url,alt:""}}):t._e(),t._v(" "),e("span",{staticClass:"mr-1"},[t._v("\n          "+t._s(this.$store.state.auth.user.name)+"\n        ")]),t._v(" "),e("svg",{staticClass:"fill-current h-4 w-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[e("path",{attrs:{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}})])]),t._v(" "),e("ul",{staticClass:"dropdown-menu absolute hidden text-greyy-700 shadow w-full -mt-2"},[e("li",[e("nuxt-link",{staticClass:"bg-white hover:text-orange-500 py-2 px-4 block whitespace-nowrap",attrs:{to:"/dashboard"}},[t._v("\n          Dashboard\n         ")])],1),t._v(" "),e("li",[e("nuxt-link",{staticClass:"bg-white hover:text-orange-500 py-2 px-4 block whitespace-nowrap",attrs:{to:"/dashboard"}},[t._v("\n          Account setting\n         ")])],1),t._v(" "),e("li",[e("a",{staticClass:"cursor-pointer rounded-b bg-white hover:text-orange-500 py-2 px-4 block whitespace-now-rap",on:{click:function(e){return t.logout()}}},[t._v("\n          Logout\n         ")])])])])]):e("ul",{staticClass:"flex ml-auto items-center mt-2 gap-2"},[e("li",{staticClass:"md:flex hidden"},[e("nuxt-link",{staticClass:"inline-block bg-transparent border-white border hover:bg-white hover:bg-opacity-25 text-white font-light w-40 text-center px-6 md:py-1 text-lg rounded-full",attrs:{to:"/register"}},[t._v("\n        Sign Up\n      ")])],1),t._v(" "),e("li",[e("nuxt-link",{staticClass:"inline-block bg-transparent border-white border hover:bg-white hover:bg-opacity-25 text-white font-light w-40 text-center px-6 md:py-1 text-lg rounded-full",attrs:{to:"/login"}},[t._v("\n        Sign In\n      ")])],1)]),t._v(" "),e("div",{staticClass:"mobileMenu hidden"},[e("ul",{staticClass:"text-white text-xs font-bold gap-8"},[e("li",[e("nuxt-link",{staticClass:"text-white hover:text-teal-500 text-lg px-4 py-3",attrs:{to:"/"}},[t._v("\n        Home\n      ")])],1),t._v(" "),e("li",[e("nuxt-link",{staticClass:"text-white hover:text-teal-500 text-lg px-4 py-3",attrs:{to:"#"}},[t._v("\n        Project\n      ")])],1),t._v(" "),e("li",[e("nuxt-link",{staticClass:"text-white hover:text-teal-500 text-lg px-4 py-3",attrs:{to:"#"}},[t._v("\n        Features\n      ")])],1),t._v(" "),e("li",[e("nuxt-link",{staticClass:"text-white hover:text-teal-500 text-lg px-4 py-3",attrs:{to:"#"}},[t._v("\n        Success Stories\n      ")])],1)])])])}),[function(){var t=this._self._c;return t("button",{staticClass:"pr-5",staticStyle:{height:"54px"}},[t("img",{staticClass:"h-full",attrs:{src:"/logo_senabung.png",alt:"logo"}})])}],!1,null,"f85d6814",null);e.default=component.exports},324:function(t,e,n){"use strict";n.r(e);var r=n(30),component=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("section",{staticClass:"call-to-action bg-purple-progress pt-64 pb-10"},[e("div",{staticClass:"container mx-auto"},[e("div",{staticClass:"w-full text-center"},[t._m(0),t._v(" "),e("button",{staticClass:"inline-block bg-orange-button hover:bg-green-button text-white font-semibold px-6 py-4 mt-8 text-lg rounded-full",on:{click:function(e){return t.$router.push({path:"/register"})}}},[t._v("\n        Donasi Sekarang\n      ")])])])])}),[function(){var t=this,e=t._self._c;return e("h1",{staticClass:"text-5xl text-white font-semibold"},[t._v("\n        Cara mudah untuk berdonasi\n        "),e("br"),t._v("\n        sisihkan uang terbaik anda\n      ")])}],!1,null,null,null);e.default=component.exports},333:function(t,e,n){"use strict";var r=n(2),l=n(334);r({target:"Number",stat:!0,forced:Number.parseInt!==l},{parseInt:l})},334:function(t,e,n){"use strict";var r=n(5),l=n(3),o=n(4),c=n(16),d=n(228).trim,m=n(229),v=r.parseInt,x=r.Symbol,_=x&&x.iterator,f=/^[+-]?0x/i,h=o(f.exec),C=8!==v(m+"08")||22!==v(m+"0x16")||_&&!l((function(){v(Object(_))}));t.exports=C?function(t,e){var n=d(c(t));return v(n,e>>>0||(h(f,n)?16:10))}:v},345:function(t,e,n){"use strict";n.r(e);n(32),n(43),n(31);var r=n(7),l=(n(333),n(37),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,r=t.params,e.next=3,n.$get("/api/v1/campaigns/"+r.id);case 3:return l=e.sent,e.abrupt("return",{campaign:l});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{default_image:"",transactions:{amount:0,campaign_id:Number.parseInt(this.$route.params.id)}}},methods:{changeImage:function(t){this.default_image=t},fund:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.post("/api/v1/transactions",t.transactions);case 3:n=e.sent,window.location=n.data.data.payment_url,console.log(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}},mounted:function(){this.default_image=this.$axios.defaults.baseURL+"/"+this.campaign.data.image_url}}),o=n(30),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"project-page"},[e("section",{staticClass:"project-header pt-5"},[e("div",{staticClass:"container mx-auto relative"},[e("Navbar")],1)]),t._v(" "),e("section",{staticClass:"container project-container mx-auto -mt-56"},[e("div",{staticClass:"flex flex-col md:flex-row mt-3"},[e("div",{staticClass:"w-full md:w-3/4 md:mr-6"},[e("div",{staticClass:"bg-white p-3 mb-3 border border-gray-400 rounded-20"},[e("figure",{staticClass:"item-image"},[e("img",{staticClass:"rounded-20 w-full",attrs:{src:t.default_image,alt:""}})])]),t._v(" "),e("div",{staticClass:"flex -mx-2"},t._l(t.campaign.data.images,(function(image){return e("div",{key:image.image_url,staticClass:"relative w-1/4 bg-white m-2 p-2 border border-gray-400 rounded-20"},[e("figure",{staticClass:"item-thumbnail"},[e("img",{staticClass:"rounded-20 w-full",attrs:{src:t.$axios.defaults.baseURL+"/"+image.image_url,alt:""},on:{click:function(e){return t.changeImage(t.$axios.defaults.baseURL+"/"+image.image_url)}}})])])})),0)]),t._v(" "),e("div",{staticClass:"w-full md:w-1/4 order-2 md:order-1"},[e("div",{staticClass:"bg-white w-full p-5 border border-gray-400 rounded-20 sticky",staticStyle:{top:"15px"}},[e("h3",[t._v("Project Leader:")]),t._v(" "),e("div",{staticClass:"flex mt-3"},[e("div",{staticClass:"w-1/4"},[e("img",{staticClass:"w-full inline-block rounded-full",attrs:{src:t.$axios.defaults.baseURL+"/"+t.campaign.data.user.image_url,alt:""}})]),t._v(" "),e("div",{staticClass:"w-3/4 ml-5 mt-1"},[e("div",{staticClass:"font-semibold text-xl text-gray-800"},[t._v("\n                  "+t._s(t.campaign.data.user.name)+"\n                ")]),t._v(" "),e("div",{staticClass:"font-light text-md text-gray-400"},[t._v("\n                  "+t._s(t.campaign.data.backer_count)+"\n                ")])])]),t._v(" "),e("h4",{staticClass:"mt-5 font-semibold"},[t._v("What will you get:")]),t._v(" "),e("ul",{staticClass:"list-check mt-3"},t._l(t.campaign.data.perks,(function(n){return e("li",{key:n},[t._v("\n                "+t._s(n)+"\n              ")])})),0),t._v(" "),this.$store.state.auth.loggedIn?[e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.transactions.amount,expression:"transactions.amount",modifiers:{number:!0}}],staticClass:"border border-gray-500 block w-full px-6 py-3 mt-4 rounded-full text-gray-800 transition duration-300 ease-in-out focus:outline-none focus:shadow-outline",attrs:{type:"number",placeholder:"Amount in Rp"},domProps:{value:t.transactions.amount},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.fund.apply(null,arguments)},input:function(e){e.target.composing||t.$set(t.transactions,"amount",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),e("button",{staticClass:"text-center mt-3 button-cta block w-full bg-orange-button hover:bg-green-button text-white font-medium px-6 py-3 text-md rounded-full",on:{click:t.fund}},[t._v("\n              Fund Now\n          ")])]:[e("button",{staticClass:"text-center mt-3 button-cta block w-full bg-orange-button hover:bg-green-button text-white font-medium px-6 py-3 text-md rounded-full",on:{click:function(e){return t.$router.push({path:"/login"})}}},[t._v("\n              Sign to Fund\n            ")])]],2)])])]),t._v(" "),e("section",{staticClass:"container mx-auto pt-8"},[e("div",{staticClass:"flex justify-between items-center"},[e("div",{staticClass:"w-full md:w-3/4 mr-6"},[e("h2",{staticClass:"text-4xl text-gray-900 mb-2 font-medium"},[t._v("\n            "+t._s(t.campaign.data.name)+"\n          ")]),t._v(" "),e("p",{staticClass:"font-light text-xl mb-5"},[t._v("\n            "+t._s(t.campaign.data.short_description)+"\n          ")]),t._v(" "),e("div",{staticClass:"relative progress-bar"},[e("div",{staticClass:"overflow-hidden mb-4 text-xs flex rounded-full bg-gray-200 h-6"},[e("div",{staticClass:"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-progress progress-striped",style:"width:"+t.campaign.data.current_amount/t.campaign.data.goal_amount*100+"%"})])]),t._v(" "),e("div",{staticClass:"flex progress-info mb-6"},[e("div",{staticClass:"text-2xl"},[t._v("\n              "+t._s(t.campaign.data.current_amount/t.campaign.data.goal_amount*100)+"%\n            ")]),t._v(" "),e("div",{staticClass:"ml-auto font-semibold text-2xl"},[t._v("\n              Rp. "+t._s((new Intl.NumberFormat).format(t.campaign.data.goal_amount))+"\n            ")])]),t._v(" "),e("p",{staticClass:"font-light text-xl mb-5"},[t._v("\n            "+t._s(t.campaign.data.description)+"\n          ")])]),t._v(" "),e("div",{staticClass:"w-1/4 hidden md:block"})])]),t._v(" "),e("div",{staticClass:"cta-clip -mt-20"}),t._v(" "),e("CallToAction"),t._v(" "),e("Footer")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Navbar:n(323).default,CallToAction:n(324).default,Footer:n(321).default})}}]);