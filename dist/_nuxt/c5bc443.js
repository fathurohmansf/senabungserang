(window.webpackJsonp=window.webpackJsonp||[]).push([[10,4,5],{320:function(t,e,n){t.exports={}},321:function(t,e,n){"use strict";n.r(e);var l=n(30),component=Object(l.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("footer",{staticClass:"bg-purple-progress py-20 text-white text-lg"},[e("div",{staticClass:"container mx-auto"},[e("div",{staticClass:"sm:flex mb-4"},[e("div",{staticClass:"sm:w-1/2 sm:mt-0 mt-8 h-auto"},[e("img",{staticClass:"mb-2",attrs:{src:"/logo_senabung_fix.svg",alt:""}}),t._v(" "),e("p",{staticClass:"font-light"},[t._v("\n          Sedekah lebih mudah Terpercaya "),e("br"),t._v("dan Amanah\n        ")])]),t._v(" "),e("div",{staticClass:"sm:w-1/4 h-auto"},[e("div",{staticClass:"mb-8 font-bold"},[t._v("Explorasi")]),t._v(" "),e("ul",{staticClass:"font-light"},[e("li",{staticClass:"mb-3"},[t._v("Pelayanan Kami")]),t._v(" "),e("li",{staticClass:"mb-3"},[t._v("Sistem Ekuitas")]),t._v(" "),e("li",{staticClass:"mb-3"},[t._v("Pengembalian dana")]),t._v(" "),e("li",{staticClass:"mb-3"},[t._v("Pemegang saham")])])]),t._v(" "),e("div",{staticClass:"sm:w-1/4 h-auto"},[e("div",{staticClass:"mb-8 font-bold"},[t._v("Investor")]),t._v(" "),e("ul",{staticClass:"font-light"},[e("li",{staticClass:"mb-3"},[t._v("Akun Saya")]),t._v(" "),e("li",{staticClass:"mb-3"},[t._v("Program Teratas")]),t._v(" "),e("li",{staticClass:"mb-3"},[t._v("Tutorial Cara nya")]),t._v(" "),e("li",{staticClass:"mb-3"},[t._v("Penarikan")])])]),t._v(" "),e("div",{staticClass:"sm:w-1/4 h-auto"},[e("div",{staticClass:"mb-8 font-bold"},[t._v("Office")]),t._v(" "),e("ul",{staticClass:"font-light"},[e("li",{staticClass:"mb-3"},[t._v("+6289651801742")]),t._v(" "),e("li",{staticClass:"mb-3"},[t._v("KBP, Serang")]),t._v(" "),e("li",{staticClass:"mb-3"},[t._v("RT.01 RW.08 Kebaharan")]),t._v(" "),e("li",{staticClass:"mb-3"},[t._v("support@senabungserang.id")])])])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Footer:n(321).default})},322:function(t,e,n){"use strict";n(320)},323:function(t,e,n){"use strict";n.r(e);n(31);var l=n(7),r=(n(37),{methods:{logout:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:case"end":return e.stop()}}),e)})))()}}}),o=(n(322),n(30)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("header",{staticClass:"flex items-center"},[t._m(0),t._v(" "),e("ul",{staticClass:"items-center lg:flex hidden"},[e("li",[e("nuxt-link",{staticClass:"text-white hover:text-teal-500 text-lg px-4 py-3",attrs:{to:"/"}},[t._v("\n        Home\n      ")])],1),t._v(" "),e("li",[e("nuxt-link",{staticClass:"text-white hover:text-teal-500 text-lg px-4 py-3",attrs:{to:"#"}},[t._v("\n        Project\n      ")])],1),t._v(" "),e("li",[e("nuxt-link",{staticClass:"text-white hover:text-teal-500 text-lg px-4 py-3",attrs:{to:"#"}},[t._v("\n        Features\n      ")])],1),t._v(" "),e("li",[e("nuxt-link",{staticClass:"text-white hover:text-teal-500 text-lg px-4 py-3",attrs:{to:"#"}},[t._v("\n        Success Stories\n      ")])],1)]),t._v(" "),this.$store.state.auth.loggedIn?e("div",{staticClass:"flex ml-auto"},[e("div",{staticClass:"dropdown inline-block relative z-10"},[e("button",{staticClass:"bg-white text-gray-700 font-semibold py-4 px-6 rounded inline-flex items-center"},[this.$store.state.auth.user.image_url?e("img",{staticClass:"h-8 rounded-full mr-2",attrs:{src:t.$axios.defaults.baseURL+"/"+t.$store.state.auth.user.image_url,alt:""}}):t._e(),t._v(" "),e("span",{staticClass:"mr-1"},[t._v("\n          "+t._s(this.$store.state.auth.user.name)+"\n        ")]),t._v(" "),e("svg",{staticClass:"fill-current h-4 w-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[e("path",{attrs:{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}})])]),t._v(" "),e("ul",{staticClass:"dropdown-menu absolute hidden text-greyy-700 shadow w-full -mt-2"},[e("li",[e("nuxt-link",{staticClass:"bg-white hover:text-orange-500 py-2 px-4 block whitespace-nowrap",attrs:{to:"/dashboard"}},[t._v("\n          Dashboard\n         ")])],1),t._v(" "),e("li",[e("nuxt-link",{staticClass:"bg-white hover:text-orange-500 py-2 px-4 block whitespace-nowrap",attrs:{to:"/dashboard"}},[t._v("\n          Account setting\n         ")])],1),t._v(" "),e("li",[e("a",{staticClass:"cursor-pointer rounded-b bg-white hover:text-orange-500 py-2 px-4 block whitespace-now-rap",on:{click:function(e){return t.logout()}}},[t._v("\n          Logout\n         ")])])])])]):e("ul",{staticClass:"flex ml-auto items-center mt-2 gap-2"},[e("li",{staticClass:"md:flex hidden"},[e("nuxt-link",{staticClass:"inline-block bg-transparent border-white border hover:bg-white hover:bg-opacity-25 text-white font-light w-40 text-center px-6 md:py-1 text-lg rounded-full",attrs:{to:"/register"}},[t._v("\n        Sign Up\n      ")])],1),t._v(" "),e("li",[e("nuxt-link",{staticClass:"inline-block bg-transparent border-white border hover:bg-white hover:bg-opacity-25 text-white font-light w-40 text-center px-6 md:py-1 text-lg rounded-full",attrs:{to:"/login"}},[t._v("\n        Sign In\n      ")])],1)]),t._v(" "),e("div",{staticClass:"mobileMenu hidden"},[e("ul",{staticClass:"text-white text-xs font-bold gap-8"},[e("li",[e("nuxt-link",{staticClass:"text-white hover:text-teal-500 text-lg px-4 py-3",attrs:{to:"/"}},[t._v("\n        Home\n      ")])],1),t._v(" "),e("li",[e("nuxt-link",{staticClass:"text-white hover:text-teal-500 text-lg px-4 py-3",attrs:{to:"#"}},[t._v("\n        Project\n      ")])],1),t._v(" "),e("li",[e("nuxt-link",{staticClass:"text-white hover:text-teal-500 text-lg px-4 py-3",attrs:{to:"#"}},[t._v("\n        Features\n      ")])],1),t._v(" "),e("li",[e("nuxt-link",{staticClass:"text-white hover:text-teal-500 text-lg px-4 py-3",attrs:{to:"#"}},[t._v("\n        Success Stories\n      ")])],1)])])])}),[function(){var t=this._self._c;return t("button",{staticClass:"pr-5",staticStyle:{height:"54px"}},[t("img",{staticClass:"h-full",attrs:{src:"/logo_senabung.png",alt:"logo"}})])}],!1,null,"f85d6814",null);e.default=component.exports},340:function(t,e,n){"use strict";n.r(e);n(31);var l=n(7),r=(n(37),{middleware:"auth",asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var n,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,t.app,e.next=3,n.$get("/api/v1/transactions");case 3:return l=e.sent,e.abrupt("return",{transactions:l});case 5:case"end":return e.stop()}}),e)})))()}}),o=r,c=n(30),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"project-page"},[e("section",{staticClass:"dashboard-header pt-5"},[e("div",{staticClass:"container mx-auto relative"},[e("Navbar")],1)]),t._v(" "),e("section",{staticClass:"container mx-auto pt-8"},[e("div",{staticClass:"flex justify-between items-center mb-6"},[e("div",{staticClass:"w-3/4 mr-6"},[e("h2",{staticClass:"text-4xl text-gray-900 mb-2 font-medium"},[t._v("Dashboard")]),t._v(" "),e("ul",{staticClass:"flex mt-2"},[e("li",{staticClass:"mr-6"},[e("nuxt-link",{staticClass:"text-gray-500 hover:text-gray-800",attrs:{to:"/dashboard"}},[t._v("\n                Your Projects\n              ")])],1),t._v(" "),e("li",{staticClass:"mr-6"},[e("nuxt-link",{staticClass:"text-gray-800 font-bold",attrs:{to:"/dashboard/transactions"}},[t._v("\n                Your Transactions\n              ")])],1)])])]),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"block mb-2"},t._l(t.transactions.data,(function(n){return e("div",{key:n.id,staticClass:"w-full lg:max-w-full lg:flex mb-4"},[e("div",{staticClass:"h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden",style:"background-color: #bbb; background-position: center; background-image: url('"+t.$axios.defaults.baseURL+"/"+n.campaign.image_url+"')"}),t._v(" "),e("div",{staticClass:"w-full border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-8 flex flex-col justify-between leading-normal"},[e("div",[e("div",{staticClass:"text-gray-900 font-bold text-xl mb-1"},[t._v("\n                "+t._s(n.campaign.name)+"\n              ")]),t._v(" "),e("p",{staticClass:"text-sm text-gray-600 flex items-center mb-2"},[t._v("\n                Rp. "+t._s((new Intl.NumberFormat).format(n.amount))+" ·\n                "+t._s(n.created_at)+" ·\n                "),e("br"),t._v("\n                "+t._s(n.status)+"\n              ")])])])])})),0)]),t._v(" "),e("div",{staticClass:"cta-clip -mt-20"}),t._v(" "),e("section",{staticClass:"call-to-action bg-purple-progress pt-64 pb-10"}),t._v(" "),e("Footer")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Navbar:n(323).default,Footer:n(321).default})}}]);