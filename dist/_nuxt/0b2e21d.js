(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{325:function(t,e,n){t.exports={}},327:function(t,e,n){"use strict";n(325)},336:function(t,e,n){"use strict";n.r(e);var o=n(7),r=(n(37),{layout:"auth",data:function(){return{login:{email:"",password:""},error:null}},methods:{userLogin:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$auth.loginWith("local",{data:t.login});case 3:return n=e.sent,e.next=6,t.$auth.setUserToken(n.data.data.token);case 6:return e.next=8,t.$auth.fetchUser();case 8:t.$router.push({path:"/"}),console.log(n),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))()}}}),l=(n(327),n(30)),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"h-screen flex justify-center items-center auth-page"},[e("div",{staticClass:"hidden md:block lg:w-1/3 bg-white h-full auth-background rounded-tr-lg rounded-br-lg"}),t._v(" "),e("div",{staticClass:"w-auto md:w-2/4 lg:w-2/3 flex justify-center items-center"},[e("div",{staticClass:"w-full lg:w-1/2 px-10 lg:px-0"},[e("h2",{staticClass:"font-normal mb-6 text-3xl text-white"},[t._v("\n        Sign In to Your Account\n      ")]),t._v(" "),e("div",{staticClass:"mb-6"},[e("div",{staticClass:"mb-4"},[e("label",{staticClass:"font-normal text-lg text-white block mb-3"},[t._v("Email Address")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.login.email,expression:"login.email"}],staticClass:"auth-form focus:outline-none focus:bg-purple-hover focus:shadow-outline focus:border-purple-hover-stroke focus:text-gray-100",attrs:{type:"email",placeholder:"Write your email address here"},domProps:{value:t.login.email},on:{input:function(e){e.target.composing||t.$set(t.login,"email",e.target.value)}}})])]),t._v(" "),e("div",{staticClass:"mb-6"},[e("div",{staticClass:"mb-4"},[e("label",{staticClass:"font-normal text-lg text-white block mb-3"},[t._v("Password")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.login.password,expression:"login.password"}],staticClass:"auth-form focus:outline-none focus:bg-purple-hover focus:shadow-outline focus:border-purple-hover-stroke focus:text-gray-100",attrs:{type:"password",placeholder:"Write your password here"},domProps:{value:t.login.password},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.userLogin.apply(null,arguments)},input:function(e){e.target.composing||t.$set(t.login,"password",e.target.value)}}})])]),t._v(" "),e("div",{staticClass:"mb-6"},[e("div",{staticClass:"mb-4"},[e("button",{staticClass:"block w-full bg-orange-button hover:bg-green-button text-white font-semibold px-6 py-4 text-lg rounded-full",on:{click:t.userLogin}},[t._v("\n            Sign In\n          ")])])]),t._v(" "),e("div",{staticClass:"text-center"},[e("p",{staticClass:"text-white text-md"},[t._v("\n          Don't have account?\n          "),e("nuxt-link",{staticClass:"no-underline text-orange-button",attrs:{to:"/register"}},[t._v("Sign Up")]),t._v(".\n        ")],1)])])])])}),[],!1,null,"5088c81a",null);e.default=component.exports}}]);