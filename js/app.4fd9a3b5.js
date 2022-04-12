(function(){"use strict";var t={228:function(t,o,e){var a=e(963),s=e(907),n=e(416);const d=(0,s.MT)({state(){return{todos:[{id:(0,n.x0)(4),title:"hello world from VUEX!",isDone:!1,isEdit:!1}]}},actions:{getTodosFromLocalStorage({commit:t}){localStorage.todos&&t("updateTodos",JSON.parse(localStorage.todos))},setDraggedState({commit:t},[o,e]){const a=this.getters.allTodos[o],s=this.getters.allTodos;s.splice(o,1),s.splice(e,0,a),t("updateTodos",s)},addNewTaskAction({commit:t},o){t("addNewTask",o)}},mutations:{updateTodos(t,o){t.todos=o},addNewTask(t,o){t.todos.push({id:(0,n.x0)(4),title:o,isDone:!1,isEdit:!1})},removeTask(t,o){t.todos=t.todos.filter((t=>t.id!==o))},onEditTask(t,o){t.todos.map((t=>(t.id===o&&(t.isEdit=!t.isEdit),t)))},submitEditTask(t,[o,e]){t.todos.map((t=>(t.id===o&&(t.title=e,t.isEdit=!t.isEdit,t.isDone=!1),t)))},checkTodoDone(t,o){t.todos.map((t=>(t.id===o&&(t.isDone=!t.isDone),t)))}},getters:{allTodos(t){return t.todos},allTodosCounter(t){return t.todos.length}}});d.subscribe(((t,o)=>{localStorage.setItem("todos",JSON.stringify(o.todos))}));var r=d,i=e(252);function c(t,o,e,a,s,n){const d=(0,i.up)("HeaderApp"),r=(0,i.up)("TodoApp"),c=(0,i.up)("FooterApp");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(d,{class:"header"}),(0,i.Wm)(r,{class:"todoApp"}),(0,i.Wm)(c,{class:"footer"})],64)}const l={class:"header__wrapper"},u=(0,i.uE)('<div class="header__logo" data-v-2ea8904c>Vue todo App</div><div class="header__contacts" data-v-2ea8904c><a href="https://github.com/Konton022/vue-todo-list-app" target="_blank" data-v-2ea8904c><img class="header_img" src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="" data-v-2ea8904c></a><a href="https://t.me/KonstantinSavelev" target="_blank" data-v-2ea8904c><img class="header_img" src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/48/000000/external-telegram-messenger-privately-held-company-with-cloud-based-instant-messaging-logo-bold-tal-revivo.png" alt="" data-v-2ea8904c></a></div>',2),p=[u];function g(t,o,e,a,s,n){return(0,i.wg)(),(0,i.iD)("div",l,p)}var v={},m=e(744);const f=(0,m.Z)(v,[["render",g],["__scopeId","data-v-2ea8904c"]]);var h=f;const _={class:"wrapper"};function T(t,o,e,a,s,n){const d=(0,i.up)("AddTask"),r=(0,i.up)("TodoList");return(0,i.wg)(),(0,i.iD)("div",_,[(0,i.Wm)(d),(0,i.Wm)(r)])}const k=t=>((0,i.dD)("data-v-04d6cc8a"),t=t(),(0,i.Cn)(),t),b=k((()=>(0,i._)("button",{class:"submit btn"},[(0,i._)("img",{class:"btn__img",src:"https://img.icons8.com/material-outlined/48/000000/add.png"})],-1)));function D(t,o,e,s,n,d){return(0,i.wg)(),(0,i.iD)("form",{action:"",class:"todoForm",onSubmit:o[1]||(o[1]=(0,a.iM)(((...t)=>d.sentTask&&d.sentTask(...t)),["prevent"]))},[(0,i.wy)((0,i._)("input",{class:"input_task",type:"text",placeholder:"Enter your task...","onUpdate:modelValue":o[0]||(o[0]=t=>n.inputTask=t)},null,512),[[a.nr,n.inputTask]]),b],32)}var w={data(){return{inputTask:""}},methods:{...(0,s.nv)(["addNewTaskAction"]),sentTask(){this.addNewTaskAction(this.inputTask),this.inputTask=""}}};const y=(0,m.Z)(w,[["render",D],["__scopeId","data-v-04d6cc8a"]]);var E=y,S=e(577);const A=t=>((0,i.dD)("data-v-199e0953"),t=t(),(0,i.Cn)(),t),C=A((()=>(0,i._)("hr",null,null,-1))),x=(0,i.Uk)(" Total tasks: "),I={key:1,class:"todo__empty_block"};function O(t,o,e,s,n,d){const r=(0,i.up)("TodoItem");return t.allTodosCounter?((0,i.wg)(),(0,i.iD)("ul",{key:0,onDragover:o[0]||(o[0]=(0,a.iM)((()=>{}),["prevent"])),onDragenter:o[1]||(o[1]=(0,a.iM)((()=>{}),["prevent"]))},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.allTodos,(t=>((0,i.wg)(),(0,i.j4)(r,{key:t.id,todo:t,draggable:"true",onDragstart:o=>d.onDragStart(o,t.id),onDrop:o=>d.onDrop(o,t.id)},null,8,["todo","onDragstart","onDrop"])))),128)),C,(0,i._)("li",null,[x,(0,i._)("b",null,(0,S.zw)(t.allTodosCounter),1)])],32)):((0,i.wg)(),(0,i.iD)("div",I,"Nothing to do. Add new task!"))}const N=t=>((0,i.dD)("data-v-4c42b070"),t=t(),(0,i.Cn)(),t),V={draggable:"true"},j={class:"todo_item"},F={key:0,class:"todo_edit"},Z={key:1,class:"todo_message"},K=["checked"],L={class:"todo_actions"},U=N((()=>(0,i._)("div",{class:"drag"},[(0,i._)("img",{draggable:"false",class:"drag_img",src:"https://img.icons8.com/fluency-systems-regular/48/000000/resize-four-directions.png"})],-1))),W=N((()=>(0,i._)("img",{draggable:"false",class:"edit_img",src:"https://img.icons8.com/glyph-neue/64/000000/edit.png",alt:""},null,-1))),H=[W],M=N((()=>(0,i._)("img",{draggable:"false",class:"remove_img",src:"https://img.icons8.com/windows/32/000000/delete-forever.png",alt:""},null,-1))),z=[M];function J(t,o,e,s,n,d){return(0,i.wg)(),(0,i.iD)("li",V,[(0,i._)("div",j,[e.todo.isEdit?((0,i.wg)(),(0,i.iD)("div",F,[(0,i.wy)((0,i._)("input",{class:"todo_input",type:"text","onUpdate:modelValue":o[0]||(o[0]=t=>n.currentValueTask=t),onKeypress:o[1]||(o[1]=(0,a.D2)((o=>t.submitEditTask([e.todo.id,n.currentValueTask])),["enter"]))},null,544),[[a.nr,n.currentValueTask]])])):((0,i.wg)(),(0,i.iD)("div",Z,[(0,i._)("input",{type:"checkbox",checked:e.todo.isDone,onChange:o[2]||(o[2]=o=>t.checkTodoDone(e.todo.id))},null,40,K),(0,i._)("div",{class:(0,S.C_)(["todo_title",{text_through:e.todo.isDone}]),onClick:o[3]||(o[3]=o=>t.checkTodoDone(e.todo.id))},(0,S.zw)(e.todo.title),3)])),(0,i._)("div",L,[U,(0,i._)("div",{onClick:o[4]||(o[4]=o=>t.onEditTask(e.todo.id)),class:"edit"},H),(0,i._)("div",{class:"remove",onClick:o[5]||(o[5]=o=>t.removeTask(e.todo.id))},z)])])])}var P={props:["todo"],data(){return{currentValueTask:this.todo.title}},methods:{...(0,s.OI)(["removeTask","onEditTask","submitEditTask","checkTodoDone"])}};const Y=(0,m.Z)(P,[["render",J],["__scopeId","data-v-4c42b070"]]);var X=Y,q={components:{TodoItem:X},methods:{...(0,s.nv)(["setDraggedState"]),onDragStart(t,o){t.dataTransfer.dropEffect="move",t.dataTransfer.effectAllowed="move",t.dataTransfer.setData("todoId",o)},onDrop(t,o){const e=t.dataTransfer.getData("todoId"),a=this.allTodos.findIndex((t=>t.id===e)),s=this.allTodos.findIndex((t=>t.id===o));this.setDraggedState([a,s])}},computed:{...(0,s.Se)(["allTodosCounter","allTodos"])}};const B=(0,m.Z)(q,[["render",O],["__scopeId","data-v-199e0953"]]);var G=B,Q={mounted(){this.getTodosFromLocalStorage()},components:{AddTask:E,TodoList:G},methods:{...(0,s.nv)(["getTodosFromLocalStorage"])}};const R=(0,m.Z)(Q,[["render",T],["__scopeId","data-v-5f9c933d"]]);var $=R;const tt=t=>((0,i.dD)("data-v-2e71651c"),t=t(),(0,i.Cn)(),t),ot={class:"footer"},et=tt((()=>(0,i._)("span",null,"designed by",-1))),at=(0,i.Uk)(" "),st=tt((()=>(0,i._)("a",{href:"http://savelev-konst.site/",target:"_blank"},"Konstantin Savelyev",-1))),nt=[et,at,st];function dt(t,o){return(0,i.wg)(),(0,i.iD)("div",ot,nt)}const rt={},it=(0,m.Z)(rt,[["render",dt],["__scopeId","data-v-2e71651c"]]);var ct=it,lt={name:"App",components:{HeaderApp:h,TodoApp:$,FooterApp:ct}};const ut=(0,m.Z)(lt,[["render",c]]);var pt=ut;const gt=(0,a.ri)(pt);gt.use(r),gt.mount("#app")}},o={};function e(a){var s=o[a];if(void 0!==s)return s.exports;var n=o[a]={exports:{}};return t[a](n,n.exports,e),n.exports}e.m=t,function(){var t=[];e.O=function(o,a,s,n){if(!a){var d=1/0;for(l=0;l<t.length;l++){a=t[l][0],s=t[l][1],n=t[l][2];for(var r=!0,i=0;i<a.length;i++)(!1&n||d>=n)&&Object.keys(e.O).every((function(t){return e.O[t](a[i])}))?a.splice(i--,1):(r=!1,n<d&&(d=n));if(r){t.splice(l--,1);var c=s();void 0!==c&&(o=c)}}return o}n=n||0;for(var l=t.length;l>0&&t[l-1][2]>n;l--)t[l]=t[l-1];t[l]=[a,s,n]}}(),function(){e.d=function(t,o){for(var a in o)e.o(o,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:o[a]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)}}(),function(){var t={143:0};e.O.j=function(o){return 0===t[o]};var o=function(o,a){var s,n,d=a[0],r=a[1],i=a[2],c=0;if(d.some((function(o){return 0!==t[o]}))){for(s in r)e.o(r,s)&&(e.m[s]=r[s]);if(i)var l=i(e)}for(o&&o(a);c<d.length;c++)n=d[c],e.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return e.O(l)},a=self["webpackChunkvue_todo_list_app"]=self["webpackChunkvue_todo_list_app"]||[];a.forEach(o.bind(null,0)),a.push=o.bind(null,a.push.bind(a))}();var a=e.O(void 0,[998],(function(){return e(228)}));a=e.O(a)})();
//# sourceMappingURL=app.4fd9a3b5.js.map