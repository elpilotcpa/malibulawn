(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a(26)},21:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(13),r=a.n(l),c=(a(21),a(3)),s=a(4),o=a(6),u=a(5),m=a(7),p=a(28),g=a(30),d=a(29),h=a(27),f=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={popMenu:"hide"},a._toggleMenu=function(){a.setState(function(){return"hide"===a.state.popMenu?{popMenu:"show"}:{popMenu:"hide"}})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement(p.a,null,i.a.createElement(i.a.Fragment,null,i.a.createElement("header",null,i.a.createElement("div",{className:"title"},i.a.createElement("div",{className:"mobile-nav"},i.a.createElement("button",{className:"toggle-button",onClick:this._toggleMenu},"hide"===this.state.popMenu?i.a.createElement("i",{className:"fas fa-bars"}):i.a.createElement("i",{class:"fas fa-times"}))),i.a.createElement("div",{className:"title-full"},i.a.createElement("h1",{className:"nav-text"},"Malibu")," ",i.a.createElement("h3",{className:"nav-text"},"Landscaping & Lawn Service"))),i.a.createElement("nav",{className:"full-nav"},i.a.createElement("span",null,i.a.createElement(h.a,{to:"/",className:"nav-text"},"Home")),i.a.createElement("span",null,i.a.createElement(h.a,{to:"/gallery",className:"nav-text"},"Photo Gallery")),i.a.createElement("span",null,i.a.createElement(h.a,{to:"/about",className:"nav-text"},"About Us")),i.a.createElement("span",null,i.a.createElement(h.a,{to:"/services",className:"nav-text"},"Services")))),i.a.createElement("nav",{className:this.state.popMenu},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(h.a,{to:"/",onClick:this._toggleMenu},"Home")),i.a.createElement("li",null,i.a.createElement(h.a,{to:"/gallery",onClick:this._toggleMenu},"Photo Gallery")),i.a.createElement("li",null,i.a.createElement(h.a,{to:"/about",onClick:this._toggleMenu},"About Us")),i.a.createElement("li",null,i.a.createElement(h.a,{to:"/services",onClick:this._toggleMenu},"Services"))),i.a.createElement("ul",{className:"contact-list"},"Contact Us",i.a.createElement("li",null,i.a.createElement("a",{href:"tel://17049106379"},i.a.createElement("i",{className:"fas fa-phone-square"}))),i.a.createElement("li",null,i.a.createElement("a",{href:"tel://9045358034"},i.a.createElement("i",{className:"fas fa-mobile"}))),i.a.createElement("li",null,i.a.createElement("a",{href:"mailto:elpilotcpa@msn.com"},i.a.createElement("i",{className:"fas fa-envelope"})))))))}}]),t}(n.Component),E=function(e){var t=e.pic;return i.a.createElement("div",{className:"slide"},i.a.createElement("img",{className:"slide-pic",src:t,alt:t}))},b=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).updateScreen=function(){a.setState(function(){return{transValue:-a.slideWidth()*a.state.index}})},a.nextPicture=function(){a.state.index===a.state.pictures.length-1?a.setState(function(){return{index:0,transValue:0}}):a.setState(function(e){return{index:e.index+1,transValue:e.transValue-a.slideWidth()}})},a.slideWidth=function(){return document.querySelector(".slide").clientWidth},a.state={pictures:["./img/pic19.jpg","./img/pic20.jpg","./img/pic28.jpg","./img/pic13.jpg","./img/pic26.jpg"],index:0,transValue:0},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateScreen),this.slideShow=setInterval(this.nextPicture,4e3)}},{key:"render",value:function(){return i.a.createElement("div",{className:"slider show-frame"},i.a.createElement("div",{className:"slide-frame",style:{transform:"translateX(".concat(this.state.transValue,"px)"),transition:"transform ease-out 0.45s"}},this.state.pictures.map(function(e){return i.a.createElement(E,{key:e,pic:e})})))}}]),t}(n.Component),v=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("section",{className:"home-sec"},i.a.createElement(b,null),i.a.createElement("div",{className:"home-info"},i.a.createElement("p",null,"At Malibu Landscaping & Lawn Service, we take care to provide our customers high quality Landscaping services personalized for their unique needs. We are available for estimates that will fit your budget. Serving Mint Hill, Matthews and Charlotte since 2010. Check out our A Rating and reviews on ",i.a.createElement("a",{href:"https://member.angieslist.com/member/store/10667294/reviews",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{src:"./img/angieslogo.png",className:"angieslogo"})),"."),i.a.createElement("div",{className:"contact-home"},i.a.createElement("div",{class:"contact-links"},"Contact Us",i.a.createElement("a",{href:"tel://17049106379"},i.a.createElement("i",{className:"fas fa-phone-square"})," (704) 910-6379"),i.a.createElement("a",{href:"tel://9045358034"},i.a.createElement("i",{className:"fas fa-mobile"})," (904) 535-8034"),i.a.createElement("a",{href:"mailto:elpilotcpa@msn.com"},i.a.createElement("i",{className:"fas fa-envelope"})," elpilotcpa@msn.com")),i.a.createElement("img",{src:"./img/angieslist2014.png",alt:"angie list 2104"})))))}}]),t}(n.Component),j=function(e){var t=e.pic;return i.a.createElement("div",{className:"slide"},i.a.createElement("img",{className:"slide-pic",src:t,alt:t}))},y=function(e){return i.a.createElement("div",{className:"backArrow",onClick:e.prevSlide},i.a.createElement("i",{className:"fas fa-angle-left",title:"Back"}))},w=function(e){return i.a.createElement("div",{className:"nextArrow",onClick:e.nextSlide},i.a.createElement("i",{className:"fas fa-angle-right",title:"Next"}))},O=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).updateScreen=function(){a.setState(function(){return{transValue:-a.slideWidth()*a.state.index}})},a.prevSlide=function(){0===a.state.index&&a.setState(function(){return{index:a.state.pictures.length-1,transValue:-a.slideWidth()*(a.state.pictures.length-1)}}),0!==a.state.index&&a.setState(function(e){return{index:e.index-1,transValue:e.transValue+a.slideWidth()}})},a.nextSlide=function(){a.state.index===a.state.pictures.length-1&&a.setState(function(){return{index:0,transValue:0}}),a.state.index!==a.state.pictures.length-1&&a.setState(function(e){return{index:e.index+1,transValue:e.transValue-a.slideWidth()}})},a.slideWidth=function(){return document.querySelector(".slide").clientWidth},a.state={pictures:["./img/pic01.jpg","./img/pic02.jpg","./img/pic03.jpg","./img/pic04.jpg","./img/pic05.jpg","./img/pic06.jpg","./img/pic07.jpg","./img/pic08.jpg","./img/pic09.jpg","./img/pic10.jpg","./img/pic11.jpg","./img/pic12.jpg","./img/pic13.jpg","./img/pic14.jpg","./img/pic15.jpg","./img/pic16.jpg","./img/pic17.jpg","./img/pic18.jpg","./img/pic19.jpg","./img/pic20.jpg","./img/pic21.jpg","./img/pic22.jpg","./img/pic23.jpg","./img/pic24.jpg","./img/pic25.jpg","./img/pic26.jpg","./img/pic27.jpg","./img/pic28.jpg","./img/pic29.jpg","./img/pic30.jpg","./img/pic31.jpg","./img/pic35.jpg","./img/pic36.jpg","./img/pic37.jpg","./img/pic38.jpg","./img/pic39.jpg","./img/pic40.jpg","./img/pic41.jpg","./img/TN03.png","./img/TN04.png","./img/TN05.png","./img/TN06.png"],index:0,transValue:0},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateScreen)}},{key:"render",value:function(){return i.a.createElement("div",{className:"slider"},i.a.createElement("div",{className:"slide-frame",style:{transform:"translateX(".concat(this.state.transValue,"px)"),transition:"transform ease-out 0.45s"}},this.state.pictures.map(function(e){return i.a.createElement(j,{key:e,pic:e})})),i.a.createElement(y,{prevSlide:this.prevSlide}),i.a.createElement(w,{nextSlide:this.nextSlide}))}}]),t}(n.Component),L=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("section",{className:"gallery"},i.a.createElement("h2",null,"Here are some examples of our latest work"),i.a.createElement(O,null)))}}]),t}(n.Component),x=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("section",null,i.a.createElement("h2",null,"About Malibu Landscaping & Lawn Service"),i.a.createElement("p",null,"Malibu Landscaping & Lawn Service is family-owned and operated in Charlotte, NC. Since opening in 2010, we\u2019ve treated every customer like they were a part of our family. Other companies may offer similar services, but our services come with a personal touch."),i.a.createElement("p",null,"We use only the best quality products across the board. For example, our Volt Outdoor lights, Architectural lights and Security lights all come with a Lifetime transferable Warranty. By the way, LED landscape lighting is fast becoming the predominant choice for discerning home owners. Three factors that make VOLT\xae LED landscape and garden lighting so popular are luminosity, light quality and durability. VOLT\xae uses industry leading photometric techniques to ensure the maximum light output per watt consumed for each of our LED landscape lighting fixtures. VOLT\xae also makes use of the highest quality Light Emitting Diodes and driver technology to ensure each and every one of our LED landscape lighting fixtures produce consistent and natural light, making our LED fixtures indistinguishable from standard high quality halogen fixtures. Our super-efficient designs allow our all-in-one integrated LED landscape lighting fixtures to outlast the competition and for this reason be covered by our Lifetime transferrable manufacturer's warranty. LED Flood Lighting LED Pathway Lights LED In-Grade Lights LED Deck & Patio Lighting LED Outdoor Step Lighting LED Hardscape Lighting are just a few of the many lighting options. As for our Belgard Hardscape products, they also come with a Lifetime Warranty (you can't go wrong with a Lifetime Guarantee!). And finally, our seed and fertilizers are the absolute best available.")))}}]),t}(n.Component),N=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("section",null,i.a.createElement("h2",null,"Full-Service Landscaper specializing in:"),i.a.createElement("ul",null,i.a.createElement("li",null,"New Landscaping"),i.a.createElement("li",null,"Replacement Landscaping\u200b"),i.a.createElement("li",null,"Landscape Lighting"),i.a.createElement("li",null,"Landscape Design"),i.a.createElement("li",null,"Mulching"),i.a.createElement("li",null,"Fertilizing"),i.a.createElement("li",null,"French Drains"),i.a.createElement("li",null,"Aluminum Fencing"),i.a.createElement("li",null,"Outdoor Lighting"),i.a.createElement("li",null,"Security Lighting"),i.a.createElement("li",null,"Pavers"),i.a.createElement("li",null,"Outdoor Fire Pits"),i.a.createElement("li",null,"Outdoor Patios"),i.a.createElement("li",null,"Outdoor Kitchens"),"\u200b"),i.a.createElement("p",null,"We take pride in our wide selection of quality products. All of the products we offer are from trusted brands with a Lifetime transferrable manufacturer's warranty."),i.a.createElement("p",null,"We utilize only premium products for our outdoor lighting, landscape lighting, architectural lighting, security lighting, outdoor hardscapes, paver patios, outdoor kitchens, outdoor fireplaces and fire pits including:"),i.a.createElement("p",null,"BELGARD LIFETIME PAVERS and materials. We only use the best! You can't go wrong with a lifetime manufacturer's warranty!"),i.a.createElement("p",null,"Volt Lifetime Lighting Products: Heavy, durable, waterproof, beautiful, life-long-lasting and impressive fixtures. Have us design and install your beautiful lights and never, ever have to worry about them again."),i.a.createElement("p",null,"ICPI Paver certification note: Compaction of the soil subgrade and aggregate base materials are essential to the long-term performance of interlocking concrete pavements."),i.a.createElement("p",null,"Installation steps typically include job planning, layout, excavating and compacting the soil subgrade, applying geotextiles (optional), spreading and compacting the sub-base and/or base aggregates, constructing edge, restraints, placing and screeding the bedding sand, placing concrete pavers, compacting concrete pavers, sweeping in jointing sand and final compaction. It is imperative that your installer is fully ICPI certified.")))}}]),t}(n.Component),k=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("aside",null,i.a.createElement(f,null)),i.a.createElement(p.a,null,i.a.createElement("main",{className:"content"},i.a.createElement(g.a,null,i.a.createElement(d.a,{exact:!0,path:"/",component:v}),i.a.createElement(d.a,{exact:!0,path:"/gallery",component:L}),i.a.createElement(d.a,{path:"/about",component:x}),i.a.createElement(d.a,{path:"/services",component:N})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,2,1]]]);
//# sourceMappingURL=main.eb1ecb10.chunk.js.map