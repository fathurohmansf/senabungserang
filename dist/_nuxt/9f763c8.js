(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{339:function(t,e,r){"use strict";r.r(e);r(31);var n=r(7),l=(r(37),r(12),r(25),r(26),r(329),r(332),r(225),{layout:"auth",data:function(){return{url:"/avatar.jpg",selectedFiles:void 0}},methods:{onFileChange:function(t){var e=t.target.files[0];this.url=URL.createObjectURL(e),this.selectedFiles=this.$refs.file.files},upload:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(r=new FormData).append("avatar",e.selectedFiles.item(0)),t.prev=2,t.next=5,e.$axios.post("/api/v1/avatars",r,{headers:{"Content-Type":"multipart/form-data"}});case 5:n=t.sent,console.log(n),e.$router.push({path:"/register-success"}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[2,10]])})))()}}}),o=r(30),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container mx-auto h-screen flex justify-center items-center auth-page"},[e("div",{staticClass:"w-full lg:w-1/3 px-10 lg:px-0"},[e("div",{staticClass:"flex justify-center items-center mx-auto mb-4 w-40"},[e("div",{staticClass:"relative"},[e("div",{staticClass:"cursor-pointer",on:{click:function(e){return t.$refs.file.click()}}},[e("img",{staticClass:"rounded-full border-white border-4",attrs:{src:t.url,alt:""}}),t._v(" "),e("img",{staticClass:"absolute right-0 bottom-0 pb-2",attrs:{src:"/icon-avatar-add.svg",alt:""}}),t._v(" "),e("input",{ref:"file",staticStyle:{display:"none"},attrs:{type:"file",accept:"image/*"},on:{change:t.onFileChange}})])])]),t._v(" "),e("h2",{staticClass:"font-normal mb-3 text-3xl text-white text-center"},[t._v("\n       Hi, "+t._s(this.$store.state.auth.user.name)+"\n     ")]),t._v(" "),e("p",{staticClass:"text-white text-center font-light"},[t._v("\n       Please upload your selfie\n     ")]),t._v(" "),e("div",{staticClass:"mb-4 mt-6"},[e("div",{staticClass:"mb-3"},[e("button",{staticClass:"block w-full bg-orange-button hover:bg-green-button text-white font-semibold px-6 py-4 text-lg rounded-full",class:t.selectedFiles==t.undifined?"opacity-50 cursor-not-allowed":"",attrs:{disabled:t.selectedFiles==t.undifined},on:{click:t.upload}},[t._v("\n           Sign Up Now\n         ")])])]),t._v(" "),e("div",[e("div",{staticClass:"mb-4"},[e("button",{staticClass:"block w-full bg-transparent border-white border hover:bg-white hover:bg-opacity-25 text-white font-light px-6 py-4 text-lg rounded-full",on:{click:function(e){return t.$router.push({path:"/register-success"})}}},[t._v("\n           Skip\n         ")])])])])])}),[],!1,null,null,null);e.default=component.exports}}]);