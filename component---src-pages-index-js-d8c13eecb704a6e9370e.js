(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{232:function(e,a,o){"use strict";o.r(a);var t=o(0),r=o.n(t),i=o(243),l=o(247);a.default=function(e){e.pageContext;return r.a.createElement(i.a,null,r.a.createElement(l.a,null))}},236:function(e,a,o){"use strict";o.d(a,"b",function(){return s});var t=o(0),r=o.n(t),i=o(70),l=o.n(i);o.d(a,"a",function(){return l.a});o(237),o(9).default.enqueue;var n=r.a.createContext({});function c(e){var a=e.staticQueryData,o=e.data,t=e.query,i=e.render,l=o?o.data:a[t]&&a[t].data;return r.a.createElement(r.a.Fragment,null,l&&i(l),!l&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var s=function(e){var a=e.data,o=e.query,t=e.render,i=e.children;return r.a.createElement(n.Consumer,null,function(e){return r.a.createElement(c,{data:a,query:o,render:t||i,staticQueryData:e})})}},237:function(e,a,o){var t;e.exports=(t=o(240))&&t.default||t},238:function(e){e.exports={data:{wordpressWpMedia:{source_url:"http://localhost:8888/robertsalmi.fi/wp-content/uploads/2019/09/grungeDark.jpg",title:"grungeDark"}}}},239:function(e){e.exports={data:{allWordpressWpApiMenusMenusItems:{edges:[{node:{items:[{title:"Home",object_slug:"home",object_id:8},{title:"About",object_slug:"about",object_id:10}]}}]}}}},240:function(e,a,o){"use strict";o.r(a);o(22);var t=o(0),r=o.n(t),i=o(98);a.default=function(e){var a=e.location,o=e.pageResources;return o?r.a.createElement(i.a,Object.assign({location:a,pageResources:o},o.json)):null}},241:function(e){e.exports={data:{allWordpressSiteMetadata:{edges:[{node:{name:"Robert Salmi",description:""}}]}}}},242:function(e,a,o){"use strict";var t=o(239),r=o(0),i=o.n(r),l=o(236),n=o(235),c=(o(40),o(241)),s=n.b.div.withConfig({displayName:"SiteInfo__SiteInfoWrapper",componentId:"sc-15964tp-0"})(["flex-grow:1;color:white;margin:auto 0;"]),d=Object(n.b)(l.a).withConfig({displayName:"SiteInfo__SiteTitle",componentId:"sc-15964tp-1"})(["font-weight:bold;color:white;text-decoration:none;font-size:1.5em;"]),p=function(){return i.a.createElement(l.b,{query:"1730324527",render:function(e){return i.a.createElement(s,null,i.a.createElement(d,{to:"/"},e.allWordpressSiteMetadata.edges[0].node.name),i.a.createElement("div",null,e.allWordpressSiteMetadata.edges[0].node.description))},data:c})},u=n.b.div.withConfig({displayName:"MainMenu__MainMenuWrapper",componentId:"sc-3u0erf-0"})(["z-index:5;display:flex;position:fixed;top:0;width:100%;background-color:transparent;padding:10px 0;"]),m=Object(n.b)(l.a).withConfig({displayName:"MainMenu__MenuItem",componentId:"sc-3u0erf-1"})(["color:white;padding:10px;display:block;"]),h=n.b.div.withConfig({displayName:"MainMenu__MainMenuInner",componentId:"sc-3u0erf-2"})(["max-width:960px;margin:0 auto;display:flex;width:90%;height:100%;"]);a.a=function(){return i.a.createElement(l.b,{query:"2443971660",render:function(e){return i.a.createElement(u,null,i.a.createElement(h,null,i.a.createElement(p,null),e.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(function(e){return i.a.createElement(m,{to:"/"+e.object_slug,key:e.title},e.title)})))},data:t})}},243:function(e,a,o){"use strict";var t=o(238),r=o(0),i=o.n(r),l=o(242),n=o(235);function c(){var e=function(e,a){a||(a=e.slice(0));return e.raw=a,e}(["\n/* @import url('https://fonts.googleapis.com/css?family=Roboto+Mono:400,400i,700&display=swap'); */\n/* @import url('https://fonts.googleapis.com/css?family=B612:400,700&display=swap');\n@import url('https://fonts.googleapis.com/css?family=Archivo:600,700&display=swap');\n@import url('https://fonts.googleapis.com/css?family=Muli:700,900&display=swap');\n@import url('https://fonts.googleapis.com/css?family=Roboto+Mono:700&display=swap'); */\nbody, html{\n  font-family: \"B612\", sans-serif;\n  margin: 0 !important;\n  padding: 0 !important;\n  height:100%;\n  overflow:hidden !important;\n  -webkit-overflow-scrolling: touch;\n}\nbody{\n  background-color:#000709;\n  &::after {\n    animation: ","  8s steps(10) infinite;\n    background: url(",');\n    content: "";\n    height: 300%;\n    left: -50%;\n    opacity: .1;\n    position: fixed;\n    top: -100%;\n    width: 300%;\n    z-index: -2;\n  }\n}\n\n']);return c=function(){return e},e}var s=Object(n.c)(["0%,100%{transform:translate(0,0)}10%{transform:translate(-5%,-10%)}20%{transform:translate(-15%,5%)}30%{transform:translate(7%,-25%)}40%{transform:translate(-5%,25%)}50%{transform:translate(-15%,10%)}60%{transform:translate(15%,0%)}70%{transform:translate(0%,15%)}80%{transform:translate(3%,35%)}90%{transform:translate(-10%,10%)}"]),d=Object(n.a)(c(),s,function(e){return e.imgUrl}),p=n.b.div.withConfig({displayName:"layout__LayoutWrapper",componentId:"ii2kc2-0"})(["max-width:960px;margin:0 auto;height:100%;"]);a.a=function(e){var a=e.children,o=t.data;return i.a.createElement("div",null,i.a.createElement(d,{imgUrl:o.wordpressWpMedia.source_url}),i.a.createElement(l.a,null),i.a.createElement(p,null,a))}},244:function(e,a,o){var t=o(1),r=o(7),i=o(33),l=/"/g,n=function(e,a,o,t){var r=String(i(e)),n="<"+a;return""!==o&&(n+=" "+o+'="'+String(t).replace(l,"&quot;")+'"'),n+">"+r+"</"+a+">"};e.exports=function(e,a){var o={};o[e]=a(n),t(t.P+t.F*r(function(){var a=""[e]('"');return a!==a.toLowerCase()||a.split('"').length>3}),"String",o)}},245:function(e){e.exports={data:{allWordpressWpPortfolio:{edges:[{node:{id:"3fcffb25-5b90-5add-a681-a7f238f17cd1",slug:"sample3",title:"Sample3",excerpt:"<p>Lorem ipsum dolor amet hell of bicycle rights cray helvetica actually 90&#8217;s. Microdosing bespoke vinyl VHS cray craft beer kale chips mlkshk live-edge cronut. Vinyl raw denim blog cred edison bulb listicle pork belly. Godard iPhone pour-over leggings dreamcatcher, hoodie cray prism mumblecore pitchfork actually la croix. +1 actually migas selvage pug bushwick. Lorem ipsum [&hellip;]</p>\n",content:"\n<p>Lorem ipsum dolor amet hell of bicycle rights cray helvetica actually 90&#8217;s. Microdosing bespoke vinyl VHS cray craft beer kale chips mlkshk live-edge cronut. Vinyl raw denim blog cred edison bulb listicle pork belly. Godard iPhone pour-over leggings dreamcatcher, hoodie cray prism mumblecore pitchfork actually la croix. +1 actually migas selvage pug bushwick.</p>\n\n\n\n<p>Lorem ipsum dolor amet hell of bicycle rights cray helvetica actually 90&#8217;s. Microdosing bespoke vinyl VHS cray craft beer kale chips mlkshk live-edge cronut. Vinyl raw denim blog cred edison bulb listicle pork belly. Godard iPhone pour-over leggings dreamcatcher, hoodie cray prism mumblecore pitchfork actually la croix. +1 actually migas selvage pug bushwick.</p>\n",featured_media:{source_url:"http://localhost:8888/robertsalmi.fi/wp-content/uploads/2019/09/maidot_rivissa_FB.jpg"}}},{node:{id:"c3a7c5ba-c768-5ea7-8a9e-201e6b3a4e92",slug:"sample2",title:"Sample2",excerpt:"<p>Lorem ipsum dolor amet hell of bicycle rights cray helvetica actually 90&#8217;s. Microdosing bespoke vinyl VHS cray craft beer kale chips mlkshk live-edge cronut. Vinyl raw denim blog cred edison bulb listicle pork belly. Godard iPhone pour-over leggings dreamcatcher, hoodie cray prism mumblecore pitchfork actually la croix. +1 actually migas selvage pug bushwick. Lorem ipsum [&hellip;]</p>\n",content:"\n<p>Lorem ipsum dolor amet hell of bicycle rights cray helvetica actually 90&#8217;s. Microdosing bespoke vinyl VHS cray craft beer kale chips mlkshk live-edge cronut. Vinyl raw denim blog cred edison bulb listicle pork belly. Godard iPhone pour-over leggings dreamcatcher, hoodie cray prism mumblecore pitchfork actually la croix. +1 actually migas selvage pug bushwick.</p>\n\n\n\n<p>Lorem ipsum dolor amet hell of bicycle rights cray helvetica actually 90&#8217;s. Microdosing bespoke vinyl VHS cray craft beer kale chips mlkshk live-edge cronut. Vinyl raw denim blog cred edison bulb listicle pork belly. Godard iPhone pour-over leggings dreamcatcher, hoodie cray prism mumblecore pitchfork actually la croix. +1 actually migas selvage pug bushwick.</p>\n",featured_media:{source_url:"http://localhost:8888/robertsalmi.fi/wp-content/uploads/2019/09/Valkosuklaamustikka_kaato_FB.jpg"}}},{node:{id:"1aa6f214-fd1e-54bb-b1dc-73707f4ba14b",slug:"sample1",title:"Sample1",excerpt:"<p>Lorem ipsum dolor amet hell of bicycle rights cray helvetica actually 90&#8217;s. Microdosing bespoke vinyl VHS cray craft beer kale chips mlkshk live-edge cronut. Vinyl raw denim blog cred edison bulb listicle pork belly. Godard iPhone pour-over leggings dreamcatcher, hoodie cray prism mumblecore pitchfork actually la croix. +1 actually migas selvage pug bushwick. Lorem ipsum [&hellip;]</p>\n",content:"\n<p>Lorem ipsum dolor amet hell of bicycle rights cray helvetica actually 90&#8217;s. Microdosing bespoke vinyl VHS cray craft beer kale chips mlkshk live-edge cronut. Vinyl raw denim blog cred edison bulb listicle pork belly. Godard iPhone pour-over leggings dreamcatcher, hoodie cray prism mumblecore pitchfork actually la croix. +1 actually migas selvage pug bushwick.</p>\n\n\n\n<p>Lorem ipsum dolor amet hell of bicycle rights cray helvetica actually 90&#8217;s. Microdosing bespoke vinyl VHS cray craft beer kale chips mlkshk live-edge cronut. Vinyl raw denim blog cred edison bulb listicle pork belly. Godard iPhone pour-over leggings dreamcatcher, hoodie cray prism mumblecore pitchfork actually la croix. +1 actually migas selvage pug bushwick.</p>\n",featured_media:{source_url:"http://localhost:8888/robertsalmi.fi/wp-content/uploads/2019/09/Screenshot-2019-09-01-at-8.54.29.png"}}},{node:{id:"0147f69c-2b90-5db8-9b7a-6de1bbefb6d1",slug:"ubjg",title:"UBJG",excerpt:"<p>Lorem ipsum dolor amet hell of bicycle rights cray helvetica actually 90&#8217;s. Microdosing bespoke vinyl VHS cray craft beer kale chips mlkshk live-edge cronut. Vinyl raw denim blog cred edison bulb listicle pork belly. Godard iPhone pour-over leggings dreamcatcher, hoodie cray prism mumblecore pitchfork actually la croix. +1 actually migas selvage pug bushwick. Pinterest gastropub [&hellip;]</p>\n",content:"\n<p>Lorem ipsum dolor amet hell of bicycle rights cray helvetica actually 90&#8217;s. Microdosing bespoke vinyl VHS cray craft beer kale chips mlkshk live-edge cronut. Vinyl raw denim blog cred edison bulb listicle pork belly. Godard iPhone pour-over leggings dreamcatcher, hoodie cray prism mumblecore pitchfork actually la croix. +1 actually migas selvage pug bushwick.</p>\n\n\n\n<p>Pinterest gastropub brooklyn bushwick, truffaut schlitz hashtag roof party. Kitsch shabby chic gastropub coloring book you probably haven&#8217;t heard of them vinyl tumblr vaporware biodiesel pickled wolf small batch blue bottle waistcoat. Health goth gochujang ramps vaporware. Mustache vape four dollar toast unicorn pour-over glossier hell of four loko. Salvia green juice 3 wolf moon viral selfies woke.</p>\n\n\n\n<p>Ramps offal selfies snackwave pickled dreamcatcher cardigan farm-to-table health goth pok pok taiyaki. Meditation church-key 90&#8217;s fam pabst lo-fi. Whatever distillery dreamcatcher tbh, schlitz mustache shaman roof party photo booth neutra authentic heirloom raw denim church-key. Gluten-free master cleanse mlkshk VHS neutra kogi shaman keytar lo-fi four loko. Narwhal YOLO swag truffaut, coloring book beard vice meh wolf small batch pok pok mustache sriracha pitchfork authentic. Knausgaard edison bulb distillery +1.</p>\n",featured_media:{source_url:"http://localhost:8888/robertsalmi.fi/wp-content/uploads/2019/09/Screenshot-2019-09-01-at-8.54.18.png"}}},{node:{id:"6c2d27f4-886d-5e97-8dff-11bb01b2ae8a",slug:"lidl",title:"Lidl",excerpt:"<p>Lorem ipsum dolor amet hell of bicycle rights cray helvetica actually 90&#8217;s. Microdosing bespoke vinyl VHS cray craft beer kale chips mlkshk live-edge cronut. Vinyl raw denim blog cred edison bulb listicle pork belly. Godard iPhone pour-over leggings dreamcatcher, hoodie cray prism mumblecore pitchfork actually la croix. +1 actually migas selvage pug bushwick.</p>\n",content:"\n<p>Lorem ipsum dolor amet hell of bicycle rights cray helvetica actually 90&#8217;s. Microdosing bespoke vinyl VHS cray craft beer kale chips mlkshk live-edge cronut. Vinyl raw denim blog cred edison bulb listicle pork belly. Godard iPhone pour-over leggings dreamcatcher, hoodie cray prism mumblecore pitchfork actually la croix. +1 actually migas selvage pug bushwick.</p>\n\n\n\n<p>90&#8217;s four dollar toast pinterest small batch. Hoodie adaptogen lumbersexual kogi ugh, yr typewriter yuccie DIY pok pok flannel hexagon. Microdosing ramps paleo drinking vinegar forage, retro iPhone viral. Kitsch meh tilde, hammock banjo PBR&amp;B mlkshk photo booth tacos cliche af chartreuse.</p>\n\n\n\n<p>Banh mi 8-bit vegan master cleanse paleo shaman before they sold out biodiesel chartreuse tumeric leggings cloud bread hoodie tilde. Blue bottle tousled photo booth, man bun mlkshk deep v selfies whatever. Shaman squid umami single-origin coffee. Tattooed sartorial austin green juice poutine. Tbh wolf aesthetic beard brooklyn biodiesel mixtape ennui. Hot chicken messenger bag williamsburg four loko. Shaman tote bag ennui tumblr, kale chips air plant beard glossier.</p>\n",featured_media:{source_url:"http://localhost:8888/robertsalmi.fi/wp-content/uploads/2019/09/maidot_rivissa_FB.jpg"}}}]},wordpressWpMedia:{source_url:"http://localhost:8888/robertsalmi.fi/wp-content/uploads/2019/10/logo-05.svg",title:"logo-05-svg",id:"2237ba25-c1be-5e8f-a9e7-8d08e3b8ec53"}}}},246:function(e,a,o){"use strict";o(244)("link",function(e){return function(a){return e(this,"a","href",a)}})},247:function(e,a,o){"use strict";var t=o(245),r=o(0),i=o.n(r),l=o(236),n=o(235),c=(o(246),n.b.div.withConfig({displayName:"PortfolioWorks__Wrapper",componentId:"sc-1lu914n-0"})(["display:inline-block;margin:0 10px;@media only screen and (max-width:1024px){display:block;margin-top:20px;}"])),s=n.b.div.withConfig({displayName:"PortfolioWorks__ImageWrapper",componentId:"sc-1lu914n-1"})(["max-width:300px;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);"]),d=n.b.img.withConfig({displayName:"PortfolioWorks__PortfolioImage",componentId:"sc-1lu914n-2"})(["max-width:300px;z-index:-99;opacity:0;transition:0.25s linear;@media only screen and (max-width:1024px){display:none;}"]),p=Object(n.b)(l.a).withConfig({displayName:"PortfolioWorks__PortfolioItemNameLink",componentId:"sc-1lu914n-3"})(['font-family:"Archivo";font-size:4em;display:inline-block;z-index:1;text-decoration:none;color:transparent;-webkit-text-stroke-width:1px;-webkit-text-stroke-color:#fff;transition:0.25s linear;&:hover{color:#fff;}@media only screen and (max-width:624px){&:hover{color:transparent;}}']),u=function(e){var a=e.image,o=e.title,t=e.link,l=e.id,n=Object(r.useState)({}),u=n[0],m=n[1];return i.a.createElement(c,{key:l},i.a.createElement(s,null,i.a.createElement(d,{style:u,src:a})),i.a.createElement(p,{to:t,onMouseEnter:function(e){e.preventDefault(),m({visibility:"visible",opacity:".8"})},onMouseLeave:function(e){e.preventDefault(),m({visibility:"hidden",opacity:"0"})}},o))},m=n.b.div.withConfig({displayName:"PortfolioItemsTextHorizontal2__Wrapper",componentId:"sc-1gmk4k9-0"})(["width:100%;max-width:960px;position:fixed;bottom:0;@media only screen and (max-width:1024px){top:50%;left:50%;transform:translate(-50%,-50%);margin-top:-50px;}"]),h=n.b.div.withConfig({displayName:"PortfolioItemsTextHorizontal2__PortfolioItemsWrapper",componentId:"sc-1gmk4k9-1"})(["width:100%;max-width:960px;white-space:nowrap;overflow-y:visible;overflow-x:scroll;display:block;text-align:center;justify-content:center;::-webkit-scrollbar-track{box-shadow:inset 0 0 6px rgba(220,220,220,0.1);border-radius:10px;background-color:transparent;}::-webkit-scrollbar{width:10px;background-color:transparent;}::-webkit-scrollbar-thumb{border-radius:10px;box-shadow:inset 0 0 6px rgba(220,220,220,0.2);background-color:transparent;}@media only screen and (max-width:1024px){overflow:auto;white-space:normal;max-height:80vh;max-width:400px;margin:auto;position:static;}"]),g=n.b.img.withConfig({displayName:"PortfolioItemsTextHorizontal2__Logo",componentId:"sc-1gmk4k9-2"})(["max-width:150px;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);z-index:-99;opacity:0.5;visibility:visible;transition:0.25s linear;"]);a.a=function(){return i.a.createElement(l.b,{query:"539958493",render:function(e){return i.a.createElement(m,null,i.a.createElement(g,{key:e.wordpressWpMedia.id,src:""+e.wordpressWpMedia.source_url,alt:"Logo"}),i.a.createElement(h,null,e.allWordpressWpPortfolio.edges.map(function(e){return i.a.createElement(u,{key:e.node.id,image:e.node.featured_media.source_url,id:e.node.id,title:e.node.title,link:"/works/"+e.node.slug})})))},data:t})}}}]);
//# sourceMappingURL=component---src-pages-index-js-d8c13eecb704a6e9370e.js.map