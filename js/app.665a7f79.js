(function(){"use strict";var t={548:function(t,e,a){var o=a(963),n=a(252);function s(t,e,a,o,s,i){const d=(0,n.up)("HeaderApp"),r=(0,n.up)("TodoApp"),l=(0,n.up)("FooterApp");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(d,{class:"header"}),(0,n.Wm)(r,{class:"todoApp"}),(0,n.Wm)(l,{class:"footer"})],64)}const i={class:"header__wrapper"},d=(0,n.uE)('<div class="header__logo" data-v-2ea8904c>Vue todo App</div><div class="header__contacts" data-v-2ea8904c><a href="https://github.com/Konton022/vue-todo-list-app" target="_blank" data-v-2ea8904c><img class="header_img" src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="" data-v-2ea8904c></a><a href="https://t.me/KonstantinSavelev" target="_blank" data-v-2ea8904c><img class="header_img" src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/48/000000/external-telegram-messenger-privately-held-company-with-cloud-based-instant-messaging-logo-bold-tal-revivo.png" alt="" data-v-2ea8904c></a></div>',2),r=[d];function l(t,e,a,o,s,d){return(0,n.wg)(),(0,n.iD)("div",i,r)}var c={},u=a(744);const h=(0,u.Z)(c,[["render",l],["__scopeId","data-v-2ea8904c"]]);var p=h;const v={class:"wrapper"};function g(t,e,a,o,s,i){const d=(0,n.up)("AddTask"),r=(0,n.up)("TodoList");return(0,n.wg)(),(0,n.iD)("div",v,[(0,n.Wm)(d,{inputTask:s.inputTask,handleInputTask:i.handleInputTask,handleSubmit:i.handleSubmit},null,8,["inputTask","handleInputTask","handleSubmit"]),(0,n.Wm)(r,{todos:s.todos,todoCounter:i.todoCounter,handleCheck:i.handleCheck,handleRemoveTask:i.handleRemoveTask,handleEditTask:i.handleEditTask,handleSubmitEditTask:i.handleSubmitEditTask,onDragStart:i.onDragStart,onDrop:i.onDrop},null,8,["todos","todoCounter","handleCheck","handleRemoveTask","handleEditTask","handleSubmitEditTask","onDragStart","onDrop"])])}const m=t=>((0,n.dD)("data-v-331c4fa0"),t=t(),(0,n.Cn)(),t),k={action:"",class:"todoForm"},f=["value"],T=m((()=>(0,n._)("img",{class:"btn__img",src:"https://img.icons8.com/material-outlined/48/000000/add.png"},null,-1))),_=[T];function b(t,e,a,s,i,d){return(0,n.wg)(),(0,n.iD)("form",k,[(0,n._)("input",{class:"input_task",type:"text",placeholder:"Enter your task...",value:a.inputTask,onInput:e[0]||(e[0]=(...t)=>a.handleInputTask&&a.handleInputTask(...t)),onKeypress:e[1]||(e[1]=(0,o.D2)(((...t)=>a.handleSubmit&&a.handleSubmit(...t)),["enter"]))},null,40,f),(0,n._)("button",{class:"submit btn",onClick:e[2]||(e[2]=(...t)=>a.handleSubmit&&a.handleSubmit(...t))},_)])}var D={props:["inputTask","handleInputTask","handleSubmit"]};const S=(0,u.Z)(D,[["render",b],["__scopeId","data-v-331c4fa0"]]);var E=S,w=a(577);const C=t=>((0,n.dD)("data-v-0b36d56f"),t=t(),(0,n.Cn)(),t),y=C((()=>(0,n._)("hr",null,null,-1))),I=(0,n.Uk)(" Total tasks: "),A={key:1,class:"todo__empty_block"};function O(t,e,a,s,i,d){const r=(0,n.up)("TodoItem");return a.todos.length?((0,n.wg)(),(0,n.iD)("ul",{key:0,onDragover:e[0]||(e[0]=(0,o.iM)((()=>{}),["prevent"])),onDragenter:e[1]||(e[1]=(0,o.iM)((()=>{}),["prevent"]))},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.todos,(t=>((0,n.wg)(),(0,n.j4)(r,{key:t.id,title:t.title,id:t.id,isDone:t.isDone,isEdit:t.isEdit,handleCheck:a.handleCheck,handleRemoveTask:a.handleRemoveTask,handleEditTask:a.handleEditTask,handleSubmitEditTask:a.handleSubmitEditTask,draggable:"true",onDragstart:e=>a.onDragStart(e,t),onDrop:e=>a.onDrop(e,t.id)},null,8,["title","id","isDone","isEdit","handleCheck","handleRemoveTask","handleEditTask","handleSubmitEditTask","onDragstart","onDrop"])))),128)),y,(0,n._)("li",null,[I,(0,n._)("b",null,(0,w.zw)(a.todoCounter),1)])],32)):((0,n.wg)(),(0,n.iD)("div",A,"Nothing to do. Add new task!"))}const x=t=>((0,n.dD)("data-v-1fd5ccce"),t=t(),(0,n.Cn)(),t),R={draggable:"true"},L={class:"todo_item"},j={key:0,class:"todo_edit"},Z=["value"],K={key:1,class:"todo_message"},M=["checked"],W={class:"todo_actions"},F=x((()=>(0,n._)("div",{class:"drag"},[(0,n._)("img",{draggable:"false",class:"drag_img",src:"https://img.icons8.com/fluency-systems-regular/48/000000/resize-four-directions.png"})],-1))),H=x((()=>(0,n._)("img",{draggable:"false",class:"edit_img",src:"https://img.icons8.com/glyph-neue/64/000000/edit.png",alt:""},null,-1))),z=[H],N=x((()=>(0,n._)("img",{draggable:"false",class:"remove_img",src:"https://img.icons8.com/windows/32/000000/delete-forever.png",alt:""},null,-1))),J=[N];function P(t,e,a,s,i,d){return(0,n.wg)(),(0,n.iD)("li",R,[(0,n._)("div",L,[a.isEdit?((0,n.wg)(),(0,n.iD)("div",j,[(0,n._)("input",{class:"todo_input",type:"text",value:i.defaultTask,onInput:e[0]||(e[0]=(...t)=>d.changeEditTask&&d.changeEditTask(...t)),onKeypress:e[1]||(e[1]=(0,o.D2)((t=>a.handleSubmitEditTask(a.id,i.defaultTask)),["enter"]))},null,40,Z)])):((0,n.wg)(),(0,n.iD)("div",K,[(0,n._)("input",{type:"checkbox",checked:a.isDone,onChange:e[2]||(e[2]=t=>a.handleCheck(a.id))},null,40,M),(0,n._)("div",{class:(0,w.C_)(["todo_title",{text_through:a.isDone}]),onClick:e[3]||(e[3]=t=>a.handleCheck(a.id))},(0,w.zw)(a.title),3)])),(0,n._)("div",W,[F,(0,n._)("div",{onClick:e[4]||(e[4]=t=>a.handleEditTask(a.id)),class:"edit"},z),(0,n._)("div",{class:"remove",onClick:e[5]||(e[5]=t=>a.handleRemoveTask(a.id))},J)])])])}var U={props:["title","id","isDone","isEdit","handleCheck","handleRemoveTask","handleEditTask","handleSubmitEditTask"],data(){return{defaultTask:this.title}},methods:{changeEditTask(t){this.defaultTask=t.target.value}}};const Y=(0,u.Z)(U,[["render",P],["__scopeId","data-v-1fd5ccce"]]);var V=Y,q={props:["todos","todoCounter","handleCheck","handleRemoveTask","handleEditTask","handleSubmitEditTask","onDragStart","onDrop"],components:{TodoItem:V}};const B=(0,u.Z)(q,[["render",O],["__scopeId","data-v-0b36d56f"]]);var G=B,Q={data(){return{todos:[{id:Math.floor(1e3*Math.random()),title:"hello world from vue!",isDone:!1,isEdit:!1}],inputTask:""}},mounted(){localStorage.todos&&(this.todos=JSON.parse(localStorage.getItem("todos")))},components:{AddTask:E,TodoList:G},methods:{handleInputTask(t){this.inputTask=t.target.value},handleSubmit(t){t.preventDefault(),this.inputTask.trim()&&(this.todos.push({id:Math.floor(1e3*Math.random()),title:this.inputTask,isDone:!1,isEdit:!1}),this.inputTask=""),this.saveToLocalStorage()},handleCheck(t){for(let e of this.todos)e.id===t&&(e.isDone=!e.isDone);this.saveToLocalStorage()},handleRemoveTask(t){const e=this.todos.filter((e=>e.id!==t));this.todos=e,this.saveToLocalStorage()},handleEditTask(t){for(let e of this.todos)e.id===t&&(e.isEdit=!e.isEdit)},handleSubmitEditTask(t,e){for(let a of this.todos)a.id===t&&(a.title=e,a.isEdit=!1,a.isDone=!1);this.saveToLocalStorage()},saveToLocalStorage(){localStorage.setItem("todos",JSON.stringify(this.todos))},onDragStart(t,e){t.dataTransfer.dropEffect="move",t.dataTransfer.effectAllowed="move",t.dataTransfer.setData("todoId",e.id.toString())},onDrop(t,e){const a=parseInt(t.dataTransfer.getData("todoId")),o=this.todos.findIndex((t=>t.id===a)),n=this.todos.findIndex((t=>t.id===e)),s=this.todos[o];this.todos.splice(o,1),this.todos.splice(n,0,s),this.saveToLocalStorage()}},computed:{todoCounter(){return this.todos.length}}};const X=(0,u.Z)(Q,[["render",g],["__scopeId","data-v-34d78ae4"]]);var $=X;const tt=t=>((0,n.dD)("data-v-16010a09"),t=t(),(0,n.Cn)(),t),et={class:"footer"},at=tt((()=>(0,n._)("span",null,"created by",-1))),ot=(0,n.Uk)(" "),nt=tt((()=>(0,n._)("a",{href:"http://savelev-konst.site/",target:"_blank"},"Konstantin Savelyev",-1))),st=[at,ot,nt];function it(t,e){return(0,n.wg)(),(0,n.iD)("div",et,st)}const dt={},rt=(0,u.Z)(dt,[["render",it],["__scopeId","data-v-16010a09"]]);var lt=rt,ct={name:"App",components:{HeaderApp:p,TodoApp:$,FooterApp:lt}};const ut=(0,u.Z)(ct,[["render",s]]);var ht=ut;(0,o.ri)(ht).mount("#app")}},e={};function a(o){var n=e[o];if(void 0!==n)return n.exports;var s=e[o]={exports:{}};return t[o](s,s.exports,a),s.exports}a.m=t,function(){var t=[];a.O=function(e,o,n,s){if(!o){var i=1/0;for(c=0;c<t.length;c++){o=t[c][0],n=t[c][1],s=t[c][2];for(var d=!0,r=0;r<o.length;r++)(!1&s||i>=s)&&Object.keys(a.O).every((function(t){return a.O[t](o[r])}))?o.splice(r--,1):(d=!1,s<i&&(i=s));if(d){t.splice(c--,1);var l=n();void 0!==l&&(e=l)}}return e}s=s||0;for(var c=t.length;c>0&&t[c-1][2]>s;c--)t[c]=t[c-1];t[c]=[o,n,s]}}(),function(){a.d=function(t,e){for(var o in e)a.o(e,o)&&!a.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,o){var n,s,i=o[0],d=o[1],r=o[2],l=0;if(i.some((function(e){return 0!==t[e]}))){for(n in d)a.o(d,n)&&(a.m[n]=d[n]);if(r)var c=r(a)}for(e&&e(o);l<i.length;l++)s=i[l],a.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return a.O(c)},o=self["webpackChunkvue_todo_list_app"]=self["webpackChunkvue_todo_list_app"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=a.O(void 0,[998],(function(){return a(548)}));o=a.O(o)})();
//# sourceMappingURL=app.665a7f79.js.map