webpackJsonp([2,0],{0:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(14),s=o(r),i=n(15),l=o(i),a=n(10),m=o(a),u=n(48),d=o(u),c="training-todo",p={problems:[],user:"",newProblem:{name:null,url:null,notes:null},message:"",toEdit:!1},b={fetch:function(){var e=JSON.parse(window.localStorage.getItem(c)||"{}");return e=(0,l.default)(p,e),e.problems.forEach(function(e,t){e.id=t}),e},save:function(e){window.localStorage.setItem(c,(0,s.default)(e))},put:function(e,t){var n=b.fetch();n[e]=t,b.save(n)}};new m.default({el:"#app",template:'<App is="app"\n    v-bind:problems="problems"\n    v-bind:user="user"\n    v-bind:newProblem="newProblem"\n    v-bind:message="message"\n    v-bind:toEdit="toEdit"\n    v-on:addProblem="addProblem"\n    v-on:editProblem="editProblem"\n    v-on:removeProblem="removeProblem"\n    v-on:changeUser="changeUser"\n    v-on:doneEdit="doneEdit"\n    />',components:{App:d.default},data:b.fetch(),methods:{addProblem:function(){var e=this.newProblem.name||"",t=this.newProblem.url||"",n=!0;0===e.length&&(this.message="Please provide a name before add",n=!1),0===t.length&&(this.message.length>0&&(this.message+=". "),this.message+="Please provide a url",n=!1),n&&(this.problems.push(this.newProblem),this.newProblem=window.Object.assign({},p.newProblem),this.message="",b.put("problems",this.problems))},removeProblem:function(e,t){this.problems.splice(t,1),b.put("problems",this.problems)},editProblem:function(e,t){this.newProblem=e,this.toEdit=!0},doneEdit:function(){this.toEdit=!1,this.newProblem=window.Object.assign({},p.newProblem),b.put("problems",this.problems)},changeUser:function(e){b.put("user",e)}}})},11:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(50),s=o(r),i=n(49),l=o(i),a=n(47),m=o(a),u=n(10),d=o(u);t.default={name:"app",components:{ProblemList:s.default,ProblemForm:l.default},data:function(){return{showUserInput:!1,localUser:this.user||"MP"}},props:["problems","user","newProblem","message","toEdit"],filters:{lowercase:function(e){return e.toLowerCase()}},methods:{addProblem:function(){this.$emit("addProblem")},editProblem:function(e,t){this.$emit("editProblem",e,t),this.$refs.problemForm.$refs.inputProblemName.focus()},removeProblem:function(e,t){this.$emit("removeProblem",e,t)},toggleUserInput:function(){var e=this;this.showUserInput=!this.showUserInput,d.default.nextTick(function(){e.showUserInput&&e.$refs.inputUser.focus()})},closeUser:function(){this.showUserInput=!1},changeUser:(0,m.default)(function(){this.$emit("changeUser",this.localUser)},500),doneEdit:function(){this.$emit("doneEdit")}}}},12:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"problem-form",props:["prolems","newProblem","toEdit"],computed:{desc:function(){var e=this.newProblem.name||"",t=this.newProblem.url||"";if(e.length>0){var n="<span> @ </span> judge";return t.length>0&&(n="<a href="+t+"> @ judge </a>"),e+n}return""}},methods:{addProblem:function(){this.$emit("addProblem")},doneEdit:function(){this.$emit("doneEdit")}}}},13:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"problem-list",props:["problems"],data:function(){return{msg:"Manuel"}},methods:{edit:function(e,t){this.$emit("editProblem",e,t)},removeProblem:function(e,t){this.$emit("removeProblem",e,t)}}}},44:function(e,t){},45:function(e,t){},46:function(e,t){},48:function(e,t,n){var o,r;n(44),o=n(11);var s=n(51);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=s.render,r.staticRenderFns=s.staticRenderFns,e.exports=o},49:function(e,t,n){var o,r;n(45),o=n(12);var s=n(52);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=s.render,r.staticRenderFns=s.staticRenderFns,r._scopeId="data-v-7309b6ee",e.exports=o},50:function(e,t,n){var o,r;n(46),o=n(13);var s=n(53);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=s.render,r.staticRenderFns=s.staticRenderFns,r._scopeId="data-v-b1fa4470",e.exports=o},51:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return t("div",{attrs:{id:"app"}},[t("h1",{staticClass:"greeting"},["Hello "+e._s(e.localUser)+" !!"])," ",t("span",{staticClass:"sub",on:{click:e.toggleUserInput}},["Not you?"])," ",e.showUserInput?t("input",{directives:[{name:"model",rawName:"v-model",value:e.localUser,expression:"localUser"}],ref:"inputUser",attrs:{placeholder:"Insert your name"},domProps:{value:e._s(e.localUser)},on:{keyup:[e.changeUser,function(t){e._k(t.keyCode,"enter",13)||e.closeUser(t)}],input:function(t){t.target.composing||(e.localUser=t.target.value)}}}):e._e()," ",e.showUserInput?t("span",{on:{click:e.closeUser}},[" close"]):e._e()," ",t("div",{staticClass:"main"},[t("h3",[" Add new problems to solve (: "])," ",t("h4",{staticClass:"warning"},[" "+e._s(e.message)+" "])," ",t("problem-form",{ref:"problemForm",attrs:{newProblem:e.newProblem,problems:e.problems,toEdit:e.toEdit},on:{addProblem:e.addProblem,doneEdit:e.doneEdit}})," ",t("problem-list",{attrs:{problems:e.problems},on:{editProblem:e.editProblem,removeProblem:e.removeProblem}})])])},staticRenderFns:[]}},52:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return t("div",[t("label",[" Name * "])," ",t("input",{directives:[{name:"model",rawName:"v-model",value:e.newProblem.name,expression:"newProblem.name"}],ref:"inputProblemName",attrs:{autofocus:""},domProps:{value:e._s(e.newProblem.name)},on:{input:function(t){t.target.composing||(e.newProblem.name=t.target.value)}}})," ",t("label",[" Url * "])," ",t("input",{directives:[{name:"model",rawName:"v-model",value:e.newProblem.url,expression:"newProblem.url"}],domProps:{value:e._s(e.newProblem.url)},on:{input:function(t){t.target.composing||(e.newProblem.url=t.target.value)}}})," ",t("br")," ",t("label",[" Notes "])," ",t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.newProblem.notes,expression:"newProblem.notes"}],domProps:{value:e._s(e.newProblem.notes)},on:{input:function(t){t.target.composing||(e.newProblem.notes=t.target.value)}}})," ",e.toEdit?t("button",{on:{click:e.doneEdit}},["\n    Edit !\n  "]):t("button",{on:{click:e.addProblem}},["\n    Add !\n  "])," "," ",t("br")," ",t("span",{domProps:{innerHTML:e._s(e.desc)}})])},staticRenderFns:[]}},53:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return t("ul",{staticClass:"problem-list"},[e._l(e.problems,function(n,o){return t("li",{key:n.id},[t("div",[t("label",{on:{dblclick:function(t){e.edit(n,o)}}},["\n        "+e._s(o)+" - "+e._s(n.name)+"\n      "]),"\n      @ ",t("a",{attrs:{href:n.url}},[" judge "])," ",t("button",{staticClass:"destroy",on:{click:function(t){e.removeProblem(n,o)}}},["\n        x\n      "])," ",t("pre",{domProps:{innerHTML:e._s(n.notes)}})])])})])},staticRenderFns:[]}}});
//# sourceMappingURL=app.4c89fff586efd678e1b0.js.map