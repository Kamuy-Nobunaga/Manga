"use strict";(self["webpackChunkmanga_js"]=self["webpackChunkmanga_js"]||[]).push([[376],{2144:function(t,e,o){o.d(e,{Z:function(){return r}});var n=o(3396);const l={class:"scroll"};function a(t,e,o,a,s,i){return(0,n.wg)(),(0,n.iD)("div",l,[(0,n._)("button",{id:"scroll-up",class:"material-icons",onClick:e[0]||(e[0]=(...t)=>a.toTop&&a.toTop(...t))},"keyboard_double_arrow_up"),(0,n._)("button",{id:"scroll-down",class:"material-icons",onClick:e[1]||(e[1]=(...t)=>a.toBottom&&a.toBottom(...t))},"keyboard_double_arrow_down")])}var s={setup(){const t=()=>{window.scrollTo({top:0,behavior:"smooth"})},e=()=>{window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})};return{toTop:t,toBottom:e}}},i=o(89);const d=(0,i.Z)(s,[["render",a]]);var r=d},376:function(t,e,o){o.r(e),o.d(e,{default:function(){return tt}});var n=o(3396),l=o(7139);const a={class:"blog"},s=(0,n._)("div",{class:"blog-title"},[(0,n._)("h1",null,"Blog")],-1),i={class:"scroll"},d={key:0,class:"loading"},r={key:1,class:"post-list"};function c(t,e,o,c,g,u){const p=(0,n.up)("ScrollToBottom"),m=(0,n.up)("BlogList"),v=(0,n.up)("BlogAddForm");return(0,n.wg)(),(0,n.iD)("div",a,[s,(0,n._)("div",i,[(0,n.Wm)(p)]),t.isLoading?((0,n.wg)(),(0,n.iD)("div",d,"Loading posts...")):(0,n.kq)("",!0),"all"===t.filter?((0,n.wg)(),(0,n.iD)("div",r,[(0,n._)("p",null,(0,l.zw)(t.posts.length)+" posts",1),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.posts,(t=>((0,n.wg)(),(0,n.iD)("div",{key:t.id},[(0,n.Wm)(m,{post:t},null,8,["post"])])))),128))])):(0,n.kq)("",!0),(0,n.Wm)(v)])}var g=o(4870),u=o(1231),p=o(1020),m=o(9242);const v={class:"blog-form"},T={for:"title"},w={for:"c-title"},_={for:"tags"},h=(0,n._)("button",null,"Add post",-1);function b(t,e,o,l,a,s){return(0,n.wg)(),(0,n.iD)("div",v,[(0,n._)("h2",{onClick:e[0]||(e[0]=(...t)=>l.toggleAdding&&l.toggleAdding(...t))},"Add post"),l.isAdding?((0,n.wg)(),(0,n.iD)("form",{key:0,onSubmit:e[5]||(e[5]=(0,m.iM)(((...t)=>l.handleSubmit&&l.handleSubmit(...t)),["prevent"])),class:"blog-form-content"},[(0,n._)("label",T,[(0,n.Uk)("Manga title "),(0,n.wy)((0,n._)("input",{name:"title",id:"title",type:"text",placeholder:"title...","onUpdate:modelValue":e[1]||(e[1]=t=>l.newPost.mangaTitle=t)},null,512),[[m.nr,l.newPost.mangaTitle]])]),(0,n._)("label",w,[(0,n.Uk)("Comment title "),(0,n.wy)((0,n._)("input",{name:"c-title",id:"c-title",type:"text",placeholder:"comment title...","onUpdate:modelValue":e[2]||(e[2]=t=>l.newPost.commentTitile=t)},null,512),[[m.nr,l.newPost.commentTitile]])]),(0,n._)("label",null,[(0,n.Uk)("Content "),(0,n.wy)((0,n._)("textarea",{name:"content",cols:"70",rows:"5",placeholder:"ehh...","onUpdate:modelValue":e[3]||(e[3]=t=>l.newPost.content=t)},null,512),[[m.nr,l.newPost.content]])]),(0,n._)("label",_,[(0,n.Uk)("Tags "),(0,n.wy)((0,n._)("input",{name:"tags",id:"tags",type:"text",placeholder:"add tag...","onUpdate:modelValue":e[4]||(e[4]=t=>l.newPost.tags=t)},null,512),[[m.nr,l.newPost.tags]])]),h],32)):(0,n.kq)("",!0)])}var f={setup(){const t=(0,u.b)(),e=(0,g.iH)({mangaTitle:"",commentTitle:"",content:"",tags:[]}),o=(0,g.iH)(!1),n=()=>{console.log(o.value),o.value=!o.value},l=()=>{e.value.mangaTitle&&t.addPost(e.value),e.value={mangaTitle:"",commentTitle:"",content:"",tags:[]},t.getPosts(),o.value=!1};return{newPost:e,handleSubmit:l,isAdding:o,toggleAdding:n}}},k=o(89);const y=(0,k.Z)(f,[["render",b]]);var P=y,A=o(2144);const U={class:"post"},C={class:"post-details"},D={id:"post-content"},B={class:"tags"},H=(0,n._)("span",{class:"material-icons"},"close",-1),S={class:"icons"},E={key:0,class:"edit-form"};function F(t,e,o,a,s,i){const d=(0,n.up)("AddTag"),r=(0,n.up)("BlogEditForm");return(0,n.wg)(),(0,n.iD)("div",U,[(0,n._)("h3",{ref:"p-title"},(0,l.zw)(o.post.mangaTitle)+" - "+(0,l.zw)(o.post.commentTitle),513),(0,n._)("div",C,[(0,n._)("p",D,(0,l.zw)(a.snippet),1),(0,n._)("span",{onClick:e[0]||(e[0]=(...t)=>a.toggleAddingTag&&a.toggleAddingTag(...t))},"tags"),a.isAddingTag?((0,n.wg)(),(0,n.j4)(d,{key:0,post:o.post},null,8,["post"])):(0,n.kq)("",!0),(0,n._)("div",B,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.post.tags,(t=>((0,n.wg)(),(0,n.iD)("div",{class:"tags-details",key:t},[H,(0,n._)("p",null,(0,l.zw)(t),1)])))),128))])]),(0,n._)("div",S,[(0,n._)("div",{class:"edit material-icons",onClick:e[1]||(e[1]=(...t)=>a.handleEdit&&a.handleEdit(...t))},"edit"),(0,n._)("div",{class:"delete material-icons",onClick:e[2]||(e[2]=(...t)=>a.deletePost&&a.deletePost(...t))},"delete")]),a.isEditting?((0,n.wg)(),(0,n.iD)("div",E,[(0,n.Wm)(r,{post:o.post,onCloseForm:a.handleCloseForm},null,8,["post","onCloseForm"])])):(0,n.kq)("",!0)])}const Z={class:"post-edit-form"},x={for:"mangaTitle"},V={for:"commentTitle"},M={for:"content"},z=(0,n._)("button",null,"Update",-1);function L(t,e,o,a,s,i){return(0,n.wg)(),(0,n.iD)("div",Z,[(0,n._)("h2",null,"Editing "+(0,l.zw)(o.post.commentTitle),1),(0,n._)("form",{onSubmit:e[3]||(e[3]=(0,m.iM)(((...t)=>a.handleUpdate&&a.handleUpdate(...t)),["prevent"])),class:"blog-form-content"},[(0,n._)("label",x,[(0,n.Uk)("Manga title "),(0,n.wy)((0,n._)("input",{name:"mangaTitle",id:"mangaTitle",type:"text",placeholder:"Manga title...","onUpdate:modelValue":e[0]||(e[0]=t=>a.currentPost.mangaTitle=t)},null,512),[[m.nr,a.currentPost.mangaTitle]])]),(0,n._)("label",V,[(0,n.Uk)("Comment title "),(0,n.wy)((0,n._)("input",{name:"commentTitle",id:"commentTitle",type:"text",placeholder:"comment...","onUpdate:modelValue":e[1]||(e[1]=t=>a.currentPost.commentTitle=t)},null,512),[[m.nr,a.currentPost.commentTitle]])]),(0,n._)("label",M,[(0,n.Uk)("Content "),(0,n.wy)((0,n._)("textarea",{name:"content",cols:"40",rows:"5",placeholder:"ehh...","onUpdate:modelValue":e[2]||(e[2]=t=>a.currentPost.content=t)},null,512),[[m.nr,a.currentPost.content]])]),z],32)])}var q={props:["post"],setup(t,{emit:e}){const o=(0,u.b)(),n=(0,g.iH)({mangaTitle:t.post.mangaTitle,commentTitle:t.post.commentTitle,content:t.post.content,tags:t.post.tags}),l=()=>{n.value&&o.editPost(t.post.id,n.value),n.value={mangaTitle:t.post.mangaTitle,commentTitle:t.post.commentTitle,content:t.post.content,tags:t.post.tags},o.getPosts(),e("close-form")};return{handleUpdate:l,currentPost:n}}};const W=(0,k.Z)(q,[["render",L]]);var j=W;const K=(0,n._)("label",{for:"tag"},"Add tag",-1),Y=(0,n._)("div",{class:"submit"},[(0,n._)("button",null,"Add")],-1);function J(t,e,o,l,a,s){return(0,n.wg)(),(0,n.iD)("form",{onSubmit:e[1]||(e[1]=(0,m.iM)(((...t)=>l.handleAddTag&&l.handleAddTag(...t)),["prevent"]))},[K,(0,n.wy)((0,n._)("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=t=>l.tempTag=t),placeholder:"keep it short tho..."},null,512),[[m.nr,l.tempTag]]),Y],32)}o(560);var G={props:["post"],components:{useMangaStore:u.b},setup(t){const e=(0,u.b)(),o=(0,g.iH)(""),n=(0,g.iH)([]),l=async()=>{try{const o=await e.getTag(t.post.id);n.value=Array.isArray(o)?o:[]}catch(o){console.error("Error occurred while fetching tags: ",o)}};l();const a=()=>{n.value.includes(o.value&&""!==n.value)||(n.value.push(o.value),e.addTag(t.post.id,{id:t.post.id,mangaTitle:t.post.mangaTitle,commentTitle:t.post.commentTitle,content:t.post.content,tags:[...t.post.tags,o.value]}),console.log(t.post.tags))};return console.log(o.value,n.value,"tags"),{tempTag:o,tags:n,handleAddTag:a}}};const I=(0,k.Z)(G,[["render",J]]);var N=I,O={props:["post"],components:{BlogEditForm:j,AddTag:N},setup(t){const e=(0,u.b)(),o=(0,g.iH)(!1),l=(0,g.iH)(!1),a=function(){o.value=!0},s=()=>{o.value=!1},i=()=>{l.value=!l.value},d=(0,n.Fl)((()=>t.post.content.substring(0,100)+"......")),r=()=>{e.deletePost(t.post.id),e.getPosts()};return{mangaStore:e,isEditting:o,isAddingTag:l,handleEdit:a,handleCloseForm:s,toggleAddingTag:i,snippet:d,deletePost:r}}};const Q=(0,k.Z)(O,[["render",F]]);var R=Q,X=(0,n.aZ)({name:"Blog",components:{BlogAddForm:P,ScrollToBottom:A.Z,BlogList:R},setup(){const t=(0,u.b)(),{posts:e,isLoading:o}=(0,p.Jk)(t),n=async()=>{await t.getPosts()};n(),console.log(e.value,"123");const l=(0,g.iH)("all");return{posts:e,isLoading:o,filter:l}}});const $=(0,k.Z)(X,[["render",c]]);var tt=$}}]);
//# sourceMappingURL=376.57ac23bd.js.map