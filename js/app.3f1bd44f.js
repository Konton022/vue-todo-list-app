(function(){"use strict";var t={297:function(t,e,o){var a=o(963),n=o(252);function s(t,e,o,a,s,i){const d=(0,n.up)("HeaderApp"),r=(0,n.up)("TodoApp"),l=(0,n.up)("FooterApp");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(d,{class:"header"}),(0,n.Wm)(r,{class:"todoApp"}),(0,n.Wm)(l,{class:"footer"})],64)}const i=t=>((0,n.dD)("data-v-69f4b3f8"),t=t(),(0,n.Cn)(),t),d={class:"header__wrapper"},r=i((()=>(0,n._)("div",{class:"header__logo"},"Vue todo App",-1))),l=i((()=>(0,n._)("div",{class:"header__contacts"},[(0,n._)("a",{href:"https://t.me/KonstantinSavelev",target:"_blank"},[(0,n._)("img",{src:"https://img.icons8.com/external-tal-revivo-bold-tal-revivo/48/000000/external-telegram-messenger-privately-held-company-with-cloud-based-instant-messaging-logo-bold-tal-revivo.png",alt:""})])],-1))),u=[r,l];function c(t,e,o,a,s,i){return(0,n.wg)(),(0,n.iD)("div",d,u)}var h={},p=o(744);const v=(0,p.Z)(h,[["render",c],["__scopeId","data-v-69f4b3f8"]]);var g=v;const k={class:"wrapper"};function m(t,e,o,a,s,i){const d=(0,n.up)("AddTask"),r=(0,n.up)("TodoList");return(0,n.wg)(),(0,n.iD)("div",k,[(0,n.Wm)(d,{inputTask:s.inputTask,handleInputTask:i.handleInputTask,handleSubmit:i.handleSubmit},null,8,["inputTask","handleInputTask","handleSubmit"]),(0,n.Wm)(r,{todos:s.todos,todoCounter:i.todoCounter,handleCheck:i.handleCheck,handleRemoveTask:i.handleRemoveTask,handleEditTask:i.handleEditTask,handleSubmitEditTask:i.handleSubmitEditTask,onDragStart:i.onDragStart,onDrop:i.onDrop},null,8,["todos","todoCounter","handleCheck","handleRemoveTask","handleEditTask","handleSubmitEditTask","onDragStart","onDrop"])])}const f=t=>((0,n.dD)("data-v-331c4fa0"),t=t(),(0,n.Cn)(),t),T={action:"",class:"todoForm"},_=["value"],b=f((()=>(0,n._)("img",{class:"btn__img",src:"https://img.icons8.com/material-outlined/48/000000/add.png"},null,-1))),D=[b];function S(t,e,o,s,i,d){return(0,n.wg)(),(0,n.iD)("form",T,[(0,n._)("input",{class:"input_task",type:"text",placeholder:"Enter your task...",value:o.inputTask,onInput:e[0]||(e[0]=(...t)=>o.handleInputTask&&o.handleInputTask(...t)),onKeypress:e[1]||(e[1]=(0,a.D2)(((...t)=>o.handleSubmit&&o.handleSubmit(...t)),["enter"]))},null,40,_),(0,n._)("button",{class:"submit btn",onClick:e[2]||(e[2]=(...t)=>o.handleSubmit&&o.handleSubmit(...t))},D)])}var E={props:["inputTask","handleInputTask","handleSubmit"]};const w=(0,p.Z)(E,[["render",S],["__scopeId","data-v-331c4fa0"]]);var C=w,y=o(577);const I=t=>((0,n.dD)("data-v-0b36d56f"),t=t(),(0,n.Cn)(),t),A=I((()=>(0,n._)("hr",null,null,-1))),O=(0,n.Uk)(" Total tasks: "),x={key:1,class:"todo__empty_block"};function R(t,e,o,s,i,d){const r=(0,n.up)("TodoItem");return o.todos.length?((0,n.wg)(),(0,n.iD)("ul",{key:0,onDragover:e[0]||(e[0]=(0,a.iM)((()=>{}),["prevent"])),onDragenter:e[1]||(e[1]=(0,a.iM)((()=>{}),["prevent"]))},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.todos,(t=>((0,n.wg)(),(0,n.j4)(r,{key:t.id,title:t.title,id:t.id,isDone:t.isDone,isEdit:t.isEdit,handleCheck:o.handleCheck,handleRemoveTask:o.handleRemoveTask,handleEditTask:o.handleEditTask,handleSubmitEditTask:o.handleSubmitEditTask,draggable:"true",onDragstart:e=>o.onDragStart(e,t),onDrop:e=>o.onDrop(e,t.id)},null,8,["title","id","isDone","isEdit","handleCheck","handleRemoveTask","handleEditTask","handleSubmitEditTask","onDragstart","onDrop"])))),128)),A,(0,n._)("li",null,[O,(0,n._)("b",null,(0,y.zw)(o.todoCounter),1)])],32)):((0,n.wg)(),(0,n.iD)("div",x,"Nothing to do. Add new task!"))}const L=t=>((0,n.dD)("data-v-dd208846"),t=t(),(0,n.Cn)(),t),j={draggable:"true"},Z={class:"todo_item"},W={key:0,class:"todo_edit"},F=["value"],H={key:1,class:"todo_message"},K=["checked"],M={class:"todo_actions"},z=L((()=>(0,n._)("div",{class:"drag"},[(0,n._)("img",{draggable:"false",class:"drag_img",src:"https://img.icons8.com/fluency-systems-regular/48/000000/resize-four-directions.png"})],-1))),N=L((()=>(0,n._)("img",{draggable:"false",class:"edit_img",src:"https://img.icons8.com/glyph-neue/64/000000/edit.png",alt:""},null,-1))),J=[N],P=L((()=>(0,n._)("img",{draggable:"false",class:"remove_img",src:"https://img.icons8.com/windows/32/000000/delete-forever.png",alt:""},null,-1))),Y=[P];function U(t,e,o,s,i,d){return(0,n.wg)(),(0,n.iD)("li",j,[(0,n._)("div",Z,[o.isEdit?((0,n.wg)(),(0,n.iD)("div",W,[(0,n._)("input",{class:"todo_input",type:"text",value:i.defaultTask,onInput:e[0]||(e[0]=(...t)=>d.changeEditTask&&d.changeEditTask(...t)),onKeypress:e[1]||(e[1]=(0,a.D2)((t=>o.handleSubmitEditTask(o.id,i.defaultTask)),["enter"]))},null,40,F)])):((0,n.wg)(),(0,n.iD)("div",H,[(0,n._)("input",{type:"checkbox",checked:o.isDone,onChange:e[2]||(e[2]=t=>o.handleCheck(o.id))},null,40,K),(0,n._)("div",{class:(0,y.C_)(["todo_title",{text_through:o.isDone}]),onClick:e[3]||(e[3]=t=>o.handleCheck(o.id))},(0,y.zw)(o.title),3)])),(0,n._)("div",M,[z,(0,n._)("div",{onClick:e[4]||(e[4]=t=>o.handleEditTask(o.id)),class:"edit"},J),(0,n._)("div",{class:"remove",onClick:e[5]||(e[5]=t=>o.handleRemoveTask(o.id))},Y)])])])}var V={props:["title","id","isDone","isEdit","handleCheck","handleRemoveTask","handleEditTask","handleSubmitEditTask"],data(){return{defaultTask:this.title}},methods:{changeEditTask(t){this.defaultTask=t.target.value}}};const q=(0,p.Z)(V,[["render",U],["__scopeId","data-v-dd208846"]]);var B=q,G={props:["todos","todoCounter","handleCheck","handleRemoveTask","handleEditTask","handleSubmitEditTask","onDragStart","onDrop"],components:{TodoItem:B}};const Q=(0,p.Z)(G,[["render",R],["__scopeId","data-v-0b36d56f"]]);var X=Q,$={data(){return{todos:[{id:333,title:"hello world from vue!",isDone:!1,isEdit:!1}],inputTask:""}},mounted(){localStorage.todos&&(this.todos=JSON.parse(localStorage.getItem("todos")))},components:{AddTask:C,TodoList:X},methods:{handleInputTask(t){this.inputTask=t.target.value},handleSubmit(t){t.preventDefault(),this.inputTask.trim()&&(this.todos.push({id:Math.floor(1e3*Math.random()),title:this.inputTask,isDone:!1,isEdit:!1}),this.inputTask=""),this.saveToLocalStorage()},handleCheck(t){for(let e of this.todos)e.id===t&&(e.isDone=!e.isDone);this.saveToLocalStorage()},handleRemoveTask(t){const e=this.todos.filter((e=>e.id!==t));this.todos=e,this.saveToLocalStorage()},handleEditTask(t){for(let e of this.todos)e.id===t&&(e.isEdit=!e.isEdit)},handleSubmitEditTask(t,e){for(let o of this.todos)o.id===t&&(o.title=e,o.isEdit=!1,o.isDone=!1);this.saveToLocalStorage()},saveToLocalStorage(){localStorage.setItem("todos",JSON.stringify(this.todos))},onDragStart(t,e){t.dataTransfer.dropEffect="move",t.dataTransfer.effectAllowed="move",t.dataTransfer.setData("todoId",e.id.toString())},onDrop(t,e){const o=parseInt(t.dataTransfer.getData("todoId")),a=this.todos.findIndex((t=>t.id===o)),n=this.todos.findIndex((t=>t.id===e)),s=this.todos[a];this.todos.splice(a,1),this.todos.splice(n,0,s),this.saveToLocalStorage()}},computed:{todoCounter(){return this.todos.length}}};const tt=(0,p.Z)($,[["render",m],["__scopeId","data-v-7a398eaf"]]);var et=tt;function ot(t,e){return(0,n.wg)(),(0,n.iD)("div")}const at={},nt=(0,p.Z)(at,[["render",ot]]);var st=nt,it={name:"App",components:{HeaderApp:g,TodoApp:et,FooterApp:st}};const dt=(0,p.Z)(it,[["render",s]]);var rt=dt;(0,a.ri)(rt).mount("#app")}},e={};function o(a){var n=e[a];if(void 0!==n)return n.exports;var s=e[a]={exports:{}};return t[a](s,s.exports,o),s.exports}o.m=t,function(){var t=[];o.O=function(e,a,n,s){if(!a){var i=1/0;for(u=0;u<t.length;u++){a=t[u][0],n=t[u][1],s=t[u][2];for(var d=!0,r=0;r<a.length;r++)(!1&s||i>=s)&&Object.keys(o.O).every((function(t){return o.O[t](a[r])}))?a.splice(r--,1):(d=!1,s<i&&(i=s));if(d){t.splice(u--,1);var l=n();void 0!==l&&(e=l)}}return e}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[a,n,s]}}(),function(){o.d=function(t,e){for(var a in e)o.o(e,a)&&!o.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,a){var n,s,i=a[0],d=a[1],r=a[2],l=0;if(i.some((function(e){return 0!==t[e]}))){for(n in d)o.o(d,n)&&(o.m[n]=d[n]);if(r)var u=r(o)}for(e&&e(a);l<i.length;l++)s=i[l],o.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return o.O(u)},a=self["webpackChunkvue_todo_list_app"]=self["webpackChunkvue_todo_list_app"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=o.O(void 0,[998],(function(){return o(297)}));a=o.O(a)})();
//# sourceMappingURL=app.3f1bd44f.js.map