(this["webpackJsonpchatbot-ui"]=this["webpackJsonpchatbot-ui"]||[]).push([[0],{24:function(e,t,s){},31:function(e,t,s){"use strict";s.r(t);var c,a=s(0),r=s.n(a),n=s(13),l=s.n(n),i=(s(24),s(8)),o=s.n(i),b=s(14),d=s(5),j=s(2),x=s(11),u=s(15),m=s(4),h=s(16),g=s(1);var f=function(e){var t=e.bot,s=e.messages?e.messages:[],c=function(e){return e.sender?Object(g.jsxs)("div",{className:" sender  flex  mr-1  mb-4 items-end justify-end",children:[Object(g.jsx)("div",{className:"flex flex-col space-y-2 text-xs sm:text-s max-w-xs  mx-2 items-start",children:Object(g.jsx)("div",{children:Object(g.jsx)("p",{className:"px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600",children:e.message})})}),Object(g.jsx)("img",{src:e.url,alt:"My profile",className:"w-6 h-6 rounded-full "})]}):Object(g.jsxs)("div",{className:"bot  flex  mb-4 items-end mb-4 ",children:[Object(g.jsx)("img",{src:e.url,alt:"My profile",className:"w-6 h-6 rounded-full "}),Object(g.jsx)("div",{className:"flex flex-col space-y-2 text-xs sm:text-s max-w-xs  mx-2 items-start",children:Object(g.jsx)("div",{children:Object(g.jsx)("p",{className:"px-4 py-2 rounded-lg   bg-gray-300 text-gray-600",children:e.message})})})]})};return Object(g.jsxs)(O,{className:"chat  flex flex-col flex-1 h-full  bg-gray-100",children:[Object(g.jsxs)("div",{class:"flex sm:items-center justify-between p-3  border-b-2 border-gray-200",children:[Object(g.jsxs)("div",{class:"flex items-center space-x-4",children:[Object(g.jsx)("img",{src:t.url,alt:"",class:"w-10 h-10 sm:w-12 sm:h-12 rounded-full"}),Object(g.jsxs)("div",{class:"flex flex-col  leading-tight",children:[Object(g.jsxs)("div",{class:"text-xl sm:text-2xl mt-1 flex items-center",children:[Object(g.jsx)("span",{class:"text-gray-700 mr-3",children:t.name}),Object(g.jsx)("span",{class:"text-green-500",children:Object(g.jsx)("svg",{width:"10",height:"10",children:Object(g.jsx)("circle",{cx:"5",cy:"5",r:"5",fill:"currentColor"})})})]}),Object(g.jsx)("span",{class:"text-base text-gray-600",children:t.profile})]})]}),Object(g.jsx)("div",{class:"flex items-center space-x-2",children:Object(g.jsx)("button",{type:"button",class:"inline-flex items-center mr-2 justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none",onClick:function(){e.closeMessage()},children:Object(g.jsx)(m.c,{className:"p-1"})})})]}),Object(g.jsx)("div",{className:"chat-message overflow-y-scroll overflow-x-hidden  pl-2 flex flex-col-reverse   flex-grow ",children:s.map((function(e){return Object(g.jsx)(c,{url:e.url,message:e.message,sender:e.sender})}))}),Object(g.jsxs)("form",{className:"flex-shrink border-t-4 border-gray-200  p-3 ",onSubmit:function(t){var c;t.preventDefault(),(c=t.target[1].value)&&(e.setMessages([{message:c,url:"https://picsum.photos/200/300",sender:!0}].concat(Object(d.a)(s)),c),c=null),t.target[1].value=""},children:[Object(g.jsxs)("div",{className:"relative flex",children:[Object(g.jsx)("span",{className:"absolute inset-y-0 flex items-center",children:Object(g.jsx)("button",{type:"button",className:"inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none",children:Object(g.jsx)(m.b,{className:"outline h-6 w-6 text-gray-500"})})}),Object(g.jsx)("input",{type:"text",placeholder:"Write Something",className:"w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-full py-2 sm:py-3"}),Object(g.jsx)("div",{className:"absolute right-0 items-center inset-y-0  sm:flex",children:Object(g.jsx)("button",{type:"submit",className:"inline-flex items-center justify-center rounded-full h-10 w-10 sm:h-12 sm:w-12 transition duration-500 ease-in-out text-white bg-indigo-500 hover:bg-indigo-400 focus:outline-none",children:Object(g.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"h-5 w-5 sm:h-6 sm:w-6 transform rotate-90",children:Object(g.jsx)("path",{d:"M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"})})})})]}),Object(g.jsx)("div",{className:"flex pt-1 justify-end",children:Object(g.jsx)("a",{href:"https://github.com/swasthikshetty10",className:"text-gray-400  text-xs",children:" by Swasthik shetty"})})]})]})},O=h.a.div(c||(c=Object(u.a)(["\n     .chat-message::-webkit-scrollbar {\n    width: 0.12rem;\n  }\n   \n  .chat-message::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);\n  }\n   \n  .chat-message::-webkit-scrollbar-thumb {\n    background-color: rgb(79,70,229);\n    outline: 1px solid rgb(79,70,229);\n  }\n  \n"])));var p=function(e){var t=function(e){var t=e.amount;return e.state?Object(g.jsxs)("div",{className:"bg-red-500 text-white  rounded-full p-0.5 text-xs ",children:[" ",Object(g.jsx)("p",{children:t})]}):Object(g.jsx)(g.Fragment,{})};return Object(g.jsxs)("div",{className:"cursor-pointer  h-8 w-8 sm:h-10 sm:w-10 rounded-md hover:bg-indigo-700 bg-indigo-500 text-white relative ",children:[Object(g.jsx)(m.a,{}),Object(g.jsx)("div",{className:"absolute -top-2 -right-1 ",children:Object(g.jsx)(t,{amount:e.amount,state:e.setstate})})]})};var v=function(e){var t=Object(a.useState)(!0),s=Object(j.a)(t,2),c=s[0],r=(s[1],Object(a.useState)(1)),n=Object(j.a)(r,2),l=n[0],i=(n[1],Object(a.useState)(!1)),o=Object(j.a)(i,2),b=o[0],d=o[1];return Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{className:b?"block ":"hidden",children:Object(g.jsx)("div",Object(x.a)(Object(x.a)({},e),{},{children:Object(g.jsx)(f,{closeMessage:function(){d(!b)},bot:e.bot,setMessages:e.setMessages,messages:e.messages})}))}),Object(g.jsx)("div",{className:b?"hidden bottom-1 right-1":"",onClick:function(){d(!b)},children:Object(g.jsx)(p,{setstate:c,amount:l})})]})};var y=function(){var e={name:"EPAX",url:"https://cdn.discordapp.com/avatars/630686815736692746/89a1377032b7030586ba964485ca23fc.webp?size=1024",profile:"Swasthik's Assistant"},t=Object(a.useState)([]),s=Object(j.a)(t,2),c=s[0],r=s[1],n=function(){var t=Object(b.a)(o.a.mark((function t(s){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:fetch("https://geek-jokes.sameerkumar.website/api").then((function(e){return e.json()})).then((function(t){r([{message:t,url:e.url}].concat(Object(d.a)(s)))}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(g.jsx)("div",{className:"h-screen bg-gray-200 relative",children:Object(g.jsx)("div",{className:" absolute flex bottom-2 right-2 sm:bottom-6 sm:right-6",children:Object(g.jsx)(v,{className:"bottom-0",style:{height:"80vh",width:"370px",backgroundColor:"red"},bot:e,setMessages:function(e){var t=Object(d.a)(e);r(e),n(t)},messages:c})})})};l.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(y,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.db371c4e.chunk.js.map